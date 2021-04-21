import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Item = ({item, addToCart}) => {
    //props ile item datalarini i items.js den aldim .
 
//addToCart onclik eventi ile calistirildi.Bu event App.js de 
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={item.image}/> 
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                A magical adventure awaits! Discover the internationally bestselling and multi-award-winning series by J.K. Rowling.


                </Card.Text>
                {item.quantity > 0 ? <Button onClick={() => addToCart(item)} variant="primary">Add to Card</Button>
                    : <Button variant="warning">Stock out</Button>}
            </Card.Body>
        </Card>
    )
}
export default Item
