import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

function Dashboard() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Container maxWidth={false} style={{ marginTop: 30, paddingLeft: 0 }}>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/create-acc">
                            <CreateUser/>
                        </Route>
                        <Route exact path="/admin">
                            <AdminHome />
                        </Route>
                        <Route exact path="/addStoreMng">
                            <AddStoreManager />
                        </Route>
                        <Route exact path="/addCategory">
                            <AddCategory />
                        </Route>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                    </Switch>
                </Container>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Dashboard;
