import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface GiphyProps {
    searchTerm: string;
    className: string;
    noLayout?: boolean;
}
export declare const GiphyMeta: ComponentMeta<GiphyProps>;
export declare function Giphy({ searchTerm, className }: GiphyProps): JSX.Element;
export {};
