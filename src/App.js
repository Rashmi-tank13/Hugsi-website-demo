import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Articles from './component/Articles';
import About from './component/About';
import Footer from './component/Footer';
import MainBanner from './component/MainBanner';
import Categories from './component/Categories';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <About />
      <Articles />
      <MainBanner />
      <Footer />
    </div>
  );
}

export default App;
