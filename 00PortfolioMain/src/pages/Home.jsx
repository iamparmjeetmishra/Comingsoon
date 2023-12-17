import { Sidebar } from "./index"

const Home = () => {
  return (
    <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
      <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44">
        <Sidebar />
      </div>
    </div>
  )
}

export default Home