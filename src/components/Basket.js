import React from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import '../App.css';
import {Dropdown} from "react-bootstrap";


const Basket = ({basket, setBasket, addToCart, updateQty}) => {

    const removeBasket = (item) => {
        if (!window.confirm('Are you sure?')) return;
        setBasket(basket.filter((e) => e.id !== item.id))
    }



    return (
        <>
            <nav>
                <div className="container">
                    <ul className="navbar-left">
                        <li><a href="/#">Harry Potter Shop</a></li>
                    </ul>

                    <ul className="navbar-right">
                        <Dropdown>
                            <Dropdown.Toggle variant={''} id="dropdown-basic">
                                <li><a href="/#" id="cart"><i className="fa fa-shopping-cart"/> Cart <span
                                    className="badge">{basket.length} Total Item</span></a></li>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {basket.length === 0 && <>Your basket is empty.</>}
                                <ul>
                                    {basket.map((item, index) =>
                                        <li className={'lilo'} key={index}>{item.title}
                                        <button onClick={() => updateQty(item, -1)} > - </button>
                                            
                                            <button>{item.qty}</button>
                                            <button onClick={() => updateQty(item, 1)} > +  </button>
                                            {/* <button onClick={() => updateQty(item, 1)}><i className="fa fa-plus"/> */}
                                            
                                            <button className={'btn-dark'}
                                                    onClick={() => removeBasket(item)}><i className="fa fa-remove"/>
                                            </button>
                                        </li>)}
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                </div>
            </nav>


        </>
    )
}

export default Basket
