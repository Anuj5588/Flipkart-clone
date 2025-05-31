import Image from "next/image";
import category from "./category";
import style from "./style.module.css";

export default function Category() {
  const images = ["Washing Machine", "Grocery"];
  return (
    <>
      <div className={ `bg-  ${style.category}`}>
        {category.map(({ name, imageUrl, width, height }) => (
          <div key={name} className={style.text}>
            <Image width={width} height={height} src={imageUrl} />
            <h6>{name}</h6>
          </div>
        ))}
      </div>
    </>
  );
}
