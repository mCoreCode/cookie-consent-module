import { CustomTextInterface } from '../../GCCookieConsentInterface';
export declare type UseCookieStorageInterface = {
    usedCookiesType: UsedCookiesTypes[];
    customText?: CustomTextInterface;
};
export interface CookiesList {
    label: string;
    name: string;
    text: string;
    disabled?: boolean;
}
export declare type UsedCookiesTypes = 'analytics' | 'ad' | 'personalization';
