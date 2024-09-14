import { Route, Routes } from 'react-router-dom';
import AdminDashboardLayout from 'hoc/admin-dashboard-layout';
import GettingStarted from 'pages/dashboard/getting-started';
import Accounts from 'pages/dashboard/accounts';
import BeneficialManagement from 'pages/dashboard/beneficiary-management';
import HelpCenter from 'pages/dashboard/help-centers';
import Invoice from 'pages/dashboard/invoice';
import Overview from 'pages/dashboard/overview';
import Settings from 'pages/dashboard/settings';

export default function DashboardRouting() {
  return (
    <Routes>
      <Route element={<AdminDashboardLayout />}>
        <Route index element={<GettingStarted />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="beneficiary-management" element={<BeneficialManagement />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
