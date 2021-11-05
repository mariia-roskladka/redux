import React from 'react';
import Header from './Header.jsx';
import { userData } from './userData-context';

class App extends React.Component {
  state = {
    userData: userData.teslaUser,
  };

  render() {
    console.log(this.state);
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

export default App;