// src/context/TabsContext.js
import React, { createContext, useState } from 'react';

export const TabsContext = createContext();

const TabsProvider = ({ children }) => {
  const [tabs, setTabs] = useState([{ title: 'Tab 1', data: [], detail: null }]);
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    const newTab = {
      title: `Tab ${tabs.length + 1}`,
      data: [],
      detail: null,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(tabs.length);
  };

  const removeTab = (index) => {
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);
    if (activeTab === index && newTabs.length) {
      setActiveTab(newTabs.length - 1);
    } else if (!newTabs.length) {
      setActiveTab(null);
    } else if (activeTab > index) {
      setActiveTab(activeTab - 1);
    }
  };

  const updateData = (index, newData) => {
    const newTabs = tabs.map((tab, i) =>
      i === index ? { ...tab, data: newData } : tab
    );
    setTabs(newTabs);
  };

  const setDetail = (index, detail) => {
    const newTabs = tabs.map((tab, i) =>
      i === index ? { ...tab, detail } : tab
    );
    setTabs(newTabs);
  };

  return (
    <TabsContext.Provider
      value={{
        tabs,
        activeTab,
        addTab,
        removeTab,
        setActiveTab,
        updateData,
        setDetail,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
