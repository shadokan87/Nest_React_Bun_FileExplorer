#! /bin/bash
init=("upgrade" "install" "start")
for arg in "${init[@]}"
do
    bun $cmd
done