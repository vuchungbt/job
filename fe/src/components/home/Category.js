import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Category = (props) => {
    return (
        <>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30 h-100">
                            <div class="services-ion">
                                <img style={{width: '70%' , height: '70%'}} src={props.data.postDetailData.jobTypePostData.image}></img>
                            </div>
                            <div class="services-cap">
                               <h5><Link to="job">{props.data.postDetailData.jobTypePostData.value}</Link></h5>
                                <span>{props.data.amount}</span>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Category
