import { useState, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { UserContext } from './hooks/userContext'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Clients from './pages/clients'
import Home from './pages/home'
import WorkoutsHistory from './pages/workoutsHistory';
import "./App.css";

function App() {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [photoUser, setPhotoUser] = useState(null);
    const [clientsAPI, setClientsAPI] = useState(null);
    const [clientsFiltered, setClientsFiltered] = useState(null);
    const [searchCriteria, setSearchCriteria] = useState(null);
    const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
    const providerAuth = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
    const providerFirebase = useMemo(() => ({ photoUser, setPhotoUser }), [photoUser, setPhotoUser]);
    const providerClientsAPI = useMemo(() => ({ clientsAPI, setClientsAPI }), [clientsAPI, setClientsAPI]);
    const providerClientsFiltered = useMemo(() => ({ clientsFiltered, setClientsFiltered }), [clientsFiltered, setClientsFiltered]);
    const providerSearchCriteria = useMemo(() => ({ searchCriteria, setSearchCriteria }), [searchCriteria, setSearchCriteria]);

    return (
        <div className="App">
            <CssBaseline />
            <UserContext.Provider value={{ providerUser, providerAuth, providerFirebase, providerClientsAPI, providerClientsFiltered, providerSearchCriteria }}>
                <Routes>
                    <Route path="/" element={auth ? <Home /> : <Login />}>
                        <Route element={auth ? <Dashboard /> : <Login />} />
                        <Route path="login" element={<Login />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="clients" element={<Clients />} />
                        <Route path="workouts-history" element={<WorkoutsHistory />} />
                    </Route>
                </Routes>
            </UserContext.Provider>
        </div>
    );
}

export default App;
