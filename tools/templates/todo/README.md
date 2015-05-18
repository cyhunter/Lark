
下面以一个任务列表的例子来展示 Lark 的用法。

安装

如果你使用 JavaScript 开发可以直接下载预编译的 lark.js 并引入您的HTML文件中。

Lark 提供了一组命令行工具来加速应用的开发，安装方法请参考：https://github.com/egret-labs/Lark


#Hello World

我们先写一个简单例子在屏幕上输出 "Hello World!".

##创建项目

新建一个文件夹"HelloWorld", 打开命令行并进入HelloWorld文件夹。
执行 `lark create` 创建一个HelloWorld项目。

HelloWorld 文件夹中包含三个目录 src、web 和 bin-debug。

* src 目录存放项目的源代码
* web 目录存放 web app 相关的模板文件比如浏览器调试用的index.html
* bin-debug 目录存放项目编译输出的所有文件。

src/Main.ts 中的类`Main`是程序执行的入口类。`Main`继承自`lark.Sprite`, 程序初始化时Lark会实例化一个`Main`对象然后把它添加到舞台。
这里我们实例化了一个TextField用以显示"Hello World", 调用`this.addChild`将textField添加为Main的一个子项使它能够被渲染出来。

```javascript
	class Main extends lark.Sprite {
	  	constructor() {
			super();
			var textField = new lark.TextField();
			textField.text = "Hello World!";
			this.addChild(textField);
	  	}
	}
```

web/index.html是HelloWorld的主页，它决定了Lark在浏览器中的尺寸和布局。你可以自定义这个模板文件满足实际需求。

```html
	<html>
		<head>
		    <title>Hello World</title>
		    <style>
		        html, body, #demo { background: #434343;padding: 0; margin: 0; height: 100%; }
		    </style>
		    <script src="libs/lark.js"></script>
		    <script src="Main.js"></script>
		</head>
		<body>
			<div id="demo" class="lark-player" data-entry-class="Main"
		    	 data-content-width="480" data-content-height="800"
		    	 data-scale-mode="noScale" 
		    	 data-show-paint-rect="false" data-show-fps="false" data-show-log="true" data-log-filter="">
		    </div>
		</body>
	</html>
```

我们把`<div id="demo" ..."` 作为Lark场景的容器，Lark 在网页加载完成后会查找`class="lark-player"` 的所有HTML元素，并根据HTML标签的属性值初始化对应的`Player`。

下面列举主要的几个属性值：

* `data-entry-class` 指定程序的入口，Lark会实例化这个类并把它添加到舞台。一般可以指定一个继承自 `lark.Sprite` 的类。
* `data-content-width`,`data-content-height` 指定程序设计时的舞台尺寸。
* `data-scale-mode` 指定舞台的缩放模式，`noScale`表示使用设备的分辨，不进行缩放，舞台的宽高始终等于HTML元素的宽高。其他可以使用的值请参考`lark.player.ScaleMode`类中的定义。

Lark 还提供了一些辅助开发的属性

*   `data-show-paint-rect` 显示重绘区域
*   `data-show-fps` 显示FPS
*   `data-show-log` 使用`lark.log`方法打印输出到屏幕，方便移动端调试
*   `data-log-filter` 指定一个正则表达式，过滤需要在屏幕上打印的信息
	
##编译项目

`lark build` 命令会把src目录中的TypeScript编译为JavaScript输出到bin-debug目录，并把web和src目录下的非TypeScript文件复制到bin-debug目录。

##运行项目

执行 `lark run` 启动内置的 HTTP Server 并启动浏览器打开HelloWorld主页。


#Lark GUI

lark.gui 是 Lark 提供的一套GUI框架，封装了常用的UI组件，满足丰富交互应用的需求。

* GUI 使用皮肤和逻辑分离的机制，最大程度的减少UI组件和逻辑代码之间的耦合
* 除了使用TypeScript/JavaScript编码创建UI外， GUI还可以使用XML来创建可维护性更高的UI界面
* GUI 提供了一系列相对布局属性，方便适配各种尺寸


