import React from 'react';
import { actorsJSON } from '../data';
import { v4 as uuidv4 } from 'uuid';

function Table ({handleClick, sortBy, asc}) {

	const users = actorsJSON;

	function compareByRankA (a, b) {
		return a.rank - b.rank
	}
	function compareByRankD (a, b) {
		return b.rank - a.rank
	}
	function compareByPointsA (a, b) {
		return a.points - b.points;
	}
	function compareByPointsD (a, b) {
		return b.points - a.points;
	}
	function compareByNameA (a, b) {
		var nameA = a.name.toUpperCase(); // ignore upper and lowercase
		var nameB = b.name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
		  return -1;
		}
		if (nameA > nameB) {
		  return 1;
		}
		// names must be equal
		return 0;
	}
	function compareByNameD (a, b) {
		var nameA = b.name.toUpperCase(); // ignore upper and lowercase
		var nameB = a.name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
		  return -1;
		}
		if (nameA > nameB) {
		  return 1;
		}
		// names must be equal
		return 0;
	}
	function compareByPaidA (a, b) {
		return a.paid - b.paid;
	}
	function compareByPaidD (a, b) {
		return b.paid - a.paid;
	}

    console.log(sortBy, asc)

    switch(sortBy) {
        case "rank":
            asc ? users.sort(compareByRankA) : users.sort(compareByRankD);
            break;
        case "points":
            asc ? users.sort(compareByPointsA):users.sort(compareByPointsD);
            break;
        case "name":
            asc ? users.sort(compareByNameA):users.sort(compareByNameD);
            break;
        case "paid":
            asc ? users.sort(compareByPaidA):users.sort(compareByPaidD);
            break;
        default:
            users.sort(compareByRankA);
            break;
    }

    const rows = users.map((user) => {
        return (
            <tr key={uuidv4()}>
                <td className="UserRowRank">{user.rank}</td>
                <td className="UserRowPoints">{user.points}</td>
                <td className="UserRowName">{user.name}</td>
                <td className="UserRowAge">{user.paid}</td>
            </tr>
        )
    })

	return (
		<div className="row">
			<div className="col s12 m1 l2"></div>
			<div className="col s12 m10 l8">
			<table className="table striped">
				<thead>
					<tr key="head">
						<th><button className="waves-effect waves-light btn #eceff1 blue-grey lighten-5" onClick={() => {handleClick('rank')}}>{sortBy === "rank" ? (asc === true ? 'Rank 🔼': 'Rank 🔽'):'Rank'}</button></th>
						<th><button className="waves-effect waves-light btn #eceff1 blue-grey lighten-5" onClick={() => {handleClick('points')}}>{sortBy === "points" ? (asc === true ? 'Points 🔼': 'Points 🔽'):'Points'}</button></th>
						<th><button className="waves-effect waves-light btn #eceff1 blue-grey lighten-5" onClick={() => {handleClick('name')}}>{sortBy === "name" ? (asc === true ? 'Name 🔼': 'Name 🔽'):'Name'}</button></th>
						<th><button className="waves-effect waves-light btn #eceff1 blue-grey lighten-5" onClick={() => {handleClick('paid')}}>{sortBy === "paid" ? (asc === true ? 'Paid ($ Billion) 🔼':'Paid ($ Billion) 🔽'):'Paid ($ Billion)'}</button></th>							
					</tr>
				</thead>
				<tbody>{ rows }</tbody>
			</table>
			</div>
			<div className="col s12 m1 l2"></div>
		</div>
	)

}

export default Table;