import React, { Component } from 'react';
import LTOs from '../../api/ltos/collection.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Ltolist extends Component {
    constructor(props) {
        super(props);
    }

    ltodatas() {
    	return LTOs.find().fetch();
    }

        render() {
        	const dataArray=this.ltodatas().map((ltodata)=>{
        		return ltodata
        	});

        	dateFormatDate = (cell,row)=> {
        		return cell=(moment(cell).format('YYYY.MM.DD'))
        	};

			dateFormatTime = (cell,row)=> {
        		return cell=(moment(cell).format('YYYY.MM.DD, HH:mm'))
        	};        	
        	
        return (
        	<div>
            	<h2>Lista</h2>
				{console.log(dataArray)}

               	<BootstrapTable data={ dataArray }>
			        <TableHeaderColumn dataField='_id' isKey>ID</TableHeaderColumn>
			        <TableHeaderColumn dataField='actualDate' dataFormat={ dateFormatDate }>Dátum</TableHeaderColumn>
			        <TableHeaderColumn dataField='ltoAnumber' width='90'>LTO-A</TableHeaderColumn>
			        <TableHeaderColumn dataField='ltoBnumber' width='90'>LTO-B</TableHeaderColumn>
			        <TableHeaderColumn dataField='status'>Státusz</TableHeaderColumn>
			        <TableHeaderColumn dataField='changeBy'>User</TableHeaderColumn>
			        <TableHeaderColumn dataField='changeDate' dataFormat={ dateFormatTime }>Csere Dátuma</TableHeaderColumn>
				</BootstrapTable>	

            	<ul>
            		{this.ltodatas().map((ltodata) => {
            			return <li key={ltodata._id}>
            						{actualdate=moment(ltodata.actualDate).format('YYYY.MM.DD')} - 
            						{ltoanumber=ltodata.ltoAnumber} - 
            						{ltobnumber=ltodata.ltoBnumber} - 
            						{ltostatus=ltodata.status} - 
            						{actualuser=ltodata.changeBy} - 
            						{changedate=moment(ltodata.changeDate).format('YYYY.MM.DD, HH:mm')}
            					</li>
               		})}
               	</ul> 
            </div>
   )}
}

export default Ltolist;

