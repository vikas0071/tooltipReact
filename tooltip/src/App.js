import React from 'react';
import Tooltip from './tooltip';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Tooltip position="bottom" content="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
}

export default App;
