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
    </div>
  )
}

export default App
