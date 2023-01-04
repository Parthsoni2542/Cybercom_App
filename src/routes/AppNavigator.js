import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PolicyScreen from '../screens/PolicyScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import EvaluationScreen from '../screens/EvaluationScreen';
import SurveyScreen from '../screens/SurveyScreen';
import EvaluationDetailScreen from '../screens/EvaluationDetailScreen';
import EvaluationHistoryDetailScreen from '../screens/EvaluationHistoryDetailScreen';
import SurveymcqScreen from '../screens/SurveymcqScreen';
import SurveyQuestionScreen from '../screens/SurveyQuestionScreen';

const AppNavigator = () => {


    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();


    function tab() {
        return (
            <Tab.Navigator
           
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: 'red',
                      },
                    tabBarActiveTintColor: "orange",
                    tabBarInactiveTintColor: "gray",
                   
                    tabBarIcon: ({ color, size }) => {
                        let iconName = 'home';
                        if (route.name === 'Policy') {
                            iconName = 'document-text';
                        } else if (route.name == 'Profile') {
                            iconName = 'person'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabStyle: [{backgroundColor: 'red'}]
                   
                })}
                
                
               
            >
                <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false, }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, }} />
            </Tab.Navigator>
        );
    }




    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={tab} options={{ headerShown: false, }} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Evaluation" component={EvaluationScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Survey" component={SurveyScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Policy" component={PolicyScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="EvaluationDetailScreen" component={EvaluationDetailScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="EvaluationHistoryDetailScreen" component={EvaluationHistoryDetailScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="SurveymcqScreen" component={SurveymcqScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="SurveyQuestionScreen" component={SurveyQuestionScreen} options={{ headerShown: false, }} />
        </Stack.Navigator>
    )

}

export default AppNavigator;