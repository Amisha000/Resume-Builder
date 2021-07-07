import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './resume';
import Profile from './Profile';
class Work extends React.Component{

	render(){
		
return(
	<>
	<form onSubmit={this.nextStep}>
	<div class="workhead">
	<h1> EXPERIENCE INFO </h1>
</div>
<div class="work1">
<label >
		Institute/Organisation:
		</label>
		<input name='work' type="text" value={this.props.workProp}
		onChange={this.updateStateProp}/>

</div>
<div class="position1">
<label> Position
</label>
<input name='position1' type="text" value={this.props.position1Prop}
		onChange={this.updateStateProp}/>
</div>
<div class="duration1">
<label> Duration
</label>
<input name='duration1' type="text" value={this.props.duration1Prop}
		onChange={this.updateStateProp}/>
</div>

<div class="work2">
<label >
		Institute/Organisation:
		</label>
		<input name='work2' type="text" value={this.props.work2Prop}
		onChange={this.updateStateProp}/>

</div>
<div class="position2">
<label> Position
</label>
<input name='position2' type="text" value={this.props.position2Prop}
		onChange={this.updateStateProp}/>
</div>
<div class="duration2">
<label> Duration
</label>
<input name='duration2' type="text" value={this.props.duration2Prop}
		onChange={this.updateStateProp}/>
</div>
</form>
</>
)
}
}
export default Work