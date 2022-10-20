import Keyboard from "./components/Keyboard/Keyboard";
import NumberDisplay from "./components/NumberDisplay/NumberDisplay";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <NumberDisplay />
          <a href="notequejeseslint" className="call">
            Call
          </a>
          <a href="notequejeseslint" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
