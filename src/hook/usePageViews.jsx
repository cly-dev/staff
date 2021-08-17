import {useLocation,Link} from "react-router-dom";
import {Breadcrumb} from "antd";
import React,{useState} from "react";
function usePageViews(props){
    let location=useLocation();
    const [route,setRoute]=useState([]);
    React.useEffect(()=>{
        const path= location.pathname.replace('/admin-index','');
        setRoute(path.slice(1,path.length).split('/'));
    },[location]);

    return (
        <React.Fragment>
            <Breadcrumb className="crumb-nav" >
                <Breadcrumb.Item><Link to='/admin-index'>首页</Link></Breadcrumb.Item>
                <Breadcrumb.Item>{route[0]}</Breadcrumb.Item>
                <Breadcrumb.Item>{route[1]}</Breadcrumb.Item>                  
         </Breadcrumb>
        </React.Fragment>
    );
}
export default usePageViews;