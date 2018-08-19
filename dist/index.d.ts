export declare type Nullable<T> = T | null;
export declare function orElseThrow<T>(x: Nullable<T>, err: Error): T;
export declare function orElse<T>(x: Nullable<T>, defaultVal: T): T;
export declare function isNull(x: any): boolean;
export declare function isNotNull(x: any): boolean;
export declare function isUndefined(x: any): boolean;
export declare function isDefined(x: any): boolean;
export declare function isNullOrUndefined(x: any): boolean;
export declare function isNotNullorUnDefined(x: any): boolean;