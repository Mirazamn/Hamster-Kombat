import { useState } from 'react'
import './App.css'
import './index.css'

import coin from './assets/coin.svg'
import MainCoin from './assets/main-coin.svg'
import Energy from './assets/energy.svg'
import Friends from './assets/friends.svg'
import exchange from './assets/exchange.svg'
import mine from './assets/mine.svg'
import earn from './assets/earn.svg'
import airdrop from './assets/airdrop.svg'

function App() {
  const [sana,yangila] = useState(0)

  function Increase() {
    yangila(sana+1)
  }

  return (
    <div className='hamster'>
      <header>
        <h1>Hamster Kombat</h1>
      </header>

      <main>
        <div className="container">

          <div className="props-container flex">
            <div className="props">
              <h3 className='orange'>Earn per tap</h3>
              <p className='flex'> <img src={coin} alt="" /> +12</p>
            </div>

            <div className="props">
              <h3 className='purple padd'>Coins to level up</h3>
              <p className='flex'>10 M</p>
            </div>

            <div className="props">
              <h3 className='green'>Profit per hour</h3>
              <p className='flex'> <img src={coin} alt="" /> +636</p>
            </div>
          </div>

          <section className="main">
            <div className="main-h1 flex">
              <img src={coin} width="50px" /> <h1>{sana}</h1>
            </div>

            <button onClick={Increase}>
              <img src={MainCoin} width="300px" />
            </button>
          </section>

          <div className="energy flex">
            <span className='flex'> 
              <img src={Energy} width="25px" />
              <p>6500 / 6500</p>
            </span>

            <h5>Boost</h5>
          </div>

        </div>
      </main>

      <footer>
        <ul className='container flex'>
          <li className='flex'>
            <img src={exchange} alt="" />
            <h4>Title</h4>
          </li>

          <li className='flex'>
            <img src={mine} alt="" />
            <h4>Title</h4>
          </li>

          <li className='flex'>
            <img src={Friends} alt="" />
            <h4>Friends</h4>
          </li>

          <li className='flex'>
            <img src={earn} alt="" />
            <h4>Title</h4>
          </li>

          <li className='flex'>
            <img src={airdrop} alt="" />
            <h4>Title</h4>
          </li>

        </ul>
      </footer>
    </div>
  )
}

export default App
