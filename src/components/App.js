//Styles
import '../styles/components/movieList.scss';

//import { useState } from 'react';
import Header from './Header';
import DataProvider from '../application/Provider';
import DataAPI from './DataAPI';


function App() {

  // STATES

  // const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState({ title: "Loading Movies" });

  return (
    <>
      <Header/>
      <main className="main">
        <DataProvider>
          <DataAPI />
        </DataProvider>
      </main>
    </>
  
  );
}

export default App;