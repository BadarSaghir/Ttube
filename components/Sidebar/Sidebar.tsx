import React, { useState } from 'react'
import {ImCancelCircle} from 'react-icons/im'
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link';

const Sidebar = () => {
const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>

      <div className='block xl:hidden m-2 ml-4 mt-3 text-xl'
      onClick={()=>setShowSidebar((state)=>!state)} 
      >
        {showSidebar?<ImCancelCircle  />:<AiOutlineMenu  />}
      </div>
      {
        showSidebar &&( 
        <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:p-4'>
            <Link href={"/"}>
              <div>
              <p className='text-2xl'>
                <AiFillHome />
              </p>
              <span className='text-xl hidden xl:block'></span>
              </div>
            </Link>

          </div>
        </div>
        )

      }
    </div>
  )
}

export default Sidebar