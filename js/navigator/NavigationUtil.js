export default class NavigationUtil {
    /**
     * 返回主页
     * @param params
     */
    static resetToHomePage(params){
        params.navigation.navigate('Main')

    }

    /**
     * 返回上一页
     * @param navigation
     */
    static resetGoBack(navigation){
        navigation.goBack()
    }
}
