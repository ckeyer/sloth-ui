PWD := $(shell pwd)
PKG := github.com/ckeyer/sloth-ui
APP := sloth-ui

DEV_UI_IMAGE := ckeyer/dev:node

VERSION := $(shell cat VERSION.txt)
GIT_COMMIT := $(shell git rev-parse --short HEAD)
GIT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD)

NET := $(shell docker network inspect cknet > /dev/zero && echo "--net cknet --ip 172.16.1.8" || echo "")
UI_NET := $(shell docker network inspect cknet > /dev/zero && echo "--net cknet --ip 172.16.1.9" || echo "")

dev-ui:
	docker run --rm -it \
	 --name $(APP)-dev \
	 -p 8080:8080 \
	 -v $(PWD):/opt/$(APP) \
	 -w /opt/$(APP) \
	 $(DEV_UI_IMAGE) bash
