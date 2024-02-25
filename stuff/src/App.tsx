import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import MainContentWrap from './components/maincontentWrap/mainContemt';
import StuffRoutes from './routes/routes';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <StuffRoutes/>
        <Header/>
        <MainContentWrap/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
