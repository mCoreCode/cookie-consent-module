/// <reference types="react" />
import { CustomTextInterface } from '../../../interface';
interface ConsentTriggerInterface {
    setShowConsentModal: (value: boolean) => void;
    customText?: CustomTextInterface;
}
export declare const ConsentTrigger: (props: ConsentTriggerInterface) => JSX.Element;
export default ConsentTrigger;
