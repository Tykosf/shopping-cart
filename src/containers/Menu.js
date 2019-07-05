import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/Cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart }) => ({
    total: cart.items.reduce((total, product) => total + product.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id ),   
    quantity: cart,
    // items: cart.items
  });

  const mapDipatchToProps = dispatch => ({
    ...bindActionCreators(cartActions,dispatch)
  })


export default connect(mapStateToProps,mapDipatchToProps)(Menu);