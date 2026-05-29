import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import VitaminsPage from './pages/VitaminsPage'
import VitaminDetail from './pages/VitaminDetail'
import DeficiencyPage from './pages/DeficiencyPage'
import FoodSourcesPage from './pages/FoodSourcesPage'
import SupplementGuide from './pages/SupplementGuide'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vitamins" element={<VitaminsPage />} />
      <Route path="/vitamins/:id" element={<VitaminDetail />} />
      <Route path="/deficiencies" element={<DeficiencyPage />} />
      <Route path="/food-sources" element={<FoodSourcesPage />} />
      <Route path="/supplement-guide" element={<SupplementGuide />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  )
}
