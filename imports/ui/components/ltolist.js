import React, { Component } from 'react';
import LTOs from '../../api/ltos/collection.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { browserHistory } from 'react-router';

class Ltolist extends Component {
    constructor(props) {
        super(props);
    }

    ltodatas() {
    	return LTOs.find().fetch();
    }

	onClickActionButton(row,e){
        if (e.target.getAttribute('data-btnstatus') == 'disabled'){
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        // browserHistory.push('/ltochange/'+row.ltoAnumber+'/'+row.ltoBnumber);
        browserHistory.push(`/ltochange/${row.ltoAnumber}/${row.ltoBnumber}/${row._id}`);
    }

    onClickChangeAction(row){
    	alert('Ez a módosításra ad lehetőséget');
    }

    actionButton(row){
    	console.log(row.ltoAnumber, row.ltoBnumber, row.status, row.changeBy)
    	if (row.status=='Lezárt') {
    		actualclassName="btn btn-raised btn-danger disabled";
    		buttontext='Lezárva';
    		btnStatus='disabled';
    	} else {
    		actualclassName="btn btn-raised btn-primary";
    		buttontext='Csere';
    		btnStatus='enabled'
    	}
    	return (<button type="button"
    					className={actualclassName}
    					onClick={(e)=>this.onClickActionButton(cell,row,rowIndex,e)}
    					data-btnstatus={btnStatus} >
    					{buttontext}</button>)
    }

        render() {
        	const dataArray=this.ltodatas().map((ltodata)=>{
        		return ltodata
        	});
        	// Dátumformátum magyarul
        	dateFormatDate = (cell,row)=> {
        		return cell=(moment(cell).format('YYYY.MM.DD'))
        	};
        	// Dátum formátum időponttal
			dateFormatTime = (cell,row)=> {
        		return cell=(moment(cell).format('YYYY.MM.DD, HH:mm'))
        	};
        	// Editálható egy cella clickre
        	const cellEditProp = {
  				mode: 'click',
  				blurToSave: true
			};        	
			// A lehetséges kazettaszámok még tesztként csak de nem kell ha db-ből van adat	
			//const ltoNumbers=['1','2','3','4','5','6','7','8','9','10','11'];
			// a kereső mező paraméterei
			const options = {
  				clearSearch: true,
  				searchPosition: 'right',
  			};
        	

        return (
        	<div>
            	<h2>Lista</h2>
				{console.log(dataArray)}

               	<BootstrapTable data={ dataArray } cellEdit={ cellEditProp } search searchPlaceholder='Keresés...' options={ options }>
			        <TableHeaderColumn dataField='_id' isKey hidden>ID</TableHeaderColumn>
			        <TableHeaderColumn dataField='actualDate' dataFormat={ dateFormatDate } editable={false}>Dátum</TableHeaderColumn>
			        <TableHeaderColumn dataField='ltoAnumber' width='90'>LTO-A</TableHeaderColumn>
			        <TableHeaderColumn dataField='ltoBnumber' width='90'>LTO-B</TableHeaderColumn>
			        <TableHeaderColumn dataField='status'>Státusz</TableHeaderColumn>
			        <TableHeaderColumn dataField='changeBy'>User</TableHeaderColumn>
			        <TableHeaderColumn dataField='changeDate' dataFormat={ dateFormatTime } editable={false}>Csere Időpontja</TableHeaderColumn>
			        <TableHeaderColumn dataField='button' dataFormat={this.actionButton.bind(this)} editable={false}></TableHeaderColumn>
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

