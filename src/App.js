import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import { AuthProvider } from "./Context";
import routes from './Config/Routes';
import {AppRoute} from './Config/AppRoute';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
        return (
            <AuthProvider >
                <BrowserRouter>
                    <Switch>
                    {
                        routes.map((route) => (
                            // <AppRoute
                            //     key={route.path}
                            //     path={route.path}
                            //     component={route.component}
                            //     isPrivate={route.isPrivate}
                            // />
                            <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            isPrivate={route.isPrivate}
                        />
                            )
                        )
                    }             
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
                            
        );
      }

export default App;