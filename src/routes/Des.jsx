
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Des = () => {
  const { id } = useParams();
  //   console.log(id)

  const [list, setList] = useState([]);
  console.log(list)

  const fetchData = async () => {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories/${id}`
    );
    const {categories}= await response.json();


    setList(categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p> {list?.strCategoryDescription}</p>
    </div>
  );
};

export default Des;
