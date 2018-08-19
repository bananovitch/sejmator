import React from 'react';

export const ResultsTable = ({ dataArray }) => (
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
	            <td>{item.data["poslowie.nazwa"]}</td>
	            <td>{item.data["sejm_kluby.skrot"]}</td>
	            <td>{item.data["poslowie.frekwencja"]}</td>
	            <td>{item.data["poslowie.liczba_wypowiedzi"]}</td>
	          </tr> 
	          )}
	    </tbody>
	</table>
)
