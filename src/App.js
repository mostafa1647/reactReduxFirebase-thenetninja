import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import { isLoaded } from "react-redux-firebase";
import { useSelector } from 'react-redux';


const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth);
    return isLoaded(auth) ? children : <div className="red-text center">Loading...</div>;
};

function App() {
    return (
        <BrowserRouter>
            <AuthIsLoaded>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path={'/'} component={Dashboard} />
                        <Route exact path={'/dashboard'} component={Dashboard} />
                        <Route exact path={'/project/:id'} component={ProjectDetails} />
                        <Route exact path={'/signin'} component={SignIn} />
                        <Route exact path={'/signup'} component={SignUp} />
                        <Route exact path={'/create'} component={CreateProject} />
                    </Switch>
                </div>
            </AuthIsLoaded>
        </BrowserRouter>
    );
}

export default App;
