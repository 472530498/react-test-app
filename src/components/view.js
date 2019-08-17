import React from 'react'

class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h5>子组件获得父组件名字:{this.props.name}</h5>
                <input type="button" value={'子组件想改变名字'} onClick={this.handleClick.bind(this, '刘谦')}/>
            </div>
        )
    }

    handleClick(v) {
        console.log(v)
        this.props.changeName(v)
    }
}

export default View
