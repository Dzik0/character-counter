import clsx from 'clsx';

type Props = {
  info: { id: number; letter: string; count: number };
  totalNumber: number;
  mode: boolean;
};

function LetterBox({ info, totalNumber, mode }: Props) {
  const perc = ((info.count / totalNumber) * 100).toFixed(2);
  const lengthBar = ((info.count / totalNumber) * 100).toFixed(2);

  const style = { width: `${lengthBar}%` };
  return (
    <div className="letter-box-container">
      <p className="letter-box-letter">{info.letter.toLocaleUpperCase()}</p>
      <div className={clsx('letter-box-bar-container', mode && 'light')}>
        <div className="letter-box-fill-bar" style={style}></div>
      </div>
      <p className="letter-box-stats">
        {info.count} ({perc} %)
      </p>
    </div>
  );
}

export default LetterBox;
