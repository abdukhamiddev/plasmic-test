import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface PigeonMapsProps {
    provider?: string;
    latitude?: number;
    longitude?: number;
    zoomLevel?: number;
    width?: number;
    height?: number;
    animate?: boolean;
    zoomSnap?: boolean;
    metaWheelZoom?: boolean;
    twoFingerDrag?: boolean;
    className?: string;
}
export declare const PigeonMapsMeta: ComponentMeta<PigeonMapsProps>;
export declare function PigeonMaps({ latitude, longitude, zoomLevel, animate, zoomSnap, metaWheelZoom, twoFingerDrag, className, }: PigeonMapsProps): JSX.Element;
export {};
