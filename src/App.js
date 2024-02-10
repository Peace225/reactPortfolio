// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Components/header.css';
import './Components/style.css'
import Accueil from './Components/Pages/Accueil';
import Apropos from './Components/Pages/Apropos';
import Competences from './Components/Pages/Competences';
import Portfolio from './Components/Pages/Portfolio';
import Contact from './Components/Pages/Contact';
import References from './Components/Pages/References';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Accueil/>}/>
        <Route path='/accueil' element={<Accueil/>}/>
        <Route path='/apropos' element={<Apropos/>}/>
        <Route path='/competences' element={<Competences/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/references' element= {<References/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
