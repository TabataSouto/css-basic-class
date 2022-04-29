import React, { useState } from 'react';
import ContextValue from './ContextValue';

function Provider({ children }){
  const [champion, setChampion] = useState('');

  const context = {
    champion,
    setChampion,
  }

  return(
    <ContextValue.Provider value = { context }>
      {children}
    </ContextValue.Provider>
  )
}

export default Provider;
