import './App.css';
import Mid from './components/Mid';
import Menubar from './components/Menubar';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
// import Home from './components/home';






function App() {
  return (
    <>
    
    <BrowserRouter>
    <Menubar></Menubar>
    {/* <Home></Home> */}
    <Mid></Mid>
    <Footer></Footer>

    
    </BrowserRouter>
    </>
    
  );
}

export default App;
