import React from 'react'

class Result extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render(props) {
        console.log("Render Result:", this.props.value);
        return (

            <div className="result-container">{
                this.props.value && this.props.value.length > 0 &&
                this.props.value.map((item, i) => <div key={item + i}> {
                        <div className="transparent">
                            <div className="container__col-3">
                                <img src={item.picture} style={{width: 60, heigth: 80}}/>
                            </div>
                            <div className="container__col-8">
                                <div><h2>{item.name}</h2></div>
                                <div><p>{item.about}</p></div>
                            </div>
                            <div>
                                <h3>Price : {item.price}</h3>
                            </div>
                        </div>
                    }
                    </div>
                )
            }</div>)
    }
}


module.exports = Result
