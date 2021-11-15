import {connect} from "react-redux";
import {useEffect} from "react";
import "../assets/css/home.css"
import {
    RadialBarChart, BarChart, Bar, Cell, AreaChart,
    Area,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer, RadialBar
} from 'recharts';


function Charts(props) {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const AreaChartData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const BarChartData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const RadialBarChartStyle = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };
    const RadialBarChartData = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: '25-29',
            uv: 26.69,
            pv: 4567,
            fill: '#83a6ed',
        },
        {
            name: '30-34',
            uv: 15.69,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: '35-39',
            uv: 8.22,
            pv: 9800,
            fill: '#82ca9d',
        },
        {
            name: '40-49',
            uv: 8.63,
            pv: 3908,
            fill: '#a4de6c',
        },
        {
            name: '50+',
            uv: 2.63,
            pv: 4800,
            fill: '#d0ed57',
        },
        {
            name: 'unknow',
            uv: 6.67,
            pv: 4800,
            fill: '#ffc658',
        },
    ];

    useEffect(() => {


    }, [])
    return (
        <div className="w-100 p-2 " style={{minHeight: "80vh"}}>
            <section className="animated fadeInUp statisticsMain w-100  mt-2 p-4 rounded ">
                <h2 className="text-secondary text-right font-weight-bolder"> نمودارها </h2>
                <br/>
                <div className="row flex-wrap">
                    <div className="card bg-white p-2 col-6 " style={{height: "300px", direction: "ltr !important"}}>
                        <div className="card-header bg-white border-0"> LineChart</div>
                        <ResponsiveContainer className="ltr" width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                            </LineChart>


                        </ResponsiveContainer>
                    </div>
                    <div className="card bg-white p-2 col-6 " style={{height: "300px", direction: "ltr !important"}}>
                        <div className="card-header bg-white border-0"> AreaChart</div>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={AreaChartData}
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
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>


                <div className="row flex-wrap">
                    <div className="card bg-white p-2 col-6 " style={{height: "300px", direction: "ltr !important"}}>
                        <div className="card-header bg-white border-0"> BarChart</div>

                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data}>
                                <Bar dataKey="uv" fill="#8884d8"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="card bg-white p-2 col-6 " style={{height: "300px", direction: "ltr !important"}}>
                        <div className="card-header bg-white border-0"> RadialBarChartData</div>


                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10}
                                            data={RadialBarChartData}>
                                <RadialBar
                                    minAngle={15}
                                    label={{position: 'insideStart', fill: '#fff'}}
                                    background
                                    clockWise
                                    dataKey="uv"
                                />
                                <Legend iconSize={10} layout="vertical" verticalAlign="middle"
                                        wrapperStyle={RadialBarChartStyle}/>
                            </RadialBarChart>
                        </ResponsiveContainer>


                    </div>
                </div>


            </section>
        </div>
    );
}

const mapStateToProps = storeState => {
    return {designState: storeState.designStore.design}

}

export default connect(mapStateToProps)(Charts);
