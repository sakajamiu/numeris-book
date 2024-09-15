/*
    this card is for rendering summaries,
    to extend the card add to the type and extend the styling with clsx
    clsx is used because it's light weight, and allow for conditional styling!
 */

import clsx from 'clsx';

interface SummaryCardProps {
  Icon: React.ComponentType | React.ElementType;
  type: 'PAID' | 'OVERDUE' | 'DRAFT' | 'UNPAID';
  value: string;
  total: string;
}

const SummaryCard = ({ Icon, type, value, total }: SummaryCardProps) => {
  const className = clsx(
    'rounded-3xl px-3 py-2 text-[0.875rem] font-medium leading-[1.088rem] text-Darkgrey',
    {
      'bg-[#B6FDD3]': type === 'PAID',
      'bg-[#FFB7BD]': type === 'OVERDUE',
      'bg-[#D9D9E0]': type === 'DRAFT',
      'bg-[#F8E39B]': type === 'UNPAID',
    },
  );

  const formatTotal = total.split('.');
  return (
    <div className="h-fit w-[14.5rem] space-y-3 rounded-3xl bg-white px-6 py-5">
      <Icon className="size-10" />

      <p className="space-x-2 text-[0.75rem] leading-5 text-Grey">
        <span> Total {type} </span> <span className={className}>{value}</span>
      </p>

      <div>
        <p className="text-[1.75rem] font-medium leading-[2.175rem] text-black">
          ${formatTotal[0]}.
          <span className="text-[0.875rem] leading-[1.088rem] text-Grey">
            {formatTotal[1] ?? '00'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
