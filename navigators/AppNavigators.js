import {
    createStackNavigator ,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from 'react-navigation'
import { Button } from 'react-native'
import React , { Component } from 'react';
import HomePage from './../page/homePage'
import page1 from './../page/page1'
import page2 from './../page/page2'
import page3 from './../page/page3'
import page4 from './../page/page4'
import page5 from './../page/page5'
import login from './../page/login'

import Ionicons from 'react-native-vector-icons/Ionicons'


const AppTopNavigator = createMaterialTopTabNavigator({
    page1:{
        screen:page1,
        navigationOptions:{
            tabBarLabel:'ALL'
        }
    },
    page2:{
        screen:page2,
        navigationOptions:{
            tabBarLabel:'ios'
        }
    },
    page3:{
        screen:page3,
        navigationOptions:{
            tabBarLabel:'react'
        }
    },
    page4:{
        screen:page4,
        navigationOptions:{
            tabBarLabel:'vue'
        }
    },
    page5:{
        screen:page5,
        navigationOptions:{
            tabBarLabel:'angular'
        }
    }
},{
    tabBarOptions: {
        tabStyle: {minWidth:50},
        upperCaseLabel:false,//是否使标签大写,默认为true
        scrollEnabled:true,//是否支持选项卡滑动,默认为false
        style:{
            backgroundColor:'red'
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'white'
        },
        labelStyle:{
            color:'yellow',
            fontSize:13,
            marginTop:6,
            marginBottom:6
        }
    }
});

const AppBottomNavigator = createBottomTabNavigator({
    page1:{
        screen:page1,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color:tintColor}}
                >

                </Ionicons>
            )
        }
    },
    page2:{
        screen:page2,
        navigationOptions:{
            tabBarLabel:'趋势',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={'ios-people'}
                    size={26}
                    style={{color:tintColor}}
                >

                </Ionicons>
            )
        }
    },
    page3:{
        screen:page3,
        navigationOptions:{
            tabBarLabel:'收藏',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={'ios-chatboxes'}
                    size={26}
                    style={{color:tintColor}}
                >

                </Ionicons>
            )
        }
    },
    page4:{
        screen:page4,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={'ios-analytics'}
                    size={26}
                    style={{color:tintColor}}
                >

                </Ionicons>
            )
        }
    }
},{
    tabBarOptions: {
        activeTintColor:'blue'
    }
});
const AppStackNavigator = createStackNavigator({
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
    },
    bottom:{
        screen:AppBottomNavigator,
        navigationOptions:{
            title:'bottom'  //静态配置navigationOptions
        }
    },
    top:{
        screen:AppTopNavigator,
        navigationOptions:{
            title:'top'  //静态配置navigationOptions
        }
    }
});
const AppStack = createStackNavigator({
    HomePage: {
        screen: HomePage
    }
});

const AuthStack = createStackNavigator({
    login: {
        screen:login
    }
})

export default createSwitchNavigator(
    {
        Auth:AuthStack,
        App:AppStackNavigator
    },
    {
        initialRouteName:'Auth'
    }
)


