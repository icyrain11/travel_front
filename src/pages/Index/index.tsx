export default function Index() {
  const APP_API_URL = import.meta.env.VITE_API_URL;
  return <div>API URL: {APP_API_URL}</div>;
}
