import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Q1 from './Round1/Q1';
import Q2 from './Round1/Q2';
import Q3 from './Round1/Q3';
import Q4 from './Round1/Q4';
import Q12 from './Round2/Q12'
import Q22 from './Round2/Q22'
import Q32 from './Round2/Q32'
import Q42 from './Round2/Q42'
import Q13 from './Round3/Q13';
import Q23 from './Round3/Q23';
import Q33 from './Round3/Q33';
import Q43 from './Round3/Q43';
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Q1/>}/>
        <Route exact path="/Q1" element={<Q1/>}/>
        <Route exact path="/Q2" element={<Q2/>}/>
        <Route exact path="/Q3" element={<Q3/>}/>
        <Route exact path="/Q4" element={<Q4/>}/>

        <Route exact path="/Q1" element={<Q12/>}/>
        <Route exact path="/Q2" element={<Q22/>}/>
        <Route exact path="/Q3" element={<Q32/>}/>
        <Route exact path="/Q4" element={<Q42/>}/>

        <Route exact path="/Q1" element={<Q13/>}/>
        <Route exact path="/Q2" element={<Q23/>}/>
        <Route exact path="/Q3" element={<Q33/>}/>
        <Route exact path="/Q4" element={<Q43/>}/>


      </Routes>
    </Router>
   </>
  );
}

export default App;
