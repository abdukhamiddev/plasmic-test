import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface CalendlyInlineWidgetProps {
    accountLink: string;
    hideEventTypeDetails?: boolean;
    hideGdprBanner?: boolean;
    hideLandingPageDetails?: boolean;
    className?: string;
}
export declare const CalendlyInlineWidgetMeta: ComponentMeta<CalendlyInlineWidgetProps>;
export declare function CalendlyInlineWidget({ accountLink, hideEventTypeDetails, hideGdprBanner, hideLandingPageDetails, className, }: CalendlyInlineWidgetProps): JSX.Element;
interface CalendlyCornerPopupProps {
    accountLink: string;
    text?: string;
    textColor?: string;
    color: string;
    branding?: boolean;
    hideEventTypeDetails?: boolean;
    hideGdprBanner?: boolean;
    hideLandingPageDetails?: boolean;
    className?: string;
}
export declare const CalendlyCornerPopupMeta: ComponentMeta<CalendlyCornerPopupProps>;
export declare function CalendlyCornerPopup({ accountLink, branding, text, color, hideEventTypeDetails, hideGdprBanner, hideLandingPageDetails, textColor, className, }: CalendlyCornerPopupProps): JSX.Element;
export {};
