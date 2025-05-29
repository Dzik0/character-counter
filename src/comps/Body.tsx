function Body() {
  return (
    <main>
      <h1>Analyze your text in real-time.</h1>

      <textarea
        name=""
        id=""
        defaultValue="Hello, my name is Peter and I live in Warsaw. My hobby is fishing and coding. I love playing video games and learning new stuff"
      ></textarea>
      <div className="options-holder">
        <div className="option-container">
          <button className="btn-on">✔</button>
          <p className="text-preset-4">Exclude spaces</p>
        </div>
        <div className="option-container">
          <button className="">✔</button>
          <p className="text-preset-4">Set Character Limit</p>
        </div>
        <p className="text-preset-4">Approx. reading time &lt; 1 min</p>
      </div>
    </main>
  );
}

export default Body;
