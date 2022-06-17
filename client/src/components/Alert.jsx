import { useAppContext } from "../context/appContext";

export default function Alert() {
  const { alertType, alertText } = useAppContext();
  return <div className={`text-info alert-${alertType}`}>{alertText}</div>;
}
