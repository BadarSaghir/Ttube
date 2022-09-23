import React, { useState } from 'react'
import {ImCancelCircle} from 'react-icons/im'
import {AiOutlineMenu} from 'react-icons/ai'

const Sidebar = () => {
const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div>

      <div className='block xl:hidden m-2 ml-4 mt-3 text-xl'>
        {showSidebar?<ImCancelCircle onClick={()=>setShowSidebar((state)=>!state)}  />:<AiOutlineMenu onClick={()=>setShowSidebar((state)=>!state)} />}
      </div>
    </div>
  )
}

export default Sidebar