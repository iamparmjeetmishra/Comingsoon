import {Home} from './pages'
import {Header} from './components'

const App = () => {
  return (
    <section className='bg-homeBg container mx-auto min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark md:pb-16 w-full'>
      <Header />
      <Home />
    </section>
  )
}

export default App