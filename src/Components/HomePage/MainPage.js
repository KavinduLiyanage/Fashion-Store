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

function Dashboard() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Container maxWidth={false} style={{ marginTop: 30, paddingLeft: 0 }}>
                    <Switch>
                        <PublicRoute restricted={false} component={Homepage} path="/" exact />
                        <PublicRoute restricted={true} component={Login} path="/login" exact />
                        <PublicRoute restricted={true} component={CreateUser} path="/create-acc" exact />
                        <PrivateRoute component={AdminHome} path="/admin" exact />
                        <PrivateRoute component={AddStoreManager} path="/addStoreMng" exact />
                        <PrivateRoute component={AddCategory} path="/addCategory" exact />
                        <PrivateRoute component={EditStoreManager} path="/editStoreManager/:id" />
                        <PrivateRoute component={ProductCreateComponent} path="/storeManager/create" />
                        <PrivateRoute component={ProductListComponent} path="/storeManager/list" />
                        <PrivateRoute component={ProductEditComponent} path="/storeManager/edit/:id" />
                        <PrivateRoute component={EditAdmin} path="/editAdmin" exact/>
                        <PrivateRoute component={DiscountManageComponent} path="/storeManager/editDis/:id" />
                    </Switch>
                </Container>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Dashboard;
