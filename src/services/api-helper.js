const axios = require("axios");

const BASE_URL = "https://api-dev.vidmob.com";

export const emailPreValidation = async (email) => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/VidMob/api/noauth/v1/signupPrevalidation`,
      {
        headers: { "VidMob-App-Version": "1.9.2" },
        params: { email },
      }
    );
    // console.log(resp);
    return resp.data.result.email;
  } catch (e) {
    return e.response.data.result.email;
    // console.log(e.response.data.result.email);
  }
};

export const companyPreValidation = async (businessName) => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/VidMob/api/noauth/v1/signupPrevalidation`,
      {
        headers: { "VidMob-App-Version": "1.9.2" },
        params: { businessName },
      }
    );
    // console.log(resp);
    return resp.data.result.businessName;
  } catch (e) {
    // console.log(e.response.data.result.email);
    return e.response.data.result.businessName;
  }
};

export const signup = async (
  firstName,
  lastName,
  displayName,
  email,
  password
) => {
  try {
    const resp = await axios.post(`${BASE_URL}/VidMob/api/noauth/v1/signup`, {
      firstName: firstName,
      lastName: lastName,
      displayName: displayName,
      email: email,
      password: password,
    });
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error.message);
  }
};
