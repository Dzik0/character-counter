import { useState } from 'react';
import CountBox from './CountBox.tsx';
import LetterBox from './LetterBox.tsx';
import OptionBox from './OptionBox.tsx';
import { requirements } from '../requirements.ts';
import { countBox } from '../countThings.ts';

function Body() {
  //STATES
  const [req, setReq] = useState(requirements);
  const [text, setText] = useState<string | null>(null);

  //VARIABLES
  const charCount: number | undefined = text?.split('').length;
  const wordCount: number | undefined = text?.split(' ').length;
  const sentenceCount: number | undefined = text?.split('.').length;
  console.log('Char count:', charCount);
  console.log('Word count:', wordCount);
  console.log('Sentence count:', sentenceCount);

  //FUNCTIONS
  function toggleBooleanState(id: number) {
    setReq((pS) =>
      pS.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: !item.isActive };
        }

        return item;
      })
    );
  }

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <main>
      <h1>Analyze your text in real-time.</h1>
      <textarea
        name=""
        id=""
        onChange={(e) => {
          handleTextChange(e);
        }}
      ></textarea>
      <div className="options-holder">
        {req.map((element) => (
          <OptionBox
            key={element.id}
            info={element}
            handleToggle={() => {
              toggleBooleanState(element.id);
            }}
          />
        ))}
        <p className="text-preset-4">Approx. reading time &lt; 1 min</p>
      </div>
      <div className="count-box-container">
        {countBox.map((element) => (
          <CountBox
            key={element.id}
            info={element}
            wordCount={wordCount}
            charCount={charCount}
            sentenceCount={sentenceCount}
          />
        ))}
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

/*         <OptionBox
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
        /> */
