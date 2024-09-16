import Logo from 'assets/images/Logo.png';
import Column from 'components/atoms/a-column-list';

const InvoiceReceiptCard = () => {
  return (
    <div className="space-y-4 rounded-[2.5rem] bg-[#FCDDEC] p-8">
      <div className="flex justify-between ">
        <div className="space-y-2">
          <p className="text-[0.75rem] font-medium leading-[0.933rem] tracking-[7%] text-Grey">
            SENDER
          </p>
          <div className="inline-flex space-x-2">
            <img src={Logo} alt="company-logo" className="size-[3.75rem]" />
            <div className="space-y-2">
              <p className="text-[1rem] font-medium leading-[1.243rem] text-black">
                Fabulous Enterprise
              </p>
              <p className="text-[0.75rem] leading-[0.918rem] text-Grey">+386 989 271 3115</p>
              <p className="text-[0.75rem] leading-[1.2rem] text-Grey">
                1331 Hart Ridge Road 48436 Gaines, MI{' '}
              </p>
              <p className="text-[0.75rem] leading-[1.2rem] text-Grey">info@fabulousenterise.co</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[0.75rem] font-medium leading-[0.933rem] tracking-[7%] text-Grey">
            CUSTOMER
          </p>
          <div className="space-y-2">
            <p className="text-[1rem] font-medium leading-[1.243rem] text-black">
              Olaniyi Ojo Adewale
            </p>
            <p className="text-[0.75rem] leading-[0.918rem] text-Grey">+386 989 271 3115</p>
            <p className="text-[0.75rem] leading-[1.2rem] text-Grey">info@fabulousenterise.co</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-[0.75rem] font-medium leading-[0.933rem] tracking-[7%] text-Grey">
          INVOICE DETAILS
        </p>
        <div className="grid grid-cols-4 gap-14">
          <Column
            title="INVOICE NO"
            subtitle="1023902390"
            className="space-y-1"
            titleClassName="text-grey3 leading-[1.25rem] text-[0.625rem] tracking-[8%]"
            subtitleClassName="font-medium text-[0.75rem] leading-[1.25rem] text-primary"
          />
          <Column
            title="ISSUE DATE"
            subtitle="March 30th, 2023"
            className="space-y-1"
            titleClassName="text-grey3 leading-[1.25rem] text-[0.625rem] tracking-[8%]"
            subtitleClassName="font-medium text-[0.75rem] leading-[1.25rem] text-primary"
          />
          <Column
            title="DUE DATE"
            subtitle="May 19th, 2023"
            className="space-y-1"
            titleClassName="text-grey3 leading-[1.25rem] text-[0.625rem] tracking-[8%]"
            subtitleClassName="font-medium text-[0.75rem] leading-[1.25rem] text-primary"
          />
          <Column
            title="BILLING CURRENCY"
            subtitle="USD ($)"
            className="space-y-1"
            titleClassName="text-grey3 leading-[1.25rem] text-[0.625rem] tracking-[8%]"
            subtitleClassName="font-medium text-[0.75rem] leading-[1.25rem] text-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceReceiptCard;
