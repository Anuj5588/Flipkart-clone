import Category from "../components/category/index"
import NextJsCarousel from "../components/imageCrauselComponent"
import Navbar from "../components/Navbar/index"
import SimpleSlider from "../components/TopDeals"
import Footer from "../components/Footer/index"




export default function Home(){
    return(
        <>
        <div className="h-[800px] bg-gray-200  w-[100%] m-[0px]">
   <Navbar/>
   <Category/>
   {/* <SimpleSlider/> */}
   <NextJsCarousel/>
   <Footer/>
   </div>
  


        </>
    )
}