import React from 'react';
import { Navigation } from './Modules/Navigation';
import { Sector1 } from './Modules/Sector-1';
import { Sector2 } from './Modules/Sector-2';
import { Sector3 } from './Modules/Sector-3';
import { Sector4 } from './Modules/Sector-4';
import './index.scss';

function App() {
  return (
    <div>
      <Navigation/>
      <Sector1/>
      <Sector2/>
      <Sector3/>
      <Sector4/>
    </div>
  );
}

export default App;