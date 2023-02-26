/// <reference types="react" />
import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface IntercomProviderProps {
    appId?: string;
    autoBoot?: boolean;
    buttonText?: string;
    shouldInitialize?: boolean;
    apiBase?: string;
    initializeDelay?: number;
    className?: string;
}
export declare const IntercomProviderMeta: ComponentMeta<IntercomProviderProps>;
export declare function IntercomProvider({ apiBase, shouldInitialize, initializeDelay, appId }: IntercomProviderProps): JSX.Element;
export {};
