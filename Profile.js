import React from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import Resume from './resume';
class Profile extends React.Component{
	render(){
	return(

<>
<form onSubmit={this.nextStep} id='profileForm'>
<div className="one">
		<label >
		FirstName:
		</label>
		<input name='firstname' type="text" value={this.props.firstNameProp}
		onChange={this.props.updateStateProp} required/>
		
		</div>
		<div>
		<label>
		LastName:
		</label>
		<input name='lastname' type="text" value={this.props.lastNameProp}
		onChange={this.props.updateStateProp} required/>
</div>
<div className="two">
<label>
		Email:
		</label>
		<input name='email' type="email" value={this.props.emailProp}
		onChange={this.props.updateStateProp}/>
</div>
<div>
<label>
		Phone No:
		</label>
		<input name='phone' type="text" value={this.props.phoneProp}
		onChange={this.props.updateStateProp} required />
</div>
<div>
<label>
		Github:
		</label>
		<input name='github' type="text" value={this.props.githubProp}
		onChange={this.props.updateStateProp}/>
</div>
<div>
<label>
		Linkedin:
		</label>
		<input name='linkedin' type="text" value={this.props.linkedinProp}
		onChange={this.props.updateStateProp}/>
</div>
</form>
</>


	)};


}
export default Profile