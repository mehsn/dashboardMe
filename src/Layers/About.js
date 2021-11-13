import {connect} from "react-redux";
import {useEffect} from "react";
import "../css/home.css"
import React, {PureComponent} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

function About(props) {



    const data = [
        {name: 'Page A', uv: 4000},
        {name: 'Page B', uv: 3000},
        {name: 'Page C', uv: 2000},
        {name: 'Page D'},
        {name: 'Page E', uv: 1890},
        {name: 'Page F', uv: 2390},
        {name: 'Page G', uv: 3490},
    ];

    useEffect(() => {


    }, [])
    return (
        <div className="w-100 p-2 " style={{minHeight: "80vh"}}>
            About component

            <div className="w-100">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}



const mapStateToProps = storeState => {
    return {designState: storeState.designStore.design}

}

export default connect(mapStateToProps)(About);
