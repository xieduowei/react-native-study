import { createStackNavigator } from 'react-navigation'
import { Button } from 'react-native'
import React , { Component } from 'react';
import HomePage from './../page/homePage'
import page1 from './../page/page1'
import page2 from './../page/page2'
import page3 from './../page/page3'
import page4 from './../page/page4'
import page5 from './../page/page5'

export  const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    page1:{
        screen:page1,
        navigationOptions:({navigation})=>({
            title:`${navigation.state.params.name}页面名`,  //动态配置navigationOptions
            headerBackTitle:' '
        })
    },
    page2:{
        screen:page2,
        navigationOptions:{
            title:'this is page2',  //静态配置navigationOptions
            headerBackTitle:' '
        }
    },
    page3:{
        screen:page3,
        navigationOptions:(props)=>{
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                title:params.title?params.title:'this is page3',
                headerRight:(
                    <Button
                        title={params.mode === 'edit'?'编辑':'保存'}
                        onPress={()=>setParams({mode:params.mode === 'edit'?'':'edit'})}
                    />
                )
            }
        }
    },
    page4:{
        screen:page4,
        navigationOptions:{
            title:'this is page4'  //静态配置navigationOptions
        }
    },
    page5:{
        screen:page5,
        navigationOptions:{
            title:'this is page5'  //静态配置navigationOptions
        }
    }
});