import { faArtstation, faBlackTie, faFonticonsFi, faHtml5, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faCircleArrowUp, faCircleDollar, faCircleExclamation, faCircle } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <>
      <div className="flex">
        <p className="px-2">These pro icons are in the page:</p>
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
        <p className="px-2">These free icons are in the page:</p>
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
    </>
  )
}
