declare module 'react-cookies' {
    function load(name: string, doNotParse?: boolean): any;
    function save(name: string, value: any, opts?: any): void;
    function remove(name: string, opts?: any): void;
}
