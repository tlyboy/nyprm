#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
	if (argc == 1)
	{
		printf("�÷�: nyprm <options> <package manager>\n");
		printf("����, ���ܵ�ѡ�����:\n");
		printf("  add <npm, yarn, all> Ϊ����������Ӿ���\n");
		printf("  rm <npm, yarn> Ϊ���������Ƴ�����\n");
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
