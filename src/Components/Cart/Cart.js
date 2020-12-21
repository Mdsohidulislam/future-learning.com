import React from 'react';
import './Cart.css';
import '../../bootstrap.min.css'

const Cart = (props) => {
    
    return ( 
        <div className='cart'> 
            <img className='cart-img' src={props.img} alt=""/>
            <p className='cart-p-center'>{props.name}</p> 
            <p className='cart-p-center'>With: {props.instructor}</p>
            <hr/>
            <p>Course Charge: {props.charge}(taka)</p>
            <button onClick={()=>{props.click(props.course)}} className='btn btn-outline-success'>Enroll Now</button>
        </div>   
    );
};

export default Cart;