import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as sortActions from '../actions/Sort';
import Sort from '../components/Sort';

const mapStateToProps = ({ sort }) => ({
    sortBy: sort.sortBy
  });
  
  const mapDipatchToProps = dispatch => ({
    ...bindActionCreators(sortActions,dispatch)
  })


export default connect(mapStateToProps,mapDipatchToProps)(Sort);