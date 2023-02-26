import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface Html5AudioProps {
    className?: string;
    src?: string;
    autoPlay?: boolean;
    muted?: boolean;
}
export declare const Html5AudioMeta: ComponentMeta<Html5AudioProps>;
export declare function Html5Audio({ className, src, autoPlay, muted }: Html5AudioProps): JSX.Element;
export {};
