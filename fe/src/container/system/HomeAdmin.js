import React from 'react'
import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import Footer from './Footer';
import ManageUser from './User/ManageUser';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import AddUser from './User/AddUser';
import AddJobType from './JobType/AddJobType';
import ManageJobType from './JobType/ManageJobType';
import AddJobLevel from './JobLevel/AddJobLevel';
import ManageJobLevel from './JobLevel/ManageJobLevel';
import AddWorkType from './WorkType/AddWorkType';
import ManageWorkType from './WorkType/ManageWorkType';
import AddSalaryType from './SalaryType/AddSalaryType';
import ManageSalaryType from './SalaryType/ManageSalaryType';
import AddExpType from './ExpType/AddExpType';
import ManageExpType from './ExpType/ManageExpType';
import AddCompany from './Company/AddCompany';
import Recruitment from './Company/Recruitment';
import ManageEmployer from './Company/ManageEmployer';
import AddPost from './Post/AddPost';
import ManagePost from './Post/ManagePost';
import ManageCv from './Cv/ManageCv';
import FilterCv from './Cv/FilterCv';
import UserCv from './Cv/UserCv';
import ChangePassword from './User/ChangePassword';
import UserInfo from './User/UserInfo';
import BuyPost from './Post/BuyPost';
import PaymentSuccess from './Post/BuySucces';
import AddpackagePost from './PackagePost/AddPackagePost';
import ManagePackagePost from './PackagePost/ManagePackagePost';
import NotePost from './Post/NotePost';
import ManageCompany from './Company/ManageCompany';
import AddJobSkill from './JobSkill/AddJobSkill';
import ManageJobSkill from './JobSkill/ManageJobSkill';
import DetailFilterUser from './Cv/DetailFilterUser';
import AddpackageCv from './PackageCv/AddPackageCv';
import ManagePackageCv from './PackageCv/ManagePackageCv';
import PaymentSuccessCv from './PackageCv/BuySuccesCv';
import BuyCv from './PackageCv/BuyCv';
import HistoryTradePost from './HistoryTrade/HistoryTradePost';
import HistoryTradeCv from './HistoryTrade/HistoryTradeCv';
import ChartPost from './Chart/ChartPost';
import ChartCv from './Chart/ChartCv';
const HomeAdmin = () => {
    return (
        <Router>
            <Switch >
                <div className="container-scroller">
                    <Header />
                    <div className="container-fluid page-body-wrapper">
                        <Menu />
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <Route exact path="/admin/">
                                    <Home />
                                </Route>
                                <Route exact path="/admin/list-user">
                                    <ManageUser />
                                </Route>
                                <Route exact path="/admin/add-user">
                                    <AddUser />
                                </Route>
                                <Route exact path="/admin/edit-user/:id">
                                    <AddUser />
                                </Route>
                                <Route exact path="/admin/add-job-type">
                                    <AddJobType />
                                </Route>
                                <Route exact path="/admin/list-job-type">
                                    <ManageJobType />
                                </Route>
                                <Route exact path="/admin/edit-job-type/:code">
                                    <AddJobType />
                                </Route>
                                <Route exact path="/admin/add-job-skill">
                                    <AddJobSkill />
                                </Route>
                                <Route exact path="/admin/list-job-skill">
                                    <ManageJobSkill />
                                </Route>
                                <Route exact path="/admin/edit-job-skill/:code">
                                    <AddJobSkill />
                                </Route>
                                <Route exact path="/admin/add-job-level">
                                    <AddJobLevel />
                                </Route>
                                <Route exact path="/admin/list-job-level">
                                    <ManageJobLevel />
                                </Route>
                                <Route exact path="/admin/edit-job-level/:id">
                                    <AddJobLevel />
                                </Route>
                                <Route exact path="/admin/add-work-type">
                                    <AddWorkType />
                                </Route>
                                <Route exact path="/admin/list-work-type">
                                    <ManageWorkType />
                                </Route>
                                <Route exact path="/admin/edit-work-type/:id">
                                    <AddWorkType />
                                </Route>
                                <Route exact path="/admin/add-salary-type">
                                    <AddSalaryType />
                                </Route>
                                <Route exact path="/admin/list-salary-type">
                                    <ManageSalaryType />
                                </Route>
                                <Route exact path="/admin/edit-salary-type/:id">
                                    <AddSalaryType />
                                </Route>
                                <Route exact path="/admin/add-exp-type">
                                    <AddExpType />
                                </Route>
                                <Route exact path="/admin/list-exp-type">
                                    <ManageExpType />
                                </Route>
                                <Route exact path="/admin/edit-exp-type/:id">
                                    <AddExpType />
                                </Route>
                                <Route exact path="/admin/add-package-post">
                                    <AddpackagePost />
                                </Route>
                                <Route exact path="/admin/list-package-post">
                                    <ManagePackagePost />
                                </Route>
                                <Route exact path="/admin/edit-package-post/:id">
                                    <AddpackagePost />
                                </Route>
                                <Route exact path="/admin/add-package-cv">
                                    <AddpackageCv />
                                </Route>
                                <Route exact path="/admin/list-package-cv">
                                    <ManagePackageCv />
                                </Route>
                                <Route exact path="/admin/edit-package-cv/:id">
                                    <AddpackageCv />
                                </Route>
                                <Route exact path="/admin/add-company">
                                    <AddCompany />
                                </Route>
                                <Route exact path="/admin/edit-company">
                                    <AddCompany />
                                </Route>
                                <Route exact path="/admin/edit-company-admin/:id">
                                    <AddCompany />
                                </Route>
                                <Route exact path="/admin/recruitment">
                                    <Recruitment />
                                </Route>
                                <Route exact path="/admin/list-employer">
                                    <ManageEmployer />
                                </Route>
                                <Route exact path="/admin/add-post">
                                    <AddPost />
                                </Route>
                                <Route exact path="/admin/edit-post/:id">
                                    <AddPost />
                                </Route>
                                <Route exact path="/admin/list-post/">
                                    <ManagePost />
                                </Route>
                                <Route exact path="/admin/list-post/:id">
                                    <ManagePost />
                                </Route>
                                <Route exact path="/admin/buy-post/">
                                    <BuyPost />
                                </Route>
                                <Route exact path="/admin/payment/success">
                                    <PaymentSuccess />
                                </Route>
                                <Route exact path="/admin/buy-cv/">
                                    <BuyCv />
                                </Route>
                                <Route exact path="/admin/paymentCv/success">
                                    <PaymentSuccessCv />
                                </Route>
                                <Route exact path="/admin/list-post-admin/">
                                    <ManagePost />
                                </Route>
                                <Route exact path="/admin/list-cv/:id">
                                    <ManageCv />
                                </Route>
                                <Route exact path="/admin/list-candiate/">
                                    <FilterCv />
                                </Route>
                                <Route exact path="/admin/candiate/:id">
                                    <DetailFilterUser />
                                </Route>
                                <Route exact path="/admin/note/:id">
                                    <NotePost />
                                </Route>
                                <Route exact path="/admin/user-cv/:id">
                                    <UserCv />
                                </Route>
                                <Route exact path="/admin/changepassword/">
                                    <ChangePassword />
                                </Route>
                                <Route exact path="/admin/user-info/">
                                    <UserInfo />
                                </Route>
                                <Route exact path="/admin/list-company-admin/">
                                    <ManageCompany />
                                </Route>
                                <Route exact path="/admin/history-post/">
                                    <HistoryTradePost />
                                </Route>
                                <Route exact path="/admin/history-cv/">
                                    <HistoryTradeCv />
                                </Route>
                                <Route exact path="/admin/sum-by-year-post/">
                                    <ChartPost />
                                </Route>
                                <Route exact path="/admin/sum-by-year-cv/">
                                    <ChartCv />
                                </Route>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </Switch >
        </Router>
    )
}

export default HomeAdmin
