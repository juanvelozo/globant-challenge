import { type FC } from 'react';
import { View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { type IIconLabelProps } from './types';
import { styles } from './styles';

export const IconLabel:FC<IIconLabelProps> = ({icon,text}):JSX.Element => {
// constants

// states

// hooks

// functions

// effects

// render

    return (
        <View style={styles.container}>
            <Icon name={icon} size={20} color="#000" style={styles.icon}/>
            <Text>{text}</Text>
        </View>
    );
}