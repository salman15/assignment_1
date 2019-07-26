import React from 'react'
const spanStyle = {
    display: 'inline-flex',
    margin: '10px'
  };
  const paragraphStyle = {
    margin:'0px 5px'  
    };
export default function filterItem(props){
    return( props.items.map((item,index) =>
            <span key={index} style={spanStyle}>
                {console.log(
                    props.selectedFilter,'|', item.toLowerCase(),
                    props.selectedFilter === item.toLowerCase()
                )}
                <input 
                    type="radio" 
                    name="filter" 
                    onChange={event => {
                        props.selectFilter(
                        event = item, 
                    )}} 
                    value={item}
                    checked={props.selectedFilter === item.toLowerCase()}
                    /> 
                <p style={paragraphStyle}>
                    {item}
                </p> 
            </span>
        )
    )
}

