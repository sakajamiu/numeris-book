/**
 * redux action is used to manage the modal only because in the design,
 * the indicator color changes from blue to black when the modal is opened.
 * this is not an effective Ui design but implemented anyway for the sake of
 * the assessment.
 */

import { useAppDispatch, useAppSelector } from 'store/index';
import { ModalPayloadAction } from 'store/reducers/modalpayload';
import { invoiceList } from 'utils/dummy-data';
import Button from 'components/atoms/a-button';
import Column from 'components/atoms/a-column-list';
import clsx from 'clsx';
import InvoiceDetails from 'components/organisms/o-invoice-detail-modal';

const RecentInvoices = () => {
  const { isOpen } = useAppSelector((state) => state.modalPayload);
  const dispatch = useAppDispatch();
  const { setIsOpen } = ModalPayloadAction;
  return (
    <>
      <InvoiceDetails isOpen={isOpen} />
      <div className="w-[36rem] rounded-[2.5rem] bg-white p-8">
        <div className="flex justify-between">
          <p className="text-[1.25rem] font-medium leading-[1.554rem] text-black">
            Recent Invoices
          </p>
          <Button
            label="VIEW ALL INVOICES"
            type="button"
            className="-mt-2 rounded-[1.875rem] border-[0.063rem] border-[#E3E6EF] bg-white  py-4 text-[0.75rem] font-medium leading-4  text-blue"
          />
        </div>
        <div>
          {invoiceList.map((item) => (
            <div className="space-y-4 py-3">
              <p className="text-[0.75rem] font-medium leading-4 tracking-[7%] text-black">
                {item.day}
              </p>
              {item.data.map((items) => (
                <div
                  className="grid cursor-pointer grid-cols-3 gap-10"
                  role="none"
                  onClick={() => dispatch(setIsOpen({ isOpen: true }))}
                >
                  <Column
                    className="space-y-2"
                    title="Invoice-"
                    subtitle={items.id}
                    titleClassName="text-Darkgrey font-medium text-[0.875rem] leading-[1.575rem]"
                    subtitleClassName="text-Darkgrey font-medium text-[0.875rem] leading-[1.575rem]"
                  />
                  <Column
                    className="space-y-2"
                    title="DUE DATE"
                    subtitle={items.dueDate}
                    titleClassName="text-grey3 text-[0.625rem] leading-[1.25rem] tracking-[8%]"
                    subtitleClassName="text-Grey font-medium text-[0.875rem] leading-[1.25rem]"
                  />
                  <Column
                    className="space-y-2"
                    dir="rtl"
                    title={items.amount}
                    subtitle={items.status}
                    titleClassName="text-Darkgrey text-[1rem] leading-[1.25rem] font-medium"
                    subtitleClassName={clsx('w-fit', {
                      'bg-[#E6FFF0] border-[0.047rem] border-[#129043]/20 rounded-[1.125rem] py-[0.4rem] px-[0.75rem] font-medium leading-[0.75rem] text-[0.469rem] tracking-[6%]':
                        items.status === 'PAID',
                      'bg-[#FFF4F5] border-[0.063rem] border-[#FF5663]/20 rounded-[1.5rem] py-[0.325rem] px-[1.5rem] text-[#FF5663] text-[0.625rem] font-medium leading-[0.777rem]':
                        items.status === 'OVERDUE',
                      'bg-Lightgrey  border-[0.063rem] border-[#373B47]/20 rounded-[1.5rem] py-[0.325rem] px-[1.5rem] font-medium text-Darkgrey  text-[0.625rem]  leading-[0.777rem]':
                        items.status === 'DRAFT',
                      'bg-[#FFF8EB] bg-[0.063rem] border-[#D98F0033] rounded-[1.5rem] py-[0.6rem] px-[1.5rem] text-[#D98F00] font-medium text-[0.625rem] leading-[0.777rem] ':
                        items.status === 'PENDING PAYMENT',
                    })}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentInvoices;
