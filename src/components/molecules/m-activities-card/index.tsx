/**
 * This component render activity for invoice page and invoice details
 * only pass in the timeline as true of you want to render it as a steeper/timeline
 */

import { ActivityCardProps } from 'interfaces/invoice-page.type';
import clsx from 'clsx';

const ActivityCard = ({
  image,
  title,
  activity,
  day,
  description,
  receiver,
  timeline,
}: ActivityCardProps & { timeline?: boolean }) => {
  return (
    <div className={clsx('relative', { group: timeline === true })}>
      <div className="inline-flex space-x-2">
        <img
          src={image}
          alt="pic"
          className={clsx('size-12 rounded-[2.5rem]', { 'z-40': timeline === true })}
        />
        <div
          className={clsx('space-y-1', {
            'group-last:before:hidden before:absolute before:left-6  before:h-full before:px-px before:bg-[#E3E6EF]  before:self-start before:-translate-x-1/2 before:translate-y-3':
              timeline === true,
          })}
        >
          <div className="">
            <p className="text-[1rem] font-medium leading-[1.397rem] text-[#000000]">{title}</p>
            <p className="text-[0.75rem] leading-[1.4rem] tracking-[0.3%] text-Grey">{day}</p>
          </div>
          <div className="rounded-2xl bg-Lightgrey px-4 py-2">
            <p className=" text-[0.875rem] leading-[1.4rem] tracking-[0.3%] text-Grey">
              <span>{activity}</span>{' '}
              <span className="font-medium text-[#000000]">{description}</span>
              {receiver && <span> to</span>}
              {receiver && <span className="font-medium text-[#000000]"> {receiver}</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivityCard;
