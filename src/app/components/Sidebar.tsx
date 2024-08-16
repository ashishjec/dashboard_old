"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RxDashboard } from 'react-icons/rx';
import { TfiUser, TfiTruck, TfiHeadphoneAlt } from 'react-icons/tfi';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const [isTripsOpen, setIsTripsOpen] = useState(false);
  const router = useRouter();

  const toggleMembers = () => {
    setIsMembersOpen(!isMembersOpen);
  };

  const toggleTrips = () => {
    setIsTripsOpen(!isTripsOpen);
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className={`flex flex-col ${isOpen ? 'w-38 text-base' : 'w-28 text-xs'} bg-white text-red min-h-screen transition-width duration-300`}>
      <nav className="mt-10 flex-grow">
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={() => navigateTo('/side/dashboard')}>
          {isOpen ? (
            <>
              <RxDashboard className="mr-3 text-xl" />
              Dashboard
            </>
          ) : (
            <RxDashboard className="text-xl" />
          )}
        </a>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={toggleMembers}>
          {isOpen ? (
            <>
              <TfiUser className="mr-3 text-xl" />
              Members
            </>
          ) : (
            <TfiUser className="text-xl" />
          )}
        </a>
        {isMembersOpen && (
          <div className="ml-8">
            <a href="#" className="block py-2 hover:bg-gray-200" onClick={() => navigateTo('/side/members/transporters')}>
              Transporters
            </a>
            <a href="#" className="block py-2 hover:bg-gray-200" onClick={() => navigateTo('/side/members/loaders')}>
              Loaders
            </a>
            <a href="#" className="block py-2 hover:bg-gray-200" onClick={() => navigateTo('/side/members/drivers')}>
              Drivers
            </a>
          </div>
        )}
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={toggleTrips}>
          {isOpen ? (
            <>
              <MdOutlineTravelExplore className="mr-3 text-xl" />
              Trips
            </>
          ) : (
            <MdOutlineTravelExplore className="text-xl" />
          )}
        </a>
        {isTripsOpen && (
          <div className="ml-8">
            <a href="#" className="block py-2 hover:bg-gray-200" onClick={() => navigateTo('/side/trips/all')}>
              All Trips
            </a>
            <a href="#" className="block py-2 hover:bg-gray-200" onClick={() => navigateTo('/side/trips/pending')}>
              Pending Trips
            </a>
            <a href="#" className="block py-2 hover:bg-gray-200" onClick={() => navigateTo('/side/trips/ongoing')}>
              Ongoing Trips
            </a>
            <a href="#" className="block py-2 hover:bg-gray-200" onClick={() => navigateTo('/side/trips/completed')}>
              Completed Trips
            </a>
            <a href="#" className="block py-2 hover:bg-gray-200" onClick={() => navigateTo('/side/trips/closed')}>
              Closed Trips
            </a>
          </div>
        )}
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={() => navigateTo('/side/loads')}>
          {isOpen ? (
            <>
              <BsBoxSeam className="mr-3 text-xl" />
              Loads
            </>
          ) : (
            <BsBoxSeam className="text-xl" />
          )}
        </a>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={() => navigateTo('/side/vehicles')}>
          {isOpen ? (
            <>
              <TfiTruck className="mr-3 text-xl" />
              Vehicles
            </>
          ) : (
            <TfiTruck className="text-xl" />
          )}
        </a>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={() => navigateTo('/side/godeyeview')}>
          {isOpen ? (
            <>
              <FaEye className="mr-3 text-xl" />
              God Eye View
            </>
          ) : (
            <FaEye className="text-xl" />
          )}
        </a>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={() => navigateTo('/side/generatebilty')}>
          {isOpen ? (
            <>
              <IoDocumentText className="mr-3 text-xl" />
              Generate Bilty
            </>
          ) : (
            <IoDocumentText className="text-xl" />
          )}
        </a>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={() => navigateTo('/side/bilty')}>
          {isOpen ? (
            <>
              <HiOutlineDocumentDownload className="mr-3 text-xl" />
              Bilty
            </>
          ) : (
            <HiOutlineDocumentDownload className="text-xl" />
          )}
        </a>
        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-200" onClick={() => navigateTo('/side/support')}>
          {isOpen ? (
            <>
              <TfiHeadphoneAlt className="mr-3 text-xl" />
              Support
            </>
          ) : (
            <TfiHeadphoneAlt className="text-xl" />
          )}
        </a>
      </nav>
      <div className="flex-grow bg-white"></div>
    </div>
  );
};

export default Sidebar;
