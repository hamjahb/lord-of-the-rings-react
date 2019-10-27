import React, { Component } from 'react';

import './App.css';
import Movie from './Movie.js';

class App extends Component {
  render() {
    return (
      <div>
        <Movie title="The Fellowship of the Ring" hours="2" minutes="58" description='A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.'></Movie>

        <Movie title="The Two Towers" hours="2" minutes="59" description="While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."></Movie>

        <Movie title="The Return of the King" hours="3" minutes="21" description = "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."></Movie>
      </div>
    );
  }
}

export default App;