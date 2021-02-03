import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from 'components/Books';

const App = () => (
  <div>
    <h1>Book list</h1>
    <Books />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
