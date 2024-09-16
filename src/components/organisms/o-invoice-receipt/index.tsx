import InvoiceReceiptCard from 'components/molecules/m-invoice-receipt-card';
import InvoiceBreakdown from 'components/molecules/m-invoice-breakdown';
import InvoicePaymentCard from 'components/molecules/m-invoice-payment-card';
import Column from 'components/atoms/a-column-list';

const InvoiceReceipt = () => {
  return (
    <div className=" w-[46rem] space-y-4 rounded-[2.5rem] border-[0.063rem] border-[#E3E6EF] p-8">
      <InvoiceReceiptCard />
      <InvoiceBreakdown />
      <InvoicePaymentCard />
      <div className="rounded-3xl bg-Lightgrey px-6 py-4">
        <Column
          title="NOTE"
          className="space-y-2"
          titleClassName="text-grey2 text-[0.875rem] leading-[1.07rem]"
          subtitle="Thank you for your patronage"
          subtitleClassName="text-grey3 text-[1rem] leading-[1.223rem]"
        />
      </div>
    </div>
  );
};

export default InvoiceReceipt;
