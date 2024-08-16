"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RxDashboard } from 'react-icons/rx'; // Import the RxDashboard icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const [isTripsOpen, setIsTripsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="flex">
      <div
        className={`${
          isOpen ? 'w-64 text-base' : 'w-20 text-xs'
        } bg-gray-800 text-white h-screen transition-width duration-300`}
      >
        <button
          className="text-white text-3xl p-2 focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <nav className="mt-10">
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={() => navigateTo('/dashboard')}
          >
            {isOpen ? (
              <>
                <RxDashboard className="mr-3 text-xl" />
                Dashboard
              </>
            ) : (
              <RxDashboard className="text-xl" />
            )}
          </a>

          <button
            className="flex items-center px-4 py-2 hover:bg-gray-700 w-full text-left"
            onClick={toggleMembers}
          >
            {isOpen ? (
              <>
                {/* Replace with appropriate icon */}
                <Image src="/icons/members.png" alt="Members" width={24} height={24} className="mr-3" />
                Members
              </>
            ) : (
              <Image src="/icons/members.png" alt="Members" width={24} height={24} />
            )}
          </button>
          {isMembersOpen && (
            <ul className={`sidebar-list list-disc ${isOpen ? 'block' : 'hidden'} ml-6`}>
              <li className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700" onClick={() => navigateTo('/transporters')}>Transporters</a>
              </li>
              <li className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700" onClick={() => navigateTo('/loaders')}>Loaders</a>
              </li>
              <li className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700" onClick={() => navigateTo('/drivers')}>Drivers</a>
              </li>
            </ul>
          )}

          <button
            className="flex items-center px-4 py-2 hover:bg-gray-700 w-full text-left"
            onClick={toggleTrips}
          >
            {isOpen ? (
              <>
                {/* Replace with appropriate icon */}
                <Image src="/icons/trips.png" alt="Trips" width={24} height={24} className="mr-3" />
                Trips
              </>
            ) : (
              <Image src="/icons/trips.png" alt="Trips" width={24} height={24} />
            )}
          </button>
          {isTripsOpen && (
            <ul className={`sidebar-list list-disc ${isOpen ? 'block' : 'hidden'} ml-6`}>
              <li className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700" onClick={() => navigateTo('/all-trips')}>All Trips</a>
              </li>
              <li className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700" onClick={() => navigateTo('/pending-trips')}>Pending Trips</a>
              </li>
              <li className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700" onClick={() => navigateTo('/ongoing-trips')}>Ongoing Trips</a>
              </li>
              <li className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700" onClick={() => navigateTo('/completed-trips')}>Completed Trips</a>
              </li>
              <li className="py-1">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700" onClick={() => navigateTo('/closed-trips')}>Closed Trips</a>
              </li>
            </ul>
          )}

          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={() => navigateTo('/vehicles')}
          >
            {isOpen ? (
              <>
                {/* Replace with appropriate icon */}
                <Image src="/icons/vehicles.png" alt="Vehicles" width={24} height={24} className="mr-3" />
                Vehicles
              </>
            ) : (
              <Image src="/icons/vehicles.png" alt="Vehicles" width={24} height={24} />
            )}
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={() => navigateTo('/god-eye-view')}
          >
            {isOpen ? (
              <>
                {/* Replace with appropriate icon */}
                <Image src="/icons/god-eye-view.png" alt="God Eye View" width={24} height={24} className="mr-3" />
                God Eye View
              </>
            ) : (
              <Image src="/icons/god-eye-view.png" alt="God Eye View" width={24} height={24} />
            )}
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={() => navigateTo('/generate-bilty')}
          >
            {isOpen ? (
              <>
                {/* Replace with appropriate icon */}
                <Image src="/icons/generate-bilty.png" alt="Generate Bilty" width={24} height={24} className="mr-3" />
                Generate Bilty
              </>
            ) : (
              <Image src="/icons/generate-bilty.png" alt="Generate Bilty" width={24} height={24} />
            )}
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={() => navigateTo('/bilty')}
          >
            {isOpen ? (
              <>
                {/* Replace with appropriate icon */}
                <Image src="/icons/bilty.png" alt="Bilty" width={24} height={24} className="mr-3" />
                Bilty
              </>
            ) : (
              <Image src="/icons/bilty.png" alt="Bilty" width={24} height={24} />
            )}
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={() => navigateTo('/support')}
          >
            {isOpen ? (
              <>
                {/* Replace with appropriate icon */}
                <Image src="/icons/support.png" alt="Support" width={24} height={24} className="mr-3" />
                Support
              </>
            ) : (
              <Image src="/icons/support.png" alt="Support" width={24} height={24} />
            )}
          </a>
        </nav>
      </div>
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar;
