import React from 'react';
import {Text} from 'react-native-paper';
import {FlatList, SafeAreaView, RefreshControl} from 'react-native';
import {useStateContext} from 'states/store';
import useHome from 'hooks/useHome';
import Loading from 'components/Loading';
import MyCard from 'components/MyCard';

export default function HomeScreen() {
  const {state} = useStateContext();
  const {home} = state;

  const {loading, error, getMovies} = useHome();

  const renderItem = ({item}: any) => <MyCard {...item} />;
  const keyExtractor = (i: any, index: number) => index.toString();

  if (loading) return <Loading />;

  if (error) return <Text>Error</Text>;
  else
    return (
      <SafeAreaView>
        <FlatList
          data={home}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          refreshControl={
            <RefreshControl onRefresh={getMovies} refreshing={false} />
          }
        />
      </SafeAreaView>
    );
}
