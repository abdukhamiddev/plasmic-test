import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface GoogleMapsProps {
    className?: string;
    coordinates?: string;
}
export declare const GoogleMapsMeta: ComponentMeta<GoogleMapsProps>;
export declare function GoogleMaps({ coordinates, className }: GoogleMapsProps): JSX.Element;
export {};
