
import ReactDOM from 'react-dom';
import Resume from './resume';
import Profile from './Profile';
import './common.css';
import jsPDF from 'jspdf';
import axios from 'axios';
import { saveAs } from 'file-saver';
import React, { PureComponent } from 'react';
import { renderToString } from "react-dom/server";
 

class Success extends PureComponent{
	
   
	render(){
		const{values,handleChange}=this.props;
    
  
	return(
	
<>
<div id="Success">
<div class="pdf">
      <div class="S1contact">
      <h1>{values.firstname} {values.lastname}</h1>
<h2>Details</h2>
<p>{values.phoneno}</p>
<p>{values.email}</p>
<p>{values.linkedin}</p>
<p>{values.github}</p>



      </div>
            <div class="S1profile">
            <h1> Profile </h1>
            <p>{values.summary} </p>
            </div>
            <div class="S1work">
            <h3>EXPERIENCE</h3>
            <p>{values.postion1} - {values.work}</p>
            <p>{values.duration1}</p>
            <p>{values.postion2} - {values.work2}</p>
            <p>{values.duration2}</p>
                
            </div>
            <div class="S1ed">
            <h3> EDUCATION</h3>
            <p>{values.degree} {values.university} - {values.field}</p>
           <p> {values.from} - {values.to}</p>

            <br/>

            </div>
            <div class="S1skill">
            <h3>SKILLS</h3>
            <p>{values.skill1}</p>
            <p>{values.level1}</p>
            <p>{values.skill2}</p>
            <p>{values.level2}</p>
            <p>{values.skill3}</p>
            <p>{values.level3}</p>
           </div>
         
           </div>
           </div>
           
    
	
	
	
       

</>
	);
           

            
  
    
  }
}
export default Success
