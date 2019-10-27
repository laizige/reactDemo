import React, { Component } from 'react'; //imrc
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component { //cc

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div onClick={this.handleClick}>
               {this.props.avname} 为你服务{this.props.content}
            </div>
        );
    }

    handleClick() {

        this.props.deleteItem(this.props.index)
    }

}
//--------------主要代码--------start
XiaojiejieItem.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
//--------------主要代码--------end

// 如果子组件没传，这里给一个默认值
XiaojiejieItem.defaultProps = {
    avname:'张老师'
}
export default XiaojiejieItem;