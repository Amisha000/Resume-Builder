import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './resume';
import './common.css';
class Skills extends React.Component{
	render(){
	return(

<>
<form onSubmit={this.nextStep} >
<div>
		<label >
		Skill:
		</label>
		<input name='skill1' type="text" value={this.props.skill1Prop}
		onChange={this.props.updateStateProp} required placeholder="e.g. Project Management"/>
	</div>	
		<div>
		<label>
		Skill:
		</label>
		<input name='skill2' type="text" value={this.props.skill2Prop}
		onChange={this.props.updateStateProp} required  placeholder="e.g. Online Marketing"/>
</div>
<div >
<label>
		Skill:
		</label>
		<input name='skill3' type="text" value={this.props.skill3Prop}
		onChange={this.props.updateStateProp} placeholder="e.g. HTML"/>
</div>
<div>
<label>
		Level:
		</label>
		<input name='level1' type="text" value={this.props.level1Prop}
		onChange={this.props.updateStateProp} required />
</div>
<div>
<label>
		Level:
		</label>
		<input name='level2' type="text" value={this.props.level2Prop}
		onChange={this.props.updateStateProp}/>
</div>
<div>
<label>
		Level:
		</label>
		<input name='level3' type="text" value={this.props.level3Prop}
		onChange={this.props.updateStateProp}/>
</div>
</form>
</>


	)};


}
export default Skills