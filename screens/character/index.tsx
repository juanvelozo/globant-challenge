import { type RouteProp, useRoute } from '@react-navigation/core';
import { View,Text, Image } from 'react-native';
import { type RootStackNavigator } from '../../navigation/main/types';
import { Layout } from '../../components/common/Layout';
import { IconLabel } from '../../components/common/IconLabel';

export const CharacterScreen = ():JSX.Element => {
// constants
    const { params } = useRoute<RouteProp<RootStackNavigator, 'CharacterPage'>>()

// states

// hooks

// functions

// effects

// render

    return (
        <>
            <Image source={{uri: 'https://i.redd.it/0z3140ximmd01.jpg'}} style={{width: 420, height: 200}}/>
            <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-around',position: 'absolute', top:90, left: 10}}>
                <Image source={{uri: params?.image}} style={{width: 150, height: 150, borderRadius: 100}}/>
                <Text style={{fontSize: 32, fontWeight: 'bold', color: '#fff', marginHorizontal: 10}}>{params?.name}</Text>
            </View>
        <Layout>
            <IconLabel icon='user' text={params?.gender??''}/>
            <IconLabel icon='infocirlceo' text={params?.status  ??''}/>
            {params?.type && 
            <IconLabel icon='tags' text={params?.type??''}/>
            }
            <IconLabel icon='enviromento' text={params?.location.name??''}/>
            <IconLabel icon='staro' text={params?.origin.name??''}/>
            <IconLabel icon='playcircleo' text={`Number of episodes: ${params?.episode.length}`}/>
        </Layout>
        </>
    );
}