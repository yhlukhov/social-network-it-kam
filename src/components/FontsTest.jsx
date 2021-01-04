import React from 'react';
import styled from 'styled-components'

const FontsTest = () => {
   return (
      <div>
         <Burlak>Фонт Burlak</Burlak>
         <Drpodr>Фонт Drpodr</Drpodr>
         <Rurintania>Фонт Rurintania</Rurintania>
      </div>
   )
}

export default FontsTest

const Burlak = styled.p`
   font-size: 36px;
   font-family: burlak;
   padding-left: 10px;
`
const Drpodr = styled.p`
   font-size: 36px;
   font-family: drpodr;
   padding-left: 10px;
`
const Rurintania = styled.p`
   font-size: 36px;
   font-family: rurintania;
   padding-left: 10px;
   text-shadow: -2px 2px 2px rgba(173, 216, 230, 0.5);
`