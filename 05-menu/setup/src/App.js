import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((i) => i.category))];

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterHandler = (id) => {
    if (id === "all") {
      return setMenu(items);
    }
    const cat = items.filter((menu) => id === menu.category);
    setMenu(cat);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterHandler={filterHandler} categories={categories} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
