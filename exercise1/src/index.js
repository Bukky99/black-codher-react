import React from 'react';
import ReactDOM from 'react-dom';
const name = 'Bukky Omojowo'

function Greeting(user = false){
    if (user) {
        return <h1>{name}'s Reading list</h1> //{name} calls the variable stored in name, so Bukola Omojowo
    }
    return <h1>Just a Reading List</h1>
}

console.log(Greeting(name));
ReactDOM.render(Greeting(), document.getElementById('root')); 