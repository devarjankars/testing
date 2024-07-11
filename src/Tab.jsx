// src/components/Tab.js
import React, { useContext } from 'react';
import { TabsContext } from './context/TabsContext';

const Tab = ({ index }) => {
  const { tabs, activeTab, setActiveTab, removeTab } = useContext(TabsContext);

  return (
    <div
      className={`px-4 py-2 border-b-2 ${activeTab === index ? 'border-pink-600' : 'border-transparent'} cursor-pointer text-black` }
      onClick={() => setActiveTab(index)}
    >
      {tabs[index].title}
      <button className="ml-2 text-red-500 h-5 w-5 hover: bg-yellow-50" onClick={(e) => { e.stopPropagation(); removeTab(index); }}>
        x
      </button>
    </div>
  );
};

export default Tab;
