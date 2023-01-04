import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import colors from '../../assets/theme/colors';
import {
  APPOINTMENT,
  HISTORY_TAB,
  UPCOMINGS_TAB,
} from '../../constants/routeName';

import AppointmentCard from '../common/AppointmentCard';
import Container from '../common/Container';
import Toolbar from '../common/Toolbar';
import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import { useSelector } from 'react-redux';
const EvaluationComponent = ({
  upcomingApptData,
  historyApptData,
  upcomingItemClick,
  historyItemClick,
}) => {
  const layout = useWindowDimensions()
  const [index, setIndex] = React.useState(0);
  const state = useSelector(state => state.EvaluationReducer)
  console.log("sstsfssgssugsu",state.Evalutionactive)
  const [routes] = React.useState([
    { key: UPCOMINGS_TAB, title: "Evaluations" },
    { key: HISTORY_TAB, title: "Evaluations History" },
  ]);
  const navigate = useNavigation();

   
  const renderScene = ({ route }) => {
   
    switch (route.key) {
      case UPCOMINGS_TAB:
        return (
          <AppoinmentsListView
            routeKey={route.key}
            data={state.Evalutionactive}
            itemClick={upcomingItemClick}
          />
        );
      case HISTORY_TAB:
        return (
          <AppoinmentsListView
            routeKey={route.key}
            data={state.Evalutionhistory}
            itemClick={historyItemClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Toolbar title={APPOINTMENT}  />   
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        lazy={true}
      />
      
    
    </Container>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: colors.primary }}
    style={{ backgroundColor: colors.white }}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color: focused ? colors.black : colors.grey,
          fontWeight: '600',
          fontFamily: 'Poppins-Regular',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const AppoinmentsListView = ({ routeKey, data, itemClick }) => {

    
  const layout = useWindowDimensions();

  const [isMoreLoading, setMoreLoading] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigation();



  return(
    <View style={{ paddingHorizontal: 10, flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <AppointmentCard item={item} itemClick={itemClick} />
        )}
        contentContainerStyle={[
          {
            marginVertical: 16,
            paddingBottom: 16,
          },
          data.length > 0
            ? {}
            : { justifyContent: 'center', alignItems: 'center', height: '100%' },
        ]}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Image
              style={{
                width: layout.width * (153 / 360),
                height: layout.height * (114 / 640),
              }}
              resizeMode="center"
              source={require('../../assets/images/ic_no_appt.png')}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              You Dont Have Any Evulations!
            </Text>
          </View>
        }
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
    </View>
  );
};

export default EvaluationComponent;
