import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {topics} from '../../utils/constants'
const Discover = () => {
    const router = useRouter();
    const {topic} = router.query

    let activeTopicStyle='xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]'

   let topicStyles='xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black'
  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-4'>

        <p className='text-gray-500 font-semibold m-2 mt-1 hidden xl:block'>
            Popular Topics
        </p>
        <div className='flex gap-1 flex-wrap'>
            {
            topics.map((topics)=>{
                return <Link href={`/?topic=${topics.name}`} key={topics.name}>
                    <div className={topic==topics.name?activeTopicStyle:topicStyles}>
                        <span className='font-bold text-xl xl:text-sm'>
                            {topics.icon}
                        </span>
                        <span className='font-medium text-md hidden xl:block'>
                            {topics.name}
                        </span>
                    </div>
                </Link>
            })
            }
        </div>
    </div>
  )
}

export default Discover