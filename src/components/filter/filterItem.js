import React from 'react'

const items = []

const spanStyle = {
    display: 'inline-flex',
    margin: '10px'
  };
  const paragraphStyle = {
    margin:'0px 5px'  
    };
export default function filterItem(props){
    return( props.items.map((item) =>
            <span key={items} style={spanStyle}>
                <input type="radio" name={item} value={item}/> <p style={paragraphStyle}>{item}</p> 
            </span>
        )
    )
}