export function saveAction({ name }) {
    return {
        type: '@deck/SAVE',
        name
    }
}
export function saveSuccessAction(deck) {
    return {
        type: '@deck/SAVE_SUCCESS',
        payload: {
            deck
        }
    }
}
export function openAction({ deck }) {
    return {
        type: '@deck/OPEN',
        payload: {
            deck
        }
    }
}
export function openSuccessAction({ deck }) {
    return {
        type: '@deck/OPEN_SUCCESS',
        payload: {
            deck
        }
    }
}
export function reviewAction({ deck }) {
    return {
        type: '@deck/REVIEW',
        payload: {
            deck
        }
    }
}
export function cloneAction({ deck }) {
    return {
        type: '@deck/CLONE',
        payload: {
            deck
        }
    }
}
export function addAction() {
    return {
        type: '@deck/ADD'
    }
}
export function addCard({ card }) {
    return {
        type: '@deck/ADD_CARD',
        payload: {
            card
        }
    }
}
export function updateCard({ card }) {
    return {
        type: '@deck/UPDATE_CARD',
        payload: {
            card
        }
    }
}
export function finishAction() {
    return {
        type: '@deck/FINISH'
    }
}
export function deleteCard({ card }) {
    return {
        type: '@deck/DELETE_CARD',
        payload: {
            card
        }
    }
}