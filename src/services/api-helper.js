const axios = require("axios");

const BASE_URL = "https://api-dev.vidmob.com";

export const emailPreValidation = async email => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/VidMob/api/noauth/v1/signupPrevalidation`,
      {
        headers: { "VidMob-App-Version": "1.9.2" },
        params: { email: email }
      }
    );
    // console.log(resp);
    return resp.data.result.email;
  } catch (e) {
    return e.response.data.result.email;
    // console.log(e.response.data.result.email);
  }
};
