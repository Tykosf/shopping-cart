import { combineReducers } from 'redux';
import goods from './Goods';
import cart from './Cart';
import sort from './Sort';

export default combineReducers({
    goods,
    cart,
    sort
});