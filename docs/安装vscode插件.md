
## 安装 pycad-0.0.1.vsix
1. 打开vscode

1. 点击“扩展”

    ![](/kanbang/pycad_vscode/wiki/images/001/20180818-0ef4f23f.png)  

1. 点击“从VSIX安装”

    ![](/kanbang/pycad_vscode/wiki/images/001/20180818-d28692b9.png)  

1. 选择文件[pycad-0.0.1.vsix]，点击安装，显示成功后重启vscode

    ![](/kanbang/pycad_vscode/wiki/images/001/20180818-c34fe1af.png)  

1. 设置启动路径，点击左下角“设置”

    ![](/kanbang/pycad_vscode/wiki/images/001/20180818-c077410c.png)  

1. 添加如下设置

    ![](/kanbang/pycad_vscode/wiki/images/001/20180818-4218b123.png)  

    ~~~
    "pycad.exepath": "D:\\岩土工具箱\\test.exe",
    "files.associations": {
        "*.val": "json",
        "*.ui": "json"
    }
    ~~~

    *"pycad.exepath"设置为实际的工具箱安装路径*

1. 打开python脚本文件，工具条上会出现“Run”命令，点击命令或使用快捷键“F2”，即可启动测试

    ![](/kanbang/pycad_vscode/wiki/images/001/20180818-892f306c.png)  
