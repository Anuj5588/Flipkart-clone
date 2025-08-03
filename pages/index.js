import Category from "../components/category/index"
import NextJsCarousel from "../components/imageCrauselComponent"
import Navbar from "../components/Navbar/index"
import Footer from "../components/Footer/index"




export default function Home(){
    return(
        <>
        <div className="h-[800px] bg-gray-200  w-[100%]">
   <Navbar/>
   <Category/>
   <NextJsCarousel/>
   <Footer/>
   </div>
  


        </>
    )
}