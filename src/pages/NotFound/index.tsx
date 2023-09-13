import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

//404 NotFound
export default function NotFound() {
  let navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="哎哟，页面走丢了"
      extra={
        <Button
          type="primary"
          size="large"
          onClick={() => {
            navigate("/");
          }}
        >
          返回首页
        </Button>
      }
    />
  );
}
