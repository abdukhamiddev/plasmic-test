import { ComponentMeta, GlobalContextMeta } from "@plasmicapp/host";
import React, { ReactNode } from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface ContentfulCredentialsProviderProps {
    space: string;
    accessToken: string;
    environment?: string;
}
export declare const ContentfulCredentialsProviderMeta: GlobalContextMeta<ContentfulCredentialsProviderProps>;
export declare function ContentfulCredentialsProvider({ accessToken, space, environment, children, }: React.PropsWithChildren<ContentfulCredentialsProviderProps>): JSX.Element;
interface ContentfulFetcherProps {
    contentType: string;
    children?: ReactNode;
    className?: string;
    limit?: number;
    order?: string;
    filterField?: string;
    searchOperator?: string;
    filterValue?: string;
    noAutoRepeat?: boolean;
    noLayout?: boolean;
    setControlContextData?: (data: {
        types?: {
            name: string;
            id: string;
        }[];
        fields?: string[];
    }) => void;
}
export declare const ContentfulFetcherMeta: ComponentMeta<ContentfulFetcherProps>;
export declare function ContentfulFetcher({ filterField, filterValue, searchOperator, noAutoRepeat, contentType, children, className, limit, noLayout, order, setControlContextData, }: ContentfulFetcherProps): JSX.Element;
interface ContentfulFieldProps {
    className?: string;
    objectPath?: (string | number)[];
    setControlContextData?: (data: {
        data: object;
    }) => void;
}
export declare const ContentfulFieldMeta: ComponentMeta<ContentfulFieldProps>;
export declare function ContentfulField({ className, objectPath, setControlContextData, }: ContentfulFieldProps): JSX.Element;
export {};
