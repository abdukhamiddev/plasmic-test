import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface HubspotSignupFormProps {
    className?: string;
    url?: string;
}
export declare const HubspotSignupFormMeta: ComponentMeta<HubspotSignupFormProps>;
export declare function HubspotSignupForm({ className, url }: HubspotSignupFormProps): JSX.Element;
export {};
