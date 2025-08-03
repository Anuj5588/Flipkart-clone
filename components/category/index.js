import Image from "next/image";
import category from "./category";
import style from "./style.module.css";

export default function Category() {
  const images = ["Washing Machine", "Grocery"];
  return (
    <>
      <div className={ ` ${style.category}`}>
        {category.map(({ name, imageUrl, width, height }) => (
          <>
          <div key={name}>
            <Image width={80} height={80} src={imageUrl} />
           <div  className= {`${style.text} ${style.name}`}>
            <h6>{name}</h6>
            </div>
          </div>

           
            </>
        ))}
      </div>
    </>
  );
}