#任务列表demo

##创建项目

创建一个新项目todo, 执行命令`lark config`打开项目配置界面，在扩展库中选择lark.gui并保存。

## EXML

EXML 是 Egret XML 的简称，使用EXML你可以使用XML来创建组件皮肤。EgretWing也将支持可视化的EXML编辑。
在src目录新建一个文件夹"skins", 创建TodoSkin.exml,并输入下面的内容

```xml
	<?xml version='1.0' encoding='utf-8'?>
	<e:Skin xmlns:e="http://ns.egret-labs.org/egret">
		<e:Label text="Todos" fontSize="100" textColor="0x30CEC6" textAlign="left" 
			left="50" fontFamily="Calibri" right="50"/>
		<e:Rect height="52" y="125" left="15" right="15" fillColor="0xBFBFBF"/>
		<e:TextInput id="txTodo" y="125" height="52" left="15" right="15"/>
		<e:Group id="groupItems" left="15" right="15" top="182" bottom="0">
		</e:Group>
	</e:Skin>
```
`Skin`是皮肤的根节点 `xmlns:e="http://ns.egret-labs.org/egret"`是gui的默认命名空间。

* `<e:Label text="Todo ... ` 添加Label作为App的标题并设置字体样式和字体。
* `<e:Rect height="52" ... ` 添加一个矩形作为TextInput的背景。
* `<e:TextInput id="txTodo"` 添加一个文本输入框，设置 `left="15" right="15"` 让输入框能够随屏幕宽度缩放
* `<e:Group id="groupItems"` 添加一个 `Group` 来放置添加的任务项，设置 `top="182" bottom="0"` 让`Group`随屏幕高度缩放

创建TodoItemSkin.exml, 并输入下面的内容
```xml
	<e:Skin width="450" height="60" xmlns:e="http://ns.egret-labs.org/egret">
		<e:states>
			<e:State name="normal"/>
			<e:State name="done"/>
		</e:states>
		...
		<e:Image id="iconCheck" height="32" width="32" left="15" verticalCenter="0" 
			source="images/uncheck-icon.png" source.done="images/check-icon.png"/>
		...
	</e:Skin>
```
在TodoItemSkin.exml中我们使用了视图状态功能。
```xml
	<e:states>
		<e:State name="normal"/>
		<e:State name="done"/>
	</e:states>
```
使用视图状态可以方便的管理UI组件在各种状态下的属性，例如 `<e:Image source="uncheck-icon.png" source.done="check-icon.png"/>` 
在视图状态为 `done` 时将会将Image URL修改为 `check-icon.png`。

##逻辑组件

在src目录创建Todo.ts文件，并输入下面的内容

```javascript

	/**
	 * 一个列表项的逻辑类
	 */
	class TodoItem extends lark.gui.Component{
		
		labelDisplay:lark.gui.Label;
		...
		
		constructor(taskName:string){
			super();
			this.skinName = TodoItemSkin;
			this.iconCheck.on(lark.TouchEvent.TOUCH_TAP,this.onCheckIconClick,this);
			this.labelDisplay.text = taskName;
	        this.left = this.right = 0;
		}
		
		private onCheckIconClick(){
			this._done = !this._done;
			this.skin.currentState = this._done?'done':'up';
		}
	}
```



```javascript	
	
	/**
	 * 任务列表的逻辑类
	 */
	class Todo extends lark.gui.Component{
		...
		constructor(){
			super();
			this.skinName = TodoSkin;
        	...
			//当用户按回车键时添加一条任务
			this.txTodo.on(lark.TextInputEvent.KEY_DOWN,this.addTodo,this);
		}
		
		addTodo(e:lark.TextInputEvent){
			if (e.keyCode != 13)
				return;
			...
			var todo = new TodoItem(this.txTodo.text);
			this.todos.push(todo);
			this.showTasks();
			...
		}
		
		private showTasks(){
			this.groupItems.removeChildren();
			this.todos.forEach((todo,index)=>{
				todo.top = index * 60;
				this.groupItems.addChild(todo);
			})
		}
	}
```
