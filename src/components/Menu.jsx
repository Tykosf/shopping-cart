import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const CartComponent = ({ title, id, image, removeFromCart, quantity}) => (
<List selection divided verticalAlign='middle'>
  <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this,id)} color='red'>Видалити</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content floated='left'>
        {title}<br />Кількість:&nbsp;{quantity[id]}&nbsp;шт
      </List.Content>
  </List.Item>
</List>
);

const HeaderMenu = ({ total, count, items, quantity }) => (
    <Menu>
        <Menu.Item name='browse'  >
          Магазин ігор
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='signup' >
            Всього: &nbsp; <strong>{total}</strong>&nbsp;грн.
          </Menu.Item>
        <Popup
          trigger={
            <Menu.Item name='help' >
            Кошик (<strong>{count}</strong>)
            </Menu.Item>
          }
          content={items.map((product,index) => <CartComponent quantity={quantity} key={index} {...product} />)}
          on='click'
          hideOnScroll
        />
        </Menu.Menu>
      </Menu>
)

export default HeaderMenu;