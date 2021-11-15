import {connect} from "react-redux";
import {useEffect} from "react";
import "../assets/css/home.css"
import {FcStatistics, GiJigsawBox, MdOutlineCardTravel} from "react-icons/all";
import {CSS_COLOR_NAMES as Color} from "../App/colors";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


function Home(props) {
    const AreaChartData = [
        {
            name: 'فروردین',
            بازدید: 42,
            خرید: 27,
            بازدهی: -53
        },
        {
            name: 'اردیبهشت',
            بازدید: 82,
            خرید: 31,
            بازدهی: -74

        }, {
            name: 'خرداد',
            بازدید: 90,
            خرید: 53,
            بازدهی: -19
        },
        {
            name: 'تیر',
            بازدید: 141,
            خرید: 72,
            بازدهی: 0

        }, {
            name: 'مرداد',
            بازدید: 131,
            خرید: 53,
            بازدهی: 20
        },
        {
            name: 'شهریور',
            بازدید: 183,
            خرید: 67,
            بازدهی: 40

        },
        {
            name: 'مهر',
            بازدید: 246,
            خرید: 40,
            بازدهی: 64
        },
        {
            name: 'آبان',
            بازدید: 303,
            خرید: 118,
            بازدهی: 59

        },
        {
            name: 'آذر',
            "بازدید": 253,
            خرید: 128,
            بازدهی: 81

        },
        {
            name: 'دی',
            "بازدید": 397,
            خرید: 298,
            بازدهی: 92

        }
    ];


    useEffect(() => {


    }, [])
    return (
        <div className="w-100" style={{minHeight: "80vh"}}>
            {/* <img src="https://images.squarespace-cdn.com/content/v1/5b64999be2ccd16cbfe99bbc/1540500279874-V7DISYMAP0BXJIY82PG3/spiderman.jpg" alt=""/>*/}
            {/*<img src="https://hype.my/wp-content/uploads/2015/04/Spider-Man-High-School-750x422.jpg" alt=""/>*/}
            {/*<img src="https://hollywoodsuite.ca/wp-content/uploads/poster/HS902191_poster_1920_1080.jpg" alt=""/>*/}

            <section
                className="animated fadeInUp statisticWidgetRow container p-4 d-flex flex-column flex-md-row align-items-center justify-content-around rounded">

                {/* widget item */}
                <div
                    className=" statisticWidget card-shadow-H card col-md-3 col-12 D:\Project\Dev\Javascript\ReactJs\New folder\dashboard\src\Layers\Home.js ">
                    <div
                        className=" rounded w-100 d-flex  p-4 align-items-center  justify-content-between ">
                        <div className="">
                            <FcStatistics size={40} color={Color.SteelBlue}/>
                        </div>
                        <div className="d-flex flex-column justify-content-between text-center ml-4 ">
                            <small className="text-secondary"> کل بازدید </small>
                            <strong>110</strong>
                            <small className="text-secondary"> نفر </small>

                        </div>
                    </div>
                </div>


                {/* widget item  AliceBlueBg */}
                <div
                    className="statisticWidget card-shadow-H card col-md-3 col-12 D:\Project\Dev\Javascript\ReactJs\New folder\dashboard\src\Layers\Home.js ">
                    <div
                        className=" rounded w-100 d-flex  p-4 align-items-center  justify-content-between ">
                        <div className="">
                            <GiJigsawBox size={40} color={Color.SeaGreen}/>
                        </div>
                        <div className="d-flex flex-column justify-content-between text-center ml-4 ">
                            <small className="text-secondary"> کل محصولات </small>
                            <strong>249</strong>
                            <small className="text-secondary"> کالا </small>

                        </div>
                    </div>
                </div>


                {/* widget item  WheatBg*/}
                <div
                    className="statisticWidget card-shadow-H card col-md-3 col-12 D:\Project\Dev\Javascript\ReactJs\New folder\dashboard\src\Layers\Home.js ">
                    <div
                        className=" rounded w-100 d-flex  p-4 align-items-center  justify-content-between ">
                        <div className="">
                            <MdOutlineCardTravel size={40} color={Color.SaddleBrown}/>
                        </div>
                        <div className="d-flex flex-column justify-content-between text-center ml-4 ">
                            <small className="text-secondary"> کل فروش </small>
                            <strong>8905</strong>
                            <small className="text-secondary"> محصول </small>

                        </div>
                    </div>
                </div>
            </section>
            {/*  end of statistic Widget Row  */}

            <section className="animated fadeInUp statisticsMain w-100  mt-0 p-4 rounded ">
                <div className="row flex-wrap">
                    <div className="card card-shadow-H bg-white p-2 col-12 "
                         style={{height: "300px", direction: "ltr !important"}}>
                        <div className="card-header bg-white border-0"> آمار یکسال اخیر</div>
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
                                <Area type="monotone" dataKey="بازدید" stroke="#913" fill="#900"/>
                                <Area type="monotone" dataKey="خرید" stroke="blue" fill="#058"/>
                                <Area type="monotone" dataKey="بازدهی" stroke="orange" fill="yellow"/>
                            </AreaChart>
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

export default connect(mapStateToProps)(Home);
