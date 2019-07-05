import React from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import VerticalMenu from './containers/Sort';
import Menu from './containers/Menu';
import MyCard from './containers/Card';

class App extends React.Component {

  componentWillMount(){
    const { setGoods } = this.props;
    axios.get('/goods.json')
    .then(response => {
      setGoods(response.data);
    });
  }

  render() {

    const styles = {
      display: "flex",
      justifyContent: "center"
    }
    

    const { goods, isReady } = this.props;
    return (
    <Container>
      <Menu />
      <VerticalMenu />
      <Card.Group itemsPerRow={4}>
      { !isReady ? 
      <h1 style = {styles}>Loading...</h1> : 
      goods.map((good,index) => (<MyCard key={index} {...good}/>))
              }
      </Card.Group>

    </Container>
    
    );
  }

}


export default App;