import { useState } from 'react';
import CountBox from './CountBox.tsx';
import LetterBox from './LetterBox.tsx';
import OptionBox from './OptionBox.tsx';

function Body() {
  const [excludeSpace, setExcludeSpace] = useState<boolean>(false);
  const [charLimit, setCharLimit] = useState<boolean>(false);

  function toggleBooleanState(
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ): void {
    setState((pS) => !pS);
  }

  return (
    <main>
      <h1>Analyze your text in real-time.</h1>
      <textarea
        name=""
        id=""
        defaultValue="Hello, my name is Peter and I live in Warsaw. My hobby is fishing and coding. I love playing video games and learning new stuff"
      ></textarea>
      <div className="options-holder">
        <OptionBox
          handleToggle={() => {
            toggleBooleanState(setExcludeSpace);
          }}
          isActive={excludeSpace}
          textInfo="Exclude Space"
        />
        <OptionBox
          handleToggle={() => {
            toggleBooleanState(setCharLimit);
          }}
          isActive={charLimit}
          textInfo="Set Character Limit"
        />
        <p className="text-preset-4">Approx. reading time &lt; 1 min</p>
      </div>
      <div className="count-box-container">
        <CountBox />
        <CountBox />
        <CountBox />
      </div>
      <div className="letter-info-container">
        <h2 className="text-preset-2">Letter Density</h2>
        <div className="letter-box-grid">
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
        </div>
      </div>
    </main>
  );
}

export default Body;
