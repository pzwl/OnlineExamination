import './css/Home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import ExamState from './context/exam/ExamState';

import Home from './components/Home';
import Std_signup from './components/Std_signup'
import Std_login from './components/Std_login'
import Admin_login from './components/Admin_login'
import Subjects from './components/Subjects';
import Questions from './components/Questions';
import EditQuestion from './components/EditQuestion';
import Sub_students from './components/Sub_students';
import Std_questions from './components/std_questions';
import GetMarks from './components/GetMarks';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
   
      <ExamState>
                <Router>
                  <Navbar/>
                  <div>
                    
                    <Routes>
                      <Route exact path='/' element={<Home/>} />
                      <Route exact path='/student_signup' element={<Std_signup/>} />
                      <Route exact path='/student_login' element={<Std_login/>} />
                      <Route exact path='/admin_login' element={<Admin_login/>} />
                      <Route exact path='/subjects/:id' element={<Subjects/>} />
                      <Route exact path='/questions/:id' element={<Questions/>} />
                      <Route exact path='/:sub_id/edit_qn/:id' element={<EditQuestion/>} />
                      <Route exact path='/std_sub/:stdId' element={<Sub_students/>} />
                      <Route exact path='/:std_id/std_questions/:subId' element={<Std_questions/>} />
                      <Route exact path='/getMarks/:subId' element={<GetMarks/>} />
                      
                    </Routes>
                  </div> 
                </Router>
      </ExamState>
              
    </>
  );
}

export default App;
