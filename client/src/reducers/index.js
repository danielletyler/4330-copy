import { combineReducers } from "redux";

import Posts from "./posts";
import authReducer from "./auth";

export default combineReducers({ Posts, authReducer });
