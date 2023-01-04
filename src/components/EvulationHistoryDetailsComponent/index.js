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

import Container from '../common/Container';
import Toolbar from '../common/Toolbar';
import styles from './styles';
import StarRating from 'react-native-star-rating';


const EvulationHistoryDetailsComponent = (data) => {
    console.log("datadata", Object.values(data.response.responses)[0])
    return (
        <Container>
            <Toolbar
                title={data.used_session}
            />
            <ScrollView>
                {
                    data.response.questions.map((qus, i) => {
                        console.log("que",qus)
                        return <View style={[styles.cardRemainingSession, { marginTop: 10 }]} >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingVertical: 8,
                                }}>
                                <Text style={styles.remainingTitle}> Q-1  {qus.text} </Text>
                            </View>

                                {console.log("keysss",Object.keys(Object.values(data.response.responses)[i]).sort(function(a,b){return Object.values(data.response.responses)[i][b]==Object.values(data.response.responses)[i][a]}[0]))}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={Object.keys(Object.values(data.response.responses)[i])[0]}
                                    selectedStar={(rating) => onStarRatingPress(index.id, i, rating)}
                                    fullStarColor={'orange'}
                                    containerStyle={{ width: 150, alignItems: 'center' }}
                                    starSize={20}
                                />
                            </View>
                                
                            
                        

                        </View>

                    })
                    // Object.values(data.response).map((index, i) => {
                    //     return Object.keys(index).map((item, itm) => {

                }


            </ScrollView>

        </Container>
    );
};

export default EvulationHistoryDetailsComponent;
