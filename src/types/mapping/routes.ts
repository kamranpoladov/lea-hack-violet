import { Request } from 'express';

export enum ApiMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE'
}

export interface RequestWithParsedData extends Request {
  parsedData?: Record<string, unknown>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiInterface = { [method in ApiMethod]: { [path: string]: any } };

export type RouteFrontUniversal<
  AI extends ApiInterface,
  method extends ApiMethod,
  path extends keyof AI[method]
> = method extends ApiMethod.Put | ApiMethod.Post
  ? (
      params: AI[method][path]['params'],
      postObject: AI[method][path]['postObject']
    ) => Promise<AI[method][path]['returnObject']>
  : AI[method][path]['params'] extends undefined
  ? () => Promise<AI[method][path]['returnObject']>
  : (
      params: AI[method][path]['params']
    ) => Promise<AI[method][path]['returnObject']>;
