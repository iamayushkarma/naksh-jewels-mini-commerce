import "../styles/products.css";
interface ToastProps {
  message: string;
}
const Toast = ({ message }: ToastProps) => {
  return <div className="toast">{message}</div>;
};

export default Toast;
