total git commands 

comamnds by rakesh

1. Git Configuration Commands

1.1command name : `git config --global user.name`

Description : This command is used to set the name of the user who is using the git.

example : `git config --global user.name "Rakesh mummana"`

1.2command name : `git config --global user.email`

Description : This command is used to set the email of the user who is using the git.

example : `git config --global user.email "mummanarakesh@gmail.com"`

1.3 command name : `git config --list`

Description : This command is used to list all the configurations of the git.

example : `git config --list`

1.4 command name : `git config --unset user.name`

Description : This command is used to unset the name of the user who is using the git.

example : `git config --unset user.name`

2. Repository Setup Commands

2.1 command name : `git init `

description : This command is used to initialize the git repository.

example : `git init`

2.2 commmand name : `git clone <repository-url>`

description : This command is used to clone the repository from the remote server to the local machine.

example : `git clone https://github.com/RakeshMummana/WT-LAB01.git`

2.3 command name : `git clone <branch-name> <repository-url>`

description : This command is used to clone the specific branch from the remote server to the local machine.    

example : `git clone -b rakesh  https://github.com/RakeshMummana/WT-LAB01.git`

2.4 command name : `git clone --depth <depth-value> <repository-url>`

description : This command is used to clone the repository from the remote server to the local machine with limited depth.

example : `git clone --depth 1 https://github.com/RakeshMummana/WT-LAB01.git`

3. Repository Status & Inspection

3.1 command name : `git status`

description : This command is used to check the status of the repository.

example : `git status`

3.2 command name : `git log`

description : This command is used to view the commit history of the repository.

example : `git log`

3.3 command name : `git log --oneline`

description : This command is used to view the commit history of the repository in one line.

example : `git log --oneline`

3.4 command name : `git log --graph`

description : This command is used to view the commit history of the repository in a graph format.

example : `git log --graph`

3.5 command name : `git show <commit-hash>`

description : This command is used to view the details of a specific commit.

example : `git show <commit-hash>`

3.6 command name : `git diff`

description : This command is used to view the differences between the working directory and the staging area.

example : `git diff`

3.7 command name : `git diff --staged `

description : This command is used to view the differences between the staging area and the last commit.

example : `git diff --staged `

3.8 command name : `git blame <file-name>`

description : This command is used to view the blame of a specific file.

example : `git blame <file-name>`

3.9 command name : `git reflog `

description : This command is used to view the reference log of the repository.

example : `git reflog `

3.10 command name : `git shortlog `

4. File Tracking Commands

4.1 command name : `git add <file-name>`

description : This command is used to add the file to the staging area.

example : `git add <file-name>`

4.2 command name : `git add .`

description : This command is used to add the all the files to the staging area.

example : `git add .`

4.3 command name : `git add -p`

description : This command is used to add the file to the staging area in a patch format.

example : `git add -p`

4.4 command name : `git restore <file-name>`

description : This command is used to restore the file to the staging area.

example : `git restore <file-name>`

4.5 command name : `git restore --staged <file-name>`

description : This command is used to restore the file to the staging area.

example : `git restore --staged <file-name>`

4.6 command name : `git rm `

description : This command is used to remove the file from the staging area.

example : `git rm <file-name>`

4.7 command name : `git mv <source-file> <destination-file>`

description : This command is used to move the file from the staging area.

example : `git mv <source-file> <destination-file>`

5. Commit Commands

5.1 command name : `git commit`

description : This command is used to record changes to the repository.

example : `git commit`

5.2 command name : `git commit -m`

description : This command is used to record changes to the repository with a commit message.

example : `git commit -m "<message>"`

5.3 command name : `git commit --amend`

description : This command is used to modify the most recent commit.

example : `git commit --amend -m "Updated commit message"`

5.4 command name : `git commit --no-edit`

description : This command is used to amend the last commit without changing its message.

example : `git commit --amend --no-edit`

6. Branch Management Commands

6.1 command name : `git branch`

description : This command is used to list all the local branches in the repository.

example : `git branch`

6.2 command name : `git branch -a`

description : This command is used to list all remote and local branches.

example : `git branch -a`

6.3 command name : `git branch -d`

description : This command is used to safely delete a local branch.

example : `git branch -d <branch-name>`

6.4 command name : `git branch -D`

description : This command is used to forcefully delete a local branch.

example : `git branch -D <branch-name>`

6.5 command name : `git checkout`

description : This command is used to switch from one branch to another.

example : `git checkout <branch-name>`

6.6 command name : `git checkout -b`

description : This command is used to create a new branch and switch to it.

example : `git checkout -b <branch-name>`

6.7 command name : `git switch`

description : This command is used to switch to a specified branch.

example : `git switch <branch-name>`

6.8 command name : `git switch -c`

description : This command is used to create a new branch and switch to it.

example : `git switch -c <branch-name>`

7. Merge & Integration Commands

7.1 command name : `git merge`

description : This command is used to merge the specified branch's history into the current branch.

example : `git merge <branch-name>`

7.2 command name : `git merge --no-ff`

description : This command is used to merge a branch and always create a merge commit (no fast-forward).

example : `git merge --no-ff <branch-name>`

8. Remote Repository Commands

8.1 command name : `git remote`

description : This command is used to view all remote connections.

example : `git remote`

8.2 command name : `git remote -v`

description : This command is used to view the remote connections along with their URLs.

example : `git remote -v`

8.3 command name : `git remote add`

description : This command is used to add a new remote repository.

example : `git remote add <name> <url>`

8.4 command name : `git remote remove`

description : This command is used to remove a remote connection.

example : `git remote remove <name>`

8.5 command name : `git fetch`

description : This command is used to download objects and refs from the remote repository.

example : `git fetch`

8.6 command name : `git fetch --all`

description : This command is used to fetch all remotes.

example : `git fetch --all`

8.7 command name : `git pull`

description : This command is used to fetch from and integrate with another repository or a local branch.

example : `git pull origin main`

8.8 command name : `git pull --rebase`

description : This command is used to fetch the latest changes and rebase the current branch on top of them.

example : `git pull --rebase origin main`

8.9 command name : `git push`

description : This command is used to update remote refs along with associated objects.

example : `git push origin main`

8.10 command name : `git push -u origin`

description : This command is used to push the branch to the remote and set the upstream tracking.

example : `git push -u origin <branch-name>`

8.11 command name : `git push --force`

description : This command is used to forcefully push changes to a remote repository, overwriting it.

example : `git push --force origin main`

9. Stash Commands

9.1 command name : `git stash`

description : This command is used to temporarily save changes that are not ready to be committed.

example : `git stash`

9.2 command name : `git stash list`

description : This command is used to list all the stashed changes.

example : `git stash list`

9.3 command name : `git stash pop`

description : This command is used to apply the most recent stash and remove it from the stash list.

example : `git stash pop`

9.4 command name : `git stash apply`

description : This command is used to apply the most recent stash without removing it from the list.

example : `git stash apply`

9.5 command name : `git stash drop`

description : This command is used to discard the most recent stash.

example : `git stash drop`

9.6 command name : `git stash clear`

description : This command is used to remove all stashed entries.

example : `git stash clear`

10. Reset & Undo Commands

10.1 command name : `git reset`

description : This command is used to undo commits, moving the branch pointer back to a specific commit.

example : `git reset HEAD~1`

10.2 command name : `git reset --soft`

description : This command is used to undo the commit but keep the files staged.

example : `git reset --soft HEAD~1`

10.3 command name : `git reset --mixed`

description : This command is used to undo the commit and unstage the files, but keep them in the working directory.

example : `git reset --mixed HEAD~1`

10.4 command name : `git reset --hard`

description : This command is used to completely undo the commit and discard all changes.

example : `git reset --hard HEAD~1`

10.5 command name : `git revert`

description : This command is used to create a new commit that undoes the changes from a previous commit.

example : `git revert <commit-hash>`

10.6 command name : `git clean -f`

description : This command is used to forcefully remove untracked files from the working directory.

example : `git clean -f`

10.7 command name : `git clean -fd`

description : This command is used to forcefully remove untracked files and directories from the working directory.

example : `git clean -fd`

11. Rebasing Commands

11.1 command name : `git rebase`

description : This command is used to reapply commits on top of another base tip.

example : `git rebase main`

11.2 command name : `git rebase -i`

