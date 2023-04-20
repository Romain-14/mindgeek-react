import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Index";
import Home from "./Pages/Home/Index";
import Footer from "./Components/Footer/Index";
import Contact from "./Pages/Contact/Index";
import Shared from "./Pages/Shared/Index";
import Dedicated from "./Pages/Dedicated/Index";
import Cloud from "./Pages/Cloud/Index";
import Auth from "./Pages/User/Auth";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"shared"} element={<Shared id={0}/>} />
                <Route path={"dedicated"} element={<Dedicated id={1} />} />
                <Route path={"cloud"} element={<Cloud id={2}  />} />
                <Route path={"contact"} element={<Contact />} />
                <Route path={"entry-user"} element={<Auth />} />
            </Routes>
			<Footer />
        </>
    );
}

export default App;
