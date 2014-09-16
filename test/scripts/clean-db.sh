#!/bin/bash

if [ -z "$1" ] ; then
    echo "Enter a database name"
      exit 1
    fi

    mongoimport --jsonArray --drop --db $1 --collection activities --file ../../db/activities.json
