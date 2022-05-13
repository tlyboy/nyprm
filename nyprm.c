#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
	if (argc == 1)
	{
		printf("Usage: nyprm <command>\n");
		printf("\n");
		printf("Commands:\n");
		printf("  init  add mirror and auto update or install\n");
		printf("  add   add mirror\n");
		printf("  rm    remove mirror\n");
		return -1;
	}
	else if (argc == 2)
	{
		if (strcmp(argv[1], "init") == 0)
		{
			system("npm config set registry https://registry.npmmirror.com/");
			system("npm config set NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node");
			system("npm config set NVM_NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node");
			system("npm config set PHANTOMJS_CDNURL https://cdn.npmmirror.com/binaries/phantomjs");
			system("npm config set CHROMEDRIVER_CDNURL https://cdn.npmmirror.com/binaries/chromedriver");
			system("npm config set OPERADRIVER_CDNURL https://cdn.npmmirror.com/binaries/operadriver");
			system("npm config set ELECTRON_MIRROR https://cdn.npmmirror.com/binaries/electron/");
			system("npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://cdn.npmmirror.com/binaries/electron-builder-binaries/");
			system("npm config set SASS_BINARY_SITE https://cdn.npmmirror.com/binaries/node-sass");
			system("npm config set SWC_BINARY_SITE https://cdn.npmmirror.com/binaries/node-swc");
			system("npm config set NWJS_URLBASE https://cdn.npmmirror.com/binaries/nwjs/v");
			system("npm config set PUPPETEER_DOWNLOAD_HOST https://cdn.npmmirror.com/binaries");
			system("npm config set SENTRYCLI_CDNURL https://cdn.npmmirror.com/binaries/sentry-cli");
			system("npm config set SAUCECTL_INSTALL_BINARY_MIRROR https://cdn.npmmirror.com/binaries/saucectl");
			system("npm config set RE2_DOWNLOAD_MIRROR https://cdn.npmmirror.com/binaries/node-re2");
			system("npm config set RE2_DOWNLOAD_SKIP_PATH true");
			system("npm config set npm_config_keytar_binary_host https://cdn.npmmirror.com/binaries/keytar");
			system("npm config set npm_config_sharp_binary_host https://cdn.npmmirror.com/binaries/sharp");
			system("npm config set npm_config_sharp_libvips_binary_host https://cdn.npmmirror.com/binaries/sharp-libvips");
			system("npm config set npm_config_robotjs_binary_host https://cdn.npmmirror.com/binaries/robotjs");

			system("npm i -g npm yarn pnpm");

			system("yarn config set -- --emoji true");
			system("yarn config set registry https://registry.npmmirror.com/");
			system("yarn config set NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node");
			system("yarn config set NVM_NODEJS_ORG_MIRROR https://cdn.npmmirror.com/binaries/node");
			system("yarn config set PHANTOMJS_CDNURL https://cdn.npmmirror.com/binaries/phantomjs");
			system("yarn config set CHROMEDRIVER_CDNURL https://cdn.npmmirror.com/binaries/chromedriver");
			system("yarn config set OPERADRIVER_CDNURL https://cdn.npmmirror.com/binaries/operadriver");
			system("yarn config set ELECTRON_MIRROR https://cdn.npmmirror.com/binaries/electron/");
			system("yarn config set ELECTRON_BUILDER_BINARIES_MIRROR https://cdn.npmmirror.com/binaries/electron-builder-binaries/");
			system("yarn config set SASS_BINARY_SITE https://cdn.npmmirror.com/binaries/node-sass");
			system("yarn config set SWC_BINARY_SITE https://cdn.npmmirror.com/binaries/node-swc");
			system("yarn config set NWJS_URLBASE https://cdn.npmmirror.com/binaries/nwjs/v");
			system("yarn config set PUPPETEER_DOWNLOAD_HOST https://cdn.npmmirror.com/binaries");
			system("yarn config set SENTRYCLI_CDNURL https://cdn.npmmirror.com/binaries/sentry-cli");
			system("yarn config set SAUCECTL_INSTALL_BINARY_MIRROR https://cdn.npmmirror.com/binaries/saucectl");
			system("yarn config set RE2_DOWNLOAD_MIRROR https://cdn.npmmirror.com/binaries/node-re2");
			system("yarn config set RE2_DOWNLOAD_SKIP_PATH true");
			system("yarn config set npm_config_keytar_binary_host https://cdn.npmmirror.com/binaries/keytar");
			system("yarn config set npm_config_sharp_binary_host https://cdn.npmmirror.com/binaries/sharp");
			system("yarn config set npm_config_sharp_libvips_binary_host https://cdn.npmmirror.com/binaries/sharp-libvips");
			system("yarn config set npm_config_robotjs_binary_host https://cdn.npmmirror.com/binaries/robotjs");
		}
		else if (strcmp(argv[1], "add") == 0)
		{
			system("npm config set registry https://registry.npmmirror.com/");
			system("yarn config set registry https://registry.npmmirror.com/");
		}
		else if (strcmp(argv[1], "rm") == 0)
		{
			system("npm config set registry https://registry.npmjs.org");
			system("yarn config set registry https://registry.yarnpkg.com/");
		}
		else
		{
			return -1;
		}
	}
	else
	{
		return -1;
	}
	return 0;
}
