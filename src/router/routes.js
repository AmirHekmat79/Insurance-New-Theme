
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/AboutUs', component: () => import('pages/AboutUs.vue') },
      { path: '/ContactUs', component: () => import('pages/ContactUs.vue') },
      {
        path: 'InsuranceMagazine',
        component: () => import('pages/InsuranceMagazine.vue'),
      },
      {
        path: 'InsuranceMagazine/blog/:blogId',
        component: () => import('pages/BlogDetails.vue'),
        props: true
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
]

export default routes
