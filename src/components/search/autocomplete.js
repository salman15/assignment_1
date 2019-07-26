import React from 'react';

export default function AutoComplete(props){
    return(
        <ul>
            {
                props.filters.map((item,index) =>
                <li key={index} 
                    onClick={filter => {
                        props.selectFilter(
                        filter = item, 
                    )}}> 
                    {item}
                </li>
            )
            }
        </ul>
    )
}