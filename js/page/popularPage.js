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
    createStackNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'

import NavigationUtil from './../navigator/NavigationUtil'
type Props = {};
export default class popular extends Component<Props> {
    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
            popularTab1:{
                screen:popularTab,
                navigationOptions:{
                    title:'java'
                }
            },
            popularTab2:{
                screen:popularTab,
                navigationOptions:{
                    title:'react'
                }
            }
        }))
        return (
            <View style={{flex:1}}>
                <TabNavigator/>
            </View>
        )

    }
}

class popularTab extends  Component<Props>{
    render(){
        const {tabLabel} = this.props;
        return (
            <View>
                <Text>{tabLabel}11111</Text>
                <Button
                    title={'跳转到详情页'}
                    onPress={()=>{
                    NavigationUtil.navigation.navigate('DetailPage')
                }}></Button>
            </View>
        )
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
