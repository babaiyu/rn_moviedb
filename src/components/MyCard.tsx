import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {IMAGE_URL} from 'services/api';

export default function MyCard(props: any) {
  return (
    <Card>
      <Card.Title title={props?.title} subtitle={props?.vote_average} />
      <Card.Content>
        <Title>{props?.title}</Title>
        <Paragraph>{props?.overview}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: IMAGE_URL + props?.poster_path}} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
}
