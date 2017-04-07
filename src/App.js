import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';

class App extends Component {
  render() {
    return (
        <Calendar
          width={ window.innerWidth }
          height={ window.innerHeight - 147 }
          rowHeight={ 138 }
          disabledDays={ [0,6] }
        />
    );
  }
}

export default App;
