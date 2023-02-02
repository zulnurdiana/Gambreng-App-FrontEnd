import { axiosPrivate } from "../utils/axios";
import { useContext, useEffect } from "react";
import { useNavigate} from 'react-router-dom'
import AuthContext from "../contexts/AuthProvider";

const useAxiosPrivate = () => {
    const { auth, accessToken} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                // if ((error?.response?.status === 403) || (error?.response?.status === 401) && !prevRequest?.sent) {
                //     prevRequest.sent = true;
                //     const newAccessToken = await refresh();
                //     prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                //     return axiosPrivate(prevRequest);
                // }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth])

    return axiosPrivate;
}

export default useAxiosPrivate;