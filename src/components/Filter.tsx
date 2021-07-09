import React, {useState} from 'react';
import {myColors} from 'constants/constants';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, Title, RadioButton, FAB} from 'react-native-paper';
import _ from 'lodash';
import {TMovies} from 'services/api';
import {useNavigation} from '@react-navigation/native';

const filter: {name: string; value: TMovies}[] = [
  {
    name: 'Now Playing',
    value: 'now_playing',
  },
  {
    name: 'Popular',
    value: 'popular',
  },
  {
    name: 'Top Rated',
    value: 'top_rated',
  },
  {
    name: 'Upcoming',
    value: 'upcoming',
  },
];

interface Props {
  onChange: (v: TMovies) => void;
}

export default function Filter({onChange}: Props) {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const onFilter = (v: any) => {
    onChange(v);
    onCloseModal();
  };

  const onShowModal = () => {
    setVisible(true);
  };

  const onCloseModal = () => {
    setVisible(false);
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <FAB style={styles.fab} small icon="filter" onPress={onShowModal} />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onCloseModal}
          contentContainerStyle={styles.modal}>
          <Title>Filter Movies</Title>
          <FilterMovies onChange={onFilter} />
        </Modal>
      </Portal>
    </View>
  );
}

const FilterMovies = ({onChange}: any) => {
  return (
    <RadioButton.Group onValueChange={value => onChange(value)} value={''}>
      {filter.map((i, index) => (
        <RadioButton.Item key={index} label={i.name} value={i.value} />
      ))}
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: myColors.light,
    padding: 20,
  },
  headerList: {
    marginTop: 60,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});
