export default [
  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'Chat'
    }
  },
  {
    path: '/login',
    meta: {
      public: true,
    },
    name: 'Login',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Login.vue`
    )
  },
  {
    path: '/chat',
    meta: {
      public: true,
    },
    name: 'Chat',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/components/chat/ChatLayout.vue`
    ),
    redirect: {
      path: '/chat/messaging'
    },
    children: [
      {
        path: '/chat/messaging/:uuid?',
        meta: {
          public: true,
        },
        name: 'ChatMessaging',
        props: true,
        components: {
          default: () => import(
            /* webpackChunkName: "routes" */
            `@/components/chat/ChatMessaging.vue`
          ),
        }
      },
      {
        path: '/chat/contact/:uuid?',
        meta: {
          public: true,
        },
        name: 'ChatContact',
        components: {
          default: () => import(
            /* webpackChunkName: "routes" */
            `@/components/chat/ChatContact.vue`
          ),

        }
      }
    ]
  },
];
