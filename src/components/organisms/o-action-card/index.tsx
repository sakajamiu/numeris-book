/*
    this card is for action cards,
    to extend the card add to the bg and extend the styling with clsx
    clsx is used because it's light weight, and allow for conditional styling!
 */

import clsx from 'clsx';
import { ActionCardProps } from 'interfaces/invoice-page.type';

const ActionCard = ({ image, Icon, title, subtitle, bg, handleClick }: ActionCardProps) => {
  return (
    <div
      className={clsx('w-[19rem] cursor-pointer  space-y-3 rounded-3xl px-8 py-10', {
        'bg-[#003EFF]': bg === 'blue',
        'bg-white': bg === 'white',
      })}
      role="none"
      onClick={handleClick}
    >
      {image && <img src={image} alt="pic" className="size-20" />}
      {Icon && <Icon className="size-20 " />}
      <p
        className={clsx('text-[1.375rem] font-medium leading-[1.709rem]', {
          'text-white': bg === 'blue',
          'text-Darkgrey': bg === 'white',
        })}
      >
        {title}
      </p>
      <p
        className={clsx('text-[0.875rem] leading-[1.4rem] tracking-[0.3%] ', {
          'text-Lightgrey': bg === 'blue',
          'text-Grey': bg === 'white',
        })}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default ActionCard;
