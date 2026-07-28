import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
          <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col flex-row gap-16'>
          <img className='w-full md:max-w-[350px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti accusantium molestias aliquam 
                ratione soluta voluptatem beatae. Earum magnam debitis ex quisquam tempore tempora dolorum unde amet 
                error eum ullam rem nostrum, dolores minima reiciendis nobis expedita deleniti animi inventore quis 
                corrupti! Sint tenetur quisquam magni soluta nisi nulla delectus sequi!
              </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde esse natus, dolorum laboriosam animi 
                necessitatibus cum labore sint modi in ipsam fuga nihil facere laborum tempore officiis, accusamus harum 
                vitae facilis quo earum, amet sequi officia? Provident perferendis, magnam at, officiis fugiat quia sint 
                inventore rerum accusamus dolore quo expedita.
              </p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore, necessitatibus aspernatur ipsa sit velit eveniet veniam unde ad vitae repudiandae earum est eum accusamus, optio voluptatem architecto ut sint!</p>
          </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>
      <div className='flex flex-col flex-row text-sm mb-20'>
          <div className='border px-10 '>

          </div>
      </div>
    </div>
  )
}

export default About
