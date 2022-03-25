import { HomeOutline, LocationOutline } from "react-ionicons"

const Nav = () => {
  return (
    <div className="fixed block bottom-0 left-0 right-0 p-2">
      <div className="flex flex-row justify-center">
        <div className="basis-full lg:basis-1/3 flex flex-row justify-center">
          <div className="bg-gray-500 m-1 p-2 w-[50px] h-[50px] rounded-xl lh-[50px]">
            <HomeOutline />
          </div>

          <div className="bg-gray-500 m-1 p-2 w-[50px] h-[50px] rounded-xl lh-[50px]">
            <LocationOutline />
          </div>

          <div className="bg-gray-500 m-1 p-2 w-[50px] h-[50px] rounded-xl lh-[50px]">
            img
          </div>

          <div className="bg-gray-500 m-1 p-2 w-[50px] h-[50px] rounded-xl lh-[50px]">
            img
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
