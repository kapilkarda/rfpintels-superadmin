import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, Button } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { CheckCircleOutlined, LeftOutlined, } from '@ant-design/icons';
import { resetpassword, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";

const backgroundURL = '/img/others/Frame.png'
const backgroundStyle = {
	backgroundImage: `linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(${backgroundURL})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	opacity: '0.9',
	position: 'relative',
}

const ResetPassword = (props) => {
	// console.log( "propssjdfklsjdf",props)
    const [userData, setUserData] = useState({})
	const {
		showLoading,
		loading,
	} = props

	const history = useHistory();

	const theme = useSelector(state => state.theme.currentTheme)
	// console.log( "propssjdfklsjdftheme",theme)
	const [form] = Form.useForm();
   

	useEffect(() => {
		const query = new URLSearchParams(props.location.search);
		const token = query.get('token')
		const userId = query.get('userId')
		const emailId = query.get('emailId')
		// console.log("Token", token, userId, emailId);
		setUserData({token, userId, emailId});
	    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log(props.location.search, 'props.location.search line no 43')
	
	const onSend = values => {
		showLoading();
		// if(newpassword===newpassword){
			const otpRequest = {
				// email: props.location.state,
				// otp: values.otp,
				newPassword:values.newpassword,
				confirmPassword: values.confirmpassword,
				userData: userData
			}
			if(otpRequest.newPassword===otpRequest.confirmPassword){
				const allRequest = {
					request: otpRequest,
					route: history,
				}
				
				props.resetpassword(allRequest);
			}
			else{
				alert("newpassword!=confirmpassword");
			}
			
		// }		
		
	};


	return (
		<React.Fragment>
			<div className={`h-100 ${theme === 'light' ? 'bg-white' : ''}`}>
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
											<p className="text-white"><img className="img-fluid h-100" src="/img/others/Vector 1.png" alt="" /></p>
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
										<h3 className="mt-3 font-weight-bold">Reset Password</h3>
										<p className="mb-4">Enter your email</p>
										<h5 className="text-center">{props.location?props.location.state:''}</h5>
									</div>
									<Row justify="left">
										<Col xs={24} sm={24} md={20} lg={20}>
											<Form form={form} layout="vertical" name="forget-password" onFinish={onSend}>
												<Form.Item
													name="newpassword"
													label="New password*"
													rules={
														[
															{
																required: true,
																message: 'Please input your password'
															},
														]
													}>
													<Input placeholder="Enter your password" prefix={<MailOutlined className="text-primary" />} />
												</Form.Item>
												<Form.Item
													name="confirmpassword"
													label="Confirm Password*"
													rules={
														[
															{
																required: true,
																message: 'Please reenter your password'
															},
														]
													}>
													<Input placeholder="Enter confirm password" prefix={<MailOutlined className="text-primary" />} />
												</Form.Item>
												{/* <p>OTP is send in your Registration email ID & Mobile number</p> */}
												<Form.Item>
													{/* <Button loading={loading} type="primary" htmlType="submit" block>{loading ? 'Sending' : 'Continue'}</Button> */}
                                                    <Button loading={loading} type="primary" htmlType="submit" block >Send</Button>
												</Form.Item>
												{/* <p><LockOutlined />&nbsp; Your Info is safely secured</p> */}
											</Form>
										</Col>
									</Row>

								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</div>
		</React.Fragment>
	)
}


const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	resetpassword,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)