import React, {useState} from 'react';
import MCardList from './MCardList';
import {staff} from './Staff';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

function App(){
	
	const [staffList, setStaffList]=useState(staff);
	const [searchedValue, setSearchValued]=useState('');

	const typedSearch=(e)=>{
			const keyWord=e.target.value;
			if (keyWord!==''){
						const FilteredStaffList=staff.filter((staff)=>{
							return staff.name.toLowerCase().includes(keyWord.toLowerCase()
								);
					});
							 setStaffList(FilteredStaffList);
			 }		
			
			else{
								setStaffList(staff);
							} 
				setSearchValued(keyWord);
				
	}

						
	

	return(
		<div>
		<div>
			<h1> Soft Skillers Inc</h1>
			<h2>Staff Lists</h2>
			<SearchBox searchChange= {typedSearch} search={searchedValue}/>
		</div>
		<Scroll>
		<MCardList staff ={staffList}/>
		</Scroll>
		</div>

	);

}
export default App;