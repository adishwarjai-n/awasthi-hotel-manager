
#!/bin/bash

# Hotel Management System - Git Commands Script
# This script contains common Git commands for managing the project

echo "🏨 Hotel Management System - Git Helper Script"
echo "================================================"

# Function to display menu
show_menu() {
    echo ""
    echo "Choose an option:"
    echo "1. Initialize new Git repository"
    echo "2. Check repository status"
    echo "3. Add all files to staging"
    echo "4. Commit changes"
    echo "5. Push to remote repository"
    echo "6. Pull latest changes"
    echo "7. Create new branch"
    echo "8. Switch branch"
    echo "9. View commit history"
    echo "10. Clone repository"
    echo "11. Setup project after clone"
    echo "12. Exit"
    echo ""
}

# Function to initialize repository
init_repo() {
    echo "Initializing Git repository..."
    git init
    echo "Git repository initialized!"
}

# Function to check status
check_status() {
    echo "Repository status:"
    git status
}

# Function to add files
add_files() {
    echo "Adding all files to staging area..."
    git add .
    echo "Files added to staging!"
}

# Function to commit changes
commit_changes() {
    echo "Enter commit message:"
    read commit_message
    git commit -m "$commit_message"
    echo "Changes committed!"
}

# Function to push changes
push_changes() {
    echo "Enter branch name (default: main):"
    read branch_name
    branch_name=${branch_name:-main}
    git push origin $branch_name
    echo "Changes pushed to remote repository!"
}

# Function to pull changes
pull_changes() {
    echo "Pulling latest changes..."
    git pull
    echo "Latest changes pulled!"
}

# Function to create new branch
create_branch() {
    echo "Enter new branch name:"
    read branch_name
    git checkout -b $branch_name
    echo "New branch '$branch_name' created and switched to!"
}

# Function to switch branch
switch_branch() {
    echo "Available branches:"
    git branch -a
    echo "Enter branch name to switch to:"
    read branch_name
    git checkout $branch_name
    echo "Switched to branch '$branch_name'!"
}

# Function to view commit history
view_history() {
    echo "Commit history:"
    git log --oneline -10
}

# Function to clone repository
clone_repo() {
    echo "Enter repository URL:"
    read repo_url
    echo "Enter directory name (optional):"
    read dir_name
    if [ -z "$dir_name" ]; then
        git clone $repo_url
    else
        git clone $repo_url $dir_name
    fi
    echo "Repository cloned!"
}

# Function to setup project after clone
setup_project() {
    echo "Setting up project dependencies..."
    echo "Installing npm packages..."
    npm install
    echo ""
    echo "Project setup complete!"
    echo "To start the development server, run: npm run dev"
}

# Main menu loop
while true; do
    show_menu
    read -p "Enter your choice (1-12): " choice
    
    case $choice in
        1) init_repo ;;
        2) check_status ;;
        3) add_files ;;
        4) commit_changes ;;
        5) push_changes ;;
        6) pull_changes ;;
        7) create_branch ;;
        8) switch_branch ;;
        9) view_history ;;
        10) clone_repo ;;
        11) setup_project ;;
        12) echo "Goodbye! 👋"; exit 0 ;;
        *) echo "Invalid option. Please try again." ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
done
