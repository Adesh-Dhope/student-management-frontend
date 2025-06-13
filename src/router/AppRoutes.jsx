import React from 'react'
import Registration from '../pages/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecordData from '../pages/RecordData';
import App from '../App';
import EditStudent from '../pages/EditStudent';
const AppRoutes = () => {
  
  return (
    <div>
    <Routes>
      {/* Parent Route uses App layout */}
      <Route path="/" element={<App />}>
        <Route path="registration" element={<Registration />} />
        <Route path="recorddata" element={<RecordData />} />
        <Route path="recorddata/edit/:id" element={<EditStudent />} />

      </Route>
    </Routes>

    </div>
  )
}

export default AppRoutes