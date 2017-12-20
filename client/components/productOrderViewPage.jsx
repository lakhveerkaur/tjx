import React from 'react';
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown,Table,Modal  } from 'semantic-ui-react';
import Request from 'superagent';

export default class ProductOrderViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData : [],
      poDetails : [],
      modalOpen : false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    Request.get('/purchaseOrder')
            .end((err, res) => {
              if (err) {
                console.log('Error from fetching purchaseOrder data - > ',err);
              } else {
                console.log('res from purchaseOrder data - > ',JSON.parse(res.text), typeof res.text);
                this.setState({
                  tableData:JSON.parse(res.text).tableData,
                  poDetails:JSON.parse(res.text).poDetails
                });
                console.log('-- > ',this.state);
              }
            });
  }
  handleOpen() {
    this.setState({modalOpen: true});
  }
  handleClose() {
    this.setState({modalOpen: false});
  }
  render() {
    var modelView = <h1>Hello</h1>
    var tableBody = this.state.tableData.map((item, i) => {
      return(
        <Table.Row key={i}>
          <Table.Cell className='table'>{item.purchaseOrderId}</Table.Cell>
          <Table.Cell className='table'>{item.purchaseCreationDate}</Table.Cell>
          <Table.Cell className='table'>{item.purchasePickupDate}</Table.Cell>
          <Table.Cell className='table'>{item.purchaseDeliveryDate}</Table.Cell>
          <Table.Cell className='table'>
            <Modal trigger={<Button onClick={this.handleOpen} icon><Icon name='external' /></Button>} open={this.state.modalOpen} onClose={this.handleClose} size='small'>
              <Modal.Content>
                <Table inverted>
                  <Table.Header >
                    <Table.Row>
                      <Table.HeaderCell className='tableHeader'>Sku Id</Table.HeaderCell>
                      <Table.HeaderCell className='tableHeader'>Units</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.state.poDetails.map((item1, i1) => {
                      if (item.purchaseOrderId === item1.po_id) {
                        console.log('item1 - > ',item1.po_id,item.purchaseOrderId,item1.sku_id);
                        return(
                          <Table.Row key={i1}>
                            <Table.Cell className='table'>{item1.sku_id}</Table.Cell>
                            <Table.Cell className='table'>{item1.ordered_quantity}</Table.Cell>
                          </Table.Row>
                        );
                      }
                    })}
                  </Table.Body>
                </Table>
              </Modal.Content>
              <Modal.Actions>
               <Button color='red' onClick={this.handleClose} inverted>
                 <Icon name='close' /> Close
               </Button>
             </Modal.Actions>
            </Modal>
          </Table.Cell>
        </Table.Row>
      );
    });

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
          <Table inverted >
            <Table.Header >
              <Table.Row>
                <Table.HeaderCell className='tableHeader'>Purchase Order Id</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>P.O Creation Date</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>P.O. Pickup Date</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>P.O. Delivery Date</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>Sku Details</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tableBody}
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
  }
}
