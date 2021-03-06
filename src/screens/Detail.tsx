import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Title, Paragraph, Caption, Chip, Text} from 'react-native-paper';
import useDetail from 'hooks/useDetail';
import globalStyles from 'styles/globalStyles';
import MyImage from 'components/MyImage';
import Loading from 'components/Loading';
import dayjs from 'dayjs';
import {myColors} from 'constants/constants';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useStateContext} from 'states/store';

const Genres = ({data}: {data: any[]}) => (
  <View style={styles.row}>
    {data.map((i: any, index: number) => (
      <Chip key={index}>{i?.name}</Chip>
    ))}
  </View>
);

export default function DetailScreen() {
  const navigation = useNavigation();
  const {state} = useStateContext();
  const {loading, error, data} = useDetail();

  const subtitle = `${dayjs(data?.release_date).format('DD MMM, YYYY')} | ${
    data?.vote_average
  }`;

  useEffect(() => {
    navigation.setOptions({title: state.detail?.title});
  }, [data]);

  if (loading) return <Loading />;

  if (error) return <Text>There is an Error</Text>;
  else
    return (
      <SafeAreaView style={globalStyles.container}>
        <ScrollView>
          <View style={[globalStyles.center, styles.detail]}>
            <MyImage source={data?.poster_path} />
          </View>
          <View style={[globalStyles.paddingHorizontal, styles.cardDetail]}>
            <Title>{data?.title}</Title>
            <Caption>{subtitle}</Caption>
            <Paragraph>{data?.overview}</Paragraph>
            <Genres data={data?.genres || []} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  detail: {
    marginTop: 10,
  },
  cardDetail: {
    marginTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: myColors.white,
    height: '100%',
    paddingVertical: 20,
  },
  row: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 10,
  },
});
