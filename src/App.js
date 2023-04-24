import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';

function App() {
  return (
    <div className="App">
      <Header/>
      <h2>App</h2>
      <Routes>
        <Route index element={<HomeScreen />}/>
        <Route path='/search' element={<SearchScreen />}/>
        <Route path='/details/:id' element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
