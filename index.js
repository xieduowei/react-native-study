/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {AppStackNavigator} from './navigators/AppNavigators'
import {createAppContainer} from 'react-navigation'
import {name as appName} from './app.json';

//不能直接使用app,需要这样创建
const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);

//创建好之后,将组建指向AppStackNavigatorContainer
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
