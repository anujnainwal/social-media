"use client";
import React from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  const AuthProtected = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (userInfo?.accessToken !== undefined) {
        setIsAuthenticated(true);
      } else {
        router.push("/login");
      }
    }, [router]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthProtected;
};

export default withAuth;
