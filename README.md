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

# repl command
The command [npx wdio repl chrome] launches the WebDriverIO REPL (Read-Eval-Print Loop) for the Chrome browser.

# dotenv
Loads environment variables from .env file
1. npm install dotenv --save
2. import 'dotenv/config' //ES6
3. console.log(process.env)

# Install Chai assertion library
- $ npm install --save-dev chai
- npm install --save @types/chai

# Git Commands and Workflow

This README outlines a sequence of Git commands for setting up a new repository, making changes, and syncing with a remote repository.

## Initial Setup

1. **Initialize a new Git repository:**
    ```bash
    git init
    ```

2. **Check the status of the repository:**
    ```bash
    git status
    ```

3. **Configure Git settings:**
    ```bash
    git config --list
    ```

4. **Add all changes to the staging area:**
    ```bash
    git add .
    ```

5. **Commit changes with a message:**
    ```bash
    git commit -m 'This is my initial commit'
    ```

6. **Add a remote repository as the origin:**
    ```bash
    git remote add origin https://github.com/sanjayspear/wdio-cucumber-e2e-test.git
    ```

7. **View remote repository information:**
    ```bash
    git remote -v
    ```

## Branching

8. **Create and switch to a new branch 'local':**
    ```bash
    git checkout -b local
    ```

9. **Switch to the 'master' branch:**
    ```bash
    git checkout master
    ```

10. **Switch to the 'local' branch:**
    ```bash
    git checkout local
    ```

11. **Display the list of branches:**
    ```bash
    git branch
    ```

## Pushing and Pulling

12. **Force push changes to the 'master' branch:**
    ```bash
    git push -f origin master
    ```

13. **Set up tracking for the 'master' branch:**
    ```bash
    git branch -u origin/master
    ```

14. **Check the status in a short and branch format:**
    ```bash
    git status -sb
    ```

15. **Fetch changes from the 'master' branch of the remote repository:**
    ```bash
    git fetch origin master
    ```

16. **Merge changes from the 'master' branch:**
    ```bash
    git merge origin/master
    ```

17. **Fetch updates from the remote repository:**
    ```bash
    git fetch origin
    ```

## Renaming and Adjusting

18. **Rename the local branch 'main' to 'master':**
    ```bash
    git branch -m main master
    ```

19. **Set the upstream branch for the 'master' branch:**
    ```bash
    git branch -u master master
    ```

20. **Set the remote repository's HEAD to the current branch:**
    ```bash
    git remote set-head origin -a
    ```
21.  Compare 'master' with 'local'

     git diff master local

22. The git merge command integrates changes from another branch into the current branch.

    git merge local


Feel free to adapt and customize these commands based on your specific project requirements.
