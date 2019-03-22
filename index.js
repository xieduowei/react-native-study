/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import App1111 from './navigators/AppNavigators'
import {createAppContainer} from 'react-navigation'
import {name as appName} from './app.json';

//不能直接使用app,需要这样创建
const AppStackNavigatorContainer = createAppContainer(App1111);

//创建好之后,将组建指向AppStackNavigatorContainer
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
