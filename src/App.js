import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Book from './Pages/Dashboard/Book/Book';
import BookingList from './Pages/Dashboard/BookingList/BookingList';
import Review from './Pages/Dashboard/Review/Review';
import OrderList from './Pages/Dashboard/OrderList/OrderList';
import AddService from './Pages/Dashboard/AddService/AddService';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './Pages/Dashboard/ManageService/ManageService';
import AllServices from './Pages/AllServices/Allservices/AllServices';
import PrivateRoute from './Redirects/PrivateRoute';
import AddProject from './Pages/Dashboard/AddProject/AddProject';
import AdminRoute from './Redirects/AdminRoute';
import Failed from './Pages/PaymentStatusShowing/Failed';
import NotFound from './Pages/NotFound/NotFound';
import AllBookingList from './Pages/Dashboard/BookingList/AllBookingList';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allservices" element={<AllServices />} />
            <Route path="/failed" element={<Failed />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="/dashboard" element={<Book />} />
              <Route path="/dashboard/bookinglist/" element={<AllBookingList />} />
              <Route path="/dashboard/bookinglist/:id" element={<BookingList />} />
              <Route path="/dashboard/review" element={<Review />} />
              <Route path="/dashboard/orderlist" element={<AdminRoute><OrderList /></AdminRoute>} />
              <Route path="/dashboard/addservice" element={<AdminRoute><AddService /></AdminRoute>} />
              <Route path="/dashboard/addproject" element={<AdminRoute><AddProject /></AdminRoute>} />
              <Route path="/dashboard/makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path="/dashboard/manageservice" element={<AdminRoute><ManageService /></AdminRoute>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
