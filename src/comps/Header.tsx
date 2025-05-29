import mainLogo from '../assets/logo-dark-theme.svg';
import sunLogo from '../assets/icon-sun.svg';

function Header() {
  return (
    <header>
      <div>
        <img src={mainLogo} alt="" className="main-logo" />
      </div>
      <button>
        <img src={sunLogo} alt="" className="mode-logo" />
      </button>
    </header>
  );
}

export default Header;
