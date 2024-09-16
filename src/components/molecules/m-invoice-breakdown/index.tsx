import Column from 'components/atoms/a-column-list';
import Line from 'assets/icons/line';
import { ItemBoughtData } from 'utils/dummy-data';

const InvoiceBreakdown = () => {
  return (
    <div className="space-y-4">
      <div className="inline-flex space-x-4">
        <p className="text-[1.25rem] font-medium leading-[1.554rem] text-black">Items</p>
        <i className="mt-4">
          <Line />
        </i>
      </div>
      {ItemBoughtData?.map((item) => (
        <div className="grid grid-cols-5 gap-5">
          <Column
            title={item?.item}
            className="col-span-2 space-y-2"
            subtitle={item.description}
            subtitleClassName="text-grey3 text-[0.813rem] leading-[0.994rem]"
            titleClassName="text-[1rem] text-black leading-[1.223rem]"
          />
          <Column
            title={item?.quantity}
            className=" space-y-2"
            titleClassName="text-[1rem] text-black leading-[1.223rem]"
          />
          <Column
            title={item?.unitPrice}
            className=" space-y-2"
            titleClassName="text-[1rem] text-black leading-[1.223rem]"
          />
          <Column
            title={item?.total}
            className="space-y-2"
            titleClassName="text-[1rem] text-black leading-[1.223rem]"
          />
        </div>
      ))}
      <div className="grid grid-cols-5">
        <Column
          title="SUBTOTAL"
          className="col-span-2 col-start-3"
          titleClassName="py-1.5 text-[0.875rem] text-grey2 leading-[1.07rem]"
        />
        <Column
          title="$6,697,200.00"
          className=""
          titleClassName="text-[1.25rem] text-Darkgrey text-right leading-[1.529rem]"
        />
      </div>
      <div className="grid grid-cols-5">
        <Column
          title="DISCOUNT (2.5%)"
          className="col-span-2 col-start-3"
          titleClassName="py-1.5 text-[0.875rem] text-grey2 leading-[1.07rem]"
        />
        <Column
          title="$167,430.00"
          className=""
          titleClassName="text-[1.25rem] text-Darkgrey text-right leading-[1.529rem]"
        />
      </div>
      <div className="grid grid-cols-5">
        <Column
          title="TOTAL AMOUNT DUE"
          className="col-span-2 col-start-3"
          titleClassName=" py-1.5 font-medium text-Darkgrey text-[1.125rem] leading-[1.398rem]"
        />
        <Column
          title="$6,529,770.00"
          className=""
          titleClassName="text-[1.4rem] text-right font-bold text-Darkgrey  leading-[1.8rem]"
        />
      </div>
    </div>
  );
};
export default InvoiceBreakdown;
