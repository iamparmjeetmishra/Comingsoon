import Uiux from '../assets/Uiux.svg'
import { AboutCard } from '../components'

const Home = () => {
  return (
      <div>
          <div className='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14'>
              <h2 className='after-effect after:left-52'>About me</h2>
              <div className='lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center '>
                  <div className='col-span-12 space-y-2.5'>
                      <div className='lg:mr-16'>
                          <p className='text-gray-lite dark:text-color-910 leading-7'>
                          I`&apos;`m Front End Developer from India, working in web development. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                          </p>
                          <p className='text-gray-lite leading-7 mt-2.5 dark:text-color-910'>
                          My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='pb-12 px-2 sm:px-5 md:px-10 lg:px-14 '>
              <h3 className='text-[35px] dark:text-white font-medium pb-5'>What I do!</h3>
              <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 '>
                  <AboutCard imgUrl={Uiux} title="Ui/Ux Design" />
              </div>
          </div>
    </div>
  )
}

export default Home