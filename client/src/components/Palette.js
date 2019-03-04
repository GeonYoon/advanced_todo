import React, { Component } from 'react';
import './css/Palette.css'

const Color = ({ color, active, onClick}) => {
    return (
        <div className={`color ${active && 'active'}`} onClick={onClick}  style={{ background : color}} />
        
    )
}

class Palette extends Component {
    
    // ShouldComponentUpdate(nextProps, nextState) {
    //     return this.props.colors !== nextProps.colors;
    // }
    
    render(){
        const { colors, selected, onSelect,completeness  } = this.props;
        const colorList = colors.map(
            color => {
                return (
                <Color 
                    color = {color}
                    onClick = {() => onSelect(color)}
                    active = {selected === color }
                    key = {color}
                />
            )
        } 
    )
        
        return (
            <div className = "row">
                <div className = "col s6 palette">
                    { colorList }
                </div>
                <div className = "col s6 comp">
                    Completeness : { completeness }% 
                </div>
            </div>
            
        )
    }
}



export default Palette;