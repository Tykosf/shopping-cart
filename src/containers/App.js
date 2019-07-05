import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/Goods';
import App from '../App';
import orderBy from 'lodash/orderBy';


const sort_By = (goods, sortBy) =>{
  switch (sortBy) {
    case 'priceHigh':
      return orderBy(goods,'price','desc');
    case 'priceLow':
      return orderBy(goods,'price','asc');
    case 'title':
      return orderBy(goods,'title','asc')
    case 'all':
    default: 
      return goods;
  }
}

const filterProducts = (goods, searchQuery) => 
goods.filter(obj => obj.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0);

const searchProduct = (goods, sortBy, searchQuery) => {
  return sort_By(filterProducts(goods, searchQuery), sortBy)
};

const mapStateToProps = ({ goods, sort }) => ({
    goods: goods.items && searchProduct(goods.items, sort.sortBy, sort.searchQuery),
    isReady: goods.isReady  
  }); 
  
  const mapDipatchToProps = dispatch => ({
    ...bindActionCreators(productsActions,dispatch)
  });

  export default connect(mapStateToProps, mapDipatchToProps)(App);