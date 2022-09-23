import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { Input } from './components/Form/input'

import logoImage from './assets/logo-nlw-esports.svg'

import './styles/main.css'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: { ads: number }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [])

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
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed flex justify-center items-center'>
            <Dialog.Content className='bg-[#2A2634] py-8 px-10 text-white rounded-lg w-[480px] shadow-lg shadow-black/25'>
              <Dialog.Title className='text-3xl text-white font-black'>
                Publique um anúncio
              </Dialog.Title>

              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor='game'>
                    Qual o game?
                  </label>
                  <Input
                    placeholder='Selecione o game no qual deseja jogar'
                    id='game'
                  />
                </div>

                <div>
                  <label htmlFor='name'>Seu nome (ou nickname)</label>
                  <Input
                    placeholder='Como te chamam dentro do game?'
                    id='name'
                  />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                    <Input
                      type='number'
                      id='yearsPlaying'
                      placeholder='Tudo bem ser ZERO'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='discord'>Qual seu Discord?</label>
                    <Input placeholder='Usuario#0000' id='discord' />
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='weekDays'>Quando costuma jogar?</label>

                    <div className='grid grid-cols-4 gap-2'>
                      <button
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Domingo'
                      >
                        D
                      </button>
                      <button
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Segunda'
                      >
                        S
                      </button>
                      <button
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Terça'
                      >
                        T
                      </button>
                      <button
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Quarta'
                      >
                        Q
                      </button>
                      <button
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Quinta'
                      >
                        Q
                      </button>
                      <button
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Sexta'
                      >
                        S
                      </button>
                      <button
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Sábado'
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor=''>Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input type='time' id='hourStart' placeholder='De' />
                      <Input type='time' id='hourEnd' placeholder='Até' />
                    </div>
                  </div>
                </div>

                <div className='mt-2 flex gap-2 text-sm items-center'>
                  <Input type='checkbox' />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                    Cancelar
                  </Dialog.Close>
                  <button
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                    type='submit'
                  >
                    <GameController className='w-6 h-6' />
                    Encontrar Duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
