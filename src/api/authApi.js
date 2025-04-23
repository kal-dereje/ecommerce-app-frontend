// src/api/authApi.js
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_cnCPBrOWT",
  ClientId: "6r1uvr0t7urjn0a0rpso0d6ja2",
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
