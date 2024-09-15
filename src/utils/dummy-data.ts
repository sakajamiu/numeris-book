/* eslint-disable import/no-unresolved */

import type {
  SummaryDataProps,
  ActionCardProps,
  InvoiceListProps,
  ActivityCardProps,
} from 'interfaces/invoice-page.type';
import SettingIcon from 'assets/icons/setting';
import BeneficiaryIcon from 'assets/icons/beneficiary';
import MoneyImage from 'assets/images/money.png';
import UserImage from 'assets/images/image.png';

export const SummaryCardData: SummaryDataProps[] = [
  {
    value: '1289',
    status: 'PAID',
    total: 4120102.76,
  },
  {
    value: '13',
    status: 'OVERDUE',
    total: 23000.13,
  },
  {
    value: '08',
    status: 'DRAFT',
    total: 12200.0,
  },
  {
    value: '06',
    status: 'UNPAID',
    total: 87102.0,
  },
];

export const ActionCardData: ActionCardProps[] = [
  {
    image: MoneyImage,
    title: 'Create New Invoice',
    subtitle: 'Create new invoice easily',
    bg: 'blue',
  },
  {
    Icon: SettingIcon,
    title: 'Change Invoice Settings',
    subtitle: 'customize your invoices',
    bg: 'white',
  },
  {
    Icon: BeneficiaryIcon,
    title: 'Manage Customer List',
    subtitle: 'Add and remover customers',
    bg: 'white',
  },
];

export const invoiceList: InvoiceListProps[] = [
  {
    day: 'Today- 27TH November, 2022',
    data: [
      {
        id: '1023494-2304',
        dueDate: 'May 19th, 2023',
        amount: '1,311,750.12',
        status: 'PAID',
      },
      {
        id: '1023494-2304',
        dueDate: 'May 19th, 2023',
        amount: '1,311,750.12',
        status: 'OVERDUE',
      },
    ],
  },
  {
    day: '8TH DECEMBER, 2022',
    data: [
      {
        id: '1023494-2304',
        dueDate: 'May 19th, 2023',
        amount: '1,311,750.12',
        status: 'DRAFT',
      },
      {
        id: '1023494-2304',
        dueDate: 'May 19th, 2023',
        amount: '1,311,750.12',
        status: 'PENDING PAYMENT',
      },
      {
        id: '1023494-2304',
        dueDate: 'May 19th, 2023',
        amount: '1,311,750.12',
        status: 'PAID',
      },
    ],
  },
];

export const RecentActivitiesData: ActivityCardProps[] = [
  {
    image: UserImage,
    title: 'Invoice creation',
    day: 'Yesterday, 12:05PM',
    activity: 'Created invoice',
    description: ' 00239434/Olaniyi Ojo Adewale',
  },
  {
    image: UserImage,
    title: 'Invoice creation',
    day: 'Yesterday, 12:05PM',
    activity: 'Created invoice',
    description: ' 00239434/Olaniyi Ojo Adewale',
  },
  {
    image: UserImage,
    title: 'Invoice creation',
    day: 'Yesterday, 12:05PM',
    activity: 'Created invoice',
    description: ' 00239434/Olaniyi Ojo Adewale',
  },
  {
    image: UserImage,
    title: 'Invoice creation',
    day: 'Yesterday, 12:05PM',
    activity: 'Created invoice',
    description: ' 00239434/Olaniyi Ojo Adewale',
  },
];
