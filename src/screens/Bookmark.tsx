import MyCard from 'components/MyCard';
import useBookmark from 'hooks/useBookmark';
import React, {useCallback, useRef} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useScrollToTop} from '@react-navigation/native';
import globalStyles from 'styles/globalStyles';

export default function BookmarkScreen() {
  const {data, loadBookmark} = useBookmark();

  const scrollRef = useRef<any>(null);

  useScrollToTop(scrollRef);

  const renderItem = useCallback(({item}: any) => <MyCard {...item} />, []);
  const keyExtractor = useCallback(
    (i: any, index: number) => index.toString(),
    [],
  );

  const onPressReload = async () => {
    await loadBookmark();

    scrollRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        ref={scrollRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={8}
        windowSize={10}
        style={globalStyles.paddingHorizontal}
        ListEmptyComponent={
          <View style={globalStyles.center}>
            <Text>There is no bookmark</Text>
          </View>
        }
        ListFooterComponent={
          <Button
            mode="outlined"
            onPress={onPressReload}
            style={styles.btnFooter}>
            Reload
          </Button>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnFooter: {
    marginVertical: 10,
  },
});
