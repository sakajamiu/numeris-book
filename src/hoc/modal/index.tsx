/**
 * redux action is used to manage the modal only because in the design,
 * the indicator color change when the modal is opened.
 * this is not an effective design but implemented anyway for the sake of
 * the assessment.
 */

/* eslint-disable jsx-a11y/control-has-associated-label */
import { Fragment } from 'react';
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react';
import CancelIcon from 'assets/icons/cancel';
import { useAppDispatch } from 'store/index';
import { ModalPayloadAction } from 'store/reducers/modalpayload';

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
}

const Modal = ({ isOpen, children }: Props) => {
  const { setIsOpen } = ModalPayloadAction;
  const dispatch = useAppDispatch();
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={() => dispatch(setIsOpen({ isOpen: false }))}
        className="relative z-50"
      >
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
                  onClick={() => dispatch(setIsOpen({ isOpen: false }))}
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
