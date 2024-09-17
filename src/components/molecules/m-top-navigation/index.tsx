import Image from 'assets/images/user-pic.png';
import { useLocation } from 'react-router-dom';
import DropDownArrow from 'assets/icons/drop-down-arrow';
import NotificationIcon from 'assets/icons/notification';

function TopNavigation() {
  const { state } = useLocation();

  return (
    <div className=" relative  ">
      <div className="flex  h-[4.125rem]  justify-between   px-3 py-6   ">
        <div className="flex items-center ">
          <p className="text-[1.75rem] font-medium  uppercase text-Darkgrey">
            {state ? state.title : 'Invoice'}
          </p>
        </div>

        <div className="flex space-x-10 ">
          <div className=" -mt-3 flex size-10 items-center justify-center  rounded-full bg-white">
            <NotificationIcon />
          </div>

          <div className="-mt-3 flex h-10 w-16 items-center justify-center  rounded-full bg-white ">
            <div className=" flex space-x-2 px-2">
              <img src={Image} alt="profile" className="size-6" />
              <i>
                <DropDownArrow />
              </i>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
