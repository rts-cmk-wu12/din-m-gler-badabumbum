import { InfoProps } from './types';
import React from 'react';

const Info = ({ icon, mainText, subText }: InfoProps) => {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-color-01 text-white">{React.createElement(icon)}</div>
      <div className="flex flex-col">
        <div className="text-style-paragraph-para-02 text-paragraph-para-01">{mainText}</div>
        <div className="text-style-paragraph-para-03 text-paragraph-para-02">{subText}</div>
      </div>
    </div>
  );
};

export default Info;
