import { ComponentMeta, GlobalContextMeta } from "@plasmicapp/host";
import React, { ReactNode } from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface WordpressProviderProps {
    wordpressUrl?: string;
}
export declare const WordpressProviderMeta: GlobalContextMeta<WordpressProviderProps>;
export declare function WordpressProvider({ wordpressUrl, children, }: React.PropsWithChildren<WordpressProviderProps>): JSX.Element;
interface WordpressFetcherProps {
    children?: ReactNode;
    className?: string;
    noLayout?: boolean;
    queryType?: string;
    noAutoRepeat?: boolean;
    limit?: number;
    queryOperator?: string;
    filterValue?: string;
    setControlContextData?: (data: {
        posts?: {
            value: string;
            label: string;
        }[];
        pages?: {
            value: string;
            label: string;
        }[];
    }) => void;
}
export declare const WordpressFetcherMeta: ComponentMeta<WordpressFetcherProps>;
export declare function WordpressFetcher({ queryOperator, filterValue, noAutoRepeat, limit, queryType, children, className, noLayout, setControlContextData, }: WordpressFetcherProps): JSX.Element;
interface WordpressFieldProps {
    className?: string;
    field?: string;
    setControlContextData?: (data: {
        data: any;
    }) => void;
}
export declare const WordpressFieldMeta: ComponentMeta<WordpressFieldProps>;
export declare function WordpressField({ className, field, setControlContextData, }: WordpressFieldProps): JSX.Element;
export {};
