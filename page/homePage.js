

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
export default class page1 extends Component<Props> {
    static navigationOptions = {
        title:'home',
        headerBackTitle:'中国好'
    }
    render() {
        const {navigation} = this.props
        return (
            <View style={{marginTop:100,padding:10}}>
                <Text>这里是homepage</Text>
                <Button
                    title={'去page1'}
                    onPress={()=>{
                        navigation.navigate('page1',{name:'动态的'})
                    }}
                ></Button>
                <Button
                    title={'去page2'}
                    onPress={()=>{
                        navigation.navigate('page2',{name:'动态的'})
                    }}
                ></Button>
                <Button
                    title={'去page3'}
                    onPress={()=>{
                        navigation.navigate('page3',{name:'动态的'})
                    }}
                ></Button>
                <Button
                    title={'去bottom'}
                    onPress={()=>{
                        navigation.navigate('bottom',{name:'动态的'})
                    }}
                ></Button>
                <Button
                    title={'去top'}
                    onPress={()=>{
                        navigation.navigate('top',{name:'动态的'})
                    }}
                ></Button>
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
