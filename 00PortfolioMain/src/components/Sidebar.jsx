import { FaLinkedin, FaGithubSquare   } from "react-icons/fa"
import {FaSquareXTwitter} from 'react-icons/fa6'
import  profilePic  from '../assets/profilePic.gif'

const Sidebar = () => {
  return (
    <section className="w-[300px] flex flex-col gap-2 bg-slate-500  items-center">
      <img src={profilePic} className="border -translate-y-7 rounded-lg max-w-[200px] bg-pink-800 " />
      <h2 className="self-center font-bold text-3xl">Parmjeet Mishra</h2>
      <button className="bg-slate-800 rounded-lg p-2 px-4 text-gray-400  " >Front End Developer</button>
      <div className="flex gap-2">
        <button className="rounded-lg text-2xl bg-slate-700 p-2 hover:bg-purple-800 "  >
          <a href="#">
            <FaLinkedin className="f" />
          </a>
        </button>
        <button className="rounded-lg text-2xl bg-slate-700 p-2 hover:bg-purple-800 ">
          <a href="#">
            <FaSquareXTwitter />
          </a>
        </button>
        <button className="rounded-lg text-2xl bg-slate-700 p-2 hover:bg-purple-800 ">
          <a href="#">
            <FaGithubSquare  />
          </a>
        </button>
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default Sidebar