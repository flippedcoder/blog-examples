const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../../config");

router.get("/", (req, res) => {
  // step-up auth for further access
  if (req.session.token) {
    request(
      // POST request to /two-factor endpoint
      {
        method: "POST",
        uri: `http://localhost:${config.fusionAuthPort}/api/two-factor/start`,
        form: {
          loginId: req.session.token.email,
          applicationId: config.applicationID,
          state: {
            redirect_uri: config.redirectURI,
          },
        },
      },

      // callback
      (error, response, body) => {
        let mfaRes = JSON.parse(body);

        // get twoFactorId for storage
        if (mfaRes.twoFactorId) {
          // array holding all of the two factor methods a user can choose from
          const mfaOptions = mfaRes.methods;
          request(
            // POST request to send the MFA code
            {
              method: "POST",
              uri: `http://localhost:${config.fusionAuthPort}/api/two-factor/send?twoFactorId=${mfaRes.twoFactorId}`,
              json: true,
              headers: {
                Authorization: config.apiKey,
              },
              form: {
                methodId: "KLRT",
              },
            },

            // callback
            (error, response, body) => {
              request(
                // POST request to send the MFA code
                {
                  method: "POST",
                  uri: `http://localhost:${config.fusionAuthPort}/api/two-factor/login`,
                  json: true,
                  headers: {
                    Authorization: config.apiKey,
                  },
                  form: {
                    applicationId: config.applicationID,
                    code: body.code,
                    ipAddress: "192.168.1.42",
                    twoFactorId: mfaRes.twoFactorId,
                  },
                }
              );
            }
          );
        }

        // expired token -> send nothing
        else {
          req.session.destroy();
          res.send({});
        }
      }
    );
  }

  // no token -> send nothing
  else {
    res.send({});
  }
});

module.exports = router;
