const jwt = require('jsonwebtoken');
const {
  ACCESSTOKEN_EXP_ERROR,
  REFRESHTOKEN_EXP_ERROR,
  UNAUTH_USER,
  SYSTEMTOKEN_EXP_ERROR,
} = require('../ErrorHandler');

class AuthManager {
  static decode(token) {
    const decoded = jwt.decode(token);
    return decoded;
  }

  static async decodeAuthToken(req, res, next) {
    const authString = req.headers.authorization ?? '';
    if (authString == null || typeof authString === 'undefined') {
      return next();
    }

    // if (authString === TEMP_INTERNAL_SERVICES_API_KEY) {
    //   req.authPayload = {
    //     // Todo: isSystemUser: true | Update it
    //     isSystemUser: true,
    //     email: authString === TEMP_INTERNAL_SERVICES_API_KEY ? 'System' : 'Manual',
    //   };
    //   return next();
    // }
    const jwtSubject = authString.split(' ')[0];
    const jwtToken = authString.split(' ')[1];

    if (jwtToken == null || typeof jwtToken === 'undefined') {
      return next();
    }

    // // Todo: authString & jwtToken in same if clause
    // if (jwtToken === TEMP_INTERNAL_SERVICES_API_KEY) {
    //   req.authPayload = {
    //     isSystemUser: true,
    //     email: authString === TEMP_INTERNAL_SERVICES_API_KEY ? 'System' : 'Manual',
    //   };
    //   return next();
    // }

    try {
      const decoded = jwt.decode(jwtToken);
      req.authPayload = decoded;
    } catch (err) {
      if (jwtSubject === 'systemToken') return next(new SYSTEMTOKEN_EXP_ERROR(err));
      if (jwtSubject === 'accessToken') return next(new ACCESSTOKEN_EXP_ERROR(err));
      if (jwtSubject === 'refreshToken') return next(new REFRESHTOKEN_EXP_ERROR(err));
    }
    return next();
  }

  static requiresScopes(scopes) {
    return async (req, res, next) => {
      try {
        const { authPayload } = req;
        if (!authPayload) {
          // This error needs to be handled in a better way
          const err = new Error('Auth Payload does not exist');
          return next(new ACCESSTOKEN_EXP_ERROR(err));
        }
        let requestScopes = authPayload.scope ?? null;
        requestScopes = [].concat(requestScopes);
        authPayload.scope = requestScopes;

        // check for intersecting element
        const requiredScope = authPayload.scope.filter((value) => scopes.includes(value));
        // only change here (if any scope matched, it should return true)
        if (requiredScope.length > 0) {
          return next();
        }
        throw Error('Not authenticated user');
      } catch (err) {
        return next(new UNAUTH_USER(err));
      }
    };
  }
}
module.exports = AuthManager;
