import { useEffect, useState } from 'react';
import CountBox from './CountBox.tsx';
import LetterBox from './LetterBox.tsx';
import OptionBox from './OptionBox.tsx';
import { requirements } from '../requirements.ts';
import { countBox } from '../countThings.ts';
import clsx from 'clsx';

type Props = {
  mode: boolean;
};

type Letter = {
  id: number;
  letter: string;
  count: number;
};

function Body({ mode }: Props) {
  //STATES
  const [req, setReq] = useState(requirements);
  const [text, setText] = useState<string>('');
  const [letter, setLetter] = useState<Letter[]>([]);
  const [charLimit, setCharLimit] = useState<number>(0);

  //VARIABLES
  const charCount: number | undefined = text?.split('').length;
  const wordCount: number | undefined = text
    ?.split(' ')
    .filter((item) => item !== '').length;
  const sentenceCount: number | undefined = text
    ?.split(/[.!?]/)
    .filter((item) => item !== '').length;
  const charCounting = req.find((item) => item.id === 2);
  const notSpaceCounting = req.find((item) => item.id === 1);
  const charCountNoSpace: number | undefined = text
    ?.split('')
    .filter((item) => item !== ' ').length;

  const totalNumber: number = letter.reduce((sum, item) => sum + item.count, 0);

  const sortedLetters: Letter[] = [...letter].sort((a, b) => b.count - a.count);

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
    setText(e.target.value.toLocaleLowerCase());
  }

  function updateLetterFrequencies() {
    const alphabet: string[] = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    let numberId: number = 1;
    const clearLetters: string[] | undefined = text
      ?.split('')
      .filter((item) => alphabet.includes(item));
    const usedLetters: string[] = [];
    const goodArray: Letter[] = [];

    clearLetters?.forEach((letter) => {
      if (usedLetters.includes(letter)) {
        const matchingObj: Letter | undefined = goodArray.find(
          (l) => l.letter === letter
        );
        if (!matchingObj) {
          return;
        }
        matchingObj.count++;
        return;
      }

      usedLetters.push(letter);
      goodArray.push({ id: numberId++, letter: letter, count: 1 });
    });

    setLetter(goodArray);
  }

  //USE EFFECTS
  useEffect(() => {
    updateLetterFrequencies();
  }, [text]);

  return (
    <main>
      <h1>Analyze your text in real-time.</h1>
      <textarea
        className={clsx(mode && 'light')}
        placeholder="Start typing!"
        name=""
        id=""
        onChange={(e) => {
          handleTextChange(e);
        }}
      ></textarea>
      {charCount && charCount > charLimit && charCounting?.isActive ? (
        <div className="warning-msg">You reached character limit!</div>
      ) : (
        ''
      )}
      <div className="options-holder">
        {req.map((element) => (
          <OptionBox
            mode={mode}
            key={element.id}
            info={element}
            SetCharLimit={setCharLimit}
            handleToggle={() => {
              toggleBooleanState(element.id);
            }}
          />
        ))}
        {charCount > 0 ? (
          <p className="text-preset-4">
            Approx. reading time {wordCount / 4} seconds
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="count-box-container">
        {countBox.map((element) => (
          <CountBox
            key={element.id}
            info={element}
            wordCount={wordCount}
            charCount={charCount}
            charCountNoSpace={charCountNoSpace ?? 0}
            notSpaceCounting={notSpaceCounting?.isActive ?? false}
            sentenceCount={sentenceCount}
          />
        ))}
      </div>
      {charCount && charCount > 0 ? (
        <div className="letter-info-container">
          <h2 className="text-preset-2">Letter Density</h2>
          <div className="letter-box-grid">
            {sortedLetters.map((item) => (
              <LetterBox
                mode={mode}
                key={item.id}
                info={item}
                totalNumber={totalNumber}
              />
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </main>
  );
}

export default Body;
