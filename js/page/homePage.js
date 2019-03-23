/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , { Component } from 'react';
import {
    Platform ,
    StyleSheet ,
    Text ,
    View ,
    Image,
    TextInput,
    Button,
    ScrollView,
    FlatList,
    SectionList,
    ActivityIndicator} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'

import popular from './popularPage'
import trending from './trendingPage'
import my from './myPage'
import favorite from './favoritePage'
import NavigationUtil from './../navigator/NavigationUtil'

import  {MaterialCommunityIcons} from 'react-native-vector-icons'

type Props = {};
export default class HomePage extends Component<Props> {
    _tabNavigator(){
        return createAppContainer(createBottomTabNavigator({
            popular:{
                screen:popular,
                navigationOptions:{
                    tabBarLabel: "微信",
                    tabBarIcon: ({tintColor, focused}) => (
                        <MaterialCommunityIcons
                            name={'chat'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
            trending:{
                screen:trending
            },
            my:{
                screen:my
            },
            favorite:{
                screen:favorite
            },

        }))
    }
    render() {
        const Tab = this._tabNavigator();
        NavigationUtil.navigation = this.props.navigation;
        return <Tab/>

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        backgroundColor: '#F5FCFF' ,
    } ,
    welcome: {
        fontSize: 20 ,
        textAlign: 'center' ,
        margin: 10 ,
    } ,
    instructions: {
        textAlign: 'center' ,
        color: '#333333' ,
        marginBottom: 5 ,
    } ,
    item:{

    },
    sectionHeader:{

    }
});
