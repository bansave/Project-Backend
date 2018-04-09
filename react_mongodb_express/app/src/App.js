import React, { Component } from 'react';

import GuestBook from './Component/GuestBook';
import GuestName from './Component/GuestName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GuestBook/>
        <GuestName/>
      </div>
    );
  }
}

export default App;
