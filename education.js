import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './resume';
import Profile from './Profile';

class Education extends React.Component{

	render(){
		
return(
<>
	<form onSubmit={this.nextStep}>
	<div>
	<br/>
	<h1> EDUCATION </h1><br/><br/>
	</div>

<div class="uni">
		<label >
		University:
		</label>
		<input name='university' type="text" value={this.props.universityProp}
		onChange={this.props.updateStateProp} />
		
		</div>
		<div class="state">
		<label>
		State:
		</label>
		<input name='st' type="text" value={this.props.stProp}
		onChange={this.props.updateStateProp} />
</div>
<div class="field" >
<label>
		Field Of Study:
		</label>
		<input name='field' type="text" value={this.props.fieldProp}
		onChange={this.props.updateStateProp}/>
</div>
<div class="city">
<label>
		City:
		</label>
		<input name='city' type="text" value={this.props.cityProp}
		onChange={this.props.updateStateProp} />
</div>
<div class="degree">
<label>
		Degree:
		</label>
		<input name='degree' type="text" value={this.props.degreeProp}
		onChange={this.props.updateStateProp}/>
		</div>
<div class="grad">
<label>
		Graduation:
		 FROM
		</label>

		<input name='from' type="date" value={this.props.fromProp}
		onChange={this.props.updateStateProp} />

		TO   
		<input name='to' type="date" value={this.props.toProp}
		onChange={this.props.updateStateProp} />
		</div>


</form>
</>
	



	)}
};




export default Education;
