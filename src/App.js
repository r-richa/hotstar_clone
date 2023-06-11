import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import LandScreen from './components/LandScreen';
import MovieScreen from './components/MovieScreen';
import Sidebar from './components/Sidebar';
import StaticPage from './components/StaticPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='page'>
        <Sidebar />
        <Routes className='content'>
          <Route path='/' element={<LandScreen />}/>
          <Route path='/home' element={<HomeScreen />}/>
          <Route path='/home/movie' element={<MovieScreen />}/>
          <Route path='/home/static' element={<StaticPage />}/>

        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
