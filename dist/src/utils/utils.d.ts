import { StorageInterface } from '../interface';
declare global {
    interface Window {
        dataLayer: any;
    }
}
export declare function gtag(): void;
export declare const handleConsentUpdate: ({ adStorage, analyticsStorage, personalizationStorage, securityStorage, functionalityStorage, }: StorageInterface) => void;
export declare const getExpirationDate: () => Date;
