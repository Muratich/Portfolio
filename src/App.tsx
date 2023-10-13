import React, {useRef} from 'react';
import { Navigation } from './Modules/Navigation';
import { Sector1 } from './Modules/Sector-1';
import { Sector2 } from './Modules/Sector-2';
import { Sector3 } from './Modules/Sector-3';
import { Sector4 } from './Modules/Sector-4';
import { Sector5 } from './Modules/Sector-5';
import { Sector6 } from './Modules/Sector-6';
import { Loader } from './Modules/Loader';
import { useOnLoadImages } from './hooks/useOnLoadImages';
import './index.scss';

function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  return (
    <div ref={wrapperRef}>
      {!imagesLoaded && <Loader/>}
      <Navigation/>
      <Sector1/>
      <Sector2/>
      <Sector3/>
      <Sector4/>
      <Sector5/>
      <Sector6/>
    </div>
  );
}

export default App;