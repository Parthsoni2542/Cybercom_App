import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DashboardComponent from '../../components/DashboardComponent';
import CustomHeader from '../../components/CustomHeader';

const DashboardSceen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <DashboardComponent />
    </View>
  )
}



export default DashboardSceen;
