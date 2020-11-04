import React from 'react'
import View from './View'

class GOT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters:[],
            houses:[],
            info:{
                first:"",
                last:"",
                age:0,
                titles:[],
                status:"",
                pic:"",
                house:"",
                weapon:"",
                appearances:0

            },
        }
    }
    
    characterClick = (character) => {
        this.setState({
            info:{
                first:character.first,
                last:character.last,
                age:character.age,
                titles:character.titles,
                status:character.status,
                pic:character.pict,
                weapon:character.weapon,
                house:this.state.houses.find((house) => house.id === character.house.id),
                appearances:character.appearances
            }
        })
    }

    houseClick = (house) => {
        console.log(house.id)
        console.log(`https://cristiamportfolioapis.herokuapp.com/got/characters/${house.id}`)
        fetch(`https://cristiamportfolioapis.herokuapp.com/got/characters/${house.id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                characters:data
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount(){
        fetch('https://cristiamportfolioapis.herokuapp.com/got/char-list')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({

                characters:data,
                info:{
                    first:data[0].first,
                    last:data[0].last,
                    age:data[0].age,
                    titles:data[0].titles,
                    status:data[0].status,
                    weapon:data[0].weapon,
                    pic:data[0].pict,
                    house:this.state.houses.find((house) => house.id === data[0].house.id),
                    appearances:data[0].appearances
                }
            })
        }).catch(err => console.log("Error: ", err))

        fetch('https://cristiamportfolioapis.herokuapp.com/got/house-list')
        .then(response => response.json())
        .then(data => {
            this.setState({
                houses:data
            })
        })
    }
    render(){
        return(
            <div className="content">

                <div className="house-box">
                    <div className="house-wrapper">
                        {this.state.houses.map((house) =>{
                            return (
                                <div key={house.id} className={"house"} onClick={() => {this.houseClick(house)}} >
                                    <img src={house.pic} alt={house.name}></img>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>


                <View first={this.state.info.first} 
                last={this.state.info.last} 
                age={this.state.info.age}
                status={this.state.info.status}
                pic={this.state.info.pic}
                house={this.state.info.house}
                titles={this.state.info.titles}
                appearances={this.state.info.appearances}
                weapon={this.state.info.weapon}
                 />
                
    
                

                <div className="character-box">
                    <div className="character-wrapper">
                        
                        {this.state.characters.map((character) =>{
                            return(
                                <div key={character.id} 
                                onClick={()=>{this.characterClick(character)}}
                                className={"character"}
                                >
                                    <img src={character.pict} 
                                    alt={`${character.first} ${character.last}`}></img>
                                </div>
                            )
                        })} 
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default GOT