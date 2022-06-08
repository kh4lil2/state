import './App.css';
import React from 'react'
import image from './img.jpg'
class App extends React.Component  {
  state = {
    
    fullName: "Khalil Rafrafi" ,
    bio:"Welcome to my profil" ,
    profession:"I'am a Web Developer",
    show: true,
    text : "Hide",
    count:0,
  };
 
  componentDidMount() {
     setInterval(()=>this.setState({count:this.state.count+1}), 1000);
   
  }

onchange = () =>{
this.setState({show : !this.state.show})
if (this.state.show==true) {
  this.setState({text : "Show"})
}
else{
this.setState({text : "Hide"})
}}
  render(){
    return (
      
      <div className="App">
        
        
           {this.state.show===true &&(
             <div>
             <h1 className='name'>{this.state.fullName}</h1>
             <h2 className='prof'>{this.state.profession}</h2>
             <h3 className='bio'>{this.state.bio}</h3>
             <img className='photo' src={image} />

             </div>
           )}
          <button className='button' onClick={this.onchange}>{this.state.text}</button>
          
          <button className='button2' >{this.state.count}</button>
      </div>
    );
  }
 
}

export default App;
