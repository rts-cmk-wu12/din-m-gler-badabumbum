import * as React from 'react';
import { NavigationItem } from './nav';
import Image from 'next/image';
import { Call } from './InfoLogin/Call';
import { Email } from './InfoLogin/Email';

export const Header: React.FC = () => {
  const navigationItems = ['Boliger til salg', 'Mæglere', 'Mine favoritter', 'Kontakt os'];

  return (
    <header className="flex flex-col text-lg leading-loose">
      <div role="banner" className="flex flex-col justify-center items-center px-16 py-4 w-full text-white bg-slate-800 max-md:px-5 max-md:max-w-full">
        <Email />
        <Call />
      </div>
      <nav className="flex flex-col justify-center items-center px-16 py-5 w-full bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1110px]">
          <Image src="/logo" alt="Company logo" width={296} height={49} />
          <div className="flex flex-wrap gap-10 my-auto max-md:max-w-full">
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} text={item} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
