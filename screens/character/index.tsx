import { type RouteProp, useRoute } from '@react-navigation/core';
import { View,Text, Image } from 'react-native';
import { type RootStackNavigator } from '../../navigation/main/types';

export const CharacterScreen = ():JSX.Element => {
// constants
    const { params } = useRoute<RouteProp<RootStackNavigator, 'CharacterPage'>>()

// states

// hooks

// functions

// effects

// render

    return (
        <View>
            <Image source={{uri: params?.image}} style={{width: '100%', height: 300}}/>
           <Text>{params?.name}</Text>
        </View>
    );
}