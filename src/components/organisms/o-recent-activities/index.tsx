import { ActivityCardProps } from 'interfaces/invoice-page.type';
import Button from 'components/atoms/a-button';
import ActivityCard from 'components/molecules/m-activities-card';

interface ActivitiesProps {
  type: 'Recent Activities' | 'Invoice Activity';
  data: ActivityCardProps[];
}

const RecentActivities = ({ type, data }: ActivitiesProps) => {
  return (
    <div className=" w-96 space-y-4 rounded-[2.5rem] bg-white p-8">
      <div className="flex justify-between">
        <p className="text-[1.25rem] font-medium leading-[1.554rem] text-black">{type}</p>

        <Button
          label="VIEW ALL"
          type="button"
          className="-mt-3 rounded-[1.875rem] border-[0.063rem] border-[#E3E6EF] bg-white px-6 py-4 text-[0.75rem] font-medium leading-4 tracking-[7%] text-blue"
        />
      </div>
      <div className="space-y-2">
        {data?.map((item) => (
          <ActivityCard
            image={item.image}
            title={item.title}
            description={item.description}
            day={item.day}
            activity={item.activity}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
