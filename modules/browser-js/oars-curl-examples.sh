#!/bin/bash
source .env

url=$VITE_OARS_API
project=$VITE_OARS_PROJECT
dbEnv=$VITE_OARS_DB_ENV
apiEnv=$VITE_OARS_API_ENV
key=$VITE_OARS_PUBLIC_KEY

# Curl examples.

# In the curl commandis below...
# "--trac-ascii -" is intended for debugging and can be removed.
# "--trace-ascii -" dumps everything, including the formatted multi-part
# form data.

# OARS Example: Get file listing:
function t1 {
curl --trace-ascii - \
  --form "KEY=$key" \
	--form "PROJECT=$project" \
  --form "API_ENV=$apiEnv" \
  --form "DB_ENV=$dbEnv" \
  --form "TYPE=NAMES" \
	"$url"
}

# OARS Example: Upload a Zip file:
function t2 {
curl --trace-ascii - \
  --form "KEY=$key" \
	--form "PROJECT=$project" \
  --form "API_ENV=$apiEnv" \
  --form "DB_ENV=$dbEnv" \
  --form "TYPE=store" \
	--form FILE=@wav.zip \
	--form "FILENAME=wav.zip" \
	"$url"
}


# Run Tests
t2

