import React from 'react';
import Carosel from './carosel.jsx';
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      activeItem: 'create',
      activeItem2:'bread'
     }
  }
  render() {
    // const {activeItem} = this.state
    //   const {activeItem2} = this.state
    return(
      <div>
        <Image src='./images/top.png' style={{width:"100%"}}/>
      <Carosel/>
    </div>
    );
  }
}
