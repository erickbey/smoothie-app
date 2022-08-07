import './App.css';
import promoMovie from './assets/smoothie-b-roll.mp4';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <section className="bg-movie__container">
        <video autoPlay muted loop className='bg-movie'>
          <source src={promoMovie} type="video/mp4" />
        </video>
        <button className="order-now__btn"></button>
      </section>

      <section className="rewards-promo__container"></section>

      <section className="order-options__container"></section>

      <section className="promotion__container"></section>

      <Footer />
    </div>
  );
}

export default App;
