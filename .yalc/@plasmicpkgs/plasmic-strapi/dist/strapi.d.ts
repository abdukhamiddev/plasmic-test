import { ComponentMeta, GlobalContextMeta } from "@plasmicapp/host";
import React, { ReactNode } from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface StrapiCredentialsProviderProps {
    host?: string;
    token?: string;
}
export declare const strapiCredentialsProviderMeta: GlobalContextMeta<StrapiCredentialsProviderProps>;
export declare function StrapiCredentialsProvider({ host, token, children, }: React.PropsWithChildren<StrapiCredentialsProviderProps>): JSX.Element;
interface StrapiCollectionProps {
    name?: string;
    children?: ReactNode;
    className?: string;
    noLayout?: boolean;
    noAutoRepeat?: boolean;
    filterField?: string;
    filterValue?: string;
    limit?: number;
    filterParameter?: string;
    setControlContextData?: (data: {
        strapiFields: string[];
    }) => void;
}
export declare const strapiCollectionMeta: ComponentMeta<StrapiCollectionProps>;
export declare function StrapiCollection({ name, filterParameter, filterValue, filterField, limit, children, className, noLayout, noAutoRepeat, setControlContextData, }: StrapiCollectionProps): JSX.Element;
interface StrapiFieldProps {
    className?: string;
    path?: string;
    setControlContextData?: (data: {
        fields: string[];
        isImage: boolean;
    }) => void;
}
export declare const strapiFieldMeta: ComponentMeta<StrapiFieldProps>;
export declare function StrapiField({ className, path, setControlContextData, }: StrapiFieldProps): JSX.Element;
export {};
