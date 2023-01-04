import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    Animated,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import colors from '../../assets/theme/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Container from '../common/Container';
import Toolbar from '../common/Toolbar';
import styles from './styles';



const PolicyComponent = (data) => {
    console.log("data",data.faq)
    const startingHeight = 0;
    const [expanded, setExpanded] = useState(-1);
    const [fullHeight, setFullHeight] = useState(startingHeight);
    const animatedHeight = useRef(new Animated.Value(startingHeight)).current;




    useEffect(() => {
        Animated.spring(animatedHeight, {
            friction: 100,
            toValue: expanded ? fullHeight : startingHeight,
            useNativeDriver: false,
        }).start();
    }, [expanded]);

    const onTextLayout = e => {
        let { x, y, width, height } = e.nativeEvent.layout;
        height = Math.floor(height) + 40;
        if (height > startingHeight) {
            setFullHeight(height);
        }
    }
    const onChangeData = (id, i) => {
       
        if (id == data.faq[i]._data.question.pid) {
          if (expanded[i]) {
            let expand = {...expanded}
            expand[i] = false;
            setExpanded(expand)
          }
          else {
            let expand = {...expanded}
            expand[i] = true;
            setExpanded(expand)
          }
        }
    
      }







    return (
        <Container>
            <Toolbar
                title={"Company Policy"}

            />
            <ScrollView>
                {data.faq.map((index, i) => {
                    console.log("ddd",index._data.question.pid)
                    return (
                        <View style={[styles.cardRemainingSession, { marginTop: 10 }]} elevation={5}>
                            {
                                expanded[i] ?
                                    <Animated.View style={{ startingHeight }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                paddingVertical: 8,
                                            }}>
                                                 {console.log("ffffddffff",index)}
                                            <Text style={styles.remainingTitle}>{index._data.question.text}</Text>
                                            <TouchableOpacity
                                                style={{
                                                    marginStart: 'auto',
                                                    paddingHorizontal: 10,
                                                    paddingVertical: 4,
                                                }}
                                                onPress={() => {
                                                    onChangeData(index._data.question.pid, i)
                                                }}>
                                                   
                                                <AntDesign name={'up'} size={20} color={colors.primary} />
                                            </TouchableOpacity>
                                        </View>
                                        {expanded[i] && (
                                            <View
                                                onLayout={e => {
                                                    onTextLayout(e);
                                                }}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center'

                                                }}>

                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        color: colors.black,
                                                        fontWeight: '400',
                                                        marginStart: 4,
                                                        includeFontPadding: false,
                                                        fontFamily: 'Poppins-Regular',
                                                        width: '95%'
                                                    }}>
                                                    {index._data.question.answer}

                                                </Text>


                                            </View>
                                        )}
                                    </Animated.View> : <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            paddingVertical: 8,

                                        }}>
                                        <Text style={styles.remainingTitle}>{index._data.question.text} </Text>
                                        <TouchableOpacity
                                            style={{
                                                marginStart: 'auto',
                                                paddingHorizontal: 10,
                                                paddingVertical: 4,
                                            }}
                                            onPress={() => {
                                                onChangeData(index._data.question.pid, i)

                                            }}>
                                            <AntDesign name={'down'} size={20} color={colors.primary} />
                                        </TouchableOpacity>
                                    </View>


                            }


                        </View>)
                })}


                <View style={{ padding: 10 }}></View>


            </ScrollView>
        </Container>
    );
};

export default PolicyComponent;
