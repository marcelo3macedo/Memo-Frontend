
import { all, put, takeLatest } from "redux-saga/effects";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_EDITDECK, PATH_DECK, PATH_REVIEW } from '@services/Navigation';
import { retrieve } from "@services/Api/requester";
import { API_DECKS } from "@services/Api/routes";
import { openSuccessAction } from "./actions";

function* save({ name }:any) {
    yield put(navigatePush({ path: PATH_EDITDECK }));    
}

function* open({ payload }:any) {
    const response = yield retrieve({ method: `${API_DECKS}/${payload.deck.id}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(openSuccessAction({ deck: response.data}));
}

function* openSuccess() {
    yield put(navigatePush({ path: PATH_DECK }));
}

function* review() {
    yield put(navigatePush({ path: PATH_REVIEW }));
}

export default all([
    takeLatest('@deck/SAVE', save),
    takeLatest('@deck/OPEN', open),
    takeLatest('@deck/OPEN_SUCCESS', openSuccess),
    takeLatest('@deck/REVIEW', review),
]);