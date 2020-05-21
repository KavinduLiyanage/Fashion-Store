import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from "../ReactMiddleware/PublicRoute";
import PrivateRoute from "../ReactMiddleware/PrivateRoute";
import Homepage from "./Homepage";
import Navbar from "../Navbar/Navbar";
import CreateUser from "../UserCreate/CreateUser";
import AdminHome from "../AdminPage/AdminHome";
import {
    Container,
} from '@material-ui/core';
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
import CustomerHome from '../UserHomePage/CustomerHome'
import CardViewProductListComponent from "../Product/CardView-product-list.component";
import Cart from "../Cart/Cart";
import UserEdit from "../UserHomePage/UserEdit";


function Dashboard() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Container maxWidth={false} style={{ marginTop: 30, paddingLeft: 0, paddingRight: 0}}>
                    <Switch>

                        {/*Public Routes*/}
                        <PublicRoute restricted={false} component={Homepage} path="/" exact />
                        <PublicRoute restricted={true} component={Login} path="/login" exact />
                        <PublicRoute restricted={true} component={CreateUser} path="/create-acc" exact />

                        {/*Admin Only Routes*/}
                        <PrivateRoute component={AdminHome} AccessBy={"admin"} path="/admin" exact />
                        <PrivateRoute component={AddStoreManager} AccessBy={"admin"} path="/addStoreMng" exact />
                        <PrivateRoute component={AddCategory} AccessBy={"admin"} path="/addCategory" exact />
                        <PrivateRoute component={EditAdmin} AccessBy={"admin"} path="/editAdmin" exact/>

                        {/*StoreManager Only Routes*/}
                        <PrivateRoute component={CardViewProductListComponent} AccessBy={"storeManager"} path="/storeManager" exact/>
                        <PrivateRoute component={EditStoreManager} AccessBy={"storeManager"} path="/editStoreManager/:id" exact/>
                        <PrivateRoute component={ProductCreateComponent} AccessBy={"storeManager"} path="/storeManager/create" exact/>
                        <PrivateRoute component={ProductListComponent} AccessBy={"storeManager"} path="/storeManager/list" exact/>
                        <PrivateRoute component={ProductEditComponent} AccessBy={"storeManager"} path="/storeManager/edit/:id" exact/>
                        <PrivateRoute component={DiscountManageComponent} AccessBy={"storeManager"} path="/storeManager/editDis/:id" exact/>

                        {/*Customer Only Routes*/}

                        <PublicRoute restricted={false}  component={ProductDetails}   path="/productDetails/:id"   exact />
                        <PublicRoute restricted={false}   component={WishList}  path="/wishList"  exaxt/>
                        <PublicRoute restricted={false}  component={Cart}   path="/cart"   exact />
                        <PrivateRoute component={CustomerHome} AccessBy={"customer"} path="/customer" exact/>
                        <PrivateRoute component={UserEdit} AccessBy={"customer"} path="/userEdit" exact/>

                    </Switch>
                </Container>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Dashboard;
