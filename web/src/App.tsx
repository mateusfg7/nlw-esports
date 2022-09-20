import { MagnifyingGlassPlus } from 'phosphor-react'

import { GameBanner } from './components/GameBanner'

import './styles/main.css'

import logoImage from './assets/logo-nlw-esports.svg'

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

      <div className='mt-8 pt-1 self-stretch rounded-lg overflow-hidden bg-nlw-gradient'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>
              Não encontrou seu duo?
            </strong>
            <span className='text-zinc-400 block'>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
