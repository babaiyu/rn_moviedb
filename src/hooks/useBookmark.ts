import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARK = 'BOOKMARK';

export default function useBookmark() {
  const {setItem, getItem} = AsyncStorage;

  const [data, setData] = useState<any[]>([]);
  const [updateTime, setUpdateTime] = useState<any>(undefined);

  const onUpdateTime = () => {
    setUpdateTime(+new Date());
  };

  const addBookmark = async (item: any) => {
    const filterBookmark = data.filter(i => i.id === item?.id);
    if (filterBookmark.length === 0) {
      const newBookmark = [item, ...data];
      setData(newBookmark);
      await setItem(BOOKMARK, JSON.stringify(newBookmark));

      setTimeout(() => {
        onUpdateTime();
      }, 1000);
    } else deleteBookmark(item);
  };

  const deleteBookmark = async (item: any) => {
    const newBookmark = data.filter(i => i.id !== item.id);
    setData(newBookmark);
    await setItem(BOOKMARK, JSON.stringify(newBookmark));

    setTimeout(() => {
      onUpdateTime();
    }, 1000);
  };

  const loadBookmark = async () => {
    let result = [];
    const bookString = await getItem(BOOKMARK);
    const allBookmark = (bookString ? JSON.parse(bookString) : []) as any[];

    for (let i of allBookmark) result.push(i);
    setData(result);
  };

  useEffect(() => {
    loadBookmark();
  }, [updateTime]);

  return {addBookmark, deleteBookmark, loadBookmark, data};
}
