import React from 'react';
import Request rom 'superagent';

export default class InventoryPlanService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    Request.get('/inventoryPlans')
          .end((err, res) => {
            if (err) {
              console.log('Error from fetching inventory data - > ',err);
            } else {
              console.log('response from inventory data - > ',JSON.parse(res.text));
            }
          });
  }
  render() {
    return(
      <div>
        <Image src='./images/top.png'/>
        <br/>
        <Header as='h2' icon textAlign='center'>
          <Icon name='shopping cart' color='red' circular />
          <Header.Content className='header'>
            Purchased Order View
          </Header.Content>
        </Header>
        <Segment>

        </Segment>
      </div>
    );
  }
}
