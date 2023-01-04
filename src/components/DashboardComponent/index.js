import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import colors from '../../assets/theme/colors';


import Container from '../common/Container';
import Toolbar from '../common/Toolbar';
import CustomHeader from '../CustomHeader';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Policy from '../../screens/PolicyScreen';
const DashboardComponent = ({ logoutClick }) => {
    const { navigate } = useNavigation();
    const [user, setUser] = useState("");


    return (


        <Container>

            <CustomHeader />
            <ScrollView>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 5, width: "90%", justifyContent: "space-between" }}>
                        <TouchableOpacity
                            elevation={5}
                            activeOpacity={0.9}
                            onPress={() => {
                                navigate("Policy");
                            }}
                            style={{
                                width: 150,
                                height: 140,
                                borderRadius: 12,
                                backgroundColor: '#FFFFFF',
                                shadowColor: "#000000",
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                shadowOffset: {
                                    height: 0,
                                    width: 0
                                },

                                backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Image
                                style={{ height: 80, width: 80, }}
                                source={require('../../assets/images/p1.jpg')}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#E2BC64', marginTop: 5 }}>Policy</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.9}
                            elevation={5}
                            onPress={() => {
                                navigate("Survey");
                            }}

                            style={{
                                width: 150,
                                height: 140,
                                borderRadius: 12,
                                shadowColor: "#000000",
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                shadowOffset: {
                                    height: 0,
                                    width: 0
                                },


                                backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Image
                                style={{ height: 80, width: 80, }}
                                source={require('../../assets/images/s1.jpg')}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#E2BC64', marginTop: 5 }}>Survey</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("Evaluation");
                            }}
                            activeOpacity={0.9}
                            style={{
                                width: 150,
                                height: 140,
                                borderRadius: 12,
                                shadowColor: "#000000",
                                shadowOpacity: 0.2,
                                shadowRadius: 2,
                                shadowOffset: {
                                    height: 0,
                                    width: 0
                                },

                                marginTop: 20,
                                backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'
                            }}>
                            <Image
                                style={{ height: 80, width: 80, }}
                                source={require('../../assets/images/e2.jpg')}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#E2BC64', marginTop: 5 }}>Evaluation</Text>

                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            activeOpacity={0.9}
                            style={{
                                width: 145,
                                height: 130,
                                borderRadius: 25,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.4,
                                elevation: 3,
                                backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', marginTop: 25
                            }}>
                            <Ionicons name={'document-text'} size={25} color={'red'} />
                            <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#E2BC64' }}>Follow Up</Text>

                        </TouchableOpacity> */}

                    </View>

                </View>

            </ScrollView>
        </Container>

    );
};

export default DashboardComponent;
