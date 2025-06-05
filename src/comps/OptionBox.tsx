import clsx from 'clsx';

type Prop = {
  handleToggle: () => void;
  info: {
    id: number;
    name: string;
    isActive: boolean;
  };
  SetCharLimit: (limit: number) => void;
  mode: boolean;
};

function OptionBox({ handleToggle, info, SetCharLimit, mode }: Prop) {
  const checkTurn = info.isActive;
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    SetCharLimit(Number(e.target.value));
  }

  return (
    <div className="option-container">
      <button
        className={clsx(checkTurn && 'btn-on', mode && 'light')}
        onClick={handleToggle}
      >
        {checkTurn && '✔'}
      </button>
      <p className="text-preset-4">{info.name}</p>
      {info.id === 2 && info.isActive ? (
        <input
          className={clsx('limit-input', mode && 'light')}
          type="number"
          onChange={handleChange}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default OptionBox;
