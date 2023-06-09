import React from 'react';
//
import GridItem from './GridItem';

import styles from './Grid.module.css';

export default class App extends React.Component {
  renderFacts() {
    return this.props.facts.map(item => 
      <GridItem
      key={item.id}
      fact={item}
      />
    );
  }

  
  // Need to render 'renderFacts()' 
  render() {
    return (
      <section className={styles.grid}>
        {this.renderFacts()}
      </section>
    );
  }
}