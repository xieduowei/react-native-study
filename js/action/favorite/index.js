import Types from '../types'



/**
 * 主题变更
 * @param theme
 * @returns {{type: string, theme: *}}
 */
export function onChangeText(text) {
    return {type: 'TEXT_CHANGE', text: text}
}