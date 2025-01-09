import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/home';
import Page1 from './Pages/page-1';
import Page2 from './Pages/page-2';
import Page3 from './Pages/page-3'
import Page4 from './Pages/page-4'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page-1" element={<Page1/>}/>
        <Route path="/page-2" element={<Page2/>}/>
        <Route path="/page-3" element={<Page3/>}/>
        <Route path="/page-4" element={<Page4/>}/>
      </Routes>
    </Router>
      
);
}

export default App
