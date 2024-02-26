import './App.css';
import Banner from './pages/baner/baner';
import Cart from './pages/cart/cart';
import Footer from './pages/footer/footer';
import Header from './pages/header/Header';
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
        <WorthseeingProducet/>
        <Banner/>
        <TrendingProduct/>
        <Cart/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
