import { chain, noop, Rule, SchematicsException, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addModuleImportToRootModule } from '../utils/ast';
import { createCustomTheme } from '../utils/custom-theme';
import { getProjectFromWorkspace, getWorkspace, Project, Workspace } from '../utils/devkit-utils/config';
import { zorroVersion } from '../utils/lib-versions';
import { addPackageToPackageJson } from '../utils/package';
import { getProjectTargetOptions } from '../utils/project-targets';
import { Schema } from './schema';

const ADD_CONFIG = {
  LESS_VERSION       : '^2.7.3',
  CUSTOM_THEME_PATH  : 'src/theme.less',
  COMPILED_THEME_PATH: 'node_modules/ng-zorro-antd-mobile/src/ng-zorro-antd-mobile.min.css',
  BOOT_PAGE_PATH     : 'src/app/app.component.html',
  BOOT_PAGE_HTML     : `<!-- NG-ZORRO-MOBILE -->
<a href="https://github.com/NG-ZORRO/ng-zorro-antd-mobile" target="_blank" style="display: flex;align-items: center;justify-content: center;height: 100%;width: 100%;">
  <img height="300" src="https://img.alicdn.com/tfs/TB15EhGJwHqK1RjSZFPXXcwapXa-500-539.png">
</a>`
};

export default function(options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addZorroToPackageJson(),
    setBootstrapPage(),
    addThemeToAppStyles(options),
    addModulesToAppModule(options),
    (options && !options.skipPackageJson) || (options && !options.theme) ? installNodeDeps() : noop()
  ]);
}

/** 添加 ng-zorro-antd-mobile 到 package.json 的 dependencies */
function addZorroToPackageJson(): (host: Tree) => Tree {
  return (host: Tree) => {
    addPackageToPackageJson(host, 'dependencies', 'ng-zorro-antd-mobile', zorroVersion);
    return host;
  };
}

/** 添加 BrowserAnimationsModule FormsModule HttpClientModule NgZorroAntdMobileModule 到 app.module */
function addModulesToAppModule(options: Schema): (host: Tree) => Tree {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);

    addModuleImportToRootModule(host, 'BrowserAnimationsModule', '@angular/platform-browser/animations', project);
    addModuleImportToRootModule(host, 'FormsModule', '@angular/forms', project);
    addModuleImportToRootModule(host, 'HttpClientModule', '@angular/common/http', project);
    addModuleImportToRootModule(host, 'NgZorroAntdMobileModule', 'ng-zorro-antd-mobile', project);

    return host;
  };
}

/** 添加样式配置 */
export function addThemeToAppStyles(options: Schema): (host: Tree) => Tree {
  return function(host: Tree): Tree {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    if (options.theme) {
      insertCustomTheme(project, host, workspace);
    } else {
      insertCompiledTheme(project, host, workspace);
    }
    return host;
  };
}

/** 将预设样式写入 theme.less，并添加到 angular.json */
function insertCustomTheme(project: Project, host: Tree, workspace: Workspace): void {
  const themePath = ADD_CONFIG.CUSTOM_THEME_PATH;
  const customTheme = createCustomTheme();
  if (host.exists(themePath)) {
    const beforeContent = host.read(themePath).toString('utf8');
    if (beforeContent.indexOf(customTheme) === -1) {
      host.overwrite(themePath, `${customTheme}\n${beforeContent}`);
    }
  } else {
    host.create(themePath, createCustomTheme());
  }

  if ((project as any).targets || project.architect) {
    addStyleToTarget('build', host, workspace, project, themePath, ADD_CONFIG.COMPILED_THEME_PATH);
    addStyleToTarget('test', host, workspace, project, themePath, ADD_CONFIG.COMPILED_THEME_PATH);
  } else {
    throw new SchematicsException(`${project.name} does not have an architect or targets configuration`);
  }
}

/** 设置引导页面到 app.component.ts */
function setBootstrapPage(): (host: Tree) => Tree {
  return (host: Tree) => {
    host.overwrite(ADD_CONFIG.BOOT_PAGE_PATH, ADD_CONFIG.BOOT_PAGE_HTML);
    return host;
  };

}

/** 安装依赖 */
function installNodeDeps(): (host: Tree, context: SchematicContext) => void {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

/** 将编译的 css 添加到 angular.json */
function insertCompiledTheme(project: Project, host: Tree, workspace: Workspace): void {
  const themePath = ADD_CONFIG.COMPILED_THEME_PATH;

  if ((project as any).targets || project.architect) {
    addStyleToTarget('build', host, workspace, project, themePath);
    addStyleToTarget('test', host, workspace, project, themePath);
  } else {
    throw new SchematicsException(`${project.name} does not have an architect or targets configuration`);
  }
}

/** Adds a style entry to the given target. */
function addStyleToTarget(targetName: string, host: Tree, workspace: Workspace, project: Project, asset: string, exclude: string = ''): void {
  const styleEntry = asset;
  const targetOptions = getProjectTargetOptions(project, targetName);
  // We can't assume that any of these properties are defined, so safely add them as we go
  // if necessary.
  if (!targetOptions.styles) {
    targetOptions.styles = [ styleEntry ];
  } else {
    const existingStyles = targetOptions.styles.map(s => typeof s === 'string' ? s : s.input);
    const hasGivenTheme = existingStyles.find(s => s.includes(asset));

    if (exclude) {
      const removeIndex = targetOptions.styles.indexOf(exclude);
      if (removeIndex >= 0) {
        targetOptions.styles.splice(removeIndex, 1);
      }
    }

    if (!hasGivenTheme) {
      targetOptions.styles.splice(0, 0, styleEntry);
    }
  }

  host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
