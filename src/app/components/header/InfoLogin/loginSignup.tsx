import Image from 'next/image';

export const loginSignup: React.FC = () => {
  return (
    <>
      <button className="flex gap-2 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" tabIndex={0} aria-label="Log in">
        <Image src="/login.svg" alt="Login icon" width={18} height={18} />
        <span className="text-paragraph-para01">Log ind</span>
      </button>
    </>
  );
};
