import React from 'react'

import CardContent from './CardContent';

const Cards = ({ item, openModal}) => {
  return (
     <div key={item.id} onClick={() => openModal(item)}>
     <CardContent  item={item} openModal={openModal}  />
   </div>
  )
}

export default Cards