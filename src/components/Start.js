import React, { Component } from 'react';
import '../App.css';
import title from './assets/pokemonTitle.png'; // generated from https://textcraft.net/style/Textcraft/pokemon

class Start extends Component {
    render() {
        return (
            // Start Page
            <div className="startBox wrapper">
                <img className="startImage" src={title} alt="pokemon forest"/>
                <h2>Catch up to 151 Pokemon!</h2>
            </div>
        )
    }
}


export default Start;