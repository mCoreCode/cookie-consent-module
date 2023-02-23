export * from './GCCookieConsentInterface';
export * from './components';
export * from './layouts';
export interface CookiesInterface {
    GCCookieConsent?: GCCookieConsentInterface;
    [key: string]: any;
}
export interface GCCookieConsentInterface {
    accepted?: boolean;
    storage?: StorageInterface;
}
export interface StorageInterface {
    adStorage?: 'denied' | 'granted';
    analyticsStorage?: 'denied' | 'granted';
    functionalityStorage?: 'denied' | 'granted';
    personalizationStorage?: 'denied' | 'granted';
    securityStorage?: 'denied' | 'granted';
}
