import React from 'react'

const Buttons = ({categories,filterItems,getAllData}) => {
  return (
    <div className='flex justify-center gap-4 mt-9 mb-5'>
    {
      <div>
      <button className='bg-yellow-500 text-black px-5 py-2 mx-5 rounded-md' onClick={()=>getAllData()}>
        ALL
      </button>
      {
        categories.map((val,index)=>{
          return(
            <button className='bg-yellow-500 text-black px-5 py-2 mx-5 rounded-md' key={index}
            onClick={()=>filterItems(val)}>
                {val.toUpperCase()}
            </button>
          )
        })
      }
      </div>
    }
    </div>
  )
}

export default Buttons