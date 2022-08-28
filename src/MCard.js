import React from 'react';
 
const MCard= ({ name, position, gender, tel, id })=>{
return(
		<div>
			<img alt=' person' src={`https://ui-avatars.com/api/?name=${name + gender}&size=200&font-size=0.35&background=F6C6A9&color=FDF5EE`}/>
			<div>
				<h3>Name: {name}</h3>
				<p>Position: {position}</p>
				<p>Gender: {gender}</p>
				<p>Phone Number: {tel}</p>
			</div>

		</div>
	);

}  
export default MCard;