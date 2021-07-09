import React from 'react';
import {Card, Paragraph, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import {maxParagraph} from 'helpers';
import {IMAGE_URL} from 'services/api';
import {useNavigation} from '@react-navigation/native';
import {useStateContext} from 'states/store';
import {actionDetail} from 'states/action';

export default function MyCard(props: any) {
  const navigation = useNavigation();
  const {dispatch} = useStateContext();

  const paragraph = maxParagraph(props?.overview);
  const subtitle = `${dayjs(props?.release_date).format('DD MMM, YYYY')} | ${
    props?.vote_average
  }`;

  const onNavigateDetail = () => {
    dispatch(actionDetail(props));
    setTimeout(() => {
      navigation.navigate('DetailScreen');
    }, 500);
  };

  return (
    <Card style={styles.card}>
      <Card.Title title={props?.title} subtitle={subtitle} />
      <Card.Cover source={{uri: IMAGE_URL + props?.poster_path}} />
      <Card.Content>
        <Paragraph>{paragraph}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onNavigateDetail}>Read more</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
