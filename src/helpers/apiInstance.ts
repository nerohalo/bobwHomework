/* eslint-disable no-console */
import Api, { ApiInterface } from 'helpers/blueprints/api';

const baseUrl = process.env.REACT_APP_API_URL || '';

const handleUnauthorized = (): void => {
  window.location.pathname = '/login';
};

const handleErrorDefault = (): void => {
  console.log('request error!');
};

type APIFactory = { getInstance: () => ApiInterface };

const ApiFactory = ((): APIFactory => {
  let apiInstance: ApiInterface | null = null;

  return {
    getInstance: (): ApiInterface => {
      if (apiInstance === null) {
        apiInstance = new Api(
          baseUrl,
          handleErrorDefault,
          handleUnauthorized,
        );
      }

      return apiInstance;
    },
  };
})();

export default ApiFactory.getInstance();
