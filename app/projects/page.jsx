import React from 'react'
import Chessproject from '../../components/Chessproject'
import EcommerceProject from '../../components/EcommerceProject'
export default function page() {
  return (
<div className='grid grid-cols-4  gap-y-5 mds:gap-y-10'>
<Chessproject/>

<EcommerceProject/> 
 </div>
  )
}
