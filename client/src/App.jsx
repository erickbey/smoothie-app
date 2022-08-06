import './App.css';
import promoMovie from './assets/smoothie-b-roll.mp4';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <section className="bg-movie__container">
        <video autoPlay muted loop>
          <source src={promoMovie} type="video/mp4" />
        </video>
        <button className="order-now__btn"></button>
      </section>
    </div>
  );
}

export default App;
