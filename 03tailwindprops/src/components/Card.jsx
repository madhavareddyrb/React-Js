import React from 'react'


// props we can pass and acess props.username and default
function Card ( {username = "madhava reddy" , posts, myarr,}){
   //console.log() 
  return (
    <>
   <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
    
    
    <p> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore ratione recusandae error a consequuntur, rem totam provident veniam iure consequatur repellendus id eveniet explicabo doloremque amet, ut nulla earum!
      </p>

  </div>
  <div className="flex">
    
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <h3 className='font-bold'> {username} </h3>

      <h3>2024 {posts}</h3>

    </span>
  </div>
</div>

    </>

  )
}

export default Card