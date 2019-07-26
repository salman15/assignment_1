import React from 'react';

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
    'borderRadius': '10px',
    'margin': '0px 5px'
}
const avatar = {
    'width':'100%',
}
const title = {
    'fontSize': '12px',
}
const job = {
    'fontSize': '12px',

}

export default function ListItem(props){
    return(
        props.items.map((item,index) =>
            <div key={index} style={listItemContainer} className="listItemContainer">
                <div style={avatarContainer}><img style={avatar} src={item.url} className="avatar" alt="alt"/></div>
                <div>
                    <h3 style={title} className="title">{item.name}</h3>
                    <h4 style={job} className="job">{item.function}</h4>
                </div>
            </div>
        )
    )
}