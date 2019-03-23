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
import {connect} from 'react-redux'
import actions from './../action/types'
//import { Button } from 'react-native-elements';
type Props = {};
class trending extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.text}</Text>
                <Button
                    title={'修改text'}
                    onPress={()=>{
                        this.props.onChangeText('中国不好')
                    }}
                />
            </View>
        )

    }
}
const mapStateToProps = state => ({
    text: state.favorite.text
});
const mapDispatchToProps = dispatch => ({
    onChangeText: (text) => dispatch(actions.onChangeText(text))
});
//注意：connect只是个function，并不应定非要放在export后面
export default connect(mapStateToProps, mapDispatchToProps)(trending);

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
