/// <reference types="react" />
import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface LiteEmbedProps {
    service?: string;
    urlOrId?: string;
    adNetwork?: boolean;
    className?: string;
}
export declare const LiteEmbedMeta: ComponentMeta<LiteEmbedProps>;
export declare function LiteEmbed({ service, urlOrId, adNetwork, className, }: LiteEmbedProps): JSX.Element;
export {};
