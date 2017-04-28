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

        	const cellEditProp = {
  				mode: 'click',
  				blurToSave: true
			};        	

			const ltoNumbers=['1','2','3','4','5','6','7','8','9','10','11'];
        	
        return (
        	<div>
            	<h2>Lista</h2>
				{console.log(dataArray)}

               	<BootstrapTable data={ dataArray } cellEdit={ cellEditProp }>
			        <TableHeaderColumn dataField='_id' isKey hidden>ID</TableHeaderColumn>
			        <TableHeaderColumn dataField='actualDate' dataFormat={ dateFormatDate } editable={false}>Dátum</TableHeaderColumn>
			        <TableHeaderColumn dataField='ltoAnumber' editable={ { type: 'select', options: { values: ltoNumbers } } } width='90'>LTO-A</TableHeaderColumn>
			        <TableHeaderColumn dataField='ltoBnumber' editable={ { type: 'select', options: { values: ltoNumbers } } } width='90'>LTO-B</TableHeaderColumn>
			        <TableHeaderColumn dataField='status'>Státusz</TableHeaderColumn>
			        <TableHeaderColumn dataField='changeBy'>User</TableHeaderColumn>
			        <TableHeaderColumn dataField='changeDate' dataFormat={ dateFormatTime } editable={false}>Csere Dátuma</TableHeaderColumn>
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

