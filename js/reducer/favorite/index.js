import Types from '../../action/types';


const defaultState = {
    text:'中国好',
    onShowCustomThemeView: false,
};
export default function onAction(state = defaultState, action) {
    switch (action.type) {

        case 'TEXT_CHANGE':
            return {
                ...state,
                text: action.text,
            };
        default:
            return state;
    }

}