import { PaymentCardDetails } from 'utils/dummy-data';
import Column from 'components/atoms/a-column-list';

const InvoicePaymentCard = () => {
  return (
    <div className="space-y-3  rounded-3xl border-[0.063rem] border-[#E3E6EF] px-6 py-4">
      <p className="text-[0.75rem] font-medium leading-[0.933rem] tracking-[7%] text-Grey">
        Payment information
      </p>
      <div className="grid grid-cols-4 gap-5">
        {PaymentCardDetails.map((item) => (
          <Column
            title={item.title}
            subtitle={item.title}
            className="space-y-2"
            titleClassName="text-grey3 text-[0.625rem] leading-[1.25rem] tracking-[8%]"
            subtitleClassName="text-black font-medium  text-[0.75rem] leading-[1.25rem]"
          />
        ))}
      </div>
    </div>
  );
};

export default InvoicePaymentCard;
