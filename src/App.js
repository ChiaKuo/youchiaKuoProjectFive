import React, { Component } from 'react';
import './App.css';

import Start from './components/Start.js';
import Pokemon from './components/Pokemon.js';
import Team from './components/Team.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      pokemonPicture: [],
      team: [],
      startVisible: true,
      teamVisible: false,
      pokemonVisible: false,
      full: false,
      missed: false,
      caught: false,
    }
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  // Function to determine if a Pokemon is caught. Places the caught Pokemon info into the Team array
  catchPokemon = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    if (this.state.team.length > 5) {
      this.setState({
        full: true,
        caught: false,
        missed: false,
      });
    } else if (number % 2 === 0) {
      const tempTeam = [...this.state.team];
      const caughtPokemon = {
        name: this.state.pokemon.name,
        image: this.state.pokemonPicture,
        flavor: this.state.pokemon.flavor_text_entries[0].flavor_text,
      };
      tempTeam.push(caughtPokemon);
      this.setState({
        team: tempTeam,
        caught: true,
        missed: false,
      });
    } else {
      this.setState({
        missed: true,
        caught: false,
      });
    }
  }
  
  // Function to randomly generate a wild Pokemon
  fetchPokemon = () => {
    const number = Math.floor(Math.random() * 151) + 1;
    axios({
      url: 'https://pokeapi.co/api/v2/pokemon/' + number,
      method: 'GET',
      responseType: 'JSON',
    }).then(response => {
      const pokemonPicture = response.data.sprites.front_default;
      this.setState({
        pokemonPicture,
      });
      return axios({
          url: 'https://pokeapi.co/api/v2/pokemon-species/' + number,
          method: 'GET',
          responseType: 'JSON',
        })
    }).then(response2 => {
      const pokemon = response2.data;
      this.setState({
        pokemon,
      });
    })
  }

  // Function to generate another Pokemon
  morePokemon = () => {
    this.setState({
      caught: false,
      missed: false,
    });
    this.fetchPokemon();
  }

  // Function to return to the Pokemon page from the Team page
  returnPokemon = () => {
    this.setState({ 
      pokemonVisible: true,
      teamVisible: false,
    });
  }

  // Function to determine which page is shown
  handlePage = (page) => {
    if (page === "start") {
      this.setState({ 
        startVisible: false,
        pokemonVisible: true,
      });
    } else if (page === "team") {
      this.setState({ 
        pokemonVisible: false,
        teamVisible: true,
      });
    } else if (page ==="return") {
      this.setState({ 
        pokemonVisible: true,
        teamVisible: false,
      });      
    }
  }

  // Function to release a pokemon from the team page
  releasePokemon = (removeIndex) => {
    const oldTeam = [...this.state.team];
    const newTeam = oldTeam.filter((_, index) => {
      return removeIndex !== index;
    });
    this.setState({
      team: newTeam,
      full: false,
    });
  }

  render() {
    return (
      <div className="App">
        
        {/* Start Screen */}
        {this.state.startVisible ? 
          <Start /> 
          : 
          null}

        {/* Pokemon Screen */}
        {this.state.pokemonVisible ? 
          <Pokemon 
            image={this.state.pokemonPicture} 
            name={this.state.pokemon.name.charAt(0).toUpperCase() + this.state.pokemon.name.slice(1)} 
            catch={() => this.catchPokemon()} 
            caught={this.state.caught} 
            more={() => this.morePokemon()} 
            missed={this.state.missed} 
            full={this.state.full} /> 
          : 
          null}

        {/* Team Screen */}
        {this.state.teamVisible ? 
        <Team 
          team={this.state.team.map((pokemon, index) => {
            return (
              <div className="teamPokemon" key={index}>
                <img src={pokemon.image} alt={`A ${pokemon.name} from the Pokemon series`}/>
                <div className="textBox">
                  <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                  <p>{pokemon.flavor}</p>
                </div>
                <button className="releaseButton" onClick={() => this.releasePokemon(index)}>Release</button>
              </div>
            )
          })} 
          return={() => {this.handlePage("return");}} /> 
        : 
        null}
        
        <div className="startAndTeam">
          {/* Start Button */}
          {this.state.startVisible ?
            <button onClick = {() => this.handlePage("start")}>Click here to start</button>
          :
          null}

          {/* Team Button */}
          {this.state.teamVisible !== true && this.state.pokemonVisible ?
            <button className="teamButton" onClick = {() => this.handlePage("team")}>Team</button>
          :
          null}
        </div>

        {/* Footer */}
        <footer><p>Created by Jason Kuo at<a href="https://junocollege.com/" >Juno College</a></p></footer>

      </div>
    );
  }
}

export default App;
