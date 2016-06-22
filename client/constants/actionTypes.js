import { createConstants } from '../utils';

export default createConstants(
  'BOARDS_FETCH_REQUEST',
  'BOARDS_FETCH_SUCCESS',
  'BOARDS_FETCH_FAILURE',

  'BOARD_FETCH_REQUEST',
  'BOARD_FETCH_SUCCESS',
  'BOARD_FETCH_FAILURE',

  'BOARD_CREATE_REQUEST',
  'BOARD_CREATE_SUCCESS',
  'BOARD_CREATE_FAILURE',

  'BOARD_REMOVE_REQUEST',
  'BOARD_REMOVE_SUCCESS',
  'BOARD_REMOVE_FAILURE',

  'BOARD_UPDATE_REQUEST',
  'BOARD_UPDATE_SUCCESS',
  'BOARD_UPDATE_FAILURE',

  'BOARD_ADD_LIST_ID',
  'BOARD_REMOVE_LIST_ID',

  'BOARD_INC_LISTS_LENGTH',
  'BOARD_DEC_LISTS_LENGTH',
  'BOARD_INC_CARDS_LENGTH',
  'BOARD_DEC_CARDS_LENGTH',

  'LIST_ADD_CARD_ID',
  'LIST_REMOVE_CARD_ID',

  'LIST_CREATE_REQUEST',
  'LIST_CREATE_SUCCESS',
  'LIST_CREATE_FAILURE',

  'LIST_REMOVE_REQUEST',
  'LIST_REMOVE_SUCCESS',
  'LIST_REMOVE_FAILURE',

  'LIST_UPDATE_REQUEST',
  'LIST_UPDATE_SUCCESS',
  'LIST_UPDATE_FAILURE',

  'CARD_CREATE_REQUEST',
  'CARD_CREATE_SUCCESS',
  'CARD_CREATE_FAILURE',

  'CARD_REMOVE_REQUEST',
  'CARD_REMOVE_SUCCESS',
  'CARD_REMOVE_FAILURE',

  'CARD_UPDATE_REQUEST',
  'CARD_UPDATE_SUCCESS',
  'CARD_UPDATE_FAILURE',

  'CARD_FETCH_REQUEST',
  'CARD_FETCH_SUCCESS',
  'CARD_FETCH_FAILURE',

  'CARD_ADD_COLOR_REQUEST',
  'CARD_ADD_COLOR_SUCCESS',
  'CARD_ADD_COLOR_FAILURE',

  'CARD_REMOVE_COLOR_REQUEST',
  'CARD_REMOVE_COLOR_SUCCESS',
  'CARD_REMOVE_COLOR_FAILURE',

  'CARD_ADD_COMMENT_ID',

  'COMMENT_CREATE_REQUEST',
  'COMMENT_CREATE_SUCCESS',
  'COMMENT_CREATE_FAILURE',

  'ACTIVITY_FETCH_REQUEST',
  'ACTIVITY_FETCH_SUCCESS',
  'ACTIVITY_FETCH_FAILURE',

  'USER_FETCH_REQUEST',
  'USER_FETCH_SUCCESS',
  'USER_FETCH_FAILURE',

  'TRASH_FETCH_REQUEST',
  'TRASH_FETCH_SUCCESS',
  'TRASH_FETCH_ERROR',

  'TRASH_RESTORE_REQUEST',
  'TRASH_RESTORE_SUCCESS',
  'TRASH_RESTORE_ERROR',

  'PROGRESSBAR_START',
  'PROGRESSBAR_STOP',
  'PROGRESSBAR_SET_VALUE',

  'SIGN_IN_REQUEST',
  'SIGN_IN_SUCCESS',
  'SIGN_IN_FAILURE',

  'SIGN_UP_REQUEST',
  'SIGN_UP_SUCCESS',
  'SIGN_UP_FAILURE',

  'SIGN_OUT_REQUEST',
  'SIGN_OUT_SUCCESS',
  'SIGN_OUT_FAILURE',

  'NOTIFICATIONS_CREATE',
  'NOTIFICATIONS_CREATE_WITH_ID',
  'NOTIFICATIONS_REMOVE',

  'SEARCH_REQUEST',
  'SEARCH_SUCCESS',
  'SEARCH_ERROR'
);
