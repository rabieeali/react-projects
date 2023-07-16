import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ApplicationRoutes } from "src/routes";
import { setUser } from "src/redux/authSlice";
import { useReAuthQuery } from "src/redux/authApi";
import Spinner from "src/components/Spinner";
import { useEffect } from "react";


export default function Protected() {
  const token = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME) || '';

  const { isLoading, isError, data } = useReAuthQuery(token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.data));
    }
  }, [data, dispatch]);

  if (isLoading) return <Spinner />;
  if (isError) return <Navigate to={ApplicationRoutes.login} replace />;

  return <Outlet />;
}
