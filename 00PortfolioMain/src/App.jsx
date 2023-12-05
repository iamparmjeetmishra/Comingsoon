import { Navbar, Sidebar } from './components/index.js'

const App = () => {
  return (
    <>
      <div className='container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]'>
        {/* Sidebar */}
        <div className='col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44'>
          <Sidebar />
        </div>
      </div>
    <Navbar />
    </>
  )
}

export default App