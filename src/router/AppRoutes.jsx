import React from 'react'
import Registration from '../pages/registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecordData from '../pages/RecordData';
import App from '../App';
const AppRoutes = () => {
  return (
    <div>
    <Routes>
      {/* Parent Route uses App layout */}
      <Route path="/" element={<App />}>
        <Route path="registration" element={<Registration />} />
        <Route path="recorddata" element={<RecordData />} />
      </Route>
    </Routes>

    </div>
  )
}

export default AppRoutes