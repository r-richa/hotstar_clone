import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import LandScreen from './pages/LandScreen';
import MovieScreen from './pages/MovieScreen';
import LoginPage from './pages/LoginPage'
import StaticPage from './pages/StaticPage';
import FavouritePage from './pages/FavouritePage';

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
