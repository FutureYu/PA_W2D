# pa-win2linux README

此插件用来做 PA 时随时向虚拟机同步文件

## Features

* 在文件上右键可以向虚拟机拷贝文件
* 更多特性添加中

## Requirements

**首先，请在 Windows 中开启 ssh 功能：**
1. windows 设置中点击应用
2. 在 “应用和功能” 菜单栏中选择 “管理可选功能”
3. 然后选择添加功能，将 OpenSSH 添加进来，等待安装......

**在设置页面配置好 姓名 与 IpAddr**

**请在 VSCode 中打开`/ics2017/`文件夹**

## Extension Settings

在`contributes.configuration`中配置个人信息.

* `myExtension.yourAddr`: 虚拟机ipaddr
* `myExtension.yourName`: 虚拟机名字(姓名)

## Known Issues

暂无

## Release Notes

第一版