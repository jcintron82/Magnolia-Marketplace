import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { UserCart }from "../components/cartPage/UserCart.js";

//Electronics wrapper and item(s) imports
import { ElectronicsWrapper }from "../components/productdisplays/electronics/ElectronicsWrapper.js";
import { Laptop } from '../components/productdisplays/electronics/Laptop.js';
import { Headphones } from '../components/productdisplays/electronics/Headphones.js';
import { Airpods } from '../components/productdisplays/electronics/Airpods.js';
import { IPhone } from '../components/productdisplays/electronics/IPhone.js';
import { Xbox } from '../components/productdisplays/electronics/Xbox.js';
import { Android } from '../components/productdisplays/electronics/Android.js';

import { TVsWrapper }from '../components/productdisplays/televisions/TVsWrapper.js';
import { Samsung65Inch }from '../components/productdisplays/televisions/Samsung65Inch.js'
//Home goods wrapper and item(s) imports
import { TCL65InchOLED } from '../components/productdisplays/televisions/TCL65InchOLED.js';
import { Vizio65Inch } from '../components/productdisplays/televisions/Vizio65Inch.js';
import { Sony83Inch } from '../components/productdisplays/televisions/Sony83Inch.js';
import { Samsung85Inch } from '../components/productdisplays/televisions/Samsung85Inch';
import { TCL65Inch6Series } from '../components/productdisplays/televisions/Tcl65Inch6Series';

import { PhonesAndAudioWrapper } from '../components/productdisplays/phonesandaudio/PhonesAndAudioWrapper';
import { GalaxyS22 } from '../components/productdisplays/phonesandaudio/GalaxyS22';
import { PowerBeats } from '../components/productdisplays/phonesandaudio/PowerBeats';


import { GamingWrapper } from '../components/productdisplays/gaming/GamingWrapper';
import { NintendoSwitchOriginal } from '../components/productdisplays/gaming/NintendoSwitchOriginal';
import { NintendoSwitchOLED } from '../components/productdisplays/gaming/NintendoSwitchOLED';
import { Gamecube } from '../components/productdisplays/gaming/Gamecube';
import { PS5Bundle }from "../components/productdisplays/gaming/PS5Bundle";
import { XboxSeriesS }from "../components/productdisplays/gaming/XboxSeriesS";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/usercart" element={<UserCart />} />

        <Route path='/electronics' element={<ElectronicsWrapper />} />
        <Route path='/iphone' element={<IPhone  />} />
        <Route path='/laptop' element={<Laptop  />} />
        <Route path='/headphones' element={<Headphones  />} />
        <Route path='/airpods' element={<Airpods  />} />
        <Route path='/xbox' element={<Xbox  />} />
        <Route path='/android' element={<Android  />} />


        <Route path='/televisions' element={<TVsWrapper  />} />
        <Route path='/samsung65inch' element={<Samsung65Inch />} />
        <Route path='/65inchTvOLED' element={<TCL65InchOLED />} />
        <Route path='/vizio65inch' element={<Vizio65Inch />} />
        <Route path='/sony83inch' element={<Sony83Inch />} />
        <Route path='/samsung85inch' element={<Samsung85Inch />} />
        <Route path='/65inchtclseries6' element={<TCL65Inch6Series />} />

        <Route path='/phonesandaudio' element={<PhonesAndAudioWrapper />} />
        <Route path='/galaxys22' element={<GalaxyS22 />} />
        <Route path='powerbeats' element={<PowerBeats />} />


        <Route path='/gaming' element={<GamingWrapper />} />
        <Route path='/switchoriginal' element={<NintendoSwitchOriginal />} />
        <Route path='/switcholedmodel' element={<NintendoSwitchOLED />} />
        <Route path='/gamecube' element={<Gamecube />} />
        <Route path='/ps5bundle' element={<PS5Bundle />} />
        <Route path='/xboxmodelS' element={<XboxSeriesS />} />


      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;