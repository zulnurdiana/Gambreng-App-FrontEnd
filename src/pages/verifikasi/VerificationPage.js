import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import AuthContext from "../../contexts/AuthProvider";
import RegisteredPage from "./RegisteredPage";
import jwtDecode from "jwt-decode";

function VerificationPage() {
  const { token, userId } = useParams();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth, setAccessToken } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setLoading(true);
    axios
      .post(`/auth/account/verify`, JSON.stringify({ token, userId }), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const decodedRes = jwtDecode(response.data.data.accessToken);
        const accessToken = response.data.data.accessToken;
        const resEmail = decodedRes.email;
        const id = decodedRes.id;
        const isAdmin = decodedRes.role === "admin";
        setAccessToken(accessToken);
        setAuth({ accessToken, email: resEmail, id, isAdmin });
      })
      .catch((err) => {
        navigate(from, { replace: true });
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [token, userId]);

  return (
    <>
      {!loading ? (
        <RegisteredPage />
      ) : (
        <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="loading-spinner"></div>
          </div>
        </section>
      )}
    </>
  );
}

export default VerificationPage;
