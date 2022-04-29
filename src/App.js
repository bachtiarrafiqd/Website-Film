
import './App.css';
import NavigatioBar from './components/Navigation';
import "./style/landingPage.css";
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import Footer from './components/footer';

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigatioBar />
        <Intro />
      </div>
      {/* end of Intro Section */}

      {/* Trending Section */}
      <div className="trending">
        <Trending/>
      </div>
      {/* end of Trending Section */}

      {/* Superhero Section */}
      <div className="superhero">
          <Superhero />
      </div>
      {/* end of Superhero  Section */}
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
