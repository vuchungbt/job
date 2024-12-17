import React from 'react'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { checkUserPhoneService, createNewUser, handleLoginService } from '../../service/userService';
import { useFetchAllcode } from '../../util/fetch';
import Otp from './Otp';
import handleValidate from '../../util/Validation';
import { Link } from 'react-router-dom'
const Register = () => {

    const firstNameRefs = React.createRef()
    const lastNameRefs = React.createRef()
    const phoneNumberRefs = React.createRef()
    const emailRefs = React.createRef()
    const passwordRefs = React.createRef()
    const againPassRefs = React.createRef()

    const [inputValidates, setValidates] = useState({
        phonenumber: true, password: true, firstName: true, lastName: true, email: true, againPass: true
    })
    const [inputValues, setInputValues] = useState({
        phonenumber: '', firstName: '', lastName: '', password: '', isOpen: false, dataUser: {}, roleCode: '', email: '', againPass: '', genderCode: ''
    });
    let { data: dataRole } = useFetchAllcode('ROLE');
    let { data: dataGender } = useFetchAllcode('GENDER');

    if (dataRole && dataRole.length > 0) {
        dataRole = dataRole.filter(item => item.code !== "ADMIN" && item.code !== "COMPANY")

    }
    if (dataGender && dataGender.length > 0 && inputValues.genderCode === '' && dataRole && dataRole.length > 0 && inputValues.roleCode === '') {
        setInputValues({ ...inputValues, genderCode: dataGender[0].code, roleCode: dataRole[0].code })
    }

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const pressEnterEvent = (event) => {
        if (event.keyCode === 13) {
            switch (event.target.id) {
                case "firstName":
                    firstNameRefs && lastNameRefs.current.focus();
                    break;
                case "lastName":
                    lastNameRefs && phoneNumberRefs.current.focus();
                    break;
                case "phonenumber":
                    phoneNumberRefs && emailRefs.current.focus();
                    break;
                case "email":
                    emailRefs && passwordRefs.current.focus();
                    break;
                case "password":
                    passwordRefs && againPassRefs.current.focus();
                    break;

                default:
                    break;
            }
        }
    };

    let handleRegister = async () => {

        let checkPhonenumber = handleValidate(inputValues.phonenumber, "phone")
        let checkPassword = handleValidate(inputValues.password, "password")
        let checkFirstName = handleValidate(inputValues.firstName, "isEmpty")
        let checkLastName = handleValidate(inputValues.lastName, "isEmpty")
        let checkEmail = handleValidate(inputValues.email, "email")
        if (!(checkPhonenumber === true && checkPassword === true && checkFirstName === true && checkLastName === true && checkEmail === true))
            return setValidates({
                phonenumber: checkPhonenumber,
                password: checkPassword,
                firstName: checkFirstName,
                lastName: checkLastName,
                email: checkEmail
            })

        if (inputValues.againPass !== inputValues.password) {
            toast.error("Mật khẩu không trùng khớp!")
            return
        }
        let res = await checkUserPhoneService(inputValues.phonenumber)
        if (res === true) {
            toast.error("Số điện thoại đã tồn tại !")
        } else {
            let createUser = async () => {
                let res = await createNewUser({
                    password: inputValues.password,
                    firstName: inputValues.firstName,
                    lastName: inputValues.lastName,
                    phonenumber: inputValues.phonenumber,
                    roleCode: inputValues.roleCode,
                    email: inputValues.email,
                    image: 'https://res.cloudinary.com/bingo2706/image/upload/v1642521841/dev_setups/l60Hf_blyqhb.png',
                })
                if (res && res.errCode === 0) {
                    toast.success("Tạo tài khoản thành công")
                    handleLogin(inputValues.phonenumber, inputValues.password)


                } else {
                    toast.error(res.errMessage)
                }
            }
            createUser()
        }

        
    }

    let handleLogin = async (phonenumber, password) => {

        let res = await handleLoginService({
            phonenumber: phonenumber,
            password: password
        })

        if (res && res.errCode === 0) {


            localStorage.setItem("userData", JSON.stringify(res.user))
            localStorage.setItem("token_user", res.token)
            if (res.user.roleCode === "ADMIN" || res.user.roleCode === "EMPLOYER") {
                window.location.href = "/admin/"

            }
            else {
                window.location.href = "/"
            }
        }
        else {
            toast.error(res.errMessage)
        }
    }

    return (
        <>
            {inputValues.isOpen === false &&
                <div className="container-scroller">
                    <div className="container-fluid page-body-wrapper full-page-wrapper">
                        <div className="content-wrapper d-flex align-items-center auth px-0">
                            <div className="row w-100 mx-0">
                                <div className="col-lg-4 mx-auto">
                                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                        <div className="brand-logo">
                                            <img src="/assets/img/logo/logo.png" alt="logo" />
                                        </div>
                                        <h4>Người mới?</h4>
                                        <h6 className="font-weight-light">Đăng ký dễ dàng chỉ vài bước đơn giản</h6>
                                        <form className="pt-3">
                                            <div className="form-group">
                                                <input type="text" placeholder="Họ" className="form-control form-control-lg" name="firstName" id="firstName"
                                                    value={inputValues.firstName} ref={firstNameRefs}
                                                    onChange={(event) => handleOnChange(event)} onKeyUp={(e) => pressEnterEvent(e)}
                                                />
                                                {inputValidates.firstName && <p style={{ color: 'red' }}>{inputValidates.firstName}</p>}
                                            </div>
                                            <div className="form-group">
                                                <input type="text" placeholder="Tên" className="form-control form-control-lg" name="lastName" id="lastName"
                                                    value={inputValues.lastName} ref={lastNameRefs}
                                                    onChange={(event) => handleOnChange(event)} onKeyUp={(e) => pressEnterEvent(e)}
                                                />
                                                {inputValidates.lastName && <p style={{ color: 'red' }}>{inputValidates.lastName}</p>}
                                            </div>
                                            <div className="form-group">
                                                <input type="text" placeholder="Số điện thoại" className="form-control form-control-lg" name="phonenumber" id="phonenumber"
                                                    value={inputValues.phonenumber} ref={phoneNumberRefs}
                                                    onChange={(event) => handleOnChange(event)} onKeyUp={(e) => pressEnterEvent(e)}
                                                />
                                                {inputValidates.phonenumber && <p style={{ color: 'red' }}>{inputValidates.phonenumber}</p>}
                                            </div>
                                            <div className="form-group">
                                                <input type="email" placeholder="Email" className="form-control form-control-lg" name="email" id="email"
                                                    value={inputValues.email} ref={emailRefs}
                                                    onChange={(event) => handleOnChange(event)} onKeyUp={(e) => pressEnterEvent(e)}
                                                />
                                                {inputValidates.email && <p style={{ color: 'red' }}>{inputValidates.email}</p>}
                                            </div>
                                            <div className="form-group">
                                                <input type="password" placeholder="Mật khẩu" className="form-control form-control-lg" name="password" id="password"
                                                    value={inputValues.password} ref={passwordRefs}
                                                    onChange={(event) => handleOnChange(event)} onKeyUp={(e) => pressEnterEvent(e)}
                                                />
                                                {inputValidates.password && <p style={{ color: 'red' }}>{inputValidates.password}</p>}
                                            </div>
                                            <div className="form-group">
                                                <input type="password" placeholder="Nhập lại mật khẩu" className="form-control form-control-lg" name="againPass" id="againPass"
                                                    value={inputValues.againPass} ref={againPassRefs}
                                                    onChange={(event) => handleOnChange(event)} onKeyUp={(e) => pressEnterEvent(e)}
                                                />
                                                {inputValidates.againPass && <p style={{ color: 'red' }}>{inputValidates.againPass}</p>}
                                            </div>
                                            <div className="form-group">
                                                <select style={{ color: 'black' }} className="form-control" value={inputValues.roleCode} name="roleCode" onChange={(event) => handleOnChange(event)} onKeyUp={(e) => pressEnterEvent(e)}>
                                                    {dataRole && dataRole.length > 0 &&
                                                        dataRole.map((item, index) => {
                                                            if (item.code !== "ADMIN" && item.code !== "COMPANY") {
                                                                return (
                                                                    <option key={index} value={item.code}>{item.value}</option>
                                                                )
                                                            }

                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select style={{ color: "black" }} className="form-control" value={inputValues.genderCode} name="genderCode" onChange={(event) => handleOnChange(event)} onKeyUp={(e) => pressEnterEvent(e)}>
                                                    {dataGender && dataGender.length > 0 &&
                                                        dataGender.map((item, index) => {
                                                            return (
                                                                <option key={index} value={item.code}>{item.value}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="mt-3">
                                                <a onClick={() => handleRegister()} className="btn1 btn1-block btn1-primary1 btn1-lg font-weight-medium auth-form-btn1" >Đăng ký</a>
                                            </div>
                                            <div className="text-center mt-4 font-weight-light">
                                                Bạn đã có tài khoản rồi? <Link to="/login" className="text-primary">Đăng nhập ngay</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content-wrapper ends */}
                    </div>
                    {/* page-body-wrapper ends */}
                </div>
            }

        </>
    )
}

export default Register
