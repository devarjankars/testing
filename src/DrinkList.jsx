// src/components/DrinkList.js
import React, { useContext, useEffect } from 'react';
import { TabsContext } from './context/TabsContext';

const DrinkList = () => {
  const { tabs, activeTab, updateData, setDetail } = useContext(TabsContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s= ');
      console.log(response.data);
      const data = await response.json();
      
      updateData(activeTab, data.drinks);
    };
    if (tabs[activeTab].data?.length === 0) {
      fetchData();
    }
  }, [activeTab, tabs, updateData]);

  const handleDrinkClick = (drink) => {
    setDetail(activeTab, drink);
    console.log(drink);
  };

  return (
    <div className="p-4 bg-slate-50">
      {tabs[activeTab].detail ? (
        <div>
          <h2 className="text-xl font-bold">Name: {tabs[activeTab].detail.strDrink}</h2>
          <img src={tabs[activeTab].detail.strDrinkThumb}  className='h-22 w-24 '/>
          <h3>Alcoholic:-{tabs[activeTab].detail.strAlcoholic}</h3>
          <p>Instructions:{tabs[activeTab].detail.strInstructions}</p>
          <p>Glass:{tabs[activeTab].detail.strGlass}</p>
           
          <button onClick={() => setDetail(activeTab, null)} className="mt-4 p-2 bg-green-500 text-white">
            Back to List
          </button>
        </div>
      ) : (
        <div className=' flex flex-wrap'>
          {tabs[activeTab].data?.map((drink) => (
            <div key={drink.idDrink} className="mt-2  m-3 p-4 bg-blue-100" >
              {drink.strDrink}
              <img src ={drink.strDrinkThumb} className='object-scale-down h-25 w-20' />
              <p></p>
              <button onClick={() => handleDrinkClick(drink)} className="ml-2 p-1 m-1 bg-green-600 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DrinkList;
