/// <reference types="node" />
/// <reference types="react" />
import { History } from "history";
import { ComponentType } from "react";
import { Middleware, ReducersMapObject } from "redux";
import { ERROR_ACTION_NAME, LOCATION_CHANGE_ACTION_NAME } from "./actions";
import { asyncComponent } from "./asyncImport";
import { LoadingState, setLoading, setLoadingDepthTime } from "./loading";
import { Model } from "./types";
import { delayPromise } from "./utils";
export declare function buildModule<T>(namespace: string): {
    namespace: string;
    actions: T;
};
export interface BaseModuleState {
    loading: {
        global: LoadingState;
    };
}
export declare function buildActionByReducer<T, S>(reducer: (data: T, moduleState: S, rootState: any) => S): (payload: T) => {
    type: string;
    payload: T;
};
export declare function buildActionByEffect<T, S>(effect: (data: T, moduleState: S, rootState: any) => IterableIterator<any>): T extends null | undefined ? () => {
    type: string;
    payload: T;
} : (payload: T) => {
    type: string;
    payload: T;
};
export declare function buildLoading(moduleName?: string, group?: string): (target: any, key: string) => void;
export declare function buildlogger(before: (actionName: string, moduleName: string) => void, after: (beforeData: any, data: any) => void): (target: any, key: string) => void;
export declare function buildModel<S, A, H>(state: S, actionClass: new () => A, handlerClass: new () => H): {
    state: S;
    actions: A;
    handlers: H;
};
export declare function buildViews<T>(namespace: string, views: T, model: Model): T;
export interface StoreState<P> {
    router: {
        location: {
            pathname: string;
            search: {};
            hash: string;
            key: string;
        };
    };
    project: P;
}
export declare function getStore(): any;
export declare function getHistory(): History;
export declare function createApp(view: ComponentType<any>, container: string, storeMiddlewares?: Middleware[], storeEnhancers?: Function[], reducers?: ReducersMapObject, storeHistory?: History): void;
export { asyncComponent, setLoadingDepthTime, setLoading, LoadingState, delayPromise };
export { ERROR_ACTION_NAME, LOCATION_CHANGE_ACTION_NAME };
