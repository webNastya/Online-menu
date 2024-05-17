import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { instance } from "shared/api/api.config";

export const AdminPrivateRoute = () => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        instance
            .get('/authentication/check-admin')
            .then((res) => {
                setIsAdmin(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                if (err.response.status === 401 || err.response.status === 403){
                    setIsLoading(false)
                }
            })
    }, [])

    if (isLoading) {
        return <div>Checking auth...</div>;
    }
    else
        if (isAdmin) {
            return <Outlet/>
        } else {
            return <Navigate to="/login" />;
        }
  };