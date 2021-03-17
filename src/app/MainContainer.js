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
    error:get(state,'nasa.error')
  });
  
class Main extends Component {
  state={
    showError: false
  }

  componentDidMount() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.props.actions.getNasaData(today,()=>this.toggleToastState());
  }

  toggleToastState = () => {
    this.setState((state) => ({
      showError: !state.showError,
    }));
  };

  getDate=()=> {
    let today = new Date();
    const ddT = String(today.getDate()).padStart(2, '0');
    const mmT = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyyT = today.getFullYear();
    today = yyyyT + '-' + mmT + '-' + ddT;

    let randomDate = momentRandom(today,'1995-06-16');
    const dd = String(randomDate.date()).padStart(2, '0');
    const mm = String(randomDate.month() + 1).padStart(2, '0');
    const yyyy = randomDate.year();
   
    randomDate = yyyy + '-' + mm + '-' + dd;

    return randomDate;
}
  getRandomPost = () => {
    const { actions } = this.props;
    actions.getNasaData(this.getDate(), ()=>this.toggleToastState());
  };

 scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
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
  

