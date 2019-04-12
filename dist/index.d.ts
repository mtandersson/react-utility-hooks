import { Dispatch } from "react";
interface EventParam<T> {
    target: {
        value: T;
    };
}
export declare function useHTMLState<S>(initialState: S | (() => S)): [S, Dispatch<EventParam<S>>];
export {};
