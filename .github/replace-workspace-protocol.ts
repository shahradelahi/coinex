import * as fs from 'node:fs';
import * as path from 'node:path';

const pkgJsonPaths = fs
  .readdirSync(path.resolve(__dirname, '..'))
  .filter((dir) => {
    if (!fs.existsSync(`../${dir}/package.json`)) return false;
    const pkg = JSON.parse(fs.readFileSync(`../${dir}/package.json`, 'utf-8'));
    return pkg.private !== true;
  })
  .map((dir) => `../${dir}/package.json`);

/**
 * Hack to replace the workspace protocol with the actual version
 */
const packageVersions = {};
Promise.all(
  pkgJsonPaths.map(async (path) => {
    const pkg = JSON.parse(fs.readFileSync(path, 'utf-8'));
    packageVersions[pkg.name] = pkg.version;
  })
).then(() => {
  const workspacePkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  for (const dep in workspacePkg.dependencies) {
    if (workspacePkg.dependencies[dep].startsWith('workspace:')) {
      if (dep in packageVersions) {
        workspacePkg.dependencies[dep] = packageVersions[dep];
      } else {
        delete workspacePkg.dependencies[dep];
      }
    }
  }
  for (const dep in workspacePkg.peerDependencies) {
    if (workspacePkg.peerDependencies[dep].startsWith('workspace:')) {
      if (dep in packageVersions) {
        workspacePkg.peerDependencies[dep] = packageVersions[dep];
      } else {
        delete workspacePkg.peerDependencies[dep];
      }
    }
  }

  // Remove unnecessary fields
  delete workspacePkg['devDependencies'];
  delete workspacePkg['scripts'];

  fs.writeFileSync('package.json', JSON.stringify(workspacePkg, null, 2));
});
