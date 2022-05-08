#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
	if (argc == 1)
	{
		printf("用法: nyprm <options> <package manager>\n");
		printf("其中, 可能的选项包括:\n");
		printf("  add <npm, yarn, all> 为包管理器添加镜像\n");
		printf("  rm <npm, yarn> 为包管理器移除镜像\n");
		return -1;
	}
	else
	{
		if (strcmp(argv[1], "add") == 0)
		{
			if (strcmp(argv[2], "npm") == 0)
			{
				system("npm config set registry https://registry.npmmirror.com/");
			}
			else if (strcmp(argv[2], "yarn") == 0)
			{
				system("yarn config set registry https://registry.npmmirror.com/");
			}
			else if (strcmp(argv[2], "all") == 0)
			{
				system("npm config set registry https://registry.npmmirror.com/");
				system("yarn config set registry https://registry.npmmirror.com/");
			}
			else {
				return -1;
			}
		}
		else if (strcmp(argv[1], "rm") == 0)
		{
			if (strcmp(argv[2], "npm") == 0)
			{
				system("npm config set registry https://registry.npmjs.org");
			}
			else if (strcmp(argv[2], "yarn") == 0)
			{
				system("yarn config set registry https://registry.yarnpkg.com/");
			}
			else {
				return -1;
			}
		}
		else {
			return -1;
		}
	}
	return 0;
}
