import { useEffect, useState } from "react";
import decode from "jwt-decode";

const useJWTExpiry = () => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken: any = decode(token);
      const dateNow = new Date();

      if (decodedToken?.exp < dateNow.getTime()) {
        setIsExpired(true);
      } else {
        setIsExpired(false);
      }
    }
    // eslint-disable-next-line
  }, [localStorage.getItem("token")]);

  return { isExpired };
};

export default useJWTExpiry;
