import React, { useEffect } from "react";
import { TMDB_API_KEY, TMDB_URL } from "../utils/constants";

async function fetchToken() {
  try {
    const requestToken = await fetch(
      `${TMDB_URL}/authenticate/${req_token}?api_key=${TMDB_API_KEY}`,
    );
    const data = await requestToken.json();
    // localStorage.setItem('req_token', data)
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

const useFetchToken = () => {
  useEffect(() => {
    async function fetchToken() {
      try {
        const requestToken = await fetch(
          `${TMDB_URL}/authenticate/${req_token}?api_key=${TMDB_API_KEY}`,
        );
        const data = await requestToken.json();
        // localStorage.setItem('req_token', data)
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchToken();
  }, [req_token]);
};

export { useFetchToken, fetchToken };
