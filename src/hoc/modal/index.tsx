/* eslint-disable jsx-a11y/control-has-associated-label */
import { Dispatch, SetStateAction, Fragment } from 'react';
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react';
import CancelIcon from 'assets/icons/cancel';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: Props) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 opacity-90" aria-hidden="true" />
        <TransitionChild
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center">
              <DialogPanel className="relative mx-auto mt-14  w-[95%] rounded-[2.5rem] bg-white p-5">
                <button
                  type="button"
                  className="absolute -right-2 -top-10 rounded-full bg-white"
                  onClick={() => setIsOpen(false)}
                >
                  <CancelIcon />
                </button>

                <div className="px-5">{children}</div>
              </DialogPanel>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

export default Modal;
