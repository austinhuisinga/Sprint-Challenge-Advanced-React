import React from 'react';
import './App.css';

import axios from 'axios';
import PlayaList from './components/PlayaList';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playaData: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          playaData: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <PlayaList 
          playaData={this.state.playaData}
        />
      </div>
    );
  }
}

export default App;
