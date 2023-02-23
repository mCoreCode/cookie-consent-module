import { UsedCookiesTypes } from './components/hooks/useCookieStorageInterface';
export declare type initInterface = (config: ConfigInterface, selector: HTMLElement | null) => void;
export interface ConfigInterface {
    localization: 'cs' | 'de' | 'en';
    usedCookiesType: UsedCookiesTypes[];
    checkbox?: string;
    trigger?: TriggerInterface;
    infoPanel?: InfoPanelInterface;
    settingsPanel?: SettingsPanelInterface;
    fontFamily?: string;
    layout?: 'default' | 'modal';
    customText?: CustomTextInterface;
}
declare type PrimaryButtonInterface = ButtonInterface;
declare type SecondaryButtonInterface = ButtonInterface;
interface InfoPanelInterface {
    textColor?: string;
    backgroundColor?: string;
    link?: LinkInterface;
    primaryButton?: PrimaryButtonInterface;
    secondaryButton?: SecondaryButtonInterface;
}
interface SettingsPanelInterface {
    textColor?: string;
    backgroundColor?: string;
    link?: LinkInterface;
    primaryButton?: PrimaryButtonInterface;
    secondaryButton?: SecondaryButtonInterface;
}
interface ButtonInterface {
    fontFamily?: string;
    textColor?: ColorInterface;
    backgroundColor?: ColorInterface;
    borderColor?: ColorInterface;
    ringColor?: string;
}
interface TriggerInterface {
    textColor?: string;
    backgroundColor?: string;
}
export interface LinkInterface {
    link?: string;
    textColor?: string;
}
interface ColorInterface {
    default?: string;
    hover?: string;
    gradient?: {
        value: string;
    };
}
export interface CustomTextInterface {
    infoPanel?: {
        title?: string;
        text?: string;
        link?: string;
        acceptAll?: string;
        manageCookies?: string;
    };
    settingsPanel?: {
        title?: string;
        text?: string;
        link?: string;
        back?: string;
        acceptSelected?: string;
    };
    trigger?: {
        changeCookiesSetting?: string;
    };
    adCookies?: {
        label?: string;
        text?: string;
    };
    analyticsCookies?: {
        label?: string;
        text?: string;
    };
    personalizationCookies?: {
        label?: string;
        text?: string;
    };
    necessaryCookies?: {
        label?: string;
        text?: string;
    };
}
export {};
