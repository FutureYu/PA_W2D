# PA传送器

此插件用来做 PA 时随时向虚拟机同步文件，**Windows，macOS 用户使用，其他系统等未经测试，谨慎使用！**

## 打赏支持
![0](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/0.png)

## Features

* 在文件上右键可以与虚拟机双向拷贝文件
* 更多特性添加中

## Requirements

* **Windows，macOS 用户使用，其他系统等未经测试，谨慎使用！**
* **请确保`ics2017`文件夹的父目录不含有 “ics2017”，例如`ics2017/ics2017`为不合法路径**

* 首先，请在 Windows 中开启 ssh 功能：
1. windows 设置中点击应用

![1](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/1.jpg)

2. 在 “应用和功能” 菜单栏中选择 “管理可选功能”
 
![2](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/2.jpg)

3. 然后选择添加功能，将 OpenSSH 添加进来，等待安装......
 
![3](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/3.jpg)


* 在设置页面配置好 姓名 与 IpAddr

![4](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/4.jpg)

* 请在 VSCode 中打开`/ics2017/`文件夹

![5](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/5.jpg)

* 在左侧资源管理器、上方文件选项卡，以及文档空白处均可单击右键使用

![6](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/6.jpg)

![7](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/7.jpg)

![8](https://raw.githubusercontent.com/FutureYu/PA_W2D/master/img/8.jpg)

## Extension Settings

在`contributes.configuration`中配置个人信息.

* `myExtension.yourAddr`: 虚拟机ipaddr
* `myExtension.yourName`: 虚拟机名字(姓名)

## Known Issues

暂无

## Release Notes

增加保存后提交功能
