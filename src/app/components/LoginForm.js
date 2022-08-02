import React , {useState} from "react";


import { Button, Form, Input, Divider, Alert, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom"; 
import PropTypes from "prop-types";

// import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";



export const LoginForm = (props) => {
  let history = useHistory();

  const {
    otherSignIn,
    showForgetPassword,
    onForgetPasswordClick,
    showLoading,
    extra,
    loading,
    showMessage,
    message,
  } = props;

  const initialCredential = {
    email: "",
    password: "",
  };
  



  const TodoComponent = {
    position: 'absolute',
    bottom: 13,
    left : 192
  }
 const forgetstyle = {
  position: 'relative',
    left: 238,
}

const [email, setEmail] = useState("");

const [password, setpassword] = useState("");


 const RedirectSupertadmin = (email, password) =>  {
  console.log("email" ,email)
  console.log("password" ,password)
if (email === "kkarda@manvish.com" &&  password ===  "Kapil@123") {
  history.push ("/management/CompanyManage")
 
} else {
  alert ("incorrect password")
}
}


  const onLogin = (values) => {
    showLoading();
    const loginOtpRequest = {
      email: values.email,
      password: values.password,
    };

    const allRequest = {
      request: loginOtpRequest,
      route: history,
    };
    props.signIn(allRequest);
  };

  const renderOtherSignIn = (
    <div>
      <Divider>
        <span className="text-muted font-size-base font-weight-normal">
          {/* or connect with */}
        </span>
      </Divider>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form
        layout="vertical"
        name="login-form"
        initialValues={initialCredential}
        onFinish={onLogin}
      >
        <Form.Item
          name="email"
          label="Email address"
          autoComplete="none"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please enter a validate email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-primary rounded-pill" />}
            className="py-3 "
            type="text" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
           
            value={email}


          />
        </Form.Item>
        <Form.Item
          name="password"
          autoComplete="none"
          label={
            <div className="">
              <span>Password</span>
              <span className=" justify-content-end" >
                <a href="/auth/forgot-password" className="text-end"   style={forgetstyle}>
                  (Forget Password?)
                </a>
              </span>
              {showForgetPassword && (
                <span
                  onClick={() => onForgetPasswordClick}
                  className="cursor-pointer font-size-sm font-weight-normal text-muted "
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          rules={[
            {
              required: true,
              message: "Please input your password ",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-primary" />}
            className="py-3  "
            type="password" 
            name="email" 
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          className="text-left"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className = "py-4"
             onClick={()=>RedirectSupertadmin(email, password)}
          >
            <span  style={TodoComponent} >  Login </span>

     
          </Button>
        </Form.Item>
        {otherSignIn ? renderOtherSignIn : null}
        {extra}
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

export default LoginForm;
