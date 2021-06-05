const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../../config");

router.get("/", (req, res) => {
  // get two factor id from step-up auth request after user has submitted the code
  if (req.twoFactorId) {
    const twoFactorId = req.twoFactorId;
    request(
      // POST request to send the MFA code
      {
        method: "POST",
        uri: `http://localhost:${config.fusionAuthPort}/api/two-factor/send?twoFactorId=${twoFactorId}`,
        json: true,
        headers: {
          Authorization: config.apiKey,
        },
        form: {
          methodId: req.mfaMethodId,
        },
      },

      // callback
      (error, response, body) => {
        request(
          // POST request to get user data with the auth code
          {
            method: "POST",
            uri: `http://localhost:${config.fusionAuthPort}/api/two-factor/login`,
            json: true,
            headers: {
              Authorization: config.apiKey,
            },
            form: {
              applicationId: config.applicationID,
              code: body.authCode,
              ipAddress: req.ip,
              twoFactorId: twoFactorId,
            },
          },
          (error, response, body) => {
            res.send({
              isStepUpAuthed: body?.token,
            });
          }
        );
      }
    );
  }

  // no twoFactorId -> send nothing
  else {
    res.send({});
  }
});

module.exports = router;
