import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "../ReactMiddleware/PublicRoute";
import PrivateRoute from "../ReactMiddleware/PrivateRoute";
import Homepage from "./Homepage";
import Navbar from "../Navbar/Navbar";
import CreateUser from "../UserCreate/CreateUser";
import AdminHome from "../AdminPage/AdminHome";
import { Container } from "@material-ui/core";
import Login from "../Login/Login";
import AddStoreManager from "../AdminPage/AddStoreManager";
import AddCategory from "../AdminPage/AddCategory";
import EditStoreManager from "../AdminPage/EditStoreManager";
import ProductCreateComponent from "../Product/product-create.component";
import ProductListComponent from "../Product/product-list.component";
import ProductEditComponent from "../Product/product-edit.component";
import EditAdmin from "../AdminPage/EditAdmin";
import DiscountManageComponent from "../Discount/discount-manage.component";
import ProductDetails from "../View/ProductDetails";
import WishList from "../WhishList/WishList";
import CustomerHome from "../UserHomePage/CustomerHome";
import CardViewProductListComponent from "../Product/CardView-product-list.component";
import Cart from "../Cart/Cart";
import UserEdit from "../UserHomePage/UserEdit";
import EditCategory from "../AdminPage/EditCategory";
import ProductSearchResultComponent from "../Search/product-search-result.component";
import payment from "../Payment/payment";
import CustomerProductSearch from "../Search/customer-product-search";

//Contain all the user routes
function Dashboard() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Container
          maxWidth={false}
          style={{ marginTop: 30, paddingLeft: 0, paddingRight: 0 }}
        >
          <Switch>

            {/*All the Public Routes of System*/}
            <PublicRoute
              restricted={false}
              component={Homepage}
              path="/"
              exact
            />
            <PublicRoute
              restricted={true}
              component={Login}
              path="/login"
              exact
            />
            <PublicRoute
              restricted={true}
              component={CreateUser}
              path="/create-acc"
              exact
            />
            <PublicRoute
              restricted={false}
              component={CustomerProductSearch}
              path="/search/:id"
              exact
            />
            <PublicRoute
              restricted={false}
              component={ProductDetails}
              path="/productDetails/:id"
              exact
            />

            {/*Admin Only Routes*/}
            <PrivateRoute
              component={AdminHome}
              AccessBy={"admin"}
              path="/admin"
              exact
            />
            <PrivateRoute
              component={AddStoreManager}
              AccessBy={"admin"}
              path="/addStoreMng"
              exact
            />
            <PrivateRoute
              component={AddCategory}
              AccessBy={"admin"}
              path="/addCategory"
              exact
            />
            <PrivateRoute
              component={EditAdmin}
              AccessBy={"admin"}
              path="/editAdmin"
              exact
            />
            <PrivateRoute
              component={EditStoreManager}
              AccessBy={"admin"}
              path="/editStoreManager/:id"
              exact
            />
            <PrivateRoute
              component={EditCategory}
              AccessBy={"admin"}
              path="/editCategory/:id"
              exact
            />

            {/*StoreManager Only Routes*/}
            <PrivateRoute
              component={CardViewProductListComponent}
              AccessBy={"storeManager"}
              path="/storeManager"
              exact
            />
            <PrivateRoute
              component={ProductCreateComponent}
              AccessBy={"storeManager"}
              path="/storeManager/create"
              exact
            />
            <PrivateRoute
              component={ProductListComponent}
              AccessBy={"storeManager"}
              path="/storeManager/list"
              exact
            />
            <PrivateRoute
              component={ProductEditComponent}
              AccessBy={"storeManager"}
              path="/storeManager/edit/:id"
              exact
            />
            <PrivateRoute
              component={DiscountManageComponent}
              AccessBy={"storeManager"}
              path="/storeManager/editDis/:id"
              exact
            />
            <PrivateRoute
              component={ProductSearchResultComponent}
              AccessBy={"storeManager"}
              path="/storeManager/search/:id"
              exact
            />

            {/*Customer Only Routes*/}

            <PrivateRoute
              component={WishList}
              AccessBy={"customer"}
              path="/wishList"
              exact
            />
            <PrivateRoute
              component={Cart}
              AccessBy={"customer"}
              path="/cart"
              exact
            />
            <PrivateRoute
              component={payment}
              AccessBy={"customer"}
              path="/payment"
              exact
            />
            <PrivateRoute
              component={CustomerHome}
              AccessBy={"customer"}
              path="/customer"
              exact
            />
            <PrivateRoute
              component={UserEdit}
              AccessBy={"customer"}
              path="/userEdit"
              exact
            />
          </Switch>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Dashboard;
