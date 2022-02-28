import React from 'react';

import './App.css';
import Header from './header';
import Form from './form'; 
import Tasks from './getTasks'

function App() {
  return (
    <div className="App">
       <Header />
       <Form />
        <Tasks/>
    </div>
  );
}

export default App;
