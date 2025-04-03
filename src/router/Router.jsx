import { Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import ResetPasswordPage from "../pages/ResetPasswordPage.jsx";
import ResetPasswordSuccessPage from "../pages/ResetPasswordSuccessPage.jsx";
import TermPage from "../pages/TermPage.jsx";
export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="reset-password" element={<ResetPasswordPage />} />
                <Route path="reset-password/success" element={<ResetPasswordSuccessPage />} />
                <Route path="terms/:type" element={<TermPage/>}/>
            </Route>
        </Routes>
    )

}