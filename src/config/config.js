import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading
})

const config = {
  firebase_config: {
    apiKey: "AIzaSyDTtmKLOftFGs_zBuSrAcZa5wo-Bp9sC4k",
    authDomain: "rmvm-f22b5.firebaseapp.com",
    databaseURL: "https://rmvm-f22b5.firebaseio.com",
    projectId: "rmvm-f22b5",
    storageBucket: "rmvm-f22b5.appspot.com",
    messagingSenderId: "1015789156699",
    appId: "1:1015789156699:web:e5ccee4db144fdfa4e827e",
    measurementId: "G-096RVKD9VR"
},
  firebase_config_dev: {
    apiKey: 'AIzaSyB31cMH9nJnERC1WCWA7lQHnY08voLs-Z0',
    authDomain: 'react-most-wanted-dev.firebaseapp.com',
    databaseURL: 'https://react-most-wanted-dev.firebaseio.com',
    projectId: 'react-most-wanted-dev',
    storageBucket: 'react-most-wanted-dev.appspot.com',
    messagingSenderId: '70650394824',
    appId: '1:70650394824:web:7cd3113c37741efc'
  },
  // firebase_providers: ['google.com', 'facebook.com', 'twitter.com', 'github.com', 'password', 'phone'],
  firebase_providers: ['google.com', 'facebook.com'],
  signInFlow: 'redirect', // 'popup'
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync
}

export default config
