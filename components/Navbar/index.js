
import style from './index.module.css'
import SearchBar from "../Searchbar/index.js"
import AccordianMenu from '../Accordian Menu'
import { useRouter } from 'next/router'

import Link from 'next/link'


export default function Navbar(){
   
    const router = useRouter()

     const handleLogin =()=>{
        router.push('/login')

     }
    return(
        <>
    <div className={style.navbar}>
        <div className={style.logo}>
        <a href="/"> <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' alt='logo'/></a>
        </div>
        <div className={style.SearchBar}>
       <SearchBar/>
       </div>
        <div className={style.profile} onClick={handleLogin}>Login</div>
       <div className={style.carticon}>Cart
        <a href='/'>cartlink</a>
       </div>
     
        <div className={style.others}>Become a seller</div>

    </div>

    <AccordianMenu/>
        </>
    )
}