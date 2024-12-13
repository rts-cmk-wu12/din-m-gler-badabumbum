import Image from 'next/image';

export const Email: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1111px]">
      <a href="mailto:4000@dinmaegler.com" className="flex items-center gap-2" aria-label="Send email to 4000@dinmaegler.com">
        <Image src="/email.svg" alt="Email Icon" width={24} height={24} />
        <span>4000@dinmaegler.com</span>
      </a>
    </div>
  );
};
