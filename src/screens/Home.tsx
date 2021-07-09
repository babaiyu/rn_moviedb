import React, {useCallback} from 'react';
import {Text, Button} from 'react-native-paper';
import {FlatList, SafeAreaView, RefreshControl, StyleSheet} from 'react-native';
import {useStateContext} from 'states/store';
import useHome from 'hooks/useHome';
import Loading from 'components/Loading';
import MyCard from 'components/MyCard';
import Header from 'components/Header';
import globalStyles from 'styles/globalStyles';

export default function HomeScreen() {
  const {state} = useStateContext();
  const {home} = state;

  const {loading, page, type, error, getMovies, changePage, changeType} =
    useHome();

  const renderItem = useCallback(({item}: any) => <MyCard {...item} />, []);
  const keyExtractor = useCallback(
    (i: any, index: number) => index.toString(),
    [],
  );

  if (loading && page === 1) return <Loading />;

  if (error) return <Text>Error</Text>;
  else
    return (
      <SafeAreaView style={globalStyles.container}>
        <Header onChange={changeType} type={type} isFilter isBack={false} />
        <FlatList
          data={home}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={8}
          windowSize={10}
          style={globalStyles.paddingHorizontal}
          refreshControl={
            <RefreshControl onRefresh={getMovies} refreshing={false} />
          }
          ListFooterComponentStyle={styles.footerList}
          ListFooterComponent={
            <Button
              mode="outlined"
              onPress={changePage}
              loading={loading}
              style={styles.btnFooter}>
              Load More
            </Button>
          }
        />
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
