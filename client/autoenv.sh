#!/bin/bash

ENV_FILE=".env"
PORT=3000

function ip_found () {
  echo "Local IP detected as $ip"

  key_value="SERVER=http://$ip:$PORT/"
  echo "Writing over $ENV_FILE with '$key_value'"

  echo $key_value > $ENV_FILE
  echo -e "Done setting up $ENV_FILE\n"
}

if ! command -v ifconfig &> /dev/null
then
  echo "'ifconfig' not found. Trying 'ip address'"
  if ! command -v ip address &> /dev/null
  then
    echo "No commands found to automatically set up server IP. Not writing to $ENV_FILE"
  else
    echo "'ip address' found. Parsing for ip"
    ip=$(ip address | grep eno1 | grep inet | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' | head -n 1)
    ip_found
  fi
else
  echo "'ifconfig' found. Parsing for ip"
  ip=$(ifconfig en0 inet | grep inet | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' | head -n 1)
  ip_found
fi

# export NODE_OPTIONS=--openssl-legacy-provider

npm i
