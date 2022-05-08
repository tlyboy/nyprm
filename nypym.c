#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
	if (argc == 1)
	{
		printf("�÷�: nyprm <options>\n");
		printf("����, ���ܵ�ѡ�����:\n");
		printf("  ls  �鿴�����б�\n");
		printf("  use ʹ�þ���\n");
		return 1;
	}
	else
	{
		if (strcmp(argv[1], "ls") == 0)
		{
			printf("  npm      https://registry.npmjs.org/\n");
			printf("  yarn     https://registry.yarnpkg.com/\n");
			printf("  mirror   https://registry.npmmirror.com/\n");
			return 0;
		}
		else if (strcmp(argv[1], "use") == 0)
		{
			if (strcmp(argv[2], "npm") == 0)
			{
				system("npm config set registry https://registry.npmjs.org");
				printf("\nset npm registry ok !\n\n");
			}
			else if (strcmp(argv[2], "yarn") == 0)
			{
				system("yarn config set registry https://registry.yarnpkg.com/");
				printf("\nset yarn registry to https://registry.yarnpkg.com/\n\n");
			}
			else if (strcmp(argv[2], "mirror") == 0)
			{
				system("npm config set registry https://registry.npmmirror.com/");
				printf("\nset npm registry ok !\n\n");
				system("yarn config set registry https://registry.npmmirror.com/");
				printf("\nset yarn registry ok !\n\n");
			}
			else {
				printf("δ֪�ľ���: %s\n", argv[2]);
			}
		}
	}
	return 0;
}
