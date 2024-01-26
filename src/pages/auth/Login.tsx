import { Button, Form, Input, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";


import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { verifyToken } from "../../utils/verifyToken";
import { setUser } from "../../redux/features/auth/authSlice";



const Login = () => {
  const [form] = Form.useForm();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    const toastId = toast.loading("Logging......");
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div
      style={{
        border: "1px solid green",
        padding: 24,
        borderRadius: 8,
        maxWidth: 300,
        margin: "auto",
        color: "gold",
        backgroundColor: "white",

        maxHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 6 }}>Please Login Now</h2>
      <Form
        form={form}
        name="register"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
        layout="vertical"
      >
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

        <Form.Item wrapperCol={{ span: 20 }} style={{ marginBottom: 12 }}>
          <Space size="middle" direction="vertical" style={{ width: "100%" }}>
            <Button type="dashed" htmlType="submit" style={{ width: "100%" }}>
              Login
            </Button>
            <div style={{ textAlign: "center" }}>
              Not registered? <Link to="/register">Register </Link>
            </div>
          </Space>
        </Form.Item>
      </Form>
    </div>

    
  );
};

export default Login;