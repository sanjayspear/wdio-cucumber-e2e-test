# Install wdio
- `npm init wdio .`

# package.json
- check `type`: `module`

# tsconfig.json
- check `"module": "ESNext"`
- check `"resolveJsonModule": true`
- add `"esModuleInterop": true`
- change `"strict": false`

# wdio.conf.ts
- check `project: "./tsconfig.json"`
- add `${process.cwd()}/test/features/**/*.feature`
- add `./test/features/step-definitions/*.ts`

# Commands Used
- npx wdio wdio.conf.ts

# Install Chai assertion library
- $ npm install --save-dev chai
- npm install --save @types/chai

# Git commnads
- git fetch origin
- git branch -m main master
- git branch -u master master
- git remote set-head origin -a

# Git local commands
- git init
- git status
- git config --list
