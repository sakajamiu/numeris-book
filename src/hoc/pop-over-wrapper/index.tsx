/*
This component require exactly two component as children
the first component is passed to the button which open the pop over
the second component should be the component that house the popover
*/

import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Fragment, Children, SetStateAction, Dispatch } from 'react';

interface MyPopoverProp {
  children: React.ReactNode | React.ReactNode[];
  panelClassName?: string;
  parentClassName?: string;
  width?: string;
  show?: boolean;
  setShow?: Dispatch<SetStateAction<boolean>>;
}

function MyPopover({
  children,
  width,
  panelClassName,
  parentClassName,
  show,
  setShow,
}: MyPopoverProp) {
  const childrenNode = Children.toArray(children);
  const handleMouseLeave = () => {
    if (setShow) {
      setShow(false);
    }
  };
  return (
    <Popover className={`relative ${parentClassName}`} onMouseLeave={() => handleMouseLeave()}>
      <PopoverButton className={`${width || 'w-full'} focus:outline-0`}>
        {childrenNode[0]}
      </PopoverButton>
      <Transition
        show={show}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className={`absolute z-40 bg-white shadow-md ${panelClassName}`}>
          {childrenNode[1]}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

export default MyPopover;
