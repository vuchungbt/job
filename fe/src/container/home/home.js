import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Categories from '../../components/home/Categories'
import FeatureJobs from '../../components/home/FeaturesJobs'
import { getListPostService } from '../../service/userService'
const Home = () => {
  const [dataFeature, setDataFeature] = useState([])
  const [dataHot, setDateHot] = useState([])
  let loadPost = async (limit, offset) => {
    let arrData = await getListPostService({
      limit: limit,
      offset: offset,
      categoryJobCode: '',
      addressCode: '',
      salaryJobCode: '',
      categoryJoblevelCode: '',
      categoryWorktypeCode: '',
      experienceJobCode: '',
      sortName: false
    })
    let arrData2 = await getListPostService({
      limit: limit,
      offset: offset,
      categoryJobCode: '',
      addressCode: '',
      salaryJobCode: '',
      categoryJoblevelCode: '',
      categoryWorktypeCode: '',
      experienceJobCode: '',
      sortName: false,
      isHot: 1
    })
    if (arrData && arrData.errCode === 0) {
      setDataFeature(arrData.data)
    }
    if (arrData2 && arrData2.errCode === 0) {
      setDateHot(arrData2.data)
    }
  }
  useEffect(() => {
    let fetchPost = async () => {
      await loadPost(5, 0)
    }
    fetchPost()
  }, [])
  return (
    <>
      <main>
        <div class="our-services section-pad-t30">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-tittle text-center">
                  <span>Lĩnh vực công việc nổi bật</span>
                  <h2>Danh mục nghề nghiệp </h2>
                </div>
              </div>
            </div>
            <Categories />
          </div>
        </div>
        <div class="online-cv cv-bg section-overly pt-90 pb-120" style={{
          backgroundImage: `url("assets/img/gallery/cv_bg.jpg")`
        }}>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10">
                <div class="cv-caption text-center">
                  <p class="pera1">Nhiều công việc đang chờ bạn</p>
                  <p class="pera2"> Bạn đã hứng thú đã tìm việc chưa ?</p>
                  <Link to='/job' class="border-btn2 border-btn4">Tìm việc ngay</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="featured-job-area feature-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-tittle text-center">

                  <h2>Công việc nổi bật</h2>
                </div>
              </div>
            </div>
            <FeatureJobs dataFeature={dataHot} />
          </div>
        </section>
        <section class="featured-job-area feature-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-tittle text-center">

                  <h2>Công việc mới đăng</h2>
                </div>
              </div>
            </div>
            <FeatureJobs dataFeature={dataFeature} />
          </div>
        </section>
        <div class="apply-process-area apply-bg pt-150 pb-150" style={{
          background: `rgba(31,43,123,0.8)`
        }}>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-tittle white-text text-center">
                  <span>Quy trình tìm việc</span>
                  <h2> Thực hiện như thế nào ?</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-process text-center mb-30">
                  <div class="process-ion">
                    <span class="flaticon-search"></span>
                  </div>
                  <div class="process-cap">
                    <h5>1. Tìm kiếm công việc</h5>

                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-process text-center mb-30">
                  <div class="process-ion">
                    <span class="flaticon-curriculum-vitae"></span>
                  </div>
                  <div class="process-cap">
                    <h5>2. Ứng tuyển công việc</h5>

                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-process text-center mb-30">
                  <div class="process-ion">
                    <span class="flaticon-tour"></span>
                  </div>
                  <div class="process-cap">
                    <h5>3. Nhận công việc</h5>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  )
}

export default Home
