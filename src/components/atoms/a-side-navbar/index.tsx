import { NavLink } from 'react-router-dom';
import { SideBarNavItemProps } from 'interfaces/sidebar-navitems.types';

function SideBarNavItems({ id, name, path, Icon }: SideBarNavItemProps) {
  return (
    <div key={id}>
      <NavLink
        to={path}
        end
        state={{ title: name }}
        className={({ isActive }) =>
          `  flex items-center space-x-5  w-full   leading-[1.07rem]    p-3 text-[0.875rem]   text-Grey ${
            isActive ? ' rounded-full border-4 border-[#F8F8FB]' : ' '
          }`
        }
      >
        <Icon /> <p>{name}</p>
      </NavLink>
    </div>
  );
}
export default SideBarNavItems;
