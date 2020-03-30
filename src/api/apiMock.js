const mocks = {
  driver: {
    post: {status: 201, data: {id: 123456}},
    put: {status: 202, data: {id: 123456}},
  },
};

export const getMockError = config => {
  const {url, method} = config;
  const mockError = new Error();
  mockError.mockData = mocks[url] && mocks[url][method];
  mockError.config = config;
  return Promise.reject(mockError);
};

export const isMockError = error => Boolean(error.mockData);

export const getMockResponse = mockError => {
  const {mockData, config} = mockError;
  return Promise.resolve({
    data: mockData.data,
    status: mockData.status,
    statusText: 'OK',
    headers: {},
    config,
    isMock: true,
  });
};
