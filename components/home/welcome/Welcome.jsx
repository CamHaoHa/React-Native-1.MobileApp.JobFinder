import React from 'react';
import { useState } from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
} from 'react-native';

import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style';

const Welcome = () => {
  const router = useRouter();
  const jobTypes = ['Full-Time', 'Part-Time', 'Contractor'];
  const [activeJobType, setActiveJobType] = useState('Full-Time');
  //function to render item for flatlist showed different job type
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.tab(activeJobType, item)}
        onPress={() => {
          setActiveJobType(item);
          router.push(`/search/${item}`);
        }}
      >
        <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome User,</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Name your perfect job"
            value=""
            onChange={() => {}}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Welcome;
