import React from "react";
import { footerList1, footerList2, footerList3 } from "../../utils/constants";
const Footer = () => {
  const List: React.FC<{ footerList: string[],mt:boolean }> = ({ footerList,mt }) => {
    return (
      <div className={`flex flex-wrap gap-2 ${mt && 'mt-3'}`}>
        {footerList.map((fl) => (
          <p
            key={fl}
            className="overflow-x-hidden cursor-pointer text-gray-400 text-sm hover:underline"
          >
            {fl}
          </p>
        ))}
      </div>
    );
  };
  return (
    <div className="mt-4 hidden xl:block">
      { <div className="flex flex-wrap gap-1 mt-2 overflow-x-hidden"> 
        <List footerList={footerList1} mt={false}/>
        <List footerList={footerList2} mt={false}/>
       {<List footerList={footerList3} mt={false}/> }
        <p className="text-gray-400 text-sm
        mt-3">tiktik 2022 by Badar</p>
       
      </div> }
    </div>
  );
};

export default Footer;
