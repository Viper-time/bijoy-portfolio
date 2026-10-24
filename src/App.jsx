
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import AcademicPortfolio from './AcademicPortfolio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/academic-portfolio"
          element={<AcademicPortfolio />}
        />
        <Route
          path="/beyond-academia"
          element={<div className="p-10">Beyond Academia — Coming Soon</div>}
        />
        <Route
          path="/blog"
          element={<div className="p-10">Blog — Coming Soon</div>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
