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

  return (
    <div className="bg-[#000000] h-[380px] max-lg:h-[480px] my-4 max-md:hidden">
      <div className="grid grid-cols-[2fr,2fr,2fr,2fr,0.1fr,1fr,1.5fr] max-lg:grid-cols-3 max-lg:grid-rows-2  gap-2 p-12 text-white">
        {/* Selected Items */}
        {filteredFooterData.map(({ heading, items }, index) => (
          <div key={index}>
            <h4 className="text-xs font-interSemiBold text-[#878787]">
              {heading}
            </h4>
            <div className="mt-2">
              {items.map((item, i) => (
                <div key={i} className="text-[12px] font-bold text-[#fff]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Divider */}
        <div className="bg-[#454d5e] col-span-1 w-[0.5px] max-lg:hidden h-[220px]"></div>

        {/* Unselected Items */}
        {unselectedData.map(({ heading, items }, index) => {
          let className = "";
          if (heading === "Mail Us") {
            className = "whitespace-nowrap max-lg:-ml-6 "
          }
             else if(heading === "Registered Office Address"){
              className = "whitespace-nowrap  "
            }
           else if (heading === "Social :") {
            className = "col-start-6  -mt-16 mb-6  max-lg:col-start-2 max-lg:row-start-3 max-lg:-ml-6";
          }

          return (
            <div key={index} className={className}>
              <h4 className="text-xs font-interSemiBold text-[#878787]">
                {heading}
              </h4>

              <div className="mt-2">
                {items.map((item, i) => {
                  const itemClassName =
                    item.type === "Telephone"
                      ? "text-[#0000FF]"
                      : "text-[12px] font-inter_regular text-[#fff]";
                  return (
                    <div key={i} className={itemClassName}>
                      {item.label}
                    </div>
                  );
                })}
              </div>

              {/* Render social icons if heading is "Social :" */}
              {heading === "Social :" && (
                <div className="flex gap-2 mt-3">
                  {items.map((item, i) => (
                    <div>
                    <Image
                      key={`icon-${i}`}
                      src={item.icon}
                      height={25}
                      width={25}
                     
                    />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="w-full bg-[#454d5e] h-[1.5px] -mt-10"></div>
    </div>
  );
}
