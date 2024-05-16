import Image from "next/image";
import styles from "./video.module.css";

export default function Category() {
  return (
      <div className="m-10">
          <section className={styles.img}>
              <section className="flex justify-center items-center text-white">
                  <Image src="/laptop.png" alt="" width='200' height='200'/>

                  <div className="flex flex-col items-end gap-5">
                    <h2>Laptop</h2>
                    <button className="bg-white text-slate-950 text-lg px-6 py-4 rounded-full font-semibold capitalize">shop now</button>

                  </div>
              </section>
              <section className="flex justify-center items-center text-white">
                  <Image src="/headset.png" alt="" width='200' height='200'/>
                  
                  <div className="flex flex-col items-end gap-5">
                    <h2>Headset</h2>
                    <button className="bg-white text-slate-950 text-lg px-6 py-4 rounded-full font-semibold capitalize">shop now</button>

                  </div>
              </section>
          </section>
      </div>
  )
}
