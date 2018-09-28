import React, {Component} from 'react'

export class UserCart extends Component {
    state = {
        data:[]
    }
    render() {
        const {data} = this.state
        return (
            <div>
                <img />
               {data.map(e =>{
                   <ul>
                       <li>{e.userName}</li>
                       <li>{e.Name}</li>
                       <li>{e.phone}</li>
                   </ul>
                    })
                }

                <button>
                    More...
                </button>
            </div>
        )
    }
}
export default UserCart
