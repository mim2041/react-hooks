import { useContext } from "react";
import UseRefExample2 from "./pages/UseRefExample2";
import { ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/MenuList";
import Profile from "./pages/Profile";
import GameResult from "./pages/GameResult";
import UsersContainer from "./components/UsersContainer";
import Select from "./components/Select";

function App() {
    // const [counter, setCounter] = useState(0);

    const { dark, setDark } = useContext(ThemeContext);
    console.log(dark);

  return (
    <div className={`w-full h-full p-20 ${dark ? 'bg-black' : 'bg-white'}`}>
      <button onClick={() => setDark(!dark)} className={`bg-blue-800 px-5 py-2 rounded-lg text-white`}>Toggle</button>
      {/* <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}
      {/* <Profile></Profile>
      <GameResult /> */}

      {/* <UsersContainer /> */}

      <Select>
        <Select.SelectOption value="option1">Option 1</Select.SelectOption>
        <Select.SelectOption value="option2">Option 2</Select.SelectOption>
        <Select.SelectOption value="option3">Option 3</Select.SelectOption>
      </Select>
    </div>
  )
}

export default App
