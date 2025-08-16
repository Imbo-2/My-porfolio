import './App.css';
import Hero from './components/Hero';
import BodyContent from './components/BodyContent';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <BodyContent />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
