import React from 'react';
import { Link, Route } from 'react-router-dom';
import './RepsTable.css';
import { Pagination } from './Pagination';
import { AppHeader } from './AppHeader';

const DumbRepComponent = () => (<h2>Dumb Rep</h2>);

export const RepsTable = ({ dataArray, currentPage, changePage  }) => (
		<main>
			<AppHeader>Posłowie</AppHeader>
			<Pagination 
				currentPage={currentPage} 
				changePage={changePage}
			/>
			<div className="page-content">
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
			
			<Route path={`/poslowie/1799`} component={DumbRepComponent}/>
			
		</div>
	</main>
	
)
