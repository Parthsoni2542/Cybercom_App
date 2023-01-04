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
import styles from './styles';

const CustomHeader = ({ logoutClick }) => {
    const { navigate } = useNavigation();
    const [user, setUser] = useState("");


    return (
        
            <View>
                <View style={{ height: 80, width: '100%', backgroundColor: '#ffcc00', justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', justifyContent: 'space-between', marginLeft: 10 }}>
                        <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 5 }}
                                source={require('../../assets/images/cybercom.jpg')}
                            />
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
                            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    {/* <View style={{ flexDirection: 'row' }}>
                                        <Text style={{
                                            color: '#232122',
                                            fontSize: 15,
                                            fontFamily: 'Poppins-Regular',
                                        }}>Name : </Text><Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontFamily: 'Poppins-Regular',
                                        }}>Cybercom.C </Text>
                                    </View> */}
                                    {/* <View style={{ flexDirection: 'row' }}>
                                        <Text style={{
                                            color: '#232122',
                                            fontSize: 15,
                                            fontFamily: 'Poppins-Regular',
                                        }}>ID : </Text><Text style={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontFamily: 'Poppins-Regular',
                                        }}>CCC201210 </Text>
                                    </View> */}
                                </View>
                                <Image
                                    style={{ width: 50, height: 50, borderRadius: 5 }}
                                    source={require('../../assets/images/img_profile.png')}
                                />

                            </View>

                        </View>
                    </View>
                </View>
            </View>
     


    );
};

export default CustomHeader;
