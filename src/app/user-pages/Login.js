import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { Row, Col, Form, Input, Button } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { CheckCircleOutlined, LeftOutlined, LockOutlined } from '@ant-design/icons';



const backgroundURL ="/public/img/other/Frame.png"
const backgroundStyle = {
	backgroundImage: `linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(${backgroundURL})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	opacity: '0.9',
	position: 'relative',
} 

class Login extends Component {
  
  render() {
    return (
      <Row justify="center" className="align-items-stretch h-100">
      <Col xs={0} sm={0} md={0} lg={12}>
        <div className="d-flex flex-column  h-100" style={backgroundStyle}>
          <Row justify="center" style={{ position: "absolute" }}>
            <Col xs={0} sm={0} md={0} lg={20}>
              <div style={{ marginTop: "50%" }}>
                <h1 className="text-white">“</h1>
                <p className="text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <Row className="justify-content-between">
                  <p className="text-white">Vincent Obi <CheckCircleOutlined className="bg-success" /></p>
                  <p className="text-white"><img className="img-fluid h-100" src="/public/img/others/Vector 1.png" alt="" />  
                  
                  </p>
                </Row>
              </div>

            </Col>
          </Row>
        </div>
      </Col>
      <Col xs={20} sm={20} md={24} lg={12}>
        <div className="container d-flex flex-column  h-100">
          <Row className="mt-2">
            <Col xs={24} sm={24} md={20} lg={12} xl={8}>
              <p><a href="/auth/login-1"><LeftOutlined className="mr-1" />Back</a></p>
            </Col>

          </Row>
          <Row justify="center" className="mt-5 text-center">
            <Col xs={24} sm={24} md={20} lg={16} xl={8}>


              <div className="text-center">
                <h3 className="mt-3 font-weight-bold">Enter verification code</h3>
                <p className="mb-4">We have just sent a verification code to</p>
                {/* <h5 className="text-center">{props.location?props.location.state:''}</h5> */}
              </div>
              <Row justify="left">
                <Col xs={24} sm={24} md={20} lg={20}>
                  <Form  layout="vertical" name="forget-password" >
                    <Form.Item
                      name="otp"
                      label="OTP*"
                      rules={
                        [
                          {
                            required: true,
                            message: 'Please input your email address'
                          },
                        ]
                      }>
                      <Input placeholder="Enter Your OTP" prefix={<MailOutlined className="text-primary" />} />
                    </Form.Item>
                    <p>OTP is send in your Registration email ID & Mobile number</p>
                    <Form.Item>
                      <Button  type="primary" htmlType="submit" block></Button>
                    </Form.Item>
                    <p><LockOutlined />&nbsp; Your Info is safely secured</p>
                  </Form>
                </Col>
              </Row>

            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    )
  }
}

export default Login





// <div>
// <div className="d-flex align-items-center auth px-0">
//   <div className="row w-100 mx-0">
//     <div className="col-lg-4 mx-auto">
//       <div className="auth-form-light text-left py-5 px-4 px-sm-5">
//         <div className="brand-logo">
//           <img src={require("../../assets/images/LOGO.png")} alt="logo" />
//         </div>
//         <h4>Hello! let's get started</h4>
//         <h6 className="font-weight-light">Sign in to continue.</h6>
//         <Form className="pt-3">
//           <Form.Group className="d-flex search-field">
//             <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" />
//           </Form.Group>
//           <Form.Group className="d-flex search-field">
//             <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" />
//           </Form.Group>
//           <div className="mt-3">
//             <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN IN</Link>
//           </div>
//           <div className="my-2 d-flex justify-content-between align-items-center">
//             <div className="form-check">
//               <label className="form-check-label text-muted">
//                 <input type="checkbox" className="form-check-input"/>
//                 <i className="input-helper"></i>
//                 Keep me signed in
//               </label>
//             </div>
//             <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
//           </div>
//           <div className="mb-2">
//             <button type="button" className="btn btn-block btn-facebook auth-form-btn">
//               <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
//             </button>
//           </div>
//           <div className="text-center mt-4 font-weight-light">
//             Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
//           </div>
//         </Form>
//       </div>
//     </div>
//   </div>
// </div>  
// </div>