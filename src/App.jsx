import {Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Index';
import Shared from './Pages/Shared/Index';
import Dedicated from './Pages/Dedicated/Index';
import Cloud from './Pages/Cloud/Index';
import Contact from './Pages/Contact/Index';
import Auth from './Pages/User/Auth';

function App() {
    return (
        <>
			<Header/>

			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='shared' element={<Shared />}/>
				<Route path='dedicated' element={<Dedicated />}/>
				<Route path='cloud' element={<Cloud />}/>
				<Route path='contact' element={<Contact />}/>
				<Route path='entry-user' element={<Auth />}/>
			</Routes>

			<Footer/>
		
		</>
    );
}

export default App;
