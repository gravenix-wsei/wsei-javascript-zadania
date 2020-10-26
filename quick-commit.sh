#!/bin/bash
if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <commit-message>"
    exit
fi

git add -A
git commit -m "$1"
git push origin master