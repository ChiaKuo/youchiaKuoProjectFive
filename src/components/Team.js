import React, { Component } from 'react';
import '../App.css';

class Team extends Component {
    render() {
        return (
            <>
            {/* Generates a box per Pokemon on the team */}
            <div className="teamTitle">
            <img src="https://i.imgur.com/khwfmOZ.png" border="0" alt="Your Team" />
            </div>
            <div className="teamBox wrapper">
                {this.props.team}
            </div>
            {/* Returns to the Pokemon page */}
            <div className="returnButton">
                <button onClick={this.props.return}>Return</button>
            </div>
            </>
        )
    }
}


export default Team;