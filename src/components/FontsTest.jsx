import React from 'react';
import styled from 'styled-components'

const FontsTest = () => {
   return (
      <div>
         <Aktau>Фонт Aktau</Aktau>
         <Burlak>Фонт Burlak</Burlak>
         <Grunge>Фонт Grunge</Grunge>
         <Drpodr>Фонт Drpodr</Drpodr>
         <Karmen>Фонт Karmen</Karmen>
         <Rurintania>Фонт Rurintania</Rurintania>
      </div>
   )
}

export default FontsTest


const Aktau = styled.p`
   font-size: 36px;
   font-family: aktau;
   padding-left: 10px;
`
const Burlak = styled.p`
   font-size: 36px;
   font-family: burlak;
   padding-left: 10px;
`
const Grunge = styled.p`
   font-size: 36px;
   font-family: grunge;
   padding-left: 10px;
`
const Drpodr = styled.p`
   font-size: 36px;
   font-family: drpodr;
   padding-left: 10px;
`
const Karmen = styled.p`
   font-size: 36px;
   font-family: karmen;
   padding-left: 10px;
`
const Rurintania = styled.p`
   font-size: 36px;
   font-family: rurintania;
   padding-left: 10px;
   text-shadow: -2px 2px 2px rgba(173, 216, 230, 0.5);
`