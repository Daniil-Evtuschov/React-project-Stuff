import './App.css';
import Banner from './pages/baner/baner';
import Footer from './pages/footer/footer';
import Header from './pages/header/Header';
import LessProduct from './pages/leessProduct copy/LessProduct';
import MainContentWrap from './pages/maincontentWrap/mainContent';
import TrendingProduct from './pages/trendingProduct/trendingProduct';
import WorthseeingProducet from './pages/worthseeingProducet/worthseeingProducet';

import StuffRoutes from './routes/routes';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <StuffRoutes/>
        <Header/>
        <MainContentWrap/>
        <TrendingProduct/>
        <WorthseeingProducet  />
        <Banner/>
        <LessProduct/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
