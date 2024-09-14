/*
  This module define sidbar item: their name, path and Icon
*/

import { ParentSideNavItemProps } from 'interfaces/sidebar-navitems.types';
import HomeIcon from 'assets/icons/home';
import BeneficiaryIcon from 'assets/icons/beneficiary';
import HelpIcon from 'assets/icons/help';
import OverviewIcon from 'assets/icons/overview';
import SettingIcon from 'assets/icons/setting';
import InvoiceIcon from 'assets/icons/invoice';

const AdminSideNav: ParentSideNavItemProps[] = [
  {
    name: 'Getting Started',
    path: '/dashboard',
    id: 'v1.1',
    Icon: HomeIcon,
  },
  {
    name: 'Overview',
    path: '/dashboard/overview',
    id: 'v1.2',
    Icon: OverviewIcon,
  },
  {
    name: 'Accounts',
    path: '/dashboard/accounts',
    id: 'v1.3',
    Icon: HomeIcon,
  },
  {
    name: 'Invoice',
    path: '/dashboard/invoice',
    id: 'v1.4',
    Icon: InvoiceIcon,
  },
  {
    name: 'Beneficiary Management',
    path: '/dashboard/beneficiary-management',
    id: 'v1.5',
    Icon: BeneficiaryIcon,
  },
  {
    name: 'Help Center',
    path: '/dashboard/help-center',
    id: 'v1.6',
    Icon: HelpIcon,
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    id: 'v1.7',
    Icon: SettingIcon,
  },
];

export default AdminSideNav;
