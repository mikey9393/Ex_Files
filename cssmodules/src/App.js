import React, {Component} from 'react'; // new syntax

import styles from './App.module.css';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid'; // Grid Item will be inside the grid. 
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';

//Data
import facts from './data/NASA_facts.json';

// Needs a stateful component.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts, 
    }
  }
  render() {
    return ( // prep files for css module
    <div className={styles.App}> 
      <Title />
      <Background />
      <Grid facts={this.state.facts}/> 
      <Rocket />
      <Smoke /> 
    </div>
  );
  }
}

// const App = () => {
  
// } // functional component. 

export default App;
