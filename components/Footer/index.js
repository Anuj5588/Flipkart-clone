import { footerData } from "../../JSON/footer";
import styles from "./index.module.css";
import Image from "next/image";

export default function Footer() {
  const selectedHeadings = [
    "Consumer Policy",
    "Help",
    "Group Companies",
    "About",
  ];
  const filteredFooterData = footerData.filter((item) =>
    selectedHeadings.includes(item.heading)
  );
  const unselectedData = footerData.filter(
    (item) => !selectedHeadings.includes(item.heading)
  );
  console.log("undselcted jhfdhvwoiufhweipu==>", unselectedData);
  return (
    <div className="bg-[#000000] h-[50%] relative">
      <div className="bg-[#454d5e] h-[62%] w-[1px] top-11 right-[550px] absolute"></div>
      <div className="grid grid-cols-6 grid-rows-1 p-12 gap-1 text-white ">
        {filteredFooterData.map(({ heading, items }, index) => (
          <div key={index}>
            <h4 className="text-xs font-interSemiBold text-[#878787]">
              {heading}
            </h4>
            {items.map((item, i) => (
              <div
                key={i}
                className="text-xs mt-2 font-interSemiBold text-[#fff]"
              >
                {item}
              </div>
            ))}
          </div>
        ))}

        {unselectedData.map(({ heading, items }, index) => {
          let className = "";

          if (heading === "Mail Us") {
            className = "col-start-5 row-start-1";
          } else if (heading === "Registered Office Address") {
            className = "col-start-6  row-start-1";
          } else if (heading === "Social :") {
            className = "col-start-5  row-start-2 -mt-8"; // adjust as needed
          }

          return (
            <div key={index} className={`${className}`}>
              <h4 className="text-xs font-interSemiBold text-[#878787]">
                {heading}
              </h4>

              {heading === "Social :" 
              
                ?(<div className="flex gap-2 mt-3 -ml-2">
                 {items.map((item, i)=>(
                      <Image
                        src={item.icon}
                        height={25}
                        width={25}
                        
                      />
                  ))}
                  </div>)
                :( items.map((item, i) => (
                    <div
                      key={i}
                      className="text-xs mt-2 font-interSemiBold text-[#fff]"
                    >
                      {item}
                    </div>
                  )))}
            </div>
          );
        })}
      </div>
      <div className="w-full bg-[#454d5e] h-[1.5px] absolute bottom-8 mb-6"></div>
    </div>
  );
}
