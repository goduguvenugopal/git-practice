# Git Basics — Quick Reference (What I Learned)

## 🔷 Core Concept

Git works with 3 main areas:

```
Working Directory → Staging Area → Repository
```

* Working Directory → actual files
* Staging Area → prepared changes
* Repository → committed history

---

## 🔷 Basic Commands

### Initialize repo

```
git init
```

### Clone repo

```
git clone <url>
```

### Check status

```
git status
```

---

## 🔷 Adding & Committing

### Add files

```
git add file.js
git add .
```

### Commit

```
git commit -m "message"
```

---

## 🔷 Branching

### Create branch

```
git branch dev
```

### Switch branch

```
git checkout dev
```

### Create + switch

```
git checkout -b dev
```

---

## 🔷 Push to GitHub

```
git push origin main
```

For new branch:

```
git push -u origin branch-name
```

---

## 🔷 Pull Changes

```
git pull origin main
```

---

## 🔷 Compare Branches

```
git diff main..dev
git diff main...dev
git log main..dev
```

---

## 🔷 Stash

### Save changes temporarily

```
git stash
```

### Apply stash

```
git stash apply
```

### Apply + remove

```
git stash pop
```

### List stash

```
git stash list
```

---

## 🔷 Undo Local Commits

### Keep changes staged

```
git reset --soft HEAD~1
```

### Keep changes unstaged (recommended)

```
git reset HEAD~1
```

### Delete commit + changes

```
git reset --hard HEAD~1
```

---

## 🔷 HEAD~n Concept

* HEAD → current commit
* HEAD~1 → previous commit
* HEAD~2 → two commits back

---

## 🔷 Unstage Files

```
git restore --staged file.js
git restore --staged .
```

(Old way)

```
git reset file.js
```

---

## 🔷 Discard Changes

### Specific file

```
git restore file.js
```

### All files

```
git restore .
```

### Full reset

```
git reset --hard
```

⚠️ This deletes changes permanently

---

## 🔷 Delete Branch

### Local

```
git branch -d branch-name
```

### Force delete

```
git branch -D branch-name
```

### Remote

```
git push origin --delete branch-name
```

---

## 🔷 Revert vs Reset

### Safe (keeps history)

```
git revert <commit-id>
```

### Dangerous (rewrites history)

```
git reset --hard HEAD~1
git push --force
```

---

## 🔷 Merge Branch

```
git checkout main
git pull origin main
git merge branch-name
git push origin main
```

---

## 🔷 Pull Request (PR) Steps

1. Create branch
2. Commit changes
3. Push branch
4. Open GitHub → Create PR
5. Merge PR

---

## 🔷 Useful Commands

```
git log --oneline
git branch
git remote -v
```

---

## 🔷 Important Tips

* Always check `git status`
* Don’t use `--hard` unless sure
* Use `revert` in team projects
* Push branch before PR

---

## 🔷 Mental Model

* add → prepare
* commit → save
* push → upload
* stash → temporary save
* reset → undo
* revert → safe undo

---

## 🚀 Summary

Git is all about tracking changes safely. Understand the flow:

```
Edit → Add → Commit → Push
```

And for undo:

```
reset → local undo
revert → safe undo
```

---

(End of Notes)
