import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';

export default () => (
  <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
    <HomeScreen />
    <StatusBar style="light" />
  </ApplicationProvider>
);