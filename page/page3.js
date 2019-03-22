

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


type Props = {};
export default class page3 extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {text:'123'};
        console.log(this);
    }
    render() {
        const mytext = '123';
        const showText = this.props.navigation.state.params.mode === 'edit'?'正在编辑':'编辑完成'
        return (
            <View style={{marginTop:100,padding:10}}>
                <Text>page3</Text>
                <Text>{showText}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>{
                        this.props.navigation.setParams({
                            title:text
                        })
                    }}
                />
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
    input:{
        height:50,
        borderWidth:1,
        borderColor:'red',
        borderRadius:3
    }
});
