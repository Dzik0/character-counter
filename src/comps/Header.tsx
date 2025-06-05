import darkLogo from '../assets/logo-dark-theme.svg';
import lightLogo from '../assets/logo-light-theme.svg';
import sunLogo from '../assets/icon-sun.svg';
import moonLogo from '../assets/icon-moon.svg';

import clsx from 'clsx';

type Props = {
  mode: boolean;
  changeMode: () => void;
};

function Header({ mode, changeMode }: Props) {
  const logo = !mode ? darkLogo : lightLogo;
  const buttonLogo = mode ? moonLogo : sunLogo;

  return (
    <header>
      <div>
        <img src={logo} alt="" className="main-logo" />
      </div>
      <button onClick={changeMode} className={clsx(mode && 'light')}>
        <img src={buttonLogo} alt="" className="mode-logo" />
      </button>
    </header>
  );
}

export default Header;
