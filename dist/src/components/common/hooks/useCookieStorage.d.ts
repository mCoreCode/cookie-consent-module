import { CookiesList, UseCookieStorageInterface } from '../../../interface/components/hooks/useCookieStorageInterface';
declare const useCookieStorage: (props: UseCookieStorageInterface) => {
    handleSubmit: () => void;
    isGranted: (cookie: string) => boolean;
    handleClick: (value: {
        name: string;
        checked: boolean;
    }) => void;
    cookiesList: CookiesList[];
    handleAllowAll: () => void;
};
export default useCookieStorage;
