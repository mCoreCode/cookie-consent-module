/// <reference types="react" />
import { ConfigInterface } from '../../../interface';
declare const useCookieConsentSetup: (props: ConfigInterface) => {
    showConsentModal: boolean;
    setShowConsentModal: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useCookieConsentSetup;
