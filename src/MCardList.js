import React from 'react';
import MCard from './MCard';

const MCardList =({staff})=>{

	return (
			<div>
			{
				staff.map((user, i)=>{
					return(
						<MCard
						 key={i}
						 id={staff[i].id}
						name={staff[i].name}
						position={staff[i].position}
						gender={staff[i].gender}
						tel={staff[i].tel}
						/>
						)

				})
			}
			</div>
		);
}
export default MCardList;