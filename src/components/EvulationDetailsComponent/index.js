import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation,StackActions } from '@react-navigation/native';
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
import { loginUser } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import StarRating from 'react-native-star-rating';
import CustomButton from '../common/CustomButton';
import Toast from 'react-native-toast-message';
import firestore from '@react-native-firebase/firestore';
const EvulationDetailsComponent = (data) => {
    console.log("datadata",data.evalulationid)
    const evalid = data.evalulationid
    const used_session = data.qustion
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [starCount, SetStarCount] = useState("");
    const [starCount1, SetStarCount1] = useState("");
    const increaseValue = firestore.FieldValue.increment(1);


    const onStarRatingPress = (id, i, rating) => {
        if (id == used_session[i].id) {
            // if (starCount[i]) {
                let expand = { ...starCount }
                let expand1 = { ...starCount1 }
                if (expand[id]) {
                    console.log("expand[id]",expand[id])
                    let store = expand[id]
                    console.log("store[id]",store)
                    console.log("store[i]",store[i])
                    store[i] = rating;
                    expand[id] = store;
                    expand1[i] = rating;
                } else {
                    let store = {}
                    console.log("store",store)
                    console.log("iiiii",i)
                    store[rating] = rating;
                    console.log("id",id)
                    console.log("store[i]",store[i])
                    expand[id] = store;
                    console.log("expand[id]",expand[id])
                    expand1[i] = rating;
                }

                SetStarCount(expand)
                SetStarCount1(expand1)
            }
            // else {
            //     let expand = { ...starCount }
            //     expand[i] = rating;
            //     SetStarCount(expand)
            // }
        // }

    }

    const datann = () => {
        if(starCount ==""){
            Toast.show({
                type: 'failure',
                text1: 'Hello',
                text2: 'This is some something 👋'
              });
        }
       console.log(starCount)
        let demo = {}
        Object.entries(starCount).map(([k, v])=>{
            
             demo["responses."+ k +"." + (Object.keys(v))[0]] = increaseValue
        })
        console.log("demo",demo)
        firestore()
        .collection('evaluation')
        .doc(evalid)
        .update(demo)
        .then(() => {
            navigation.dispatch(StackActions.pop(2));
        });
      
    }

    return (
        <Container>
            <Toolbar
                title={data.used_session}
            />
            <ScrollView>
                {used_session.map((index, i) => {
                    console.log("dd,,fl,fl",starCount)
                    return (
                        <View style={[styles.cardRemainingSession, { marginTop: 10 }]} >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingVertical: 8,

                                }}>
                                <Text style={styles.remainingTitle}> Q-{i}  {index.text}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={starCount1[i]}
                                    selectedStar={(rating) => onStarRatingPress(index.id, i, rating)}
                                    fullStarColor={'orange'}
                                    containerStyle={{ width: 150, alignItems: 'center' }}
                                    starSize={20}
                                />
                            </View>
                        </View>
                    )
                }
                )}
                <View style={{ padding: 20 }}>
                    <CustomButton
                        style={styles.btnLogin}
                        title={"Submit"}
                        primary
                        onPress={datann}
                    />
                </View>

            </ScrollView>

        </Container>
    );
};

export default EvulationDetailsComponent;
