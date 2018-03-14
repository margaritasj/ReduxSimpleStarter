import React, { Component } from 'react';
import ListHobbies from './ListHobbies';


class Section extends Component {

  render() {
    return (
      <div>
        <hr/>
        <h3>Mis hobbies</h3>
        <ListHobbies/>
      </div>
    );
  }
}

export default Section;