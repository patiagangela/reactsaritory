// import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './pages/landing-page/Landing-page';
import LoginPage from './pages/login-page/Login-page';
import RegisterPage from './pages/register-page/register-page';
import AdminPage from './pages/admin-page/admin-page';
// import Dashboard from './aaluis-admin-menu/Dashboard';
// import ExpiringItems from './aaluis-admin-menu/ExpiringItems';
import ExpiringItems from './aaluis-admin-menu/inventory/ExpiringItems';
import ItemCategories from './aaluis-admin-menu/inventory/ItemCategories';
import Items from './aaluis-admin-menu/inventory/Items';
import TopProducts from './aaluis-admin-menu/inventory/TopProducts';
import InputSales from './aaluis-admin-menu/sales/InputSales';
import MontlySales from './aaluis-admin-menu/sales/MonthlySales';
import TodaysSales from './aaluis-admin-menu/sales/Todaysales';
import BarChart from './aaluis-admin-menu/charts/BarChart';
import LineChart from './aaluis-admin-menu/charts/LineChart';
import PieChart from './aaluis-admin-menu/charts/PieChart';
import ProfileForm from './aaluis-admin-menu/otherpages/Profile';
import Calendar from './aaluis-admin-menu/otherpages/Calendar';
import landingPage from './pages/landing-page/Landing-page.jsx';
import Sarisaristore from './aaangela-landingpage/Sarisaristore';



function App() {
  return (
    <div className="app">
      <Routes>
          <Route path = '/' element = {<LandingPage/>}/>
          <Route path = '/' element = {<Sarisaristore/>}/>
          <Route path = '/loginpage' element = {<LoginPage/>}/> 
          <Route path = '/registerpage' element = {<RegisterPage/>}/>
          <Route path = '/adminpage' element = {<AdminPage/>}/>
          {/* <Route path = '/dashboard' element = {<Dashboard/>}/>  */}
          <Route path = '/category' element = {<ItemCategories/>}/>
          <Route path = '/items' element = {<Items/>}/>
          <Route path = '/expiringItems' element = {<ExpiringItems/>}/>
          <Route path = '/topProducts' element = {<TopProducts/>}/>
          <Route path = '/inputSales' element = {<InputSales/>}/>
          <Route path = '/todaysSales' element = {<TodaysSales/>}/>
          <Route path = '/monthlySales' element = {<MontlySales/>}/>
          <Route path = '/barChart' element = {<BarChart/>}/>
          <Route path = '/pieChart' element = {<PieChart/>}/>
          <Route path = '/lineChart' element = {<LineChart/>}/>
          <Route path = '/calendar' element = {<Calendar/>}/>
          <Route path = '/profile' element = {<ProfileForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
