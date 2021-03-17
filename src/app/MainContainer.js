import './styles/main.sass';
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {get} from 'lodash'
import {CardGroup} from 'reactstrap';
import momentRandom from 'moment-random';
import Header from './Header.js'
import Post from './Post.js'
import Notification from './Notification.js'
import Scroll from './Scroll.js'
import { getNasaData} from '../redux/actions/nasaAction.js';

  const actionToProps = (dispatch) => ({
    actions: bindActionCreators({ getNasaData }, dispatch),
  });
  
  const mapStateToProps = (state) => ({
    nasa: get(state,'nasa.model',[]),
  });
  
class Main extends Component {
  state={
    showError: false
  }

getDate=(type)=>{
  let today = new Date();
  let dd =''
  let mm =''
  let yyyy =''
  if(type==='today'){
     dd= String(today.getDate()).padStart(2, '0');
     mm = String(today.getMonth() + 1).padStart(2, '0'); 
     yyyy = today.getFullYear();
  }else{
    today = momentRandom(today,'1995-06-16');
     dd = String(today.date()).padStart(2, '0');
     mm = String(today.month() + 1).padStart(2, '0');
     yyyy = today.year();
  }
  today = yyyy + '-' + mm + '-' + dd;
  return today
}

  componentDidMount() {
    this.props.actions.getNasaData(this.getDate('today'),()=>this.toggleToastState());
  }

  toggleToastState = () => {
    this.setState((state) => ({
      showError: !state.showError,
    }));
  };

  getRandomPost = () => {
    const { actions } = this.props;
    actions.getNasaData(this.getDate('random'), ()=>this.toggleToastState());
  };
 
  render() {
    const {nasa} = this.props
    const {showError} = this.state
    return (
      <div className="mainBody">
        <Header getRandomPost={this.getRandomPost}/>
        <CardGroup className='cardGroup'>
          {nasa.map((row,i)=>(
            <Post key={i} data={row}/>
            ))}
          </CardGroup> 
          <Scroll/>
          <Notification showError={showError} toggleToastState={this.toggleToastState}/>
      </div>
    )
  }
}
export default connect(mapStateToProps, actionToProps)(Main);
  

