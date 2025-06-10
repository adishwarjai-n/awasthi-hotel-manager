
# Git Setup Guide for Hotel Management System

## Quick Start Commands

### First Time Setup
```bash
# Make the script executable
chmod +x git-commands.sh

# Run the interactive Git helper
./git-commands.sh
```

### Manual Git Commands

#### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: Hotel Management System"
```

#### Connect to Remote Repository
```bash
# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/yourusername/hotel-management-system.git

# Push to remote
git push -u origin main
```

#### Daily Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Add: describe your changes"

# Push changes
git push origin main
```

#### Branch Management
```bash
# Create and switch to new feature branch
git checkout -b feature/new-feature

# Switch back to main
git checkout main

# Merge feature branch
git merge feature/new-feature

# Delete feature branch
git branch -d feature/new-feature
```

#### Collaboration Commands
```bash
# Pull latest changes
git pull origin main

# View commit history
git log --oneline

# View differences
git diff
```

## Project Structure for Git

### Files to Commit
- Source code (`src/` directory)
- Configuration files (`package.json`, `tsconfig.json`, etc.)
- Documentation (`README.md`, etc.)
- Public assets (`public/` directory)

### Files to Ignore (already in .gitignore)
- `node_modules/`
- `dist/`
- `.env` files
- Build artifacts

## Useful Git Aliases

Add these to your `~/.gitconfig` file:
```
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    pl = pull
    ps = push
    lg = log --oneline --graph --decorate
```

## Troubleshooting

### Common Issues
1. **Permission denied**: Make sure the script is executable with `chmod +x git-commands.sh`
2. **Remote already exists**: Use `git remote set-url origin <new-url>` to update
3. **Merge conflicts**: Use `git status` to see conflicted files, resolve manually, then `git add .` and `git commit`

### Emergency Commands
```bash
# Undo last commit (keep changes)
git reset HEAD~1

# Discard all local changes
git reset --hard HEAD

# View remote URL
git remote -v
```
