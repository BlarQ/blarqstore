import styles from './banner.module.css'
import { CgMouse } from "react-icons/cg"


export default function Banner() {
  return (
    <div>
      <div className={styles.bhead}>
        <div>
          <h2 className="text-xl text-fuchsia-500 py-5">
            {new Date().getHours() >= 12
              ? "Good Aftrenoon"
              : new Date().getHours() >= 16
              ? "Good Evening"
              : "Good Morning"}
            , welcome to BlarQStore
          </h2>
          <p className="text-5xl text-slate-900">
            Everything you need at your finger tip
          </p>
          <button className="rounded-full cursor-pointer bg-fuchsia-600 text-white py-3 px-4 my-4 hover:shadow-md hover:shadow-fuchsia-400 hover:transition-transform hover:scale-110">
            Check Out Products
          </button>
        </div>
        <span className="text-gray-400 text-2xl p-4 bg-white rounded-full shadow-md">
          <CgMouse />
        </span>
      </div>

      <div className="bg-slate-50 min-h-[70vh] flex flex-row gap-10 py-36 px-20">
        <div className="bg-yellow-400 max-w-[36rem] rounded-2xl flex justify-center items-center ">
          <div className="-mt-32 -ml-10 pl-8">
            <img src="laptop.png" width="500px" />
          </div>

          <div className="-ml-36 pr-16">
            <p className="text-3xl text-white">Mac Book PC</p>
            <button className="rounded-full cursor-pointer bg-white text-black font-bold py-3 px-4 my-4 hover:shadow-s hover:shadow-white hover:transition-transform hover:scale-110">
              Shop Now
            </button>
          </div>
        </div>

        <div className="bg-red-500 max-w-[36rem] rounded-2xl flex justify-center items-center">
          <div className="grid items-center justify-center ml-20">
            <p className="text-3xl text-right ml-5 text-white">Headset</p>
            <button className="rounded-full cursor-pointer bg-white text-black font-bold ml-6 -mr-1 py-3 my-4 hover:shadow-s hover:shadow-white hover:transition-transform hover:scale-110">
              Shop Now
            </button>
          </div>

          
          <div className="-mt-32">
            <img src="headset.png" width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
}
