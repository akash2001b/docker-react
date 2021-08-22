import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and h sthere.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// FROM node:alpine

// WORKDIR '/app'

// COPY package.json .

// RUN npm install

// COPY ./ ./
// # USER root

// CMD ["npm","run","start"]




// FROM node:alpine

// WORKDIR '/app'

// COPY --chown=node:node package.json .

// RUN npm install

// COPY --chown=node:node . .
// USER node

// CMD ["npm","run","start"]