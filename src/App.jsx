import { Suspense } from 'react'
import './App.css'
import NavbarTop from './NavbarTop'
import PricingOptions from './assets/components/pricingoptions/PricingOptions'

const pricingPromise = fetch('./PricingData.json').then(res=>res.json());

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
    </main>
    </>
  )
}

export default App