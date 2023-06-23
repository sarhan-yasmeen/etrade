import { Routes, Route } from "react-router-dom";
import SignInPage from "Sign-in";

export function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </div>
  );
}
