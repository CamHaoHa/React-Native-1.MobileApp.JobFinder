import { View, ScrollView, SafeAreaView } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';

import { useState } from 'react';
const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView stye={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        option={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShasowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
            />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
