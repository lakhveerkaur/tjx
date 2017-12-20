import React from 'react';
import Request from 'superagent';

export default BookingOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    Request.get()
          .end((err, res) => {
            if (err) {
              console.log('Error from fetching bookingOrder data - > ',err);
            } else {
              console.log('response from bookingOrder data - > ',JSON.parse(res.text));
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
