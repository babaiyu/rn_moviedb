import React from 'react';
import {Card, Paragraph, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import {maxParagraph} from 'helpers';
import {IMAGE_URL} from 'services/api';

export default function MyCard(props: any) {
  const paragraph = maxParagraph(props?.overview);
  const subtitle = `${dayjs(props?.release_date).format('DD MMM, YYYY')} | ${
    props?.vote_average
  }`;

  return (
    <Card style={styles.card}>
      <Card.Title title={props?.title} subtitle={subtitle} />
      <Card.Cover source={{uri: IMAGE_URL + props?.poster_path}} />
      <Card.Content>
        <Paragraph>{paragraph}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