description : This command is used to run an interactive rebase, allowing you to edit, squash, or drop commits.

example : `git rebase -i HEAD~3`

11.3 command name : `git rebase --continue`

description : This command is used to continue the rebasing process after resolving merge conflicts.

example : `git rebase --continue`

11.4 command name : `git rebase --abort`

description : This command is used to abort the rebasing process and return to the original state.

example : `git rebase --abort`

12. Cherry Pick & Patch Commands

12.1 command name : `git cherry-pick`

description : This command is used to apply the changes introduced by some existing commits.

example : `git cherry-pick <commit-hash>`

12.2 command name : `git format-patch`

description : This command is used to prepare patches for e-mail submission.

example : `git format-patch -1 HEAD`

12.3 command name : `git apply`

description : This command is used to apply a patch to files and/or to the index.

example : `git apply patch.diff`

12.4 command name : `git am`

description : This command is used to apply a series of patches from a mailbox.

example : `git am < patch.mbox`

13. Tagging Commands

13.1 command name : `git tag`

description : This command is used to list all the tags in the repository.

example : `git tag`

13.2 command name : `git tag -a`

description : This command is used to create an annotated tag.

example : `git tag -a v1.0 -m "Version 1.0"`

13.3 command name : `git tag -d`

description : This command is used to delete a specific tag.

example : `git tag -d v1.0`

13.4 command name : `git push origin --tags`

description : This command is used to push all tags to the remote repository.

example : `git push origin --tags`

14. Submodule Commands

14.1 command name : `git submodule add`

description : This command is used to add a new submodule to the repository.

example : `git submodule add <url>`

14.2 command name : `git submodule init`

description : This command is used to initialize the submodules recorded in the index.

example : `git submodule init`

14.3 command name : `git submodule update`

description : This command is used to update the registered submodules to match what the superproject expects.

example : `git submodule update`

15. Debugging Commands

15.1 command name : `git bisect`

description : This command is used to use binary search to find the commit that introduced a bug.

example : `git bisect`

15.2 command name : `git bisect start`

description : This command is used to start the bisecting session.

example : `git bisect start`

15.3 command name : `git bisect good`

description : This command is used to mark the current commit as a "good" commit without the bug.

example : `git bisect good`

15.4 command name : `git bisect bad`

description : This command is used to mark the current commit as a "bad" commit containing the bug.

example : `git bisect bad`

Step 3: GitHub Features to Demonstrate

Step 3.1: Create repository

description : Initialize a new repository on GitHub to host your project's code.

Step 3.2: Add README

description : Create a README.md file to provide information about the project.

Step 3.3: Add .gitignore

description : Add a .gitignore file to specify which files and directories should not be tracked by Git.

Step 3.4: Create issue

description : Open an issue on GitHub to track bugs, enhancements, or tasks.

Step 3.5: Assign issue

description : Assign the created issue to a specific collaborator or yourself.

Step 3.6: Create branch

description : Create a new branch to work on a specific feature or bug fix without affecting the main codebase.

Step 3.7: Push branch

description : Push the newly created branch to the remote repository on GitHub.

Step 3.8: Create pull request

description : Open a pull request to propose merging your branch's changes into the main branch.

Step 3.9: Review pull request

description : Have repository collaborators review the proposed changes in the pull request.

Step 3.10: Merge pull request

description : Merge the reviewed and approved pull request into the main branch.

Step 3.11: Resolve merge conflict

description : Resolve any conflicts that arise when merging branches if code has diverged.

Step 3.12: Close issue

description : Close the issue associated with the pull request once the work is completed and merged.

Step 3.13: Add labels

description : Apply descriptive labels to issues and pull requests to organize and prioritize them.

Step 3.14: Add collaborators

description : Invite other developers to collaborate on the GitHub repository.

Step 4: Commit and Push the File

4.1 command name : `git add git_industry_commands.md`

description : This command stages the `git_industry_commands.md` file for commit.

example : `git add git_industry_commands.md`

4.2 command name : `git commit -m`

description : This command records the changes made to the repository along with a descriptive message.

example : `git commit -m "Added industry level Git commands practice"`

4.3 command name : `git push`

description : This command pushes the committed changes to your remote repository on GitHub.

example : `git push`
