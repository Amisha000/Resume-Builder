import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './resume';
import './common.css';
class Summary extends React.Component{
	render(){
	return(

<>



<div>
		
		<textarea name="summary" type="text" value={this.props.summaryProp}
		onChange={this.props.updateStateProp} required placeholder="Write a summary about yourself. In this summary tell them about yourself."/>
		
		</div>
		
		
</>
)
}
}
export default Summary