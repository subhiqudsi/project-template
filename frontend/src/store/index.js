import { createStore } from 'vuex'

export default createStore({
  state: {
    appName: 'Hope UI',
    settings: {
      scheme: 'light',
      schemeDir: 'ltr',
      sidebarcolor: 'sidebar-white',
      sidebartype: { mini: '', hover: '', boxed: '' },
      sidebaractivestyle: 'navs-rounded-all',
      navbarstyle: '',
      subnavbarstyle: ''
    },
    defaults: {
      scheme: 'light',
      schemeDir: 'ltr',
      sidebarcolor: 'sidebar-white',
      sidebartype: { mini: '', hover: '', boxed: '' },
      sidebaractivestyle: 'navs-rounded-all',
      navbarstyle: '',
      subnavbarstyle: ''
    }
  },
  getters: {
    scheme: state => { return state.settings.scheme },
    appName: state => { return state.appName },
    schemeDir: state => { return state.settings.schemeDir },
    sidebartypemini: state => { return state.settings.sidebartype.mini },
    sidebartypehover: state => { return state.settings.sidebartype.hover },
    sidebartypeboxed: state => { return state.settings.sidebartype.boxed },
    sidebarcolor: state => { return state.settings.sidebarcolor },
    sidebaractivestyle: state => { return state.settings.sidebaractivestyle },
    navbarstyle: state => { return state.settings.navbarstyle },
    subnavbarstyle: state => { return state.settings.subnavbarstyle }
  },
  mutations: {
    schemeModeCommit (state, payload) {
      switch (payload) {
        case 'auto':
          state.settings.scheme = payload
          document.body.classList.add('auto')
          document.body.classList.remove('dark')
          document.body.classList.remove('light')
          break
        case 'dark':
          state.settings.scheme = payload
          document.body.classList.add('dark')
          document.body.classList.remove('auto')
          document.body.classList.remove('light')
          break
        case 'light':
          state.settings.scheme = payload
          document.body.classList.add('light')
          document.body.classList.remove('dark')
          document.body.classList.remove('auto')
          break
      }
    },
    schemedirModeCommit (state, payload) {
      const elem = document.querySelector('html')
      switch (payload) {
        case 'ltr':
          state.settings.schemeDir = payload
          elem.setAttribute('dir', 'ltr')
          break
        case 'rtl':
          state.settings.schemeDir = payload
          elem.setAttribute('dir', 'rtl')
          break
      }
    },
    sidebarcolorsCommit (state, payload) {
      state.settings.sidebarcolor = payload
    },
    sidebartypeCommit (state, payload) {
      state.settings.sidebartype.mini = payload.mini
      state.settings.sidebartype.hover = payload.hover
      state.settings.sidebartype.boxed = payload.boxed
    },
    sidebaractivestylesCommit (state, payload) {
      state.settings.sidebaractivestyle = payload
    },
    navbarstylesCommit (state, payload) {
      if (payload === 'navs-bg-color') {
        state.settings.subnavbarstyle = payload
        state.settings.navbarstyle = ''
      } else {
        state.settings.navbarstyle = payload
        state.settings.subnavbarstyle = ''
      }
    },
    defaultCommit (state) {
      state.settings.navbarstyle = ''
      state.settings.subnavbarstyle = ''
    }
  },
  actions: {
    schemeModeAction (context, payload) {
      context.commit('schemeModeCommit', payload)
    },
    schemedirModeAction (context, payload) {
      context.commit('schemedirModeCommit', payload)
    },
    sidebarcolorsAction (context, payload) {
      context.commit('sidebarcolorsCommit', payload)
    },
    sidebartypeAction (context, payload) {
      context.commit('sidebartypeCommit', payload)
    },
    sidebaractivestyleAction (context, payload) {
      context.commit('sidebaractivestylesCommit', payload)
    },
    navbarstyleAction (context, payload) {
      context.commit('navbarstylesCommit', payload)
    },
    defaultAction (context, payload) {
      context.commit('defaultCommit', payload)
    }
  }

})
