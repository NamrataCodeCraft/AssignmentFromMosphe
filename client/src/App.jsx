import SignUp from "./components/SignUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <div>
    <ToastContainer />

      <SignUp>
        
      </SignUp>
    </div>

    </>
  )
}

export default App;