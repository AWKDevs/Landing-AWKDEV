import Link from 'next/link';
import Image from 'next/image';
import ResponsiveNavClient from './ResponsiveNavClient';
import { HeaderButton, HeaderScrollButton } from '../Header/HeaderButtons';

const ResponsiveNav = () => {
  const logo = (
    <div className="flex items-center mt-1 mb-3">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/NaveUwU.png" alt="Test" width={52} height={52}/>
        <span className="font-bold text-3xl">AWK Devs</span>
      </Link>
    </div>
  );
  const menuDesktop = (
    <>
      <HeaderButton href='/' insideText="NOSOTROS"/>
      <HeaderScrollButton insideText="SERVICIOS" idScroll='aboutus'/>
      <HeaderScrollButton insideText="PLANTILLAS" idScroll='contactform'/>
      <HeaderButton href='/ContactUs' insideText="CONTACTANOS" />
    </>
  );
  const menuMobile = (
    <>
      <HeaderScrollButton insideText="NOSOTROS" idScroll='aboutus'/>
      <HeaderScrollButton insideText="SERVICIOS" idScroll='aboutus'/>
      <HeaderScrollButton insideText="PLANTILLAS" idScroll='contactform'/>
      <HeaderButton href='/ContactUs' insideText="CONTACTANOS" />
    </>
  );

  return (
    <ResponsiveNavClient
      logo={logo}
      menuDesktop={menuDesktop}
      menuMobile={menuMobile}
    />
  );
};

export default ResponsiveNav;