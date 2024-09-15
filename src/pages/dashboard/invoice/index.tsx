import OverviewIcon from 'assets/icons/overview';
import Button from 'components/atoms/a-button';
import SummaryCard from 'components/molecules/m-summary-card';
import { SummaryCardData, ActionCardData, RecentActivitiesData } from 'utils/dummy-data';
import ActionCard from 'components/organisms/o-action-card';
import RecentInvoices from 'components/organisms/o-recent-invoices';
import RecentActivities from 'components/organisms/o-recent-activities';

export default function Invoice() {
  return (
    <section className="space-y-8">
      <div className="flex  justify-between">
        <div className=" flex items-center">
          <p className="text-[2rem] font-medium leading-[2.486rem]  text-primary">Invoice</p>
        </div>

        <div className="space-x-8">
          <Button
            label="SEE WHAT'S NEW"
            type="button"
            className="rounded-full border-[0.063rem] border-[#E3E6EF] bg-white px-[3.75rem] py-4 text-[0.875rem] font-medium leading-[1.088rem] text-Grey"
          />
          <Button
            label="CREATE"
            type="button"
            className="rounded-full  bg-blue px-[3.75rem] py-4 text-[1rem] font-medium leading-[1.243rem] text-white"
          />
        </div>
      </div>

      <div className="flex justify-between">
        {SummaryCardData?.map((item) => (
          <SummaryCard
            type={item?.status}
            value={item.value}
            total={item?.total?.toLocaleString()}
            Icon={OverviewIcon}
          />
        ))}
      </div>
      <p className="text-[1.25rem] font-medium leading-[1.554rem] text-black">Invoice Actions</p>
      <div className="flex justify-between">
        {ActionCardData?.map((item) => (
          <ActionCard
            image={item?.image}
            Icon={item?.Icon}
            bg={item?.bg}
            title={item?.title}
            subtitle={item?.subtitle}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <RecentInvoices />
        <RecentActivities type="Recent Activities" data={RecentActivitiesData} />
      </div>
    </section>
  );
}
