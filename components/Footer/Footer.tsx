import React from "react";
import { footerList1, footerList2, footerList3 } from "../../utils/constants";
const Footer = () => {
  const List: React.FC<{ footerList: string[] }> = ({ footerList }) => {
    return (
      <>
        {footerList.map((fl) => (
          <p
            key={fl}
            className="cursor-pointer text-gray-400 text-sm hover:underline"
          >
            {fl}
          </p>
        ))}
      </>
    );
  };
  return (
    <div className="mt-6 hidden xl:block">
      <div className="flex flex-wrap gap-2 mt-5">
        <List footerList={footerList1} />
        <List footerList={footerList2} />
        <List footerList={footerList3} />
       
      </div>
    </div>
  );
};

export default Footer;
