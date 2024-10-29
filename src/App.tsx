import { Routes, Route, Navigate } from "react-router-dom";
import ClaimsPage from "./pages/ClaimsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const isAuthenticated = true;

  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage isAuthenticated={isAuthenticated} />}
      />

      <Route element={<ProtectedRoute hasAccess={isAuthenticated} />}>
        <Route path="/upload" element={<ClaimsPage />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/upload" : "/"} replace />}
      />
    </Routes>
  );
};

export default App;
