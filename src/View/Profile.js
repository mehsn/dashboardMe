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
            <div className="card card-shadow-H col-12 col-md-5 col-lg-4 m-1 " style={{height:"350px"}} >
                <div className="card-header bg-white"> تغییر عکس</div>
                <div className="card-img-top pt-2 ">
                    <img className="img-thumbnail  square-200 m-auto rounded-circle  " src={ProfileImg} alt=""/>
                </div>
                <div className="  ">

                    <div className="flex-row  w-100 ">
                        <button className="m-2 btn btn-danger"> حذف عکس</button>

                        <button className=" m-2 btn btn-primary"> تغییر عکس</button>
                    </div>
                </div>
            </div>

            <div className="card card-shadow-H col-12 col-md-6 col-lg-7 m-1 pb-2">
                <div className="card-header bg-white mb-4"> تغییر اطلاعات</div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label text-end w-100" >نام</label>
                        <input type="text" className="form-control" id="inputName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLastName" className="form-label w-100 text-right">نام خانوادگی</label>
                        <input type="text" className="form-control" id="inputLastName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-label w-100 text-right">شماره تلفن</label>
                        <input type="tel" className="form-control" id="inputPhone"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label w-100 text-right">ایمیل</label>
                        <input type="email" className="form-control" id="inputEmail"/>
                    </div>

                    <button type="submit" className="btn btn-primary">تغییر</button>
                </form>
            </div>

        </div>
    );
}


const mapStateToProps = storeState => {
    return {designState: storeState.designStore.design}

}

export default connect(mapStateToProps)(Profile);
