// src/App.js
import React, { useContext } from 'react';
import TabsProvider, { TabsContext } from './context/TabsContext';
import Tab from './Tab';
import DrinkList from './DrinkList';
import './index.css';

const Tabs = () => {
  const { tabs, addTab } = useContext(TabsContext);
  return (
    <>
      <div className="flex border-b">
        {tabs.map((_, index) => (
          <Tab key={index} index={index} />
        ))}
        <button onClick={addTab} className="px-4 py-2 border-b-2 border-transparent">
          + New Tab
        </button>
      </div>
      <DrinkList />
    </>
  );
};

const App = () => {
  return (
    <TabsProvider>
      <div className="container mx-auto">
        <Tabs />
      </div>
    </TabsProvider>
  );
};

export default App;
