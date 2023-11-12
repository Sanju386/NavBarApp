import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  // console.log(menu);

  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const { categories } = await response.json();
    setMenu(categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-menu">
      {menu.map((itm) => {
        return (
          <div key={itm.idCategory} className="menu-list">
            <h3>{itm.strCategory}</h3>
            <button
              onClick={() => navigate(itm.idCategory)}
              className="btn-menu"
            >
              Read More
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
