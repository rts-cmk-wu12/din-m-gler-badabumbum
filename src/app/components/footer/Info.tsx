import { InfoProps } from './types';
import React from 'react';

const Info: React.FC<InfoProps> = ({ icon, element, mainText, subText }) => {
  return (
    <div className="flex items-center space-x-4">
      {icon ? icon : element}
      <div>
        <p className="font-bold text-style-paragraph-para-01 text-paragraph-para-01">{mainText}</p>
        <p className="text-style-paragraph-para-01 text-paragraph-para-01">{subText}</p>
      </div>
    </div>
  );
};

export default Info;
