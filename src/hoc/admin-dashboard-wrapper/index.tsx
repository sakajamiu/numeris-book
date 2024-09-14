/*
 This module is to validate user access to the dashboard.
 it's set to true for now to give all user access
 */

import { Navigate } from 'react-router-dom';

function WithAdminDashboard(Component: any) {
  return function WithDashboardComponent({ ...props }) {
    const hasAuthToken = Boolean(true);
    if (hasAuthToken) {
      return <Component {...props} />;
    }
    return <Navigate to="/" replace />;
  };
}

export default WithAdminDashboard;
