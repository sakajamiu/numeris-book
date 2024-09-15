/*
  This is dashboard Page layout
  it passes the sidebar and top navigation to all dashboard route
  it also handle the user access control with WithAdminDashboard component
 */

/* eslint-disable react-refresh/only-export-components */

import { Outlet } from 'react-router-dom';
import SideBar from 'components/molecules/m-sidebar';
import AdminDashboardSideNavItems from 'components/organisms/o-admin-side-nav-items';
import TopNavigation from 'components/molecules/m-top-navigation';
import WithAdminDashboard from 'hoc/admin-dashboard-wrapper';

const AdminDashboardLayout = () => {
  return (
    <div>
      <div>
        <SideBar NavItems={AdminDashboardSideNavItems} />
      </div>

      <div
        id=""
        className=" absolute left-0 min-h-screen w-full  divide-y bg-[#F5F6FA] px-5 lg:left-64 lg:w-[calc(100%-16rem)]   "
      >
        <TopNavigation />
        <section className="py-8">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default WithAdminDashboard(AdminDashboardLayout);
