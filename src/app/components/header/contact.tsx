import * as React from 'react';
import Image from 'next/image';
import { ContactItemProps } from './types';

export const ContactItem: React.FC<ContactItemProps> = ({ icon, text, alt }) => {
  return (
    <div className="flex gap-2 whitespace-nowrap">
      <Image src={icon} alt={alt} className="object-contain shrink-0 my-auto w-6 aspect-square" />
      <p className="basis-auto">{text}</p>
    </div>
  );
};
