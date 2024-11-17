
import style from './index.module.css'
import SearchBar from "../Searchbar/index"
import AccordianMenu from '../Accordian Menu'
import { useContext } from 'react'
import {UserContext} from '../context.js'





export default function Navbar(){
    const userdata = useContext(UserContext)
    return(
        <>
    <div className={style.navbar}>
        <div className={style.logo}>
            <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' alt='logo'/>
        </div>
        <div className={style.SearchBar}>
       <SearchBar/>
       </div>
        <div className={style.profile}>Log</div>
       <div className={style.carticon}>Cart
        <a>cartlink</a>
       </div>
     
        <div className={style.others}>Become a seller</div>

    </div>

    <AccordianMenu/>
        </>
    )
}