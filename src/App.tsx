import Keyboard from "./components/Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <span className="number"></span>
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
