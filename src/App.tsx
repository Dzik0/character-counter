import Header from './comps/Header.tsx';
import Body from './comps/Body.tsx';
import { useEffect, useState } from 'react';

function App() {
  const [mode, setMode] = useState<boolean>(false);
  function changeMode() {
    setMode((prevD) => !prevD);
  }

  useEffect(() => {
    if (mode) {
      document.body.classList.add('light');
      return;
    }

    document.body.classList.remove('light');
  }, [mode]);

  return (
    <div className="main-container">
      <Header mode={mode} changeMode={changeMode} />
      <Body mode={mode} />
    </div>
  );
}

export default App;
