
import Categories from './Categories'

export const Home = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-blue-950 w-full h-screen">
        <nav className="px-10">
        <button className="shadow-sm hover:scale-110 shadow-orange-700 my-5 bg-gradient-to-b from-orange-700 to-orange-600 px-7 py-2 rounded-2xl mx-auto flex text-white float-right">
            Become a Creator
          </button>
        </nav>
        <div>

            <Categories/>

        </div>
    </div>
  )
}

export default Home;