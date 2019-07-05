import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/Cart';
import Card from '../components/Card';

const mapStateToProps = ({ cart } , { id }) => ({
    addedCount: cart.items.reduce((sum, product) => sum + (product.id === id ? 1 : 0),0), 
  });
  
  const mapDipatchToProps = dispatch => ({
    ...bindActionCreators(cartActions,dispatch)
  })


export default connect(mapStateToProps,mapDipatchToProps)(Card);