import React from 'react';

export default function AutoComplete(props){
    return(
        <ul>
            {
            props.items.map((item,index) =>
                <li key={index} 
                    onClick={filter => {
                        props.selectFilter(
                        filter = item.function, 
                    )}}> 
                    {item.function}
                </li>
            )
            }
        </ul>
    )
}