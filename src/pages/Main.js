import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';

import api from '../services/api'

import logo from '../assets/logo.png'

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />

      <View style={styles.cardsContainers}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://avatars3.githubusercontent.com/u/20506010?s=460&v=4' }}/>
          <View style={styles.footer}>
            <Text style={styles.name}>Kelvin Fernandes</Text>
            <Text style={styles.bio}>Learning: React, ReactNative and Nodejs at @Rocketseat</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardsContainers:{},
  cards: {},
  footer:{},
  name:{},
  bio:{}
});