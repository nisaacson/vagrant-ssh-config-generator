MOCHA?=node_modules/.bin/mocha
REPORTER?=spec
GROWL=
FLAGS=$(GROWL) --reporter $(REPORTER)

test:
	$(MOCHA) $(shell find test -name "*-test.js") $(FLAGS)

.PHONY: test

