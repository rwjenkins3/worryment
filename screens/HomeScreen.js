import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from 'react-native';
import { Text } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

import meteor from '../assets/meteor.png';
import volcano from '../assets/volcano.jpg';
import sunflower from '../assets/sunflower.png';

const HomeScreen = () => {
    const [data, setData] = useState(null);

    const apiURL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-04-01&api_key=8km5ZWdDJfCBVtBddQj3A3gVlMrOmOY4YWfvNelf';

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(apiURL);
            setData(response.data);
          };
      
          getData();
      
    }, []);

    if(!data) {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <ActivityIndicator />
            </LinearGradient>
        );
    }

    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
            <Text category='h3' style={styles.titleText}>Worriment</Text>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <Text category='h4'>Killer Meteors?</Text>
                    <Text style={styles.sectionText}>There are {data.element_count} Near Earth objects you should probably worry about this week.</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text category='h4'>Volcanoes</Text>
                    <Text style={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text category='h4'>The Ongoing Pandemic</Text>
                    <Text style={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text category='h4'>Reminder:</Text>
                    <Text style={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
                <View style={styles.flowerContainer}>
                    <Image source={sunflower} style={styles.flowerImg} /></View>
                <View style={styles.sectionContainer}>
                    <Text category='h4'>Democracy is Dying</Text>
                    <Text style={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text category='h4'>War in Europe</Text>
                    <Text style={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text category='h4'>Super Volcanoes</Text>
                    <Text style={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    titleText: {
        marginTop: 18
    },
    topContainer: {
        width: '100%',
        height: '25%'
    },
    topImage: {
        width: '100%',
        height: undefined,
        resizeMode: 'cover'
    },
    sectionContainer: {
        width: '100%',
        padding: 10,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15
    },
    sectionText: {
        marginTop: 5
    },
    flowerContainer: {
        width: '100%',
        margin: 0,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start'
    },
    flowerImg: {
        width: '6%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'cover'
    }
});