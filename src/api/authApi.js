// src/api/authApi.js
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_HhhUqRFK4",
  ClientId: "4cslra82t15ci6ue61gsiju33p",
};

const userPool = new CognitoUserPool(poolData);

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        resolve({
          user: { name: username, accessToken },
        });
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};
