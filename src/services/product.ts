/*
export function queryProductList() {
  return fetch('/api/products').then(res => res.json());
}
*/
export function queryProductList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          key: 1,
          label: '首页',
        },
        {
          key: 2,
          label: '工作',
        },
        {
          key: 3,
          label: '个人中心',
        },
      ]);
    }, 2000);
  });
}
