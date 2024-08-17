import "./App.css";
import Alert from "./components/Alert";
import { Ban ,ShieldAlert ,BookOpen ,SearchCheck,TrendingUp  } from "lucide-react";

function App() {
  return (
    <>
      <Alert
        type={"alert-danger"}
        icon={<Ban />}
        title={"Error"}
        description="Indicates a serious issue or error that requires immediate attention, such as a critical failure or a form validation error."
      />
      <Alert
        type={"alert-success"}
        icon={<SearchCheck  />}
        title={"Success"}
        description=" Confirms that an action has been completed successfully, such as a form submission or data save."
      />
      <Alert
        type={"alert-tips"}
        icon={<ShieldAlert />}
        title={"Tips"}
        description=" Provides helpful advice or best practices to enhance the user's experience or understanding of a feature."
      />
      <Alert
        type={"alert-note"}
        icon={<BookOpen  />}
        title={"Note"}
        description="Offers additional information or a reminder that may be relevant to the current task, but is not urgent."
      />
      <Alert
        type={"alert-upgrade"}
        icon={<TrendingUp  />}
        title={"Upgrade"}
        description="Encourages users to consider upgrading their plan or subscription to access more features or benefits."
      />
    </>
  );
}

export default App;
