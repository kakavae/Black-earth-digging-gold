import React from 'react'
import './index.css'
import PinsComment from './pinsComment'
import { useContext } from 'react'
import { pinsContext } from '../../../context/pins'

export default function PinsHotContent() {
  const { pinsListPlus } = useContext(pinsContext)
  return (
    <>
      {pinsListPlus.map((item) => {
        return <PinsComment key={item.id} commentInfo={item}></PinsComment>
      })}
      <PinsComment></PinsComment></>
  )
}
