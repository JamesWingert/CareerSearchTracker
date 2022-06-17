import { useAppContext } from "../context/appContext";

export default function Alert() {
  const { alertType, alertText } = useAppContext();
  return <div className={`bg-base-100 text-neutral alert alert-${alertType}`}>{alertText}</div>;
}
