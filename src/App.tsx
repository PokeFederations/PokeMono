import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'ui-model';
import { ThemeProvider } from 'ui-components';
import { Header, Home, Pokemon, AllPokemons } from 'modules';

const App = () => {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
            <Route path="/pokemon/all" element={<AllPokemons />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
