#!/bin/bash

file=".env"

ip=$(ifconfig en0 inet | grep inet | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' | head -n 1)

echo "Local IP detected as $ip"

key_value="SERVER=http://$ip:3000/"

echo "Writing over $file with '$key_value'"

echo $key_value > $file

echo -e "Done setting up $file\n"

npm i
