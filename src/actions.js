import {createAction} from "redux-actions";

const PLAY = exports.PLAY = "PLAY";
const JOIN = exports.JOIN = "JOIN";
const LEAVE = exports.LEAVE = "LEAVE";

exports.play = createAction(PLAY,
    (playerIndex, cellIndex) => ({player: playerIndex, cell: cellIndex}));
exports.join = createAction(JOIN, (playerId) => ({player: playerId}));
exports.leave = createAction(LEAVE, (playerId) => ({player: playerId}));
