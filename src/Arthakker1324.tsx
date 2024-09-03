import video from './assets/video.mp4'
import logo from './assets/aurora.ico'
export const Arthakker1324 = () => {
  return (
    <div className="p-10 ">
        <input type="search" name="" id="" className="w-full px-5 py-2"/>
        <section className="flex items-center justify-between p-4 space-x-10">
      {/* Video Element */}
      <div className="w-full">
        <video className="w-full h-auto rounded-2xl object-cover" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Other Component */}
      <div className="w-1/2 p-4 bg-gradient-to-r from-slate-950 to-blue-950 rounded-2xl">
        <h1 className='text-white text-2xl mt-3 mb-7 text-center'>Appreciate this Creator</h1>
          <div className='flex items-center justify-between text-white bg-transparent shadow-md shadow-blue-950 rounded-2xl p-4'>
            <p>30.203139545000</p>
            <div className='flex space-x-1 items-center'>
               <img src={logo} alt="" width={20} height={20} /><span>Aur</span> 
            </div>
            
          </div>
          
            <button className='shadow-sm hover:scale-110 shadow-orange-700 my-5 bg-gradient-to-b from-orange-700 to-orange-600 px-7 py-2 rounded-2xl mx-auto flex'>
                Donate
            </button>
           
             
            <div className='mt-10 flex flex-col items-center'>
               <p className='text-white text-center'>Or Get more coins from wallet
            </p>
            <p className='text-orange-600 cursor-pointer'>Connect Wallet</p>
            </div>
            

      </div>
    </section>
    </div>
  )
}

export default Arthakker1324;