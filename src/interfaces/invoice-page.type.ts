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
}
