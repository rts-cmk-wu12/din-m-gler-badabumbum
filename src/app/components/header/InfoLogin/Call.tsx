import Image from 'next/image';

export const Call: React.FC = () => {
  return (
    <address className="flex flex-wrap gap-5 justify-between max-w-full w-[1111px] not-italic text-paragraph-para01">
      <a href="tel:+4570704000" className="flex gap-4 items-center hover:text-slate-300" aria-label="Contact our sales team at +45 7070 4000" itemProp="telephone">
        <Image src="/icon-phone.svg" alt="phone icon" width={24} height={24} aria-hidden="true" />
        <span>+45 7070 4000</span>
      </a>
    </address>
  );
};
