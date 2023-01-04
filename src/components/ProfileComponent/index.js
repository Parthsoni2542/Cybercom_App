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
import EditProfileScreen from '../../screens/EditProfileScreen';
import Container from '../common/Container';
import Toolbar from '../common/Toolbar';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { loginUser, logout } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
const ProfileComponent = ({ logoutClick }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  
 

  useEffect(() => {
    const user = firebase.auth().currentUser;

user.providerData.forEach((userInfo) => {
  console.log('User info for provider: ', userInfo);
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('User email: ', user);
  }
});


    const subscriber = firestore()
      .collection('users')
      .doc("rf9bibSoeARsz9xRuuJuj9hopcw1")
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  })


  return (
    <Container>
      <Toolbar
        title={"Profile"}
        hideBackBtn
        rightOptionMenu={
          <TouchableOpacity
            onPress={() => {
              navigate(EditProfileScreen);
            }}>
            <Ionicons name={'account-edit'} size={35} color={colors.primary} />

          </TouchableOpacity>
        }
      />
      <ScrollView>
        <View style={styles.topWrapper}>
          <View style={styles.proflieWrapper}>
            <Image
              style={{ height: 180, width: 180, borderRadius: 90 }}
              source={require('../../assets/images/img_voucher.png')}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={styles.profileName}>
              Parth Soni
            </Text>
          </View>
          <View style={styles.detailWrapper}>
            <Text style={styles.lable}>Email</Text>
            <TextInput
              style={styles.value}
              value={"parth@gmail.com"}
              editable={false}
            />
            <Text style={styles.lable}>Phone Number</Text>
            <TextInput
              style={styles.value}
              value={"9512058950"}
              editable={false}
            />
            <Text style={styles.lable}>Designation</Text>
            <TextInput
              style={styles.value}
              value={"IOS Developer"}
              editable={false}
            />
            <Text style={styles.lable}>Department</Text>
            <TextInput
              style={styles.value}
              value={"Mobile Department"}
              editable={false}
            />
            <Text style={styles.lable}>Address</Text>
            <TextInput
              multiline
              style={styles.value}
              value={"B-402 Swaminarayan castel-1 near Arjun Asharm Road Nirnaynagr 385555"}
              editable={false}
            />
            {/* <TouchableOpacity
              onPress={() => {
                // navigate(CHANGE_PASSWORD);
              }}>
              <Text style={styles.changePassword}>Change Password</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={()=>{dispatch(logout())}} >
              <Text style={[styles.logout]}>Logout</Text>
            </TouchableOpacity>
            {/* <Text
              style={{fontSize: 10, color: colors.grey, alignSelf: 'flex-end'}}>
              V{version} Build {build}
            </Text> */}


          </View>
        </View>
          
      </ScrollView>
     
    </Container>
  );
};

export default ProfileComponent;
