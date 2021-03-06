import { call, put } from "redux-saga/effects";

import api from ".";
import { LS_REFRESHTOKEN, LS_TOKEN } from "@services/LocalStorage";
import { checkAuthAction } from "@store/modules/auth/actions";
import { showError } from "@store/modules/validation/actions";

export function* retrieve({ method, force=false }) {
    try {
        return yield call(api.get, method);
    } catch (e) {
        if (e.response && e.response.status === 401 && !force) {
            yield put(checkAuthAction(true));
            yield retrieve({ method, force:true });
        }

        return {
            status: 401,
            data: e.response ? e.response.data : null
        };
    }
}
export function* send({ method, data=null }) {
    try {
        return yield call(api.post, method, data);
    } catch (e) {
        if (!e.response) {
            yield put(showError());
            return {
                status: 500
            }
        }

        return {
            status: e.response.status,
            data: e.response.data
        };
    }    
}
export function* update({ method, data=null }) {
    try {
        return yield call(api.put, method, data);
    } catch (e) {
        return {
            status: 401,
            data: e ?? e.response ? e.response.data : null
        };
    }    
}
export function* remove({ method }) {
    try {
        return yield call(api.delete, method);
    } catch (e) {
        return {
            status: 500,
            data: e ?? e.response ? e.response.data : null
        };
    }    
}
export function* authenticate({ token, refreshToken }) {
    localStorage.setItem(LS_TOKEN, token);
    localStorage.setItem(LS_REFRESHTOKEN, refreshToken);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    return yield;
}