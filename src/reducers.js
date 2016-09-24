var handleAction = require("redux-actions").handleAction;
var handleActions = require("redux-actions").handleActions;
var actions = require("./actions");

exports.turn = handleAction(
    actions.play,
    (state, action) => state + 1, // eslint-disable-line no-unused-vars
    0
);

exports.board = handleAction(
    actions.play,
    (state, action) => state.map(
        (cell, index) =>
            (index === action.payload.cell) ? action.payload.player : cell
    ),
    Array(9).fill(null)
);

exports.players = handleActions(
    {
        [actions.join]: (state, action) => {
            const openslot = state.findIndex((slot) => slot.id === null);
            if (openslot === -1) { return state; }
            return state.map((slot, index) =>
                    (index === openslot) ? {id: action.payload.player} : slot);
        },
        [actions.leave]: (state, action) => {
            const playerSlot = state.findIndex(
                (slot) => slot.id === action.payload.player);
            return state.map(
                (slot, index) => (index === playerSlot) ? {id: null} : slot);
        }
    },
    [{id: null}, {id: null}]
);
