import React from 'react';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { SIZES, COLORS } from '../../../constants';
import styles from './popularjobs.style';

import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hooks/useFetch';
<<<<<<< HEAD
=======

const Popularjobs = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch('search', {
    query: 'React Web Developer',
    num_pages: 1,
  });

  // console.log(data);
>>>>>>> 86d35a2a2cdd666d8e8d1bbe9fe04ee1f5f88069

const Popularjobs = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch('search', {
    query: 'React Web Developer',
    num_pages: 1,
  });

  // console.log(data);
  const selectedJob = useState();
  const handleCardPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
          />
        ) : error ? (
          <Text>Oop... Something Went Wront!</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
