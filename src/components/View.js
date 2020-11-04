import React from 'react'

function View(props) {
    return(

        <div className="info-box">
            <div className="pic-container">
                <div className="pic-box box">
                    <img id="img" src={props.pic} alt={`${props.first} ${props.last}`}></img>
                </div>
           </div> 
           <div className="text-container">
                <div className="char-info box">
                    <h2>{props.first} {props.last}</h2>
                    <p><strong>Age:</strong> {props.age} years old (8th season)</p>
                    <p><strong>Status:</strong> {props.status}</p>
                    <p><strong>Appearances:</strong> {props.appearances} episodes</p>
                    <p><strong>Weapon:</strong> {props.weapon}</p>
                    <div class="title-box">
                        <div id="title">
                            <strong>Titles</strong>
                        </div>
                        <div id="title-list">
                            <ul>
                                {props.titles.map((title) =>{return(<li>{title.title}</li>)})}
                            </ul>
                        </div>
                    </div>
                </div>
           </div>        
        </div>
    )
}

export default View