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

import NavigationUtil from './../navigator/NavigationUtil'
type Props = {};
export default class App extends Component<Props> {
    componentDidMount(){
        this.timer = setTimeout(()=>{
            NavigationUtil.resetToHomePage({
                navigation:this.props.navigation
            })
        },2000)
    }
    componentWillMount(){
        this.timer && clearTimeout(this.timer)
    }
    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={{flex:1}}
                    source={require('./../../img/wechat.jpg')}
                />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
