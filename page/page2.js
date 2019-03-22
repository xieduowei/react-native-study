

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


type Props = {};
export default class page2 extends Component<Props> {
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
    render() {

        return (
            <View style={{marginTop:100,padding:10}}>
                <Text>page2</Text>
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
