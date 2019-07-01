import React from 'react';
let items=[]

const listItemContainer = {
    "border": "solid 1px black",
    "padding": "20px",
    "display": "inline-flex",
    "width": "100%",
    "margin": "20px",
}

const avatarContainer = {
    'width':'100px',
    'height': '100px',
    'overflow': 'hidden',
    'border-radius': '10px',
    'margin': '0px 5px'
}
const avatar = {
    'width':'100%',
}
const title = {
    
}
const job = {
    
}

export default function ListItem(props){
    return(
        props.items.map((item) =>
            <div style={listItemContainer} className="listItemContainer">
                <div style={avatarContainer}><img style={avatar} src={item.url} className="avatar"/></div>
                <div>
                    <h3 className="title">{item.name}</h3>
                    <h4 className="job">{item.function}</h4>
                </div>
            </div>
        )
    )
}