export default [
  {
    path: '/news',
    name: 'news',
    component: () => import('@/components/news/news'),
    redirect: '/news/latest',
    children: [
      {
        path: '/news/latest',
        name: 'latest',
        component: () => import('@/components/news/latest')
      }
    ]
  },
  {
    path:'/ges',
    name:'ges',
    component:()=>import('@/components/ges/ges')
  }
];
