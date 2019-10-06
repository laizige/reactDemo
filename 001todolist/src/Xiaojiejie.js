import React, { Component, Fragment} from 'react';
import './App.css';

class Xiaojiejie extends Component {
    //js的构造函数，由于其他任何函数执行
    constructor(props){
        super(props)  //调用父类的构造函数，固定写法
        this.state={
            inputValue:'jspang',
            list: ['头部按摩', '头部按摩2','拔火罐']
        }
    }

    render() {
        return(
        <Fragment>
            <div>
                <label htmlFor="jspang">加入服务：</label>
                <input id="jspang" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                <button onClick={this.addList.bind(this)}>增加服务</button>
            </div>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <li 
                        key={index + item}
                        onClick={this.deleteItem.bind(this,index)}
                        dangerouslySetInnerHTML={{ __html: item }}
                        > 
                           
                            {/* <span className='txtred'> 删除</span> */}
                        </li>
                    })
                }
            </ul>    
        </Fragment> 
        ) 
    }

    inputChange(e) {
        console.log(e.target.value);
        // this.state.inputValue = e.target.value;
        this.setState({
            inputValue: e.target.value
        })
    }
    //增加服务的按钮响应方法
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })

    }
    // 删除列表项
    deleteItem(index){
        console.log(index)
        // this.state.list.splice(index,1)  不能直接操作state 中的值
        let list = this.state.list;
        list.splice(index,1)
        this.setState({
            list:list
            // list:this.state.list  不能直接操作state 中的值
        })
    }

}

export default Xiaojiejie
