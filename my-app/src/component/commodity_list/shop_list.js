/**
 * Created by tcsd on 17/11/26.
 */
import React,{Component} from 'react';

class ShopList extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <li className="comm_list">
                <img src={this.props.comm_img} />
                <span className="comm_name">{this.props.name.length > 12 ? this.props.name.slice(0,13)+'...' : this.props.name}</span>
                <span className="comm_price">{"¥" + this.props.price}</span>
            </li>
        )
    }
}

export default ShopList;