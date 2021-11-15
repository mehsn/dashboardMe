import {connect} from "react-redux";
import {useEffect} from "react";
import "../assets/css/home.css"
import React from 'react';
import ProfileImg from '../Img/ProfileImg.jpg';

function Profile(props) {


    useEffect(() => {


    }, [])
    return (

        <div className="w-100 row animated fadeInUp" style={{minHeight: "80vh"}}>
        message

        </div>
    );
}


const mapStateToProps = storeState => {
    return {designState: storeState.designStore.design}

}

export default connect(mapStateToProps)(Profile);
