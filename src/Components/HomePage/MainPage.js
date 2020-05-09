import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from "./Homepage";
import Navbar from "../Navbar/Navbar";
import CreateUser from "../UserCreate/CreateUser";
import {
    Container,
} from '@material-ui/core';
import Login from "../Login/Login";

function Dashboard() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Container style={{ marginTop: 30 }}>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/create-acc">
                            <CreateUser/>
                        </Route>
                        <Route path="/">
                            <Homepage/>
                        </Route>

                    </Switch>
                </Container>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Dashboard;
