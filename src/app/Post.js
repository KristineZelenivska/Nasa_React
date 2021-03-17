import './styles/post.sass'
import React,{ useState } from "react";
import {Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';
import {get} from 'lodash'

const Post=({ data })=> {
  const [isOpen, handleOpen] = useState(false);
 
  return (
    <Card className='postCard' >
      {get(data,'media_type') !== 'other' &&
        <span>
          {get(data,'media_type')==='image' ?
            <CardImg
              className='postImage'
              src={get(data,'url')} 
              alt="Card image cap" />
            : <iframe 
                className='postVideo'
                src={get(data,'url')}
                title={get(data,'title')}></iframe>
          }
        </span>
      }
      <CardBody >
        <CardTitle tag="h4" className='titleStyle'>{get(data,'title')}</CardTitle>
        <hr/>
        <CardText className='textStyle'>{isOpen?get(data,'explanation'):`${data.explanation.slice(0,100)}...`}
          <br/>
          <a href='#!' className='linkStyle' onClick={() => handleOpen(!isOpen)}>{isOpen ? 'Show less':'Show more'}</a>
        </CardText>
        <CardText>
          {get(data,'copyright')&&<small className="text-muted">Copyright: {get(data,'copyright')} <br/></small> }
          <small className="text-muted">Published in {get(data,'date').slice(0,4)}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}
export default Post;