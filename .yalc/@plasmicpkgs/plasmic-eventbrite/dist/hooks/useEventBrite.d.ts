interface Props {
    eventId?: string;
    modal?: boolean;
    onOrderComplete: () => void;
    promoCode?: string;
    iFrameHeight?: string;
    iFrameAutoAdapt?: string;
}
declare const useEventbrite: ({ eventId, modal, onOrderComplete, promoCode, }: Props) => {
    id: string;
} | null;
export default useEventbrite;
