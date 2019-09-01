import React from 'react';
import gif from './assets/todo_gif.gif'
import './css/image.css'


const Landing = () => {
    return (

        <div style ={{ textAlign : 'center'}}>
            <div className="heading"><i>Each day I will accomplish one thing on my to do list</i></div>
            <img src={gif} border="0" className="responsive-image" alt="Null" />
            <div className="text">You're one click away from making your life better</div>
        </div>
    );
};

export default Landing;