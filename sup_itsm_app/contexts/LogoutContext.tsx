import React, { createContext, useContext, useState } from 'react';

// Cria o contexto com o estado `isLogout` e a função para atualizá-lo
export const LogoutContext = createContext<{ isLogout: boolean; setIsLogout: (value: boolean) => void }>({
  isLogout: false,
  setIsLogout: () => { },
});

// Hook personalizado para acessar o contexto
export function useLogout() {
  const context = useContext(LogoutContext);
  if (context === null) {
    throw new Error('useLogout must be used within a LogoutProvider');
  }
  return context;
}
