'use client';

import { faArtstation, faBlackTie, faFonticonsFi, faHtml5, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faCircleArrowUp, faCircleDollar, faCircleExclamation, faCircle } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUser } from '@clerk/nextjs';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { user, isLoaded } = useUser();

  return (
    <div className="flex min-h-screen w-screen flex-col gap-2 overflow-hidden">
      <header className="flex px-6 py-2 bg-slate-200">
        <div className="ml-6">
          <p>Is the user loaded: {String(isLoaded)}</p>
          <p>Email if available: {user?.emailAddresses[0].emailAddress}</p>
        </div>
      </header>
      <main className="p-6">
        <div className="flex">
          <p className="px-2">These pro icons are in the layout:</p>
          <FontAwesomeIcon icon={faCircleQuestion} className="h-5" />
          <FontAwesomeIcon icon={faCircleArrowUp} className="h-5" />
          <FontAwesomeIcon icon={faCircleDollar} className="h-5" />
          <FontAwesomeIcon icon={faCircleExclamation} className="h-5" />
          <FontAwesomeIcon icon={faCircle} className="h-5" />
          <FontAwesomeIcon icon={faCircleQuestion} className="h-5" />
          <FontAwesomeIcon icon={faCircleArrowUp} className="h-5" />
          <FontAwesomeIcon icon={faCircleDollar} className="h-5" />
          <FontAwesomeIcon icon={faCircleExclamation} className="h-5" />
          <FontAwesomeIcon icon={faCircle} className="h-5" />
        </div>
        <hr className="my-6" />
        <div className="flex">
          <p className="px-2">These free icons are in the layout:</p>
          <FontAwesomeIcon icon={faArtstation} className="h-5" />
          <FontAwesomeIcon icon={faBlackTie} className="h-5" />
          <FontAwesomeIcon icon={faFonticonsFi} className="h-5" />
          <FontAwesomeIcon icon={faHtml5} className="h-5" />
          <FontAwesomeIcon icon={faPython} className="h-5" />
          <FontAwesomeIcon icon={faArtstation} className="h-5" />
          <FontAwesomeIcon icon={faBlackTie} className="h-5" />
          <FontAwesomeIcon icon={faFonticonsFi} className="h-5" />
          <FontAwesomeIcon icon={faHtml5} className="h-5" />
          <FontAwesomeIcon icon={faPython} className="h-5" />
        </div>
        <hr className="my-6" />
        {children}
      </main>
    </div>
  );
}
