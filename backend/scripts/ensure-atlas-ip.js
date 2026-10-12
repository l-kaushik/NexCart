
import { spawnSync } from 'node:child_process';

console.log('Checking MongoDB Atlas IP allowlist...');

const result = spawnSync(
  'atlas',
  ['accessLists', 'create', '--currentIp'],
  {
    encoding: 'utf8',
    shell: false,
    windowsHide: true,
  }
);

const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;

if (result.error || result.status !== 0) {
  // Only ignore errors that clearly indicate a duplicate entry.
  if (/already exists|already in.*access list|duplicate/i.test(output)) {
    console.log('Your IP is already allowlisted.');
  } else {
    console.error('Could not update the Atlas IP allowlist.');
    console.error(output);

    process.exit(1);
  }
} else {
  console.log(output.trim());
  console.log('Atlas IP allowlist updated.');
}
