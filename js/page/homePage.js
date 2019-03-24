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

import  Ionicons from  'react-native-vector-icons/Ionicons'
import  MaterialIcons from  'react-native-vector-icons/MaterialIcons'
import  AntDesign from  'react-native-vector-icons/AntDesign'

type Props = {};
export default class HomePage extends Component<Props> {
    _tabNavigator(){
        return createAppContainer(createBottomTabNavigator({
            popular:{
                screen:popular,
                navigationOptions:{
                    headerTitle:'123',
                    title:'123',
                    tabBarLabel: "微信",
                    tabBarIcon: ({tintColor, focused}) => (
                        <Ionicons
                            name={'ios-chatboxes'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
            trending:{
                screen:trending,
                navigationOptions:{
                    tabBarLabel: "通讯录",
                    tabBarIcon: ({tintColor, focused}) => (
                        <MaterialIcons
                            name={'people'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
            my:{
                screen:my,
                navigationOptions:{
                    tabBarLabel: "发现",
                    tabBarIcon: ({tintColor, focused}) => (
                        <AntDesign
                            name={'find'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
            favorite:{
                screen:favorite,
                navigationOptions:{
                    tabBarLabel: "我",
                    tabBarIcon: ({tintColor, focused}) => (
                        <Ionicons
                            name={'ios-person'}
                            size={20}
                            style={{color: tintColor}}
                        />
                    )
                }
            },

        },{
            tabBarOptions:{
                activeTintColor:'#34a853',
                tabStyle:{
                    justifyContent:'center',
                    alignItems:'center',
                    //borderTopWidth:1,
                    //borderTopColor:'red'
                },
                style:{
                    borderTopWidth:0.4,
                    borderTopColor:'#ddd'
                }
            }
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
