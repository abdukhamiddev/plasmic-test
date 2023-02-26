import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface MailchimpSignupFormProps {
    className?: string;
    url?: string;
}
export declare const MailchimpSignupFormMeta: ComponentMeta<MailchimpSignupFormProps>;
export declare function MailchimpSignupForm({ className, url, }: MailchimpSignupFormProps): JSX.Element;
export {};
