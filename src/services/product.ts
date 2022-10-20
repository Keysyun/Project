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
          key: 'home',
          label: '首页',
          path: 'home',
        },
        {
          key: 'work',
          label: '工作',
          path: 'work',
          children: [
            {
              key: 'time',
              label: '时间',
              path: 'time',
            },
            {
              key: 'study',
              label: '学习',
              path: 'study',
            },
          ],
        },
        {
          key: 'profile',
          label: '个人中心',
          path: 'profile',
        },
      ]);
    }, 1000);
  });
}
