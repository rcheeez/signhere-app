import './App.css';
import SignaturePad from './SignaturePad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digitize Your Signature Now!</h1>
        <div className="signature-pad-container">
          <SignaturePad />
        </div>
        <p className='footer-text'>Made with <b>&#10084;</b> by Archies Gurav.</p>
      </header>
    </div>
  );
}

export default App;
