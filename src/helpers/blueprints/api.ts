/* eslint-disable no-underscore-dangle */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export interface ApiInterface {
  acceptLanguage: string | null;
  authorizationToken: string | null;

  post: <RES, REQ = unknown>(url: string, data: REQ, defaultErrorHandler?: boolean)
    => Promise<RES>;
  get: <RES, REQ = unknown>(url: string, params: REQ, defaultErrorHandler?: boolean)
    => Promise<RES>;
  put: <RES, REQ = unknown>(url: string, data: REQ, defaultErrorHandler?: boolean)
    => Promise<RES>;
  patch: <RES, REQ = unknown>(url: string, data: REQ, defaultErrorHandler?: boolean)
    => Promise<RES>;
  delete: <RES, REQ = unknown>(url: string, data: REQ, defaultErrorHandler?: boolean)
    => Promise<RES>;
}

class Api implements ApiInterface {
  private readonly baseURL: string;

  private readonly errorHandler: (error?: AxiosError) => void;

  private readonly unauthorizedHandler: () => void;

  private _acceptLanguage: string | null = null;

  set acceptLanguage(value: string | null) {
    this._acceptLanguage = value;
  }

  get acceptLanguage(): string | null {
    return this._acceptLanguage;
  }

  private _authorizationToken: string | null = null;

  get authorizationToken(): string | null {
    return this._authorizationToken;
  }

  set authorizationToken(value: string | null) {
    this._authorizationToken = value;
  }

  constructor(
    baseURL: string,
    defaultErrorHandler: (error?: AxiosError) => void,
    unauthorizedHandler: () => void,
  ) {
    this.baseURL = baseURL;
    this.errorHandler = defaultErrorHandler;
    this.unauthorizedHandler = unauthorizedHandler;
  }

  private readonly makeHeaders = (): AxiosRequestConfig['headers'] => ({
    // Don't send headers unless the value is present

    ...(this._acceptLanguage ? {
      'Accept-Language': this._acceptLanguage,
    } : {}),

    ...(this._authorizationToken ? {
      Authorization: `Bearer ${this._authorizationToken}`,
    } : {}),
  });

  private readonly handleCatch = (error: AxiosError, defaultErrorHandler: boolean) => {
    if (defaultErrorHandler) {
      this.errorHandler(error);
    }

    if (error.response) {
      if (error.response.status === 401) {
        this.unauthorizedHandler();
      }

      return error.response.data;
    }

    return {
      ...error,
      response: {
        data: {
          message: 'internal.error',
        },
      },
    } as AxiosError;
  };

  private readonly request = <RES>(
    axiosConfig: AxiosRequestConfig,
    defaultErrorHandler = true,
  ): Promise<RES> => axios({
    baseURL: this.baseURL,
    headers: this.makeHeaders(),
    withCredentials: true,
    validateStatus: (status) => status === 200, // 200 is only successful response
    ...axiosConfig,
  })
    .then((axiosResponse) => axiosResponse.data as RES)
    .catch((error: AxiosError) => Promise.reject(this.handleCatch(error, defaultErrorHandler)));

  public post = <RES, REQ = unknown>(
    url: string,
    data: REQ,
    defaultErrorHandler?: boolean,
  ): Promise<RES> => this.request<RES>({
    url,
    data,
    method: 'post',
  }, defaultErrorHandler);

  public put = <RES, REQ = unknown>(
    url: string,
    data: REQ,
    defaultErrorHandler?: boolean,
  ): Promise<RES> => this.request<RES>({
    url,
    data,
    method: 'put',
  }, defaultErrorHandler);

  public get = <RES, REQ = unknown>(
    url: string,
    params: REQ,
    defaultErrorHandler?: boolean,
  ): Promise<RES> => this.request<RES>({
    url,
    params,
    method: 'get',
  }, defaultErrorHandler);

  public delete = <RES, REQ = unknown>(
    url: string,
    data: REQ,
    defaultErrorHandler?: boolean,
  ): Promise<RES> => this.request<RES>({
    url,
    data,
    method: 'delete',
  }, defaultErrorHandler);

  public patch = <RES, REQ = unknown>(
    url: string,
    data: REQ,
    defaultErrorHandler?: boolean,
  ): Promise<RES> => this.request<RES>({
    url,
    data,
    method: 'patch',
  }, defaultErrorHandler);
}

export default Api;
