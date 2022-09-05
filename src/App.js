import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Side from './components/side';
import Top from './components/top';
import './main.scss';
import Depart from './pages/depart';
import Doctors from './pages/doctors';
import Help from './pages/help';
import Home from './pages/home';
import Patients from './pages/patients';
import Rooms from './pages/rooms';

function App() {
  return (
    <Router>
      <div className='main'>
        <Side />
        <div className='main__right'>
          <Top />
          <div className='main__route'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/patients' element={<Patients />}/>
              <Route path='/doctors' element={<Doctors />}/>
              <Route path='/rooms' element={<Rooms />}/>
              <Route path='/departs' element={<Depart />}/>
              <Route path='/help' element={<Help />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
