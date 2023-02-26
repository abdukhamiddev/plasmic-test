import { ComponentMeta } from "@plasmicapp/host";
export declare function ensure<T>(x: T | null | undefined): T;
interface EventbriteProps {
    className?: string;
    eventId?: string;
    text?: string;
}
export declare const EventbriteMeta: ComponentMeta<EventbriteProps>;
export declare function Eventbrite({ className, text, eventId }: EventbriteProps): JSX.Element;
export {};
