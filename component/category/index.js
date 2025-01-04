import beauty from '../../Assests/tophilighticon/beauty.png'  
import fashion from '../../Assests/tophilighticon/fashion.png'  
import grocery from '../../Assests/tophilighticon/grocery.png'
import kitchen from '../../Assests/tophilighticon/kitchen.png'
import laptop from '../../Assests/tophilighticon/laptop.png'
import offer from '../../Assests/tophilighticon/offer.png'
import washing from '../../Assests/tophilighticon/washing.png'
import Image from 'next/image'


export default function Category(){


    return(
        <>
        <div className='flex  bg-[#fff] justify-around h-fit items-center mt-4 mx-4 p-8' >

        <div>
            <Image width={60} height={60} src={beauty}/>
            <h6>Beauty</h6>
            </div>
            <div>
            <Image src={offer} width={60} height={60}/>
            <h6>Top offers</h6>
            </div>
            <div>
            <Image src={laptop} width={60} height={60}/>
            <h6></h6>
            </div>
            <div>
            <Image src={kitchen} width={60} height={60}/>
            <h6></h6>
            </div>
            <div>
            <Image src={washing} width={40} height={40}/>
            <h6></h6>
            </div>
            
            <div>
            <Image src={fashion} width={60} height={60}/>
            <h6></h6>
            </div>
            <div>
            <Image src={grocery} width={40} height={40}/>
            <h6></h6>
            </div>
        </div>
        </>
    )
}