import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARK = 'BOOKMARK';

export default function useBookmark() {
  const {setItem, getItem} = AsyncStorage;

  const [data, setData] = useState<any[]>([]);

  const addBookmark = async (item: any) => {
    const filterBookmark = data.filter(i => i.id === item.id);
    if (filterBookmark.length === 0) {
      const newBookmark = [item, ...data];
      await setItem(BOOKMARK, JSON.stringify(newBookmark));

      await loadBookmark();
    } else deleteBookmark(item);
  };

  const deleteBookmark = async (item: any) => {
    const newBookmark = data.filter(i => i.id !== item.id);
    await setItem(BOOKMARK, JSON.stringify(newBookmark));
    await loadBookmark();
  };

  const loadBookmark = async () => {
    let result: any[] = [];
    const bookString = await getItem(BOOKMARK);
    const allBookmark = bookString ? JSON.parse(bookString) : [];

    for (let i of allBookmark) result.push(i);
    setData(result);
  };

  useEffect(() => {
    loadBookmark();

    return () => {
      setData([]);
    };
  }, []);

  return {addBookmark, deleteBookmark, loadBookmark, data};
}
