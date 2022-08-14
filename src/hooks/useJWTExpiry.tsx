import { useEffect, useState } from "react";
import decode from "jwt-decode";

const useJWTExpiry = () => {
  const [isExpired, setIsExpired] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken: any = decode(token);
      const dateNow = new Date();

      if (decodedToken?.exp < dateNow.getTime()) {
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    }
    // eslint-disable-next-line
  }, [token]);

  return { isExpired };
};

export default useJWTExpiry;
