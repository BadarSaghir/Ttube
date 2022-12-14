import React, { useState } from 'react'
import {ImCancelCircle} from 'react-icons/im'
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import {} from 'react-icons'
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import Discover from '../Discover/Discover';
import SuggestedAccount from '../SuggestedAccount/SuggestedAccount';
import Footer from '../Footer/Footer';

const Sidebar = () => {
const [showSidebar, setShowSidebar] = useState(true);
const userProfile=true

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
              <div className='flex items-center gap-3 hover:bg-primary p-3 xl:justify-start cursor-pointer font-semibold text-[#f51997] rounded'>
              <p className='text-2xl'>
                <AiFillHome />
              </p>
              <span className='text-xl hidden xl:block'> For You</span>
              </div>
            </Link>

          </div>
      {userProfile && (
        <div className='px-2 py-4 hidden xl:block'>
          <p className='text-gray-400'> Login to comment in the video</p>
          <div className='pr-4'>
            <GoogleLogin clientId=''
            onSuccess={(e)=>{e.code}}
            render={(renderProp)=>{
              return <button
              className='bg-white text-[#f51997] text-lg border-[1px] cursor-pointer  border-[#f51997] p-2 rounded-md px-6 py-3 w-full outline-none mt-3 hover:text-[#fff] hover:bg-[#f51997] '
               onClick={renderProp.onClick}
               disabled={renderProp.disabled}
              >Log in</button>

            }}
            onFailure={()=>{}}
            cookiePolicy={'single_host_origin'}
            />            
          </div>
        </div>
      )}
      <Discover />
      <SuggestedAccount />
      <Footer />
        </div>
        )


      }
    </div>
  )
}

export default Sidebar