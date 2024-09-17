import Modal from 'hoc/modal';
import Button from 'components/atoms/a-button';
import MyPopover from 'hoc/pop-over-wrapper';
import CheckMarkIcon from 'assets/icons/check-mark';
import { InvoiceActivityData } from 'utils/dummy-data';
import RecentActivities from 'components/organisms/o-recent-activities';
import InvoiceReceipt from '../o-invoice-receipt';

interface Props {
  isOpen: boolean;
}

const InvoiceDetails = ({ isOpen }: Props) => {
  return (
    <Modal isOpen={isOpen}>
      <section className="space-y-3">
        <div className="flex justify-between">
          <div>
            <p className="text-[2rem] font-bold leading-[2.52rem] text-black">
              Invoice - 1023494 - 2304{' '}
            </p>
            <p className="text-[1rem] leading-[1.223rem] text-Grey">
              View the details and activity of this invoice
            </p>
          </div>
          <div className=" flex space-x-4">
            <Button
              label="DOWNLOAD AS PDF"
              type="button"
              className="rounded-[2.5rem] border-[0.063rem] border-[#E3E6EF] bg-white px-[3.75rem] py-4 text-[1rem] font-medium leading-[1.249rem] tracking-[2%] text-blue "
            />
            <Button
              type="button"
              label="SEND INVOICE"
              className="rounded-[2.5rem] bg-blue px-[3.75rem] py-4 text-[1rem]  font-medium leading-[1.234rem] tracking-[2%]  text-white "
            />
            <MyPopover
              parentClassName="rounded-[2.5rem] border-[0.063rem] border-[#E3E6EF] bg-white px-6 py-4 text-[1rem] font-medium leading-4 tracking-[7%] text-Darkgrey "
              panelClassName="rounded-3xl border-[0.063rem] border-[#E3E6EF] -left-20 my-8"
            >
              <Button type="button" label="MORE" className="" />
              <div className="text-[0.875rem] font-medium leading-[1.088rem] tracking-[2%] text-Grey">
                <Button label="DUPLICATE INVOICE" type="button" />
                <Button label="GET SHAREABLE LINK" type="button" />
              </div>
            </MyPopover>
          </div>
        </div>
        <div>
          <Button
            label="PARTIAL PAYMENT"
            type="button"
            className="border-[0.063rem] border-[#003EFF33] px-4 py-2.5 text-[0.625rem] font-medium leading-4 tracking-[6%] text-blue"
          />
        </div>

        <div className="flex w-fit space-x-1 rounded-3xl border-[0.063rem] border-[#E3E6EF] p-6">
          <p className="  py-3 text-[0.75rem] leading-4  tracking-[7%] text-ash">REMINDERS</p>

          <Button
            label="14 days before due date"
            type="button"
            icon={<CheckMarkIcon className="" />}
            buttonIconClass="inline-flex space-x-2 px-2"
            className="bg-[#E6FFF0] px-4 py-3 text-[0.875rem] font-medium leading-[1.088rem] tracking-[-0.027rem] text-Darkgrey"
          />
          <Button
            label="7 days before due date"
            type="button"
            icon={<CheckMarkIcon />}
            buttonIconClass="inline-flex space-x-2 px-2"
            className="bg-[#E6FFF0] px-4 py-3 text-[0.875rem] font-medium leading-[1.088rem] tracking-[-0.027rem] text-Darkgrey"
          />
          <Button
            label="3 days before due date"
            type="button"
            className="border-[0.063rem]  border-[#E3E6EF] bg-white px-4 py-3 text-[0.875rem] font-medium leading-[1.088rem] tracking-[-0.027rem] text-Darkgrey"
          />
          <Button
            label="24 hrs before due date"
            type="button"
            className="border-[0.063rem]  border-[#E3E6EF] bg-white px-4 py-3 text-[0.875rem] font-medium leading-[1.088rem] tracking-[-0.027rem] text-Darkgrey"
          />
          <Button
            label="on the due date"
            type="button"
            className="border-[0.063rem]  border-[#E3E6EF] bg-white px-4 py-3 text-[0.875rem] font-medium leading-[1.088rem] tracking-[-0.027rem] text-Darkgrey"
          />
        </div>
        <div className="flex justify-between">
          <InvoiceReceipt />
          <RecentActivities type="Invoice Activity" data={InvoiceActivityData} />
        </div>
      </section>
    </Modal>
  );
};

export default InvoiceDetails;
