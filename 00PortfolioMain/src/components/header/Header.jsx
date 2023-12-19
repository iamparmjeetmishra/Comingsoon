import { Sun, Moon } from "../../media"

const header = () => {
  return (
    <header className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">
          <div className="w-full flex justify-between px-4">
              <a href="/" className="text-3xl font-bold text-blue-500">
                  Parmjeet Mishra
              </a>
              <div className="flex items-center hidden">
                  <span className="bg-white w-[40px] hover:text-white hidden h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 text-white " >
                      <Sun />
                      <Moon />
                  </span>
              </div>
          </div>
          {/* Has Nav */}
          <div className="hidden">
              
          </div>
    </header>
  )
}

export default header