import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Pricing from './components/pricing/Pricing'
import Certificates from './components/certificates/Certificates'


function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Certificates />
      </main>
    </>
  );
}

export default App;
