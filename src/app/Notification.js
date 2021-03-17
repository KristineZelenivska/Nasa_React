import './styles/notification.sass';
import React from "react";
import {Toast, ToastBody,Button} from 'reactstrap';
import {ImCross} from 'react-icons/im';


const Notification=({showError,toggleToastState})=> (
    <Toast isOpen={showError} className='toastContainer'>
    <ToastBody className='toastBody'>
      <Button color='danger' onClick={toggleToastState} className='toastButton'>
        <ImCross/>
      </Button>
      <br/>
      Something went wrong :( 
      <br/>
      Please, try again
    </ToastBody>          
  </Toast>
)

export default Notification;