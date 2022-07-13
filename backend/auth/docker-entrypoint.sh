#!/bin/bash

set -e

echo "Running database migrations"
yarn migrate

echo "Running unit tests"
yarn test

echo "Starting server"
yarn start