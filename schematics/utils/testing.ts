import { join } from 'path';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

const collectionPath = join('./node_modules/@schematics/angular/collection.json');

/**
 * Create a base app used for testing.
 */
export async function createTestApp(): Promise<UnitTestTree> {
  const baseRunner = new SchematicTestRunner('schematics', collectionPath);
  return await baseRunner
    .runSchematic('application', {
      directory: '',
      name: 'app',
      prefix: 'app',
      sourceDir: 'src',
      inlineStyle: false,
      inlineTemplate: false,
      viewEncapsulation: 'None',
      version: '1.2.3',
      routing: true,
      style: 'scss',
      skipTests: false,
      minimal: false
    });
}
