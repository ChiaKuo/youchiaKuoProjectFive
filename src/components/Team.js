import React, { Component } from 'react';
import '../App.css';

class Team extends Component {
    render() {
        return (
            <>
            <div className="teamTitle">
            <img src="https://i.imgur.com/khwfmOZ.png" border="0" alt="Your Team" />
            </div>
            <div className="teamBox">
                {this.props.team}
            </div>
            <div className="returnButton">
                <button onClick={this.props.return}>Return</button>
            </div>
            </>
        )
    }
}


export default Team;