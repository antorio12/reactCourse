import React, { Component } from 'react';
import Counter from './Counter/counter'
import './App.css';
import Seedling from './seedling/seedling';

class App extends Component {
  state = {
    plants: [
      { plantName: 'huzlenut', age: '2' },
      { plantName: 'strawberry', age: '3' },
      { plantName: 'onion', age: '81' }
    ],
    pageTitle: "Hello village",
    showPlants: true
  }

  toggleHandler= (showPlants) => {
    this.setState({
      showPlants: !this.state.showPlants
    })
  }

  

  handlerStyle = () => {

    console.log('Bem-Bem');
    document.body.classList.toggle("night");
    const oldTitle = this.state.pageTitle;
    let newTitle = oldTitle;
    if (!(/any/i.test(oldTitle))) { newTitle = oldTitle + '+any' }
    this.setState({
      pageTitle: newTitle
    });
    console.log(this.state.pageTitle)
  }
  
  handlerStyleComponent= (newTitle) => {
    this.setState({
      pageTitle: newTitle
    });
    console.log(this.state.pageTitle)
  }

  onChangeName(name, index){
    console.log(name, index)
    const seed= this.state.plants[index];
    seed.plantName = name;
    let plants=[...this.state.plants];
    plants[index]= seed;
    this.setState({
      plants
    })
  }

  deleteHandler= (index) => {
    console.log(this)
    let plants=[...this.state.plants];
    plants.splice(index,1);
    this.setState({
      plants
    })

  }
  

  componentDidMount() {
    console.log('App componentDidMount')
  }
  render() {
    console.log('App render')
    return (
      <div className="App">
        <h1 style={{ fontSize: '30px' }}>{this.state.pageTitle}</h1>
        <button onClick={this.handlerStyle}>Boom!!!</button>
        <button onClick={this.toggleHandler}>Kick all plants!!!</button>
        <Counter/>
                {
              this.state.showPlants ?
                    this.state.plants.map((plant, index) => {
                    return (
                      <Seedling
                      key={index}
                    plantName={plant.plantName}
                    age={plant.age}
                    onDelete= {() => this.deleteHandler(index)}
                    onChangeName={event => this.onChangeName(event.target.value, index)} 
                    />
                    )
                  })
                  : null
        }     
      </div>
    );
  }
}

export default App;
