import React from 'react'
import Registration from '../pages/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecordData from '../pages/RecordData';
import App from '../App';
import EditStudent from '../pages/EditStudent';
import StudentMarksheet from './../pages/StudentMarksheet';
import PassSheet from '../pages/PassSheet';
import StudentDetails from '../pages/StudentDetails';
import StudentData from '../components/student/studentData';
const AppRoutes = () => {
  
  return (
    <div>
    <Routes>
      {/* Parent Route uses App layout */}
      <Route path="/" element={<App />}>
        <Route path="registration" element={<Registration />} />
        <Route path="recorddata" element={<RecordData />} />
        <Route path="recorddata/edit/:id" element={<EditStudent />} />
        <Route path="marksheet" element={<StudentMarksheet />}/>
        <Route path="passsheet" element={<PassSheet />} />
        <Route path='details' element={<StudentDetails/>} />
        <Route path='student' element={<StudentData />} />
      </Route>
    </Routes>

    </div>
  )
}

export default AppRoutes