import registerComponent, { ComponentMeta } from "@plasmicapp/host/registerComponent";
import React from "react";
import { KeenSliderOptions } from "keen-slider";
interface KeenSliderProps extends KeenSliderOptions {
    containerHeight?: string;
}
export declare const sliderMeta: ComponentMeta<KeenSliderProps>;
export declare const SliderWrapper: React.ForwardRefExoticComponent<KeenSliderProps & {
    className?: string | undefined;
    editingSlide?: number | undefined;
    children?: any;
    setControlContextData?: ((data: {
        editingSlide: number | undefined;
    }) => void) | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export declare function registerSlider(loader?: {
    registerComponent: typeof registerComponent;
}, customSliderMeta?: ComponentMeta<KeenSliderOptions>): void;
export {};
