import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface TypeformProps {
    className?: string;
    formId?: string;
}
export declare const TypeformMeta: ComponentMeta<TypeformProps>;
export declare function Typeform({ className, formId }: TypeformProps): JSX.Element;
export {};
