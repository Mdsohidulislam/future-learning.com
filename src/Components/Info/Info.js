import React from 'react';
import './Info.css';   
import View from '../View/View'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart,faTimesCircle,faComment} from '@fortawesome/free-solid-svg-icons';

{/* <i class="fas fa-times-circle"></i> */}
const Info = (props) => {
    const inrolled=props.course.length;
    let course=props.course;
    let grandTotal=course.reduce((total,course)=>total+course.charge,0)
    
    return (
 
        <div className='info-container'>
            <h4>You total enrolled</h4>
            <h4>({inrolled}) course</h4>
            <h5>total : ({grandTotal}) taka  </h5>  
            <View len={inrolled}></View>
        </div>
 
    );
};

export default Info;