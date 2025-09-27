import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { AppNavigator } from './src/navigation/AppNavigator';
import { TodoProvider } from './src/contexts/todosContext';
import { ModalProvider } from './src/contexts/modalContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <TodoProvider>
          <AppNavigator/>
        </TodoProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

