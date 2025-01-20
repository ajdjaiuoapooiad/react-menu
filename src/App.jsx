import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from './data';

const App = () => {
  const [ menuItem,setMenuItem ] = useState(menu)

  return (
    <main>
      <section className="menu">
        <Title  text='our menu' />
        <Menu items={menuItem} />
      </section>
    </main>
  )
};
export default App;
