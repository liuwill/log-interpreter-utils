pre-install:
	npm install && npm i element-theme -g && et

install:
	npm install && npm i element-theme -g && et && npm run build

dev:
	npm install && npm i element-theme -g && et && npm run dev

test:
	npm install && npm i element-theme -g && et && npm test

.PHONY: test
