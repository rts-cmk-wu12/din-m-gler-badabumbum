import Image from 'next/image';
import Info from './Info';
import IconCall from '/public/icon-call.svg';
import IconEmail from '/public/icon-email.svg';
import IconLocation from '/public/icon-location.svg';

export default function Footer() {
  return (
    <footer className="bg-background p-6">
      {/* About & Logo */}
      <div className="mb-8">
        <Image src="/dinMaegler.svg" alt="Din Maegler" height={100} width={100} className="mb-4" />
        <p className="text-style-paragraph-para-01 text-paragraph-para-01">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2">
        <Info icon={<Image src={IconCall} alt="Call Icon" />} mainText="Ring til os" subText="+45 7070 4000" />
        <Info icon={<Image src={IconEmail} alt="Email Icon" />} mainText="Send en mail" subText="4000@dinmaegler.com" />
        <Info icon={<Image src={IconLocation} alt="Location Icon" />} mainText="Butik" subText="Stændertorvet 78, 4000 Roskilde" />
      </div>
    </footer>
  );
}
