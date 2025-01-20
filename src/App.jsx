import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from './data';
import Categorys from "./Categorys";


const allCategorys = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [ menuItem,setMenuItem ] = useState(menu)
  const [ categorys,setCategorys ] = useState(allCategorys)
  console.log(categorys);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItem(menu)
      return;
    }
    const newItems = menu.filter((item) => item.category === category )
    setMenuItem(newItems)
  }
  

  return (
    <main>
      <section className="menu">
        <Title  text='our menu' />
        <Categorys categorys={categorys} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  )
};
export default App;
