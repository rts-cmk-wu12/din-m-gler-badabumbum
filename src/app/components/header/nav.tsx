import * as React from 'react';
import { NavigationItemProps } from './types';

export const NavigationItem: React.FC<NavigationItemProps> = ({ text }) => {
  return (
    <button className="grow hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400" tabIndex={0}>
      {text}
    </button>
  );
};
