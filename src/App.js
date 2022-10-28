import { useState, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Login from './pages/login.tsx'
import Index from './components/home/index.tsx'
import { UserContext } from './hooks/userContext.tsx'
import "./App.css";

function App() {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);
    const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
    const providerAuth = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

    return (
        <div className="App">
            <CssBaseline />
            <UserContext.Provider value={{ providerUser, providerAuth }}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={auth ? <Index /> : <Login />} />
                </Routes>
            </UserContext.Provider>

        </div>
    );
}


export default App;
