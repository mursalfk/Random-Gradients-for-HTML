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
    // Get element with classNam color_cabin
    const color_cabin = document.querySelector('.color_cabin');
    // Gnerate Random Hex Color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Generate Random second hex color
    const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Generate Rnadom Gradient Types
    const gradientType = Math.random() < 0.5 ? 'linear-gradient' : 'radial-gradient';
    // Generate Random Gradient Direction
    const gradientDirection = Math.random() < 0.5 ? 'right' : 'left';
    // Generate Random Gradient Position
    const gradientPosition = Math.random() < 0.5 ? 'top' : 'bottom';
    // Random Gradient to be applied
    const randomGradient_radial = gradientType + '(' + randomColor + ', ' + randomColor2 + ')';
    // Generate Linear Gradients with position, direction and colors
    const randomGradient = gradientType + '( to ' + gradientPosition + ' ' + gradientDirection + ', ' + randomColor + ', ' + randomColor2 + ')';
    // Apply Random Gradient to body
    gradientType === 'linear-gradient' ? color_cabin.style.background = randomGradient : color_cabin.style.background = randomGradient_radial;

    setRandomColor(randomColor.toLocaleUpperCase());
    setRandomColor2(randomColor2.toLocaleUpperCase());
    gradientType === 'linear-gradient' ? setGradientType('Linear') : setGradientType('Radial');
    gradientDirection === 'left' ? setGradientDirection('Left') : setGradientDirection('Right');
    gradientPosition === 'top' ? setGradientPosition('Top') : setGradientPosition('Bottom');
    gradientType === 'linear-gradient' ? setRandomGradient(randomGradient) : setRandomGradient(randomGradient_radial);

    // Set box-shadow of color-cabin
    color_cabin.style.boxShadow = '0 0 10px 0 #000'

    // Opacity of colorTitle
    const colorTitle = document.querySelector('.colorTitle');
    colorTitle.style.opacity = '1';

    const init_instruction0 = document.querySelector('.init_instruction0');
    init_instruction0.style.opacity = '0';

    // const init_instruction1 = document.querySelector('.init_instruction1');
    // init_instruction1.style.opacity = '0';
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
  return (
    <>
      {/* Show this component only in mobile */}
      {/* {window.innerWidth < 768 ? (
        <>
          <button
            onClick={() => { shuffleFunc() }}
            className="mobile_shuffle_button"
          > */}
      {/* ♻️ */}
      {/* icon for shuffle */}
      {/* <svg className="mobile_shuffle_icon" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
            </svg>
          </button>
        </>
      ) : (<></>)} */}
      <div className="color_cabin">
        <p className='colorTitle'>Generate Random Gradient</p>
        <p className='init_instruction0'>
          Click the button below to create random gradient
          <br />⏬🔽⬇️👇👇👇⬇️🔽⏬
        </p>
      </div>
      {/* Area to show the random values */}
      <div className="random_values">
        {/* In a Table */}
        <table>
          <thead>
            <tr>
              <th colSpan='2'>Details <span className='clickToCopy'>(Click to copy)</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Random Color 1</th>
              <td onClick={() => {
                navigator.clipboard.writeText(randomColor_state)
                notify('Random Color 1')
              }}>{randomColor_state}</td>
            </tr>
            <tr>
              <th>Random Color 2</th>
              <td onClick={() => {
                navigator.clipboard.writeText(randomColor2_state)
                notify('Random Color 2')
              }}>{randomColor2_state}</td>
            </tr>
            <tr>
              <th>Gradient Type</th>
              <td onClick={() => {
                navigator.clipboard.writeText(gradientType_state)
                notify('Gradient Type')
              }}>{gradientType_state}</td>
            </tr>
            <tr>
              <th>Gradient Direction</th>
              <td onClick={() => {
                navigator.clipboard.writeText(gradientDirection_state)
                notify('Gradient Direction')
              }}>{gradientDirection_state}</td>
            </tr>
            <tr>
              <th>Gradient Position</th>
              <td onClick={() => {
                navigator.clipboard.writeText(gradientPosition_state)
                notify('Gradient Position')
              }}>{gradientPosition_state}</td>
            </tr>
            <tr>
              <th>Random Gradient</th>
              <td onClick={() => {
                navigator.clipboard.writeText(randomGradient_state);
                notify('Random Gradient')
              }}>{randomGradient_state}</td>
            </tr>
          </tbody>
        </table>

      </div>
      {/* {window.innerWidth >= 768 ? ( */}

      <button
        onClick={() => { shuffleFunc() }}
        className="shuffle_button"
      >
        {/* Add Icon for Shuffle */}
        {/* <svg className="shuffle_icon" width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6zm-42-324H150v200h200V64zm0 240H150v84h200v-84zM192 80h224v80H192V80z" /></svg> */}
        Generate New Gradient
      </button>
      {/* ) : (<></>)} */}
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
