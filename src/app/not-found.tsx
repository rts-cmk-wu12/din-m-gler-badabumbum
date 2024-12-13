import { Header } from './components/header/header';
import Footer from './components/footer/Footer';
import ErrorContent from './components/error-content';

export default function notFound() {
  return (
    <>
      <Header />
      <ErrorContent />
      <Footer />
    </>
  );
}
