import { Button, Form, Input, Space } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // Handle form submission here
    console.log("Received values:", values);

    // Clear form fields after successful submission
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    // Handle form submission failure here
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 24, borderRadius: 8, maxWidth: 300, margin: 'auto', color:'gray', maxHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ textAlign: "center", marginBottom: 6 }}>Please Register Now</h2>
      <Form
        form={form}
        name="register"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Your Name"
          name="name"
          rules={[{ required: true, message: "Please input your name" }]}
          style={{ marginBottom: 4 }}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
          style={{ marginBottom: 4 }}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password" },
            { min: 6, message: "Password must be at least 6 characters long" },
          ]}
          style={{ marginBottom: 4 }}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords do not match!');
              },
            }),
          ]}
          style={{ marginBottom: 4 }}
        >
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 20 }}  style={{ marginBottom: 8 }}>
          <Space size="middle" direction="vertical" style={{ width: '100%' }}>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Submit
            </Button>
            <div style={{ textAlign: "center",  }}>
              Already registered? <Link to="/login">Login</Link>
            </div>
          </Space>
        </Form.Item>
      </Form>
   </div>
  );
};

export default Register;