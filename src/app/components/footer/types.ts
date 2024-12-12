import { ComponentType } from 'react';

export interface InfoProps {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  mainText: string;
  subText: string;
}
