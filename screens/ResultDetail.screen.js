import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import yelp from "../api/yelp";
import Colors from "../constant/Colors";

export default function ResultDetailsScreen({ route }) {
  const restaurantId = route.params.id;
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // using dummy data if too many try error returns
  const dummyResult = {
    id: "WavvLdfdP6g8aZTtbBQHTw",
    alias: "gary-danko-san-francisco",
    name: "Gary Danko",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
    is_claimed: true,
    is_closed: false,
    url:
      "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg",
    phone: "+14157492060",
    display_phone: "(415) 749-2060",
    review_count: 5296,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)",
      },
      {
        alias: "french",
        title: "French",
      },
      {
        alias: "wine_bars",
        title: "Wine Bars",
      },
    ],
    rating: 4.5,
    location: {
      address1: "800 N Point St",
      address2: "",
      address3: "",
      city: "San Francisco",
      zip_code: "94109",
      country: "US",
      state: "CA",
      display_address: ["800 N Point St", "San Francisco, CA 94109"],
      cross_streets: "",
    },
    coordinates: {
      latitude: 37.80587,
      longitude: -122.42058,
    },
    photos: [
      "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg",
    ],
    price: "$$$$",
    hours: [
      {
        open: [
          {
            is_overnight: false,
            start: "1730",
            end: "2200",
            day: 0,
          },
          {
            is_overnight: false,
            start: "1730",
            end: "2200",
            day: 1,
          },
          {
            is_overnight: false,
            start: "1730",
            end: "2200",
            day: 2,
          },
          {
            is_overnight: false,
            start: "1730",
            end: "2200",
            day: 3,
          },
          {
            is_overnight: false,
            start: "1730",
            end: "2200",
            day: 4,
          },
          {
            is_overnight: false,
            start: "1730",
            end: "2200",
            day: 5,
          },
          {
            is_overnight: false,
            start: "1730",
            end: "2200",
            day: 6,
          },
        ],
        hours_type: "REGULAR",
        is_open_now: false,
      },
    ],
    transactions: [],
    special_hours: [
      {
        date: "2019-02-07",
        is_closed: null,
        start: "1600",
        end: "2000",
        is_overnight: false,
      },
    ],
  };

  const getResult = async (id) => {
    try {
      setError(false);
      setIsLoading(true);
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      if (err.message.indexOf("429") > -1) {
        // checking for too many api calls and putting dummy data if it happens
        setResult(dummyResult);
      }
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getResult(restaurantId);
  }, [yelp]);

  if (isLoading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error && !result) {
    return (
      <View style={styles.spinner}>
        <Text>Something went wrong. Please try again after some time!!</Text>
      </View>
    );
  }

  return (
    <View>
      {result && (
        <View>
          <Text style={styles.title}>{result.name}</Text>
          <FlatList
            horizontal
            data={result.photos}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Image style={styles.image} source={{ uri: item }} />
            )}
          />
          <Text style={styles.address}>
            {result.location.address1} {result.location.city}
          </Text>
        </View>
      )}
    </View>
  );
}

export const ResultDetailsScreenOptions = ({ route }) => {
  const restaurantName = route.params.name;
  return {
    headerTitle: restaurantName,
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginRight: 10,
  },
  address: {
    marginVertical: 16,
    fontFamily: "open-sans",
  },
});
