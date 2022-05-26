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
      <div className="color_cabin">
      </div>
      {/* Area to show the random values */}
      <div className="random_values">
        {/* In a Table */}
        <table>
          <thead>
            <tr>
              <th colspan='2'>Details</th>
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