import AboutMe from 'src/components/Articles/AboutMe';
import Achievements from 'src/components/Articles/Achievements';
import { AdditionalInfo } from 'src/components/Articles/AdditionalInfo';
import { ContactInformation } from 'src/components/Articles/ContactInformation';
import Professional from 'src/components/Articles/Professional';
import Skills from 'src/components/Articles/Skills';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';
import PlausibleProvider from 'next-plausible';
import Achievements_ from 'src/components/Articles/Achievements_';

/**
 * Page component to display the resume content
 */
const Page: React.FC<PageProps> = () => {
  return (
    <PlausibleProvider
      domain="https://resume.kscode.eu"
      customDomain="https://analytics.kscode.eu"
      selfHosted={true} // indicates that the analytics is self-hosted
    >
      {' '}
      {/* TODO: make dynamic */}
      <Header />
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <AboutMe />
          <ContactInformation />
        </div>

        <div className="mt-12">
          <Skills />
        </div>

        <div className="mt-12">
          <Professional />
        </div>

        <div className="mt-12">
          <Achievements />
        </div>

        <div className="mt-12">
          <Achievements_ />
        </div>

        <div className="mt-12">
          <AdditionalInfo />
        </div>
      </div>
      <Footer />
    </PlausibleProvider>
  );
};

export default Page;
