import './App.css';
import promoMovie from './assets/smoothie-b-roll.mp4';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Orders from './components/Orders/Orders';
import Promotions from './components/Promotions/Promotions';

function App() {
  return (
    <div className="App">
      <NavBar />

      <section className="bg-movie__container">
        <div className="title-centering__container">
          <div className="movie__title">CACTUS JUICE SMOOTHIES</div>
          <div className="title__description">Smoothies are prepared frozen and ready to blend, with options available such as Piñalada, Pink Dragon, Blue Cacao, Hint of Mint, and Matcha Maker</div>
          <div className="order__btn">ORDER NOW</div>
        </div>
        <video autoPlay muted loop className='bg-movie'>
          <source src={promoMovie} type="video/mp4" />
        </video>
        <button className="order-now__btn"></button>
      </section>

      <section className="favorites__container">
        <div className="favorites-btn__container">
          <div className="favorite__btn">FAVORITES</div>
          <div className="recents__btn">RECENTS</div>
        </div>

        <div className="favorite-items__container">
          <Favorites />
        </div>
      </section>

      <section className="order-options__container">
        <Orders />
      </section>

      <section className="promotion-component__container">
        <Promotions />
      </section>

      <Footer />
    </div>
  );
}

export default App;
