import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/home';
import Page1 from './Pages/page-1';
import Page2 from './Pages/page-2';
import Page3 from './Pages/page-3';
import Page4 from './Pages/page-4';
import Page5 from './Pages/page-5';
import Page6 from './Pages/page-6';
import Page7 from './Pages/page-7';
import Page8 from './Pages/page-8';
import Page9 from './Pages/page-9';
import Page10 from './Pages/page-10';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page-1" element={<Page1/>}/>
        <Route path="/page-2" element={<Page2/>}/>
        <Route path="/page-3" element={<Page3/>}/>
        <Route path="/page-4" element={<Page4/>}/>
        <Route path="/page-5" element={<Page5/>}/>
        <Route path="/page-6" element={<Page6/>}/>
        <Route path="/page-7" element={<Page7/>}/>
        <Route path="/page-8" element={<Page8/>}/>
        <Route path="/page-9" element={<Page9/>}/>
        <Route path="/page-10" element={<Page10/>}/>
      </Routes>
    </Router>
      
);
}

export default App
