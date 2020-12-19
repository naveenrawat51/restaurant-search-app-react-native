import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const data = {
    total: 8228,
    businesses: [
      {
        rating: 4,
        price: "$",
        phone: "+14152520800",
        id: "E8RJkjfdcwgtyoPMjQ_Olg",
        alias: "four-barrel-coffee-san-francisco",
        is_closed: false,
        categories: [
          {
            alias: "coffee",
            title: "Coffee & Tea",
          },
        ],
        review_count: 1738,
        name: "Four Barrel Coffee",
        url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
        coordinates: {
          latitude: 37.7670169511878,
          longitude: -122.42184275,
        },
        image_url:
          "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
        location: {
          city: "San Francisco",
          country: "US",
          address2: "",
          address3: "",
          state: "CA",
          address1: "375 Valencia St",
          zip_code: "94103",
        },
        distance: 1604.23,
        transactions: ["pickup", "delivery"],
      },
    ],
    region: {
      center: {
        latitude: 37.767413217936834,
        longitude: -122.42820739746094,
      },
    },
  };

  const makeData = (dataObj) => {
    const result = [];
    for (let i = 0; i < 50; i++) {
      const generatePrice = Math.floor(Math.random() * 3) + 1;
      const newObj = JSON.parse(JSON.stringify(dataObj));
      newObj.businesses[0].id = `${i}`;
      newObj.businesses[0].price =
        generatePrice == 1 ? "$" : generatePrice == 2 ? "$$" : "$$$";
      result.push(newObj.businesses[0]);
    }
    return result;
  };

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
      console.log(err.message);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    searchApi("pasta");
    setResults(makeData(data));
  }, [yelp]);

  return [results, isLoading, error, searchApi];
};
