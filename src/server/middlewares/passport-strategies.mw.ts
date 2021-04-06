import * as passport from "passport";
import * as PassportLocal from "passport-local";
import * as PassportJWT from "passport-jwt";
import { Application } from "express";

import db from "../db";
import config from "../config";
import { compareHash } from "../utils/passwords";
import { Payload, UsersTable } from "../db/models";

export function configurePassport(app: Application) {
  passport.serializeUser((user: UsersTable, done) => {
    if (user.password) {
      delete user.password;
    }
    done(null, user);
  });
  passport.deserializeUser((user, done) => done(null, user));

  passport.use(
    new PassportLocal.Strategy(
      {
        usernameField: "email",
      },
      async (email, password, done) => {
        try {
          const [userFound] = await db.usersDB.find("email", email);
          if (userFound && compareHash(password, userFound.password)) {
            delete userFound.password;
            done(null, userFound);
          } else {
            done(null, false);
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.use(
    new PassportJWT.Strategy(
      {
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.auth.secret,
      },
      (payload: Payload, done) => {
        try {
          done(null, payload);
        } catch (error) {
          done(error);
        }
      }
    )
  );
  app.use(passport.initialize());
}