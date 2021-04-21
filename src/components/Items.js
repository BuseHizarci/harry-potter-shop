import React from 'react'
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


//Tum itemlarimin datasi burada.
//Bu datayi localde manual olusturdum.Axios ile data da cekebilirdim.
const Items = ({basket, setBasket, addToCart, updateQty}) => {

    const data = [
        {
            id: 1,
            title: "Potter Book 1",
            price: 1.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1616864814886-60cbfcac88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFycnklMjBwb3R0ZXIlMjBib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            title: "Potter Book 2",
            price: 2.99,
            quantity: 10,
            image: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhcnJ5JTIwcG90dGVyJTIwYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            title: "Potter Book 3",
            price: 3.99,
            quantity: 0,
            image: "https://images.unsplash.com/photo-1600189261762-905ef844cfc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhcnJ5JTIwcG90dGVyJTIwYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
    ]

//Map fonksiyonu kullanarak her bir itemi listeleyip item componentini
    return (
        <div>
            <Container>

                <Row md={3} xs={1}>
                        {data.map((item, index) => (
                          <Col key={index}><Item addToCart={addToCart} updateQty={updateQty} basket={basket} setBasket={setBasket} item={item}/></Col>
                        ))}

                </Row>
            </Container>

        </div>
    )
}

export default Items;
