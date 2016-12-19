import Vue from 'vue'
import sideMenu from './sideMenu'
import mdEditor from './mdEditor/'

const common = { sideMenu, mdEditor }

Object.keys(common).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`common${name}`, common[key])
})

// export default { sideMenu, mdEditor }
