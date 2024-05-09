import styles from './banner.module.css'

export default function Banner() {
  return (
    <div className={styles.bhead}>
        <div>
            <h2 className='text-xl text-fuchsia-500 py-5'>{new Date().getHours() >= 12 ? 'Good Aftrenoon' : new Date().getHours() >= 16 ? 'Good Evening' : 'Good Morning'}, welcome to BlarQStore</h2>

            <p className='text-5xl text-slate-900'>Everything you need at your finger tip</p>

            <button className='rounded-full cursor-pointer bg-fuchsia-600 text-white py-3 px-4 my-4 hover:shadow-md hover:shadow-fuchsia-400 hover:transition-transform hover:scale-110'>Check Out Products</button>
        </div>
    </div>
  )
}
