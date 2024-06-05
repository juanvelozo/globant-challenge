import { type ParamListBase, type RouteProp } from '@react-navigation/core'
import { type ComponentType } from 'react'
import { type NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Home } from '../../screens/home'

// All the routes in the navigator
export interface RootStackNavigator extends ParamListBase {
    Home: undefined
}

// An enum to enumerate all routes
export enum RootStackRoutesEnum {
    Home = 'Home',
}

// Typing the "component" attribute in Stack.Screen
export type ScreenComponentType<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList,
> =
    | React.ComponentType<{
          route: RouteProp<ParamList, RouteName>
          navigation: unknown
      }>
    | ComponentType<object>

// This is a selector for all the values in the enum
type RouteComponentsType = {
    [x in RootStackRoutesEnum]: ScreenComponentType<
        RootStackNavigator,
        RootStackRoutesEnum
    >
}

// Here, we select the component according to the value in the array
export const MainComponents: RouteComponentsType = {
    [RootStackRoutesEnum.Home]: Home,
}

export type mainNavProp = NativeStackNavigationProp<RootStackNavigator>
