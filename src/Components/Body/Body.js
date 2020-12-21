import React from 'react';
import {useState} from 'react';
import Cart from '../Cart/Cart';
import Info from '../Info/Info.js';
import '../../bootstrap.min.css';
const Body = () => {
    const Course=[
        {name:'Graphics design',id:'1',instructor:'Md Sohidul Islam',charge:300,img:'https://i.ibb.co/Bw6HfDk/4eb64b202a53e3986d930152922cf01b.jpg'},
        {name:'Korean language',id:'1',instructor:'Md Sohidul Islam',charge:310,img:'https://i.ibb.co/G9N3jp1/4aa8a4a60727f65cd6fd18e33c6482e5.jpg'},
        {name:'Sales training',id:'1',instructor:'Md Sohidul Islam',charge:320,img:'https://i.ibb.co/BZ4LbNk/0dce2029f6b838763ab3e696598a80b6.png'},
        {name:'Spoken English',id:'1',instructor:'Md Sohidul Islam',charge:330,img:'https://i.ibb.co/7XBcZPf/f765388b2e1338ddac4f077b9c32c755.jpg'},
        {name:'Learn Chinese',id:'1',instructor:'Md Sohidul Islam',charge:340,img:'https://i.ibb.co/PhQQTjB/d9f61b1b15ca035c05bbcd2fad63d528.jpg'},
        {name:'Mobile photography',id:'1',instructor:'Md Sohidul Islam',charge:350,img:'https://i.ibb.co/QNBQQH7/a4093200d3cbadc720043bde9abf199b.jpg'},
        {name:'Improved skills',id:'1',instructor:'Md Sohidul Islam',charge:360,img:'https://i.ibb.co/nLSfZL7/course-03.jpg'},
        {name:'Spoken English',id:'1',instructor:'Md Sohidul Islam',charge:370,img:'https://i.ibb.co/RBYzRJb/b251b00370917bb9763c2d74ad79d713.png'},
        {name:'IELTS',id:'1',instructor:'Md Sohidul Islam',charge:380,img:'https://i.ibb.co/XpkBgHC/2893a18f9449e61e177bb1d616499b7e.jpg'},
        {name:'Spoken English (advanced)',id:'1',instructor:'Md Sohidul Islam',charge:300,img:'https://i.ibb.co/ZBykrCc/700-x-500.png'},
        {name:'IELTS (ADVACED)',id:'1',instructor:'Md Sohidul Islam',charge:390,img:'https://i.ibb.co/yBB4cS2/93cbdc32724faf72b638b7cd06b76ad7.png'},
        {name:'Web design',id:'1',instructor:'Md Sohidul Islam',charge:330,img:'https://i.ibb.co/9NDXTLn/31f0659ec9f2a363c5326b4a20bebf19.jpg'},
        {name:'Youtube',id:'1',instructor:'Md Sohidul Islam',charge:300,img:'https://i.ibb.co/nD5BR33/26cc8a8b908e4ab17ad09ebff8064960.png'},
        {name:'Web design',id:'1',instructor:'Md Sohidul Islam',charge:355,img:'https://i.ibb.co/xJbdHk4/5f4c0648c301042617e81b7b91d21c70.jpg'},
        {name:'Graphics design',id:'1',instructor:'Md Sohidul Islam',charge:300,img:'https://i.ibb.co/W5sT60j/19cf981e5e0a48dc2d2ce800e6685665.jpg'},
    ];
    const [course,setCourse]=useState(Course);
    const [courseChose,setCourseChose]=useState([]);
    const clickHandle=(parameters)=>{  
        const newArr=[...courseChose,parameters];
        setCourseChose(newArr);
    }
    return (
        <div className='main-container'> 
            <div className="course-container ">
                {
                    course.map(res=><Cart course={res} click={clickHandle} name={res.name} key={res.id} img={res.img} instructor={res.instructor} charge={res.charge}></Cart>)
                }
            </div>
            <div className="info-container">
                <Info course={courseChose}></Info>
            </div>
        </div>
    );
};

export default Body;