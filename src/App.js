import React from 'react';
import './App.css';
import BootstrappedTable from './components/BootstrappedTable';

const App = () => {

  return (
    <div className='App'>
      <h3>Bootstrap Table with functionality of Sorting, Pagination and Search</h3>
      <BootstrappedTable />
    </div>
  );
};

export default App;