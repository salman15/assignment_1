import React from 'react';
import ListItem from './listItem'

const container = {
    "display": "block",
    "width": "100%",
}

export default function List(props){
    return(
        <div style={container}>
            <ListItem  items={props.users} />
        </div>
    )
}
