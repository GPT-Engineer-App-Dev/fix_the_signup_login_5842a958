import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import Navigation from "./components/Navigation.jsx";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
<Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        {/* Keeping the Index route for backward compatibility */}
        <Route path="/schedule" element={<Index />} />
      </Routes>
    </Router>
  );
}