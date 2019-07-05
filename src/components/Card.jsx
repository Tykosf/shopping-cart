import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const MyCard = (product) => 
{
  const { title, image, price, addToCart, addedCount, date, descr } = product;
  return(
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{date}</span>
      </Card.Meta>
      <Card.Description>
        {descr}
      </Card.Description>
    </Card.Content>
    <Card.Content extra className="extra">
        <Icon name='currency' className='currency_icon' />
        &nbsp; {price} &nbsp;грн.
    </Card.Content>
    <Button onClick={addToCart.bind(this, product)}>Добавити в корзину {addedCount > 0 && `(${addedCount})`}</Button>
  </Card>
)
};

export default MyCard;