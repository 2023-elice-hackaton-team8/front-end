import {BrowserRouter} from "react-router-dom";
import Routers from "./pages/Routers";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./styles/MainStyle.scss"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <BrowserRouter>
            <div>
              <div className="main_body">
                <Header />
                <Routers />
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
