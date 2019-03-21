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
//import { Button } from 'react-native-elements';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu' ,
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu' ,
});
var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {movies:null};
        console.log(this);
        this.getData = async function () {
            let response = await fetch(REQUEST_URL);
            let responseJSON = await response.json();
            console.log(responseJSON);
            //this.setState({
            //    movies:responseJSON.movies
            //})
        }
    }
    changeText = (text)=>{

        this.setState({text})
    }
    componentDidMount(){
        this.getData()
    }
    getTtem(item){
        return (
            <View style={{flexDirection:'row',marginTop:10}}>
                <View>
                    <Image source={{uri:item.posters.thumbnail}} style={{width:60,height:60}}></Image>
                </View>
                <View style={{justifyContent:'space-between',flex:1,alignItems:'center'}}>
                    <Text>{item.title}</Text>
                    <Text>{item.year}</Text>
                </View>

            </View>
        )
    }
    render() {
        if(!this.state.movies){
            return (
                <View style={{marginTop:100}}>
                    <Image source={require('./img/工资条.png')}>

                    </Image>
                    <ActivityIndicator></ActivityIndicator>
                </View>

            );
        }else {
            return (
                <View style={{marginTop:100,padding:10}}>
                    <FlatList
                        data={this.state.movies}
                        renderItem={({item})=>{
                            return this.getTtem(item)
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
        }

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
