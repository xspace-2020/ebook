import { createSelector } from "reselect";
import * as constants from "./constants";

export const getCore = (state) => state[constants.NAME];

export const makeErrorSelector = (feature) => {
  return createSelector(getCore, ({ errors }) => errors[feature]);
};

export const makeLoadingSelector = (feature) => {
  return createSelector(getCore, ({ loader }) => loader[feature]);
};

export const getProfile = createSelector(getCore, (core) => core.profile);
