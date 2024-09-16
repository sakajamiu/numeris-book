/* eslint-disable import/no-unresolved */

import type {
  SummaryDataProps,
  ActionCardProps,
  InvoiceListProps,
  ActivityCardProps,
  ItemsProps,
  PaymentCardProps,
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
export const InvoiceActivityData: ActivityCardProps[] = [
  {
    image: UserImage,
    title: 'You',
    day: 'Today, 12:20PM',
    activity: 'Created invoice',
    description: ' 00239434/Olaniyi Ojo Adewale',
  },
  {
    image: UserImage,
    title: 'You',
    day: 'Today, 12:20PM',
    activity: 'Sent invoice',
    description: ' 00239434/Olaniyi Ojo Adewale',
    receiver: 'Olaniyi Ojo Adewale',
  },
  {
    image: UserImage,
    title: 'Payment Confirmed',
    day: 'Today, 12:20PM',
    activity: 'You manually confirmed a partial payment of ',
    description: '$503,000.00',
  },
  {
    image: UserImage,
    title: 'Payment Confirmed',
    day: 'Today, 12:20PM',
    activity: 'You manually confirmed a full payment of ',
    description: '$6,000,000.00',
  },
  {
    image: UserImage,
    title: 'You',
    day: 'Today, 12:20PM',
    activity: 'Sent invoice',
    description: ' 00239434/Olaniyi Ojo Adewale',
    receiver: 'Olaniyi Ojo Adewale',
  },
];
export const ItemBoughtData: ItemsProps[] = [
  {
    item: 'Email Marketing',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ',
    quantity: '10',
    unitPrice: '$1,500',
    total: '$15,000.00',
  },
  {
    item: 'Video looping effect',
    quantity: '6',
    unitPrice: '$1,110,500',
    total: '$6,663,000.00',
  },
  {
    item: 'Graphic design for emails',
    quantity: '7',
    unitPrice: '$2,750',
    total: '$19,250.00',
    description: 'Tsit voluptatem accusantium ',
  },
  {
    item: 'Video looping effect',
    quantity: '6',
    unitPrice: '$1,110,500',
    total: '$6,663,000.00',
  },
];

export const PaymentCardDetails: PaymentCardProps[] = [
  {
    title: 'ACCOUNT NAME',
    subtitle: '1023902390',
  },
  {
    title: 'ACCOUNT NUMBER',
    subtitle: 'March 30th, 2023',
  },
  {
    title: 'ACH ROUTING NO',
    subtitle: 'May 19th, 2023',
  },
  {
    title: 'BANK NAME',
    subtitle: 'USD ($)',
  },
  {
    title: 'BANK ADDRESS',
    subtitle: '1023902390',
  },
  {
    title: 'ACCOUNT NUMBER',
    subtitle: 'March 30th, 2023',
  },
];
