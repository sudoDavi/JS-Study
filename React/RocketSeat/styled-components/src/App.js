import React from 'react';

import { Title, TitleSmall } from './styles';

function App() {
  return (
    <div className="App">
      <Title fontSize={20}>
        Hello
        <span>texto menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  );
}

export default App;
