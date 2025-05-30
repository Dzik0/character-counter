import clsx from 'clsx';

type Prop = {
  handleToggle: () => void;
  isActive: boolean;
  textInfo: string;
};

function OptionBox({ handleToggle, isActive, textInfo }: Prop) {
  const checkTurn = isActive;

  return (
    <div className="option-container">
      <button className={clsx(checkTurn && 'btn-on')} onClick={handleToggle}>
        ✔
      </button>
      <p className="text-preset-4">{textInfo}</p>
    </div>
  );
}

export default OptionBox;
