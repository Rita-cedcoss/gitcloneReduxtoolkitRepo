import logo from './logo.svg';
import './App.css';
import SearchPanel from './features/Github_Clone/SearchPanel';
import './features/Github_Clone/GithubClone.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProfileDetail from './features/Github_Clone/ProfileDetail';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SearchPanel/>}></Route>
      <Route path='/profile' element={<ProfileDetail/>}></Route>  
    </Routes>
    
    </>
  );
}

export default App;
