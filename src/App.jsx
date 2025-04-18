import { Suspense } from 'react'
import './App.css'
import NavbarTop from './NavbarTop'
import PricingOptions from './assets/components/pricingoptions/PricingOptions'
import ResultChart from './assets/components/ResultChart/ResultChart';
import axios from 'axios';
import MarksChart from './assets/components/MarksChart/marksChart';

const pricingPromise = fetch('./PricingData.json').then(res=>res.json());
const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>
    <header>
      <NavbarTop></NavbarTop>
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

      <ResultChart></ResultChart>
    </main>
    </>
  )
}

export default App