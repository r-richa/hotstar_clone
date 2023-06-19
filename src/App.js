import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import LandScreen from './components/LandScreen';
import MovieScreen from './components/MovieScreen';
import LoginPage from './components/LoginPage'
import StaticPage from './components/StaticPage';
import FavouritePage from './components/FavouritePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='page'>
        {/* <Sidebar /> */}
        <Routes className='content'>
          <Route path='/' element={<LandScreen />}/>
          <Route path='/home' element={<HomeScreen />}/>
          <Route path='/movie' element={<MovieScreen />}/>
          <Route path='/movie/:id' element={<StaticPage />}/>
          <Route path='/favourite' element={<FavouritePage />}/>
          <Route path='/login' element={<LoginPage />}/>

        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
