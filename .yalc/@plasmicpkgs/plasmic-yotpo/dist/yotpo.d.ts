import { ComponentMeta, GlobalContextMeta } from "@plasmicapp/host";
import React from "react";
export declare function ensure<T>(x: T | null | undefined): T;
interface YotpoProps {
    appKey: string;
    uToken: string;
}
export declare const YotpoCredentialsProviderMeta: GlobalContextMeta<YotpoProps>;
export declare function YotpoCredentialsProvider({ appKey, uToken, children, }: React.PropsWithChildren<YotpoProps>): JSX.Element;
interface YotpoReviewsProps {
    reviewId?: string;
    productPrice?: string;
    currency?: string;
    setControlContextData?: (data: {
        reviews?: {
            name: string;
            id: number;
        }[];
    }) => void;
    className?: string;
}
export declare const YotpoReviewsMeta: ComponentMeta<YotpoReviewsProps>;
export declare function YotpoReviews({ reviewId, setControlContextData, productPrice, currency, className, }: YotpoReviewsProps): JSX.Element;
interface YotpoStarRatingProps {
    productId: string;
    className?: string;
    setControlContextData?: (data: {
        reviews?: {
            name: string;
            id: number;
        }[];
    }) => void;
}
export declare const YotpoStarRatingMeta: ComponentMeta<YotpoStarRatingProps>;
export declare function YotpoStarRating({ productId, className, setControlContextData, }: YotpoStarRatingProps): JSX.Element;
export {};
