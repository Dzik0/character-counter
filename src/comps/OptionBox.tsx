import clsx from 'clsx';

type Prop = {
  handleToggle: () => void;
  info: {
    id: number;
    name: string;
    isActive: boolean;
  };
};

function OptionBox({ handleToggle, info }: Prop) {
  const checkTurn = info.isActive;

  return (
    <div className="option-container">
      <button className={clsx(checkTurn && 'btn-on')} onClick={handleToggle}>
        {checkTurn && '✔'}
      </button>
      <p className="text-preset-4">{info.name}</p>
    </div>
  );
}

export default OptionBox;
