import Service from './request';

const BASE_URL = 'https://mock.apifox.cn/m1/1786731-0-default';

export function getMenuData(config: any) {
  const params = new URLSearchParams();

  params.append('page', config.page);
  params.append('mod', config.mod);

  return Service({
    method: 'POST',
    url: BASE_URL + '/login',
    data: params,
  });
}
