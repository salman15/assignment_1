import React from 'react';
import ListItem from '../list/listItem'
let users = [
    {
        "name": "Gandalf",
        "function": "Developers",
        "url": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Gandalf-the-Grey.jpg"
    },
    {
        "name": "Gandalf",
        "function": "Developers",
        "url": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Gandalf-the-Grey.jpg"
    },
    {
        "name": "Gandalf",
        "function": "Developers",
        "url": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Gandalf-the-Grey.jpg"
    },
    {
        "name": "Gandalf",
        "function": "Developers",
        "url": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/09/Gandalf-the-Grey.jpg"
    },
]

const container = {
    "display": "block",
    "width": "100%",
}

export default function List(){
    return(
        <div style={container}>
            <ListItem  items={users}/>
        </div>
    )
}
