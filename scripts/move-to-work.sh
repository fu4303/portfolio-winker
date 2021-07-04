#!/bin/bash

cd out
mkdir work
mv * work || echo 'move build files to /work';
mv work/_redirects .