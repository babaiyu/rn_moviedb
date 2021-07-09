import React, {useState} from 'react';
import {myColors} from 'constants/constants';
import {StyleSheet, View} from 'react-native';
import {Appbar, Modal, Portal, Title, RadioButton} from 'react-native-paper';
import _ from 'lodash';
import {TMovies} from 'services/api';
import {useEffect} from 'react';
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
  title?: string;
  type?: TMovies;
  isFilter?: boolean;
  isBack?: boolean;
}

export default function Header({
  onChange,
  title,
  type,
  isFilter,
  isBack,
}: Props) {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');

  const changeFilterByV = () => {
    const theFilter: any = _.find(filter, {value: type});

    setSelected(theFilter?.name);
  };

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

  useEffect(() => {
    changeFilterByV();
  }, [type, onBack, isFilter, isBack]);

  return (
    <Portal>
      <Appbar.Header>
        {isBack && <Appbar.BackAction onPress={onBack} />}
        <Appbar.Content title={title || 'Home'} subtitle={selected} />
        {isFilter && <Appbar.Action icon="filter" onPress={onShowModal} />}
      </Appbar.Header>
      <Modal
        visible={visible}
        onDismiss={onCloseModal}
        contentContainerStyle={styles.modal}>
        <Title>Filter Movies</Title>
        <FilterMovies onChange={onFilter} />
      </Modal>
    </Portal>
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
});
