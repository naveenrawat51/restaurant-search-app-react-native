import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const searchApi = async (searchTerm) => {
    try {
      setIsLoading(true);
      setError(false);
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm || "",
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, [yelp]);

  return [results, isLoading, error, searchApi];
};
