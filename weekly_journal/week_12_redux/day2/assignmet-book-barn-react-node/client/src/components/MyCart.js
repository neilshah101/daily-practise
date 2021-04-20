import React from 'react';
import { connect } from 'react-redux'

function DisplayMyCart (props){
    const carts = props.cart 
    const cartItems = carts.map((cart, index) => {
        return <div  key = {cart.book_id} className="card" style={{width: "18rem"}}>
                    <div >
                        <div>
                        <img src={`${cart.imagelink}`} className="card-img-top" alt="..."/>
                        </div>
                        <div>
                            <h2>{cart.title}</h2>
                        </div>
                        <div>
                            <h5>{cart.genre}</h5>
                        </div>
                        <div>    
                            <h5>Author: {cart.publisher}</h5>
                        </div>
                        <div>
                            <h5>Published Year{cart.year}</h5>
                        </div>                        
                    </div><br></br>
                </div>
    })

    return(
        <div>
            <div>
                <h1> my cart page </h1>
            </div>
            <div className="card_flex" >
                    {cartItems}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(DisplayMyCart)

