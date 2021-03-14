import React, { useState, createContext } from 'react';

export const InboxContext = createContext();

// eslint-disable-next-line react/prop-types
const InboxProvider = ({ children }) => {
  const [id, setId] = useState(null);

  const InboxId = (n) => setId(n);

  return (
    <InboxContext.Provider value={{
      id,
      InboxId,
    }}
    >
      {children}
    </InboxContext.Provider>
  );
};

export default InboxProvider;
