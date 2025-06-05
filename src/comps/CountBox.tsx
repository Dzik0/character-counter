type Props = {
  info: {
    id: number;
    name: string;
    backgroundColor: string;
    backgroundPattern: string;
  };
  charCount: number | undefined;
  wordCount: number | undefined;
  sentenceCount: number | undefined;
  notSpaceCounting: boolean;
  charCountNoSpace: number;
};

function CountBox({
  info,
  charCount,
  wordCount,
  sentenceCount,
  notSpaceCounting,
  charCountNoSpace,
}: Props) {
  const style: React.CSSProperties = {
    backgroundColor: info.backgroundColor,
    backgroundImage: info.backgroundPattern,
  };

  function returnNumber() {
    if (info.id === 1) {
      if (notSpaceCounting) {
        const number = charCountNoSpace ? charCountNoSpace : 0;
        return number;
      }
      const number = charCount ? charCount : 0;
      return number;
    }
    if (info.id === 2) {
      const number = wordCount ? wordCount : 0;
      return number;
    }
    if (info.id === 3) {
      const number = sentenceCount ? sentenceCount : 0;
      return number;
    }
  }

  return (
    <div className="count-box" style={style}>
      <div className="count-info">
        <p className="count-number text-preset-1">{returnNumber()}</p>
        <p className="count-type text-preset-3">{info.name}</p>
      </div>
    </div>
  );
}

export default CountBox;
