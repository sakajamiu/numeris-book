import { ParentSideNavItemProps } from 'interfaces/sidebar-navitems.types';
import SideBarNavItems from 'components/atoms/a-side-navbar';
import IndicatorIcon from 'assets/icons/indicator';

interface SideBarProps {
  NavItems: ParentSideNavItemProps[];
}

const SideBar = ({ NavItems }: SideBarProps) => {
  return (
    <div className="h-full  w-64 space-y-4  overflow-y-auto  overflow-x-hidden  bg-[#FFFFFF]  shadow-lg  transition-all  duration-500 ease-in-out  lg:fixed lg:left-0 lg:top-0 ">
      <div className="  mb-3 w-full   px-2 py-5 text-[#003EFF]">
        <IndicatorIcon />
      </div>
      <div className=" space-y-2 px-4">
        {NavItems.map((item) => (
          <SideBarNavItems
            key={item.id}
            id={item.id}
            name={item.name}
            path={item.path}
            Icon={item.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
