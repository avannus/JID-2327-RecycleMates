#!/bin/bash

ENV_FILE=".env"
PORT=3000

# Temporarily commenting out because my env file gets replaced and I put my API key there
# echo -e "---Starting Andrew's helper script---\n"

# function ip_found () {
#   echo "Local IP detected as $ip"

#   key_value="SERVER=http://$ip:$PORT/"
#   echo "Writing over $ENV_FILE with '$key_value'"

#   echo $key_value > $ENV_FILE
#   echo -e "Done setting up $ENV_FILE\n"
# }

# if ! command -v ifconfig &> /dev/null
# then
#   echo "'ifconfig' not found. Trying 'ip address'"
#   if ! command -v ip address &> /dev/null
#   then
#     echo "No commands found to automatically set up server IP. Not writing to $ENV_FILE"
#   else
#     echo "'ip address' found. Parsing for ip"
#     ip=$(ip address | grep eno1 | grep inet | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' | head -n 1)
#     ip_found
#   fi
# else
#   echo "'ifconfig' found. Parsing for ip"
#   ip="localhost"
#   ip_found
# fi

# OPENSSL_MAJOR=$(npm version | grep openssl | grep -Eo '[0-9]+' | head -n 1)
# if (( $OPENSSL_MAJOR > 1))
# then
#   echo -e "'openssl' incompatibility detected. Defaulting to use legacy provider\n"
#   export NODE_OPTIONS=--openssl-legacy-provider
# else
#   echo -e "'openssl' detected as compatible, using default version\n"
# fi

# echo -e "---Finishing Andrew's helper script, starting expo---\n"

npm i

npx expo start
