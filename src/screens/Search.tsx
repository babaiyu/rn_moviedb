import {useScrollToTop} from '@react-navigation/native';
import Loading from 'components/Loading';
import MyCard from 'components/MyCard';
import useSearch from 'hooks/useSearch';
import React, {useCallback, useRef} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text, Searchbar, Button} from 'react-native-paper';
import {useStateContext} from 'states/store';
import globalStyles from 'styles/globalStyles';

export default function SearchScreen() {
  const {state} = useStateContext();
  const {changeQuery, query, error, loading, changePage} = useSearch();
  const {search} = state;

  const scrollRef = useRef<any>(null);

  useScrollToTop(scrollRef);

  const renderItem = useCallback(({item}: any) => <MyCard {...item} />, []);
  const keyExtractor = useCallback(
    (i: any, index: number) => index.toString(),
    [],
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <Searchbar
        placeholder="Search Movies..."
        onChangeText={changeQuery}
        value={query}
      />

      {loading && <Loading />}
      {error ? (
        <Text>There is an error</Text>
      ) : (
        <FlatList
          ref={scrollRef}
          data={search}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={8}
          windowSize={10}
          style={globalStyles.paddingHorizontal}
          ListFooterComponentStyle={styles.footerList}
          ListFooterComponent={
            search.length > 0 ? (
              <Button
                mode="outlined"
                onPress={changePage}
                loading={loading}
                style={styles.btnFooter}>
                Load More
              </Button>
            ) : null
          }
          ListEmptyComponent={
            <View style={globalStyles.center}>
              <Text>There is no data</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnFooter: {
    marginBottom: 10,
  },
  headerList: {
    marginTop: 10,
  },
  footerList: {
    marginVertical: 10,
  },
});
