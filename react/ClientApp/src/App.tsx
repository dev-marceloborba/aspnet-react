import React from 'react';
import logo from './logo.svg';
import './App.css';

const getData = () => {
    fetch('https://react-aspnet.azurewebsites.net/WeatherForecastController')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao fazer a requisição: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            // Faça algo com os dados retornados pela API
            console.log(data);
        })
        .catch(error => {
            // Trate o erro ocorrido durante a requisição
            console.error(error);
        });
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
                  Learn React
        </a>
              <button onClick={() => getData()}></button>
      </header>
    </div>
  );
}

export default App;
