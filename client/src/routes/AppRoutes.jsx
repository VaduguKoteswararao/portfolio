import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

import ProjectsPage from '../pages/ProjectsPage'

import ContactPage from '../pages/ContactPage'

import ResumePage from '../pages/ResumePage'

import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {

  return (

    <Routes>

      <Route
      path='/'
      element={<Home />}
      />

      <Route
      path='/projects'
      element={<ProjectsPage />}
      />

      <Route
      path='/contact'
      element={<ContactPage />}
      />

      <Route
      path='/resume'
      element={<ResumePage />}
      />

      <Route
      path='/dashboard'
      element={<Dashboard />}
      />

    </Routes>

  )
}

export default AppRoutes