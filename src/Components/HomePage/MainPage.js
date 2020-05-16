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
import CreateProduct from "../Product/product-create.component";
import EditAdmin from "../AdminPage/EditAdmin";

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
                        <PrivateRoute component={CreateProduct} path="/storeManager/create" />
                        <PrivateRoute component={EditAdmin} path="/editAdmin" exact/>
                    </Switch>
                </Container>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Dashboard;
