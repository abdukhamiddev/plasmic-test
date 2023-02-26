import { ComponentMeta } from "@plasmicapp/host";
import React, { ReactNode } from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface RevueSignupFormProps {
    className?: string;
    children?: ReactNode;
    name?: string;
    emailInput?: ReactNode;
    subscribeButton?: ReactNode;
}
export declare const RevueSignupFormMeta: ComponentMeta<RevueSignupFormProps>;
export declare function RevueSignupForm({ className, subscribeButton, emailInput, name, }: RevueSignupFormProps): JSX.Element;
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
export declare const SubscribeButton: ({ className, ...props }: InputProps) => JSX.Element;
export declare const SubscribeButtonMeta: ComponentMeta<InputProps>;
export declare const FormInput: ({ className, ...props }: InputProps) => JSX.Element;
export declare const FormInputMeta: ComponentMeta<InputProps>;
export {};
