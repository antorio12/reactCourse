import React from 'react';
import './seedling.css';
import withClasses from '../hoc/withClasses'

class Seedling extends React.Component{
    componentWillUnmount(){
        console.log('delete')
    }
    render(){
       
            let inputClasses=['input'];
            if (this.props.plantName!==""){
                inputClasses.push('green')
            } else{
                inputClasses.push('red')
            }
        
        // const styleDiv={
        //     border: '2px solid #ccc',
        //     boxShadow: '0 4px 5px 0 rgba(0,0,0 0.14)',
        //     ':hover': {
        //         border: '4px solid gold',
        //         boxShadow: '0 4px 45px 0 rgba(0,0,0 0.34)',
        //         cursor: 'pointer',
        //         transition: 'border, box-shadow 1s'
        //     }
        // }
        
       // console.log( classes.toString())
        console.log('done')
            return (
            <React.Fragment>
            <h2>Plant : {this.props.plantName} </h2>
            <p>year : {this.props.age}</p>
            {this.props.children}
            
            <input type='text' 
            onChange={this.props.onChangeName}
             value={this.props.plantName}
             className= {inputClasses.join(' ')}></input>
            <button onClick={this.props.onDelete}>
                Kick Me
            </button>
            </React.Fragment>
            );}
        
    
}
export default withClasses(Seedling, ['seedlingMain'])