import { memo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { RequireAuthentication } from "../modules/auth";
import { Body } from "../views/elements/primary/body";
import { Header } from "../views/elements/primary/header";
import AuthLayout from "../views/layouts/authLayout";
import Layout from "../views/layouts/layout";
import AboutPage from "../views/pages/about";
import LoginPage from "../views/pages/auth/login";
import HomePage from "../views/pages/home";
import HooksPage from "../views/pages/hooks";
import NoMatchPage from "../views/pages/noMatch";

// BrowserRouter - it is used to connect app with borwser route
// Routes - combination of route
// Route - Actual Routh 
// for dealing with routes in react - https://reactrouter.com/docs/en/v6/getting-started/tutorial#introduction

const AppRoutes = (() => {
    console.log("AppRoutes calling");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                            <RequireAuthentication auth={2}>
                            <Layout />
                            </RequireAuthentication>
                        } >
                    <Route path="" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="hooks" element={<HooksPage />} />
                    <Route path="*" element={<NoMatchPage />} />
                </Route>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="" element={<Navigate to='/auth/signin' />} />
                    <Route path="signin" element={<LoginPage />} />
                    <Route path="*" element={<NoMatchPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
});
export default AppRoutes;