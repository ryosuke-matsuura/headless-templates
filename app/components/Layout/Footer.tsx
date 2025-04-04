import './footer.css';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import testIds from '@app/utils/test-ids';
import IndexSectionCustomComponents1 from '../../../src/components/custom-components/IndexSectionCustomComponents1';

const Footer = () => (
  <footer
    className="w-full m-h-56 bg-turquoise-100 leading-7"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <IndexSectionCustomComponents1 />
    <div className="mx-auto flex flex-col-reverse items-center sm:flex-row gap-1 sm:gap-16 pt-3 sm:pt-2 pb-2 sm:pb-4 px-6 sm:px-14 text-xs">
      <p className="mb-2 flex-1 text-center">© 2024 Pure Biokeyz Japan Inc.</p>
    </div>
  </footer>
);

export default Footer;
