
import Image from "next/image"
import style from './index.module.css'
import searchicon from '../../Assests/icon/searchicon.png'

export default function SearchBar(){
    return(
        <>
        <div>
           
            <div className={style.searchbar}>
            
            <input type="text"   placeholder="Search for Products Brands and More"/>
            <button className={style.searchicon}>
            <Image width={30} height={30} src={searchicon}/>
            </button>
            </div>
        </div>
        </>
    )
}