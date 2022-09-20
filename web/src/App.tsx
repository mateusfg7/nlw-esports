import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

import logoImage from './assets/logo-nlw-esports.svg'

import './styles/main.css'

function App() {
  return (
    <div className='max-w-[1344px] my-20 mx-auto flex flex-col items-center'>
      <img src={logoImage} alt='Logo NLW eSports' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu{' '}
        <span className='bg-nlw-gradient bg-clip-text text-transparent'>
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner
          title='League of Legends'
          bannerUrl='/game-1.png'
          adsCount={4}
        />
        <GameBanner title='Dota 2' bannerUrl='/game-2.png' adsCount={4} />
        <GameBanner title='CS:GO' bannerUrl='/game-3.png' adsCount={4} />
        <GameBanner title='Apex Legends' bannerUrl='/game-4.png' adsCount={4} />
        <GameBanner title='Fortnite' bannerUrl='/game-5.png' adsCount={4} />
        <GameBanner
          title='World of Warcraft'
          bannerUrl='/game-6.png'
          adsCount={4}
        />
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
