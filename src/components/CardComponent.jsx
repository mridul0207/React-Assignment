import React, { useState } from 'react'
import ProductModal from './ProductModal';

const CardComponent = ({card}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [product,setProduct] = useState({});
  return (
    <div className='w-11/12 mx-auto grid grid-cols-3 gap-4'>
    {
        card.map((val,index)=>{
          return(
            <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" key={index} onClick={()=>{
              setIsOpen(true);
              setProduct(val);
            }}>
              <img class="w-full h-[300px]" src={val.thumbnail} />
              <div class="px-6 py-4">
                <div className='flex justify-between gap-4'>
                  <div class="font-bold text-xl mb-2">{val.title}</div>
                  <div class="font-bold text-xl mb-2">Rs.{val.price}</div>
                </div>
              </div>
            </div>
          )
        })

    }
    {
      isOpen && <ProductModal product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
    }
    </div>
  )
}

export default CardComponent