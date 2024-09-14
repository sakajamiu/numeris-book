import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardRouting from 'routes/dashboard-route';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/*" element={<DashboardRouting />} />
      </Routes>
    </BrowserRouter>
  );
}
