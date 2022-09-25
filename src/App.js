// Import UseState Hook
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [randomColor_state, setRandomColor] = useState('N/A');
  const [randomColor2_state, setRandomColor2] = useState('N/A');
  const [gradientType_state, setGradientType] = useState('N/A');
  const [gradientDirection_state, setGradientDirection] = useState('N/A');
  const [gradientPosition_state, setGradientPosition] = useState('N/A');
  const [randomGradient_state, setRandomGradient] = useState('N/A');

  const shuffleFunc = () => {
    const color_cabin = document.querySelector('.color_cabin');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const gradientType = Math.random() < 0.5 ? 'linear-gradient' : 'radial-gradient';
    const gradientDirection = Math.random() < 0.5 ? 'right' : 'left';
    const gradientPosition = Math.random() < 0.5 ? 'top' : 'bottom';
    const randomGradient_radial = gradientType + '(' + randomColor + ', ' + randomColor2 + ')';
    const randomGradient = gradientType + '( to ' + gradientPosition + ' ' + gradientDirection + ', ' + randomColor + ', ' + randomColor2 + ')';
    gradientType === 'linear-gradient' ? color_cabin.style.background = randomGradient : color_cabin.style.background = randomGradient_radial;

    setRandomColor(randomColor.toLocaleUpperCase());
    setRandomColor2(randomColor2.toLocaleUpperCase());
    gradientType === 'linear-gradient' ? setGradientType('Linear') : setGradientType('Radial');
    gradientDirection === 'left' ? setGradientDirection('Left') : setGradientDirection('Right');
    gradientPosition === 'top' ? setGradientPosition('Top') : setGradientPosition('Bottom');
    gradientType === 'linear-gradient' ? setRandomGradient(randomGradient) : setRandomGradient(randomGradient_radial);

    color_cabin.style.boxShadow = '0 0 10px 0 #000'

    const colorTitle = document.querySelector('.colorTitle');
    colorTitle.style.opacity = '1';

    const init_instruction0 = document.querySelector('.init_instruction0');
    init_instruction0.style.opacity = '0';

  }
  const notify = (param) => toast.info(param + ' copied to Clipboard', {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const copyToClipboard = (param, name) => {
    navigator.clipboard.writeText(param)
    notify(name)
  }
  return (
    <>

      <div className="color_cabin">
        <p className='colorTitle'>Generate Random Gradient</p>
        <p className='init_instruction0'>
          Click the button below to create random gradient
          <br />⏬🔽⬇️👇👇👇⬇️🔽⏬
        </p>
      </div>

      <div className="random_values">
        <table>
          <thead>
            <tr>
              <th colSpan='2'>Details <span className='clickToCopy'>(Click to copy)</span></th>
            </tr>
          </thead>

          <tbody>
            <tr onClick={() => copyToClipboard(randomColor_state, 'Random Color 1')}>
              <th>Random Color 1</th>
              <td>{randomColor_state}</td>
            </tr>

            <tr onClick={() => copyToClipboard(randomColor2_state, 'Random Color 2')}>
              <th>Random Color 2</th>
              <td>{randomColor2_state}</td>
            </tr>

            <tr onClick={() => copyToClipboard(gradientType_state, 'Gradient Type')}>
              <th>Gradient Type</th>
              <td>{gradientType_state}</td>
            </tr>

            <tr onClick={() => copyToClipboard(gradientDirection_state, 'Gradient Direction')}>
              <th>Gradient Direction</th>
              <td>{gradientDirection_state}</td>
            </tr>

            <tr onClick={() => copyToClipboard(gradientPosition_state, 'Gradient Position')}>
              <th>Gradient Position</th>
              <td>{gradientPosition_state}</td>
            </tr>

            <tr onClick={() => copyToClipboard(randomGradient_state, 'Gradient Code')}>
              <th>Gradient Code</th>
              <td>{randomGradient_state}</td>
            </tr>
          </tbody>
        </table>

      </div>
      <button
        onClick={() => { shuffleFunc() }}
        className="shuffle_button"
      >
        Generate New Gradient
      </button>

      <div className='footer'>
        Created with ❤️ by <a href='https://mursalfk.github.io/' target='_blank' rel='noopener noreferrer'>Mursal Furqan</a>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        bodyClassName="toast-body-def"
        pauseOnHover
      />
    </>
  );
}

export default App;
