# pnpm-4321

Reproduction for [pnpm issue #4321](https://github.com/pnpm/pnpm/issues/4321)

## Usage

`docker build -t pnpm-issue-4321 --progress=plain . && docker run -it pnpm-issue-4321 /bin/sh -c 'ls -la'` 


The expectation is that one node_modules directory exists at the project root, and one node_modules directory exists in each packages/* directory.

The unexpected result is that no node_modules folders exist in the docker image following `pnpm install`.
