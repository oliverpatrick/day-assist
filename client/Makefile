###
# Installation
###

.PHONY: clean
clean: ## Clean the local filesystem for all the automated items
ifeq ($(OS),Windows_NT)
	cmd /c if exist "build" cmd /c del /f /s /q build 1>nul
	cmd /c if exist "build" cmd /c rmdir /Q /S build
	cmd /c if exist "node_modules" cmd /c del /f /s /q node_modules 1>nul
	cmd /c if exist "node_modules" cmd /c rmdir /Q /S node_modules
else
	rm -fr node_modules
	rm -fr build/
endif
	git clean -fX || true

.PHONY: install
install: ## Install all the dependencies we need
ifeq ($(CI),true)
	npm ci
	cd infrastructure && npm ci
else
	npm ci
	cd infrastructure && npm ci
	node scripts/install-hooks.js
endif

###
# Building
###

.PHONY: serve
serve: ## Serve the application
	npm run serve

.PHONY: serve-bg
serve-bg: okta-details-check ## Serve the application and the mockAPI in the background
	npm run serve&

.PHONY: build
build: ## Build the application in development environment
	npm run build