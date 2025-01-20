import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from './data';


const allCategorys = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [ menuItem,setMenuItem ] = useState(menu)
  const [ categorys,setCategorys ] = useState(allCategorys)
  console.log(categorys);
  

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
