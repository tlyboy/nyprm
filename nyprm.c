#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if (argc == 1)
    {
        printf("Usage: nyprm <command>\n");
        printf("\n");
        printf("Commands:\n");
        printf("  init  [options] [npm|yarn|pnpm]  add mirror and auto update or install\n");
        printf("  add   [options] [npm|yarn]       add mirror\n");
        printf("  rm    [options] [npm|yarn]       remove mirror\n");
        return -1;
    }
    else if (argc == 2)
    {
        if (strcmp(argv[1], "init") == 0)
        {
            system("npm config set registry https://registry.npmmirror.com/");

            system("npm i -g npm yarn pnpm");

            system("yarn config set registry https://registry.npmmirror.com/");

            system("npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/");
            system("npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://npmmirror.com/mirrors/electron-builder-binaries/");
            system("yan config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/");
            system("yan config set ELECTRON_BUILDER_BINARIES_MIRROR https://npmmirror.com/mirrors/electron-builder-binaries/");
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
    else if (argc == 3)
    {
        if (strcmp(argv[1], "init") == 0)
        {
            if (strcmp(argv[2], "npm") == 0)
            {
                system("npm config set registry https://registry.npmmirror.com/");

                system("npm i -g npm");

                system("npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/");
                system("npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://npmmirror.com/mirrors/electron-builder-binaries/");
            }
            else if (strcmp(argv[2], "yarn") == 0)
            {
                system("npm config set registry https://registry.npmmirror.com/");

                system("npm i -g npm yarn");

                system("npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/");
                system("npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://npmmirror.com/mirrors/electron-builder-binaries/");
                system("yan config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/");
                system("yan config set ELECTRON_BUILDER_BINARIES_MIRROR https://npmmirror.com/mirrors/electron-builder-binaries/");
            }
            else if (strcmp(argv[2], "pnpm") == 0)
            {
                system("npm config set registry https://registry.npmmirror.com/");

                system("npm i -g npm pnpm");

                system("npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/");
                system("npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://npmmirror.com/mirrors/electron-builder-binaries/");
            }
            else
            {
                return -1;
            }
        }
        else if (strcmp(argv[1], "add") == 0)
        {
            if (strcmp(argv[2], "npm") == 0)
            {
                system("npm config set registry https://registry.npmmirror.com/");
            }
            else if (strcmp(argv[2], "yarn") == 0)
            {
                system("yarn config set registry https://registry.npmmirror.com/");
            }
            else
            {
                return -1;
            }
        }
        else if (strcmp(argv[1], "rm") == 0)
        {
            if (strcmp(argv[2], "npm") == 0)
            {
                system("npm config set registry https://registry.npmjs.org/");
            }
            else if (strcmp(argv[2], "yarn") == 0)
            {
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
    }
    else
    {
        return -1;
    }
    return 0;
}
