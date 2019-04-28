# PA传送器

此插件用来做 PA 时随时向虚拟机同步文件

## 打赏支持
![0](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/0.png)

## Features

* 在文件上右键可以向虚拟机拷贝文件
* 更多特性添加中

## Requirements

* **首先，请在 Windows 中开启 ssh 功能：**
1. windows 设置中点击应用
![1](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/1.jpg)
2. 在 “应用和功能” 菜单栏中选择 “管理可选功能”
![2](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/2.jpg)
3. 然后选择添加功能，将 OpenSSH 添加进来，等待安装......
![3](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/3.jpg)


* **在设置页面配置好 姓名 与 IpAddr**
![4](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/4.jpg)

* **请在 VSCode 中打开`/ics2017/`文件夹**
![5](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/5.jpg)

* **在左侧资源管理器、上方文件选项卡，以及文档空白处均可单击右键使用**
![6](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/6.jpg)
![7](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/7.jpg)
![8](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/8.jpg)

* **初次使用可能需要输入yes**

## Extension Settings

在`contributes.configuration`中配置个人信息.

* `myExtension.yourAddr`: 虚拟机ipaddr
* `myExtension.yourName`: 虚拟机名字(姓名)

## Known Issues

暂无

## Release Notes

第一版
