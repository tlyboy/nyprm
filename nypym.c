#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
	if (argc == 1)
	{
		printf("用法: nyprm <options>\n");
		printf("其中, 可能的选项包括:\n");
		printf("  ls  查看镜像列表\n");
		printf("  use 使用镜像\n");
		return -1;
	}
	else
	{
		if (strcmp(argv[1], "ls") == 0)
		{
			printf("  npm      https://registry.npmjs.org/\n");
			printf("  yarn     https://registry.yarnpkg.com/\n");
			printf("  mirror   https://registry.npmmirror.com/\n");
		}
		else if (strcmp(argv[1], "use") == 0)
		{
			if (strcmp(argv[2], "npm") == 0)
			{
				system("npm config set registry https://registry.npmjs.org");
			}
			else if (strcmp(argv[2], "yarn") == 0)
			{
				system("yarn config set registry https://registry.yarnpkg.com/");
			}
			else if (strcmp(argv[2], "mirror") == 0)
			{
				system("npm config set registry https://registry.npmmirror.com/");
				system("yarn config set registry https://registry.npmmirror.com/");
			}
		}
	}
	return 0;
}
