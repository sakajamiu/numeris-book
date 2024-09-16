export interface SummaryDataProps {
  value: string;
  status: 'PAID' | 'OVERDUE' | 'DRAFT' | 'UNPAID';
  total: number;
}
export interface ActionCardProps {
  image?: any;
  Icon?: React.ComponentType | React.ElementType;
  title: string;
  subtitle: string;
  bg: 'blue' | 'white';
  handleClick?: any;
}

export interface InvoiceListProps {
  day: string;
  data: {
    id: string;
    dueDate: string;
    amount: string;
    status: 'PAID' | 'OVERDUE' | 'DRAFT' | 'PENDING PAYMENT';
  }[];
}

export interface ActivityCardProps {
  image: any;
  title: string;
  day: string;
  activity: string;
  description: string;
  receiver?: string;
}

export interface ItemsProps {
  item: string;
  quantity: string;
  unitPrice: string;
  total: string;
  description?: string;
}

export interface PaymentCardProps {
  title: string;
  subtitle: string;
}
