import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [message, setMessage] = useState('data not setting');

  useEffect(()=>{
    console.log('api call');
    
    getData();
  }, []);
  
  const getData = () => {
    const url = '/api/hello';
    
    setTimeout(() => {
      Axios.get(url)
      .then(res => {
        setMessage(res.data.message);
      })
    }, 3000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
