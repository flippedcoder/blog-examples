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
        headers: {
          Authorization: config.apiKey,
        },
        form: {
          loginId: req.session.token.email,
          applicationId: config.applicationID,
          state: {
            redirect_uri: config.redirectURI,
          },
        },
      },

      // response from step-up start
      (error, response, body) => {
        let mfaRes = JSON.parse(body);

        // get twoFactorId for storage
        if (mfaRes.twoFactorId) {
          // array holding all of the two factor methods a user can choose from
          const mfaOptions = mfaRes.methods;

          res.send({
            mfaOptions: mfaOptions,
            twoFactorId: mfaRes.twoFactorId,
          });
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
