import { useState, useEffect } from "react";
import axios from "axios";
export const useFetch = (url) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setResponse(res.data);
    };
    fetchData();
  }, []);

  return response;
};
