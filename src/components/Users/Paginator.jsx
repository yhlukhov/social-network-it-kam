import React from 'react';
import styled from "styled-components"
import css from "./Users.module.css"

const Paginator = ({userCount, pageSize, onPageChange, currentPage}) => {
	let pageCount = Math.ceil(userCount / pageSize)
   let pages = []
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
   }
	return (
		pages.map((page) => (
			<PageNumber
				key={page}
				onClick={() => onPageChange(page)}
				className={currentPage === page && css.selectedPage}
			>
				{page}
			</PageNumber>
		)) 
	)
}

export default Paginator

const PageNumber = styled.span`
   font-size: x-small;
   margin: 1px;
   cursor: pointer;
`