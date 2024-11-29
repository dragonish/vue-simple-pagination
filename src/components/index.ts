import type { App } from 'vue';
import type { ThemeModeType } from './pagination/index';
import SimplePagination from './pagination/SimplePagination.vue';

const components = [SimplePagination];

function install(app: App) {
  components.forEach(component => {
    app.component(component.name!, component);
  });
}

export { SimplePagination };

export type { ThemeModeType };

export default { install };
