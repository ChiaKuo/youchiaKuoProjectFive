import React, { Component } from 'react';
import '../App.css';

class Pokemon extends Component {
    render() {
        return (
            <div className="pokemonBox wrapper">
                {/* Flex Container for Wild Pokemon */}
                <div className="pokemonFlexBox">
                    <h1>{this.props.name}</h1>
                    <img src={this.props.image} alt={`A ${this.props.name} from the Pokemon series`}/>
                </div>
                {/* Flex Container for message and control buttons */}
                <div className="pokemonControlBox">
                    <div className="pokemonMessageBox">
                        {/* full message */}
                        {this.props.full ? 
                            <h2>You can only carry 6 pokemon at a time! Release some pokemon to catch more!</h2> 
                        : 
                        null}

                        {/* missed message */}
                        {this.props.missed ? 
                            <h2>You failed to catch {this.props.name}! Try again!</h2> 
                        : 
                        null}

                        {/* caught message */}
                        {this.props.caught ? 
                            <h2>You caught a {this.props.name}!</h2> 
                        : 
                        null}

                        {/* Encounter Message */}
                        {this.props.full !== true && this.props.caught !== true && this.props.missed !== true ? 
                            <h2>A wild {this.props.name} appeared!</h2> 
                        : 
                        null}

                    </div>
                
                    <div className="pokemonButtonBox">
                        {/* Throw pokeball button */}
                        {this.props.full !== true && this.props.caught !== true ? 
                            <button onClick={this.props.catch}>Throw Pokeball</button> 
                        : 
                        null}
                        {/* Find more pokemon button */}
                        {this.props.caught ? 
                            <button onClick=
                            {this.props.more}>Find more Pokemon!</button> 
                        : 
                        null}
                        {/* Run away button */}
                        {this.props.full !== true && this.props.caught !== true ?
                            <button onClick={this.props.more}>Run Away</button>
                        :
                        null}
                    </div>
                </div>
            </div>
        )
    }
}


export default Pokemon;