import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface SpotifyProps {
    theme?: boolean;
    url?: string;
    className?: string;
}
export declare const SpotifyMeta: ComponentMeta<SpotifyProps>;
export declare function Spotify({ className, url, theme, }: SpotifyProps): JSX.Element;
export {};
