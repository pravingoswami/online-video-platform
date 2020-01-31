import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { browserHistory } from '@version/react-router-v3';


class BreadcrumbDesign extends React.Component{

    render(){
        return(
            <Breadcrumb>
            {/* <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem> */}
              {/* <BreadcrumbItem>{console.log('browserHistory', browserHistory.getCurrentLocation())}</BreadcrumbItem> */}
              {/* <BreadcrumbItem>{console.log('browserHistory', browserHistory.getCurrentLocation())}<Link>Home</Link></BreadcrumbItem>
              <BreadcrumbItem>{console.log('browserHistory', browserHistory.getCurrentLocation())}<Link>Section</Link></BreadcrumbItem>
              <BreadcrumbItem>{console.log('browserHistory', browserHistory.getCurrentLocation())}<Link>Sub-Section</Link></BreadcrumbItem> */}
              {/* <BreadcrumbItem>{console.log('browserHistory', browserHistory.getCurrentLocation())}<Link>Sub - Section</Link></BreadcrumbItem> */}
               {/* {props.link.category &&  <BreadcrumbItem>{props.link.category.name}</BreadcrumbItem>} */}
{/*     
            <BreadcrumbItem>{console.log('linksssssss',browserHistory, this.props.history)} 
         <BreadcrumbItem>Home</BreadcrumbItem>HOME
            </BreadcrumbItem> */}
           
    
          </Breadcrumb>
        )
    }
}

export default BreadcrumbDesign