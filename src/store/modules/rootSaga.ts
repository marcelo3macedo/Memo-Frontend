import { all } from "redux-saga/effects";
import auth from "./auth/saga";
import card from "./card/saga";
import deck from "./deck/saga";
import menu from "./menu/saga";
import navigate from "./navigate/saga";
import personal from "./personal/saga";
import resume from "./resume/saga";
import review from "./review/saga";
import search from "./search/saga";

export default function* rootSaga() {
    return yield all([auth, card, deck, menu, navigate, personal, resume, review, search]);
}