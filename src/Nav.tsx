// import { HomeOutline, LocationOutline } from "react-ionicons"

const Nav = () => {
  return (
    <div className="fixed block bottom-0 left-0 right-0 p-2">
      <div className="flex flex-row justify-center">
        <div className="basis-full lg:basis-1/3 flex flex-row justify-center">
          <a href="#cover" className="">
            <div className="text-gray-400 bg-gray-700 hover:bg-gray-500 hover:scale-110 transition ease-out m-1 p-2 w-[50px] h-[50px] rounded-xl leading-[34px] text-center">
              <i className="fas fa-home text-2xl"></i>
            </div>
          </a>

          <a href="#date" className="">
            <div className="text-gray-400 bg-gray-700 hover:bg-gray-500 hover:scale-110 transition ease-out m-1 p-2 w-[50px] h-[50px] rounded-xl leading-[34px] text-center">
              <i className="fas fa-calendar text-2xl"></i>
            </div>
          </a>

          <a href="#location" className="">
            <div className="text-gray-400 bg-gray-700 hover:bg-gray-500 hover:scale-110 transition ease-out m-1 p-2 w-[50px] h-[50px] rounded-xl leading-[34px] text-center">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
          </a>

          <a href="#end" className="">
            <div className="text-gray-400 bg-gray-700 hover:bg-gray-500 hover:scale-110 transition ease-out m-1 p-2 w-[50px] h-[50px] rounded-xl leading-[34px] text-center">
              <i className="fas fa-image text-2xl"></i>
            </div>
          </a>

          <a href="#gift" className="">
            <div className="text-gray-400 bg-gray-700 hover:bg-gray-500 hover:scale-110 transition ease-out m-1 p-2 w-[50px] h-[50px] rounded-xl leading-[34px] text-center">
              <i className="fas fa-gift text-2xl"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav
