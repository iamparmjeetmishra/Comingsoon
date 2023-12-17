import {Profile, Twitter} from '../media'
import info from '../info.json'

const Sidebar = () => {
  return (
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
          <img
              src={Profile}
              alt='Profile Pic'
              className='w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]'
              loading='lazy'
          />
          <div className='pt-[100px] pb-8'>
              <h1 className='mt-6 mb-1 text-3xl font-semibold dark:text-white'>{info.name}</h1>
              <h3 className='mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6] '>{info.title}</h3>
              <div className='flex justify-center space-x-3'>
                  <a
                      href={info.socials.twitter}
                      target='noreferrer noopener'
                      className='p-4 bg-neutral-800/90 rounded-xl'
                  >
                          <Twitter />
                  </a>
              </div>
          </div>
    </div>
  )
}

export default Sidebar