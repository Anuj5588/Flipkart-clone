import Category from "../components/category/index"
import NextJsCarousel from "../components/imageCrauselComponent"
import Navbar from "../components/Navbar/index"
import Footer from "../components/Footer/index"




export default function Home(){
    return(
        <>
        <div className="h-[800px]">
   <Navbar/>
   <Category/>
   <NextJsCarousel/>
   <Footer/>
   </div>
  


        </>
    )
}