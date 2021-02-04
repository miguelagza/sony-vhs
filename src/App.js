import "./App.css";
import Navbar from "./Navbar";
import Palette from "./Palette";
import AppBody from "./AppBody";
import VideoCassette from "./VideoCassette";
import { useStateValue } from "./StateProvider";

function App() {
  const [
    { color1, color2, color3, color4, color5, background, borderColor },
  ] = useStateValue();
  return (
    <div
      className='app'
      style={{
        backgroundColor: `${background}`,
        border: `10px solid ${borderColor}`,
      }}
    >
      <div className='app__components'>
        <Navbar />
        <AppBody />
      </div>
      <Palette backgroundColor={color1} />
      <Palette backgroundColor={color2} />
      <Palette backgroundColor={color3} />
      <Palette backgroundColor={color4} />
      <Palette backgroundColor={color5} />
      <VideoCassette />
    </div>
  );
}

export default App;
