import { TMDB_API_KEY, TMDB_URL } from "../utils/constants";

const fetchToken = async () => {
  try {
    const reqToken = await fetch(
      `${TMDB_URL}/authentication/token/new?api_key=${TMDB_API_KEY}`,
    );
    const { request_token } = await reqToken.json();
    // console.log(request_token);
    if (request_token) {
      localStorage.setItem("req_token", request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:1234/dashboard/approved`;
    }
  } catch (err) {
    console.log(err, "token fetch error");
  }
};

const createSessionId = async () => {
  const token = localStorage.getItem("req_token");
  try {
    const sessionId = await fetch(
      `${TMDB_URL}/authentication/session/new?api_key=${TMDB_API_KEY}}`,
      {
        method: "post",
        request_token: token,
      },
    );
    const id = await sessionId.json();
    console.log(id, "session Id");
  } catch (err) {
    console.log(err, "session Id error");
  }
};

export { fetchToken, createSessionId };
