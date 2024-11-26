import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Startseite/mainpage.jsx";
import Seite2 from "./Page2/pagetwo.jsx";


import './App.css'

function App() {
  console.log("App component rendered");

  return (
    
    <Router basename='/vite-react-deploy'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/page2' element={<Seite2 />} />
      </Routes>
    </Router>
  )
}

export default App
