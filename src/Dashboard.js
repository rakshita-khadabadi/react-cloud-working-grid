import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Chat from "./pages/Chat/Chat";
import ChatNewUser from "./pages/ChatNewUser/ChatNewUser";

function Dashboard() {
  const { state } = useLocation();
  const [userId, setUserId] = useState(state.userId)
  const [roleName, setRoleName] = useState(state.roleName)
  const [firstName, setFirstName] = useState(state.firstName)
  const [lastName, setLastName] = useState(state.lastName)

  useEffect(() => {

    // setUserId(state.userId)
    // setRole(state.role)

    console.log(state)
    console.log('userId =' + userId + ' role = ' + roleName)

  }, []);

  return (
    <Router>
      {/* <Topbar /> */}
      <div className="container">
        <div className="row">
          <Sidebar />
        </div>

        <Switch>
          <Route exact path="/">
            <div className="main-display-position">
              <ProductList firstName={firstName} lastName={lastName} />
            </div>
          </Route>
          <Route path="/users">
            <UserList roleName={roleName} userId = {userId} />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <Home />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route exact path="/chats">
            <div className="main-display-position">
              <Chat userId = {userId} />
            </div>
          </Route>
          <Route exact path="/chats/new">
            <div className="main-display-position">
              <ChatNewUser userId = {userId}/>
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default Dashboard;
