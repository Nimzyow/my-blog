#!/bin/bash

# Print colored status messages
print_status() {
    local color=$1
    local message=$2
    echo -e "\033[${color}m${message}\033[0m"
}

print_status "34" "Starting update-website.sh"

# Run ansible playbook to update the website
if ansible-playbook -i ansible-deploy/inventory.yaml ansible-deploy/deploy.yaml; then
    print_status "32" "Finished update-website.sh"
    exit 0
else
    print_status "31" "Failed to update website"
    exit 1
fi
