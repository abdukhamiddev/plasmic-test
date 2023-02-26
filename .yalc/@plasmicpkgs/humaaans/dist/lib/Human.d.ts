export declare type HumanProps = {
    skinColor?: string;
    hairColor?: string;
    size?: number;
    head?: string;
    torso?: string;
    bottom?: string;
    posture?: string;
    direction?: string;
    className?: string;
};
declare const Human: ({ size, head, skinColor, hairColor, torso, bottom, posture, direction, className, }: HumanProps) => JSX.Element;
export default Human;
