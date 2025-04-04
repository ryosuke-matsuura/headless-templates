import Image from 'next/image';
import { CartBag } from '@app/components/CartBag/CartBag';
import { NavBar } from './NavBar/NavBar';
import { Login } from '@app/components/Login/Login';
import testIds from '@app/utils/test-ids';

const Header = () => (
  <>
    <header
      className="h-header z-40 w-full"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex px-6 sm:px-14 h-header items-center gap-4 sm:gap-8">
        <h2 className="flex-1">
          <Image
            className="navpic items-center ml-0 h-14"
            src="https://static.wixstatic.com/media/a20eb7_2346bbee2fd142a388fcf01ae97325d6~mv2.png/v1/fill/w_95,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dotpb_logo2.png"
            alt="Placeholder Image"
            width={56}
            height={56}
          />
        </h2>
        <div>
          <Login />
        </div>

        <div>
          <CartBag />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
