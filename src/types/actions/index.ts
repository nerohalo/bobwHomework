import { Action } from 'redux';
import { ThunkAction, ThunkDispatch, ThunkMiddleware } from 'redux-thunk';

import { ApplicationState } from 'types';

export type ThunkResult<R> = ThunkAction<R, ApplicationState, void, Action>;
export type DispatchExts = ThunkDispatch<ApplicationState, void, Action>;
export type ThunkMiddlewareType = ThunkMiddleware<ApplicationState, Action, void>
