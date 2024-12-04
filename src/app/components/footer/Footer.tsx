import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <Image src="/dinMaegler.svg" alt="Din Maegler" height={500} width={500} />
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
    </>
  );
}
