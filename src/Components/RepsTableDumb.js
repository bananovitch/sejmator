import React from 'react';
import { Link } from 'react-router-dom'

export const RepsTableDumb = ({ dataArray }) => (
	<div className="reps">
		<table>
	          <thead>
	            <tr>
	              <th>Imię i nazwisko</th>
	              <th>Klub</th>
	              <th>Frekwencja</th>
	              <th>Liczba wypowiedzi</th>
	            </tr>
	          </thead>
	          <tbody>
	        {dataArray.map( (item, index) => 
	          
						<tr key={index}>
						
	            <td><Link to={`poslowie/${item.data['ludzie.id']}`}>{item.data["poslowie.nazwa"]}</Link></td>
	            <td>{item.data["sejm_kluby.skrot"]}</td>
	            <td>{item.data["poslowie.frekwencja"]}</td>
	            <td>{item.data["poslowie.liczba_wypowiedzi"]}</td>
	          </tr> 
						
	          )}
	    </tbody>
		</table>
		
	</div>
)
