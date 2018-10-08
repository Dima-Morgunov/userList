import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'

export class UserCart extends Component {
    render() {
        const {data} = this.props
        return (
            <div>
                <img />
                {
                  data && data.map(item =>
                      <div>
                          <Card
                              key = {item.id}
                              header={item.name}
                              meta={item.phone}
                              description={
                                  `city: ${item.address.city}`
                              }
                              extra={item.address.street}
                          />
                          <br/>
                      </div>
                  )
                }
            </div>
        )
    }
}
export default UserCart
