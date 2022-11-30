import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

import { Routes, Route } from "react-router-dom";
import ContactUs from './Components/ContactUs';
import BuySuperFoodz from './Components/BuySuperFoodz/BuySuperFoodz';
import CafeSingle from './Components/SuperFoodz/CafeSingle';
import Swap_Card from './Components/BuySuperFoodz/Swap_Card';
import Wallets from './Components/BuySuperFoodz/Wallets';
import { chains, providers } from '@web3modal/ethereum'


// *************************
import { Web3Modal } from '@web3modal/react'
// *************************

const App = () => {

  const config = {
    projectId: 'dff96d53d34aa7bba80a117ad41d9248',
    theme: 'dark',
    accentColor: 'teal',
    ethereum: {
      appName: 'web3Modal',
      chains:[
        chains.polygonMumbai,chains.binanceSmartChainTestnet,chains.goerli,chains.avalancheFuji
      ],
      // providers:[
      //   providers.walletConnectProvider({
      //     projectId:"dff96d53d34aa7bba80a117ad41d9248"
      //   })
      // ]
    }
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/BuySuperFoodz" element={<BuySuperFoodz />}>
          <Route index element={<Swap_Card />} />
          <Route path="#" element={<Swap_Card />} />
          <Route path="Wallet" element={<Wallets />} />
        </Route>
        <Route exact path="/SuperFoodzCafe" element={<CafeSingle />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
      <Web3Modal config={config} />

    </>
  )
}

export default App