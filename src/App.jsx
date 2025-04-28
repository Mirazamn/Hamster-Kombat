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
import Exclude from './assets/Exclude.svg'

function App() {
  const [sana,yangila] = useState(0)
  const [open,setopen] = useState(false)
  const [openEarn,setEarn] = useState(false)

  function Increase() {
    yangila(sana+1)
  }


  function DoubbleClick() {
    yangila(sana+2)
  }

  return (
    <div className='hamster'>
      <header>
        <h1>Hamster Kombat</h1>
      </header>

      <main>
        {open?<Exchange/>:null}
        {openEarn?<Earn />: null}
        <div className="container">
          <div className="props-container flex">
            <div onClick={()=> setEarn(true)} className="props">
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

            <button onDoubleClick={DoubbleClick} onClick={Increase}>

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
          <li onClick={()=> setopen(true)} className='flex'>
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


  function Exchange() {
    return (
      <div className="modal">
        <div className="exit">
          <button onClick={()=> setopen(false)}>❌</button>
        </div>
        <main>

          <div className="card">
            <main className='flex'>
              <img src={Exclude} alt="" />

              <div className="card-txt">
                <h5>Тоp 10 cmc pairs</h5>
                <p>Profit per hour</p>
                <p className='flex'><img src={coin} alt="" />120</p>
              </div>
            </main>

            <div className="level flex">
              <h5>lvl 1</h5>
              <p> <img src={coin} alt="" /> 192</p>
            </div>

          </div>

          <div className="card">
            <main className='flex'>
              <img src={Exclude} alt="" />

              <div className="card-txt">
                <h5>Тоp 10 cmc pairs</h5>
                <p>Profit per hour</p>
                <p className='flex'><img src={coin} alt="" />120</p>
              </div>
            </main>

            <div className="level flex">
              <h5>lvl 1</h5>
              <p> <img src={coin} alt="" /> 192</p>
            </div>

          </div>

          <div className="card">
            <main className='flex'>
              <img src={Exclude} alt="" />

              <div className="card-txt">
                <h5>Тоp 10 cmc pairs</h5>
                <p>Profit per hour</p>
                <p className='flex'><img src={coin} alt="" />120</p>
              </div>
            </main>

            <div className="level flex">
              <h5>lvl 1</h5>
              <p> <img src={coin} alt="" /> 192</p>
            </div>

          </div>

        </main>
      </div>
    )
  }

  function Earn() {
    return (
      <div className="earn">
         <div className="exit">
          <button onClick={()=> setEarn(false)}>❌</button>
        </div>

        <main>
          <div className="card flex">
            <h6>lvl 1</h6>
            <p>+2 <img src={coin}/></p>
            <p>-1000 <img src={coin} /></p>
          </div>

          <div className="card flex">
            <h6>lvl 1</h6>
            <p>+2 <img src={coin}/></p>
            <p>-1000 <img src={coin} /></p>
          </div>

          <div className="card flex">
            <h6>lvl 1</h6>
            <p>+2 <img src={coin}/></p>
            <p>-1000 <img src={coin} /></p>
          </div>
        </main>

      </div>
    )
  }
}

export default App
