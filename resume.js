import React from 'react';
import ReactDOM from 'react-dom';
import Education from './education';
import Profile from './Profile';
import Skills from './skills';
import Summary from './summary';
import Success from './Success';
import Work from './work';
import './common.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import  { Component } from 'react';
import jsPDF from 'jspdf';


class Resume extends React.Component{
	constructor(props){
		super(props);
		this.state={
			step:1,
			firstname:' ',
			lastname:'',
			email:'',
			phone: '',
			github:'',
			linkedin : '',
			university:' ',
			st:'',
			field :'',
			city: '',
			 degree:'',
			from  : '',
			to:'',
            work :'',
            skill1:'',
            skill2:'',
            skill3:'',
            level1:'',
            level2:'',
            level3:'',
            summary:'',
            work:'',
            work2:'',
            position1:'',
            position2:'',
            duration1:'',
            duration2:''
            

		}
		
		
	}
	handleChange=(e)=>{
		
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	 nextStep=()=>{
		const {step}= this.state;
		this.setState({
			step:step+1,
		});
	}
	prevStep=()=>{
		const{step}=this.state;
		this.setState({
			step:step-1,

		});
	}
	 jspdfGenerator = () => {
    // const string = renderToString(<print />);
   
    var doc= new jsPDF("p","pt","a4");
     // doc.fromHTML(string);
     doc.html(document.querySelector("#Success"),{
      callback: function(pdf){
doc.save("mypdf.pdf");
      }
     });


         


    };
	
	
	
	
	render(){
		const step1=this.state.step;

		if(step1==1){
return(

	<div>
	
	<br/>
	<h1> RESUME BUILDER </h1><br/><br/>
	

<Profile firstNameProp={this.state.firstname} lastNameProp={this.state.lastname} emailProp={this.state.email} phoneProp={this.state.phone}
githubProp={this.state.github} linkedinProp={this.state.linkedin} workProp={this.state.work}
updateStateProp={this.handleChange}  />
<button onClick={this.nextStep}>Next</button>

	</div>



	)}
if(step1==2){
	return(
		<div>
		<br/>

<Education universityProp={this.state.university} stProp={this.state.st} fieldProp={this.state.field} cityProp={this.state.city}
degreeProp={this.state.degree} fromProp={this.state.from} toProp={this.state.to}  
updateStateProp={this.handleChange}  />
<button onClick={this.prevStep}>Previous</button>
<button onClick={this.nextStep}>Next</button>
</div>

)}
if(step1==3){
	return (
		<div>
		<br/>
		<Work workProp={this.state.work} work2Prop={this.state.work2} position1Prop={this.state.position1}
position2Prop={this.state.position2} duration1Prop={this.state.duration1} duration2Prop={this.state.duration2}
		/>
		<button onClick={this.prevStep}>Previous</button>
<button onClick={this.nextStep}>Next</button>
		</div>
	)
}
if(step1==4){
	return(
	<div>
	<h1> SKILLS</h1>

		<br/>

<Skills skill1Prop={this.state.skill1} skill2Prop={this.state.skill2} skill3Prop={this.state.skill3} level1Prop={this.state.level1}
level2Prop={this.state.level2} level3Prop={this.state.level3} 
updateStateProp={this.handleChange}  />
<button onClick={this.prevStep}>Previous</button>
<button onClick={this.nextStep}>Next</button>
</div>

)}
if(step1==5){
	return (
	<div>
	<h1>SUMMARY</h1>
	<Summary summaryProp={this.state.summary} updateStateProp={this.handleChange} />
	<button onClick={this.prevStep}>Previous</button>
	<button onClick={this.nextStep}>Done</button>
	</div>
	)
}


if(step1==6){
	return(
	<div>

<Success 
values={this.state}
prevStep={this.prevStep}
submitted={this.submitted}
updateStateProp={this.handleChange}
/>
 <button onClick={this.prevStep}>Previous</button>
 	<button onClick={this.jspdfGenerator}>Generate Pdf</button>


</div>
	)
}



}



		

};




export default Resume;