import React from "react";
import Header from './Header';
import DataProvider from '../application/Provider';
import DataAPI from './DataAPI';

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <DataProvider>
          <DataAPI />
        </DataProvider>
      </main>
    </>
  );
}

export default App;