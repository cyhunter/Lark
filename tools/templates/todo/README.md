
下面以两个简单例子来展示 Lark 的用法。

#安装Lark

Lark 提供了一组命令行工具来加速应用的开发，安装方法请参考：https://github.com/egret-labs/Lark


#Hello World

我们先创建一个Lark内置的HelloWorld例子在屏幕上输出 "Hello World!".

##创建项目

新建一个文件夹"HelloWorld", 打开命令行并进入HelloWorld文件夹。
执行 `lark create` 创建一个HelloWorld项目。

HelloWorld 文件夹中的目录结构是这样的

* **src** 存放项目的源代码
	* **Main.ts** 是程序执行的入口
* **web** 目录存放 web app 相关的模板文件
	* **index.html** 项目主页的模板文件
* **bin-debug** 目录存放项目编译输出的所有文件。
	* **index.html** 根据项目信息生成的项目主页
	* **Main.js** Main.ts 编译之后的JavaScript文件

###Main.ts

src/Main.ts 中的类`Main`是程序执行的入口类。
`Main`继承自`lark.Sprite` 是一个容器对象，我们可以向其中添加子项来显示需要的内容。

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
程序初始化时Lark会实例化一个`Main`对象然后把它添加到舞台。
这里我们实例化了一个TextField用以显示"Hello World", 调用`this.addChild`将textField
添加为Main的一个子项使它能够被渲染出来。


###index.html

web/index.html是HelloWorld的主页模板，它决定了Lark在浏览器中的尺寸和布局。你可以自定义这个模板文件满足实际需求。

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

`lark build` 命令会把src目录中的TypeScript编译为JavaScript输出到bin-debug目录，
并把web和src目录下的非TypeScript文件复制到bin-debug目录。
这样bin-debug就包含了项目所需要的全部内容。浏览器访问bin-debug/index.html
就能运行项目。

##运行项目

执行 `lark run` 启动内置的 HTTP Server 并启动浏览器打开HelloWorld主页。




#Todo任务列表

##Lark GUI

lark.gui 是 Lark 提供的一套GUI框架，封装了常用的UI组件，满足丰富交互应用的需求。

* GUI 使用皮肤和逻辑分离的机制，最大程度的减少UI组件和逻辑代码之间的耦合
* 除了使用TypeScript/JavaScript编码创建UI外， GUI还可以使用EXML来创建可维护性更高的UI界面
* GUI 提供了一系列相对布局属性，方便适配各种尺寸


EXML 是 Egret XML 的简称，使用EXML你可以使用XML来创建组件皮肤。EgretWing也将支持可视化的EXML编辑。

##创建项目

由于这个示例的代码较多，你可以从 Github 下载源代码查看：
https://github.com/egret-labs/Lark/tree/todo/tools/templates/todo

Todo示例的项目结构为

```
	src
		images
			...
		skins
			TodoSkin.exml
			TodoItemSkin.exml
		Main.ts
		Todo.ts
		TodoItem.ts
		SkinLoader.ts
	web
		index.html
```

### TodoSkin.exml
打开 src\skins\TodoSkin.exml

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
`Skin`是皮肤的根节点，表示这是一个组件皮肤。
 `http://ns.egret-labs.org/egret`是gui的默认命名空间。带有这个命名空间的
 标签会被解析为对应的GUI组件。

* `<e:Label text="Todo ... ` 添加Label作为App的标题并设置字体样式和字体。
* `<e:Rect height="52" ... ` 添加一个矩形作为TextInput的背景。
* `<e:TextInput id="txTodo"` 添加一个文本输入框，设置 `left="15" right="15"` 让输入框能够随屏幕宽度缩放
* `<e:Group id="groupItems"` 添加一个 `Group` 来放置添加的任务项，设置 `top="182" bottom="0"` 让`Group`随屏幕高度缩放

##TodoItemSkin.exml

打开 src\skins\TodoItemSkin.exml
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
在逻辑组件中可以通过`this.skin.currentState = 'done'`来快速切换视图状态。

##入口类

打开 `src\Main.ts`。`Main` 继承自`lark.gui.Group`，`Group` 是一个GUI容器可以添加子项。

```javascript
	declare var TodoSkin: typeof lark.gui.Skin;
	declare var TodoItemSkin: typeof lark.gui.Skin;
	
	class Main extends lark.gui.Group {
	    constructor(){
	        super();
	        var skinLoader = new SkinLoader();
	        skinLoader.loadSkin("skins/TodoSkin.exml","TodoSkin");
	        skinLoader.loadSkin("skins/TodoItemSkin.exml","TodoItemSkin");
	        skinLoader.on(lark.Event.COMPLETE,this.onExmlLoaded,this);
	    }
	    private onExmlLoaded(event: lark.Event): void {
	        var todo = new Todo();
	        todo.skinName = TodoSkin;
	        this.addChild(todo);
	        
	        this.stage.on(lark.Event.RESIZE, this.onResize, this);
	        this.onResize();
	    }
	    
	    private onResize(){
	        this.width = this.stage.stageWidth;
	        this.height = this.stage.stageHeight;
	    }
	}
```

在 `Main` 中我们先声明了`TodoSkin` 和 `TodoItemSkin` 两个皮肤，方便其他组件引用。
这里只写声明是因为 EXML 可以直接被解析成一个全局的 Skin类，不需要显式赋值。

在这个demo中我们添加了一个SkinLoader类来加载并解析多个EXML文件，SkinLoader的实现非常简单，
使用HTTP请求加载EXML文件的内容，将加载到的文本内容交给lark解析
`lark.gui.EXML.parse(request.response, name);` 这里的name就是这个Skin的全局变量名，
这里使用 `TodoSkin` 作为 `skins/TodoSkin.exml` 的类名。

EXML加载完成后就可以将Skin赋值给对应的组件使用了。
```javascript
	var todo = new Todo();
    todo.skinName = TodoSkin;
    this.addChild(todo);
```
我们监听了 stage 的 `lark.Event.RESIZE` 事件来实时适应屏幕尺寸变化。

##逻辑组件与皮肤部件

###TodoItem.ts
打开 `src\TodoItem.ts` 文件。`TodoItem`是任务列表项的逻辑类。`TodoItem`
继承自 `lark.gui.Component`，是可以指定皮肤的组件。

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
			this.labelDisplay.text = taskName;
			...
		}
	}
```
在 `TodoItem` 的构造函数中我们指定 `this.skinName = TodoItemSkin;`，
在这个过程中Lark会实例化 `TodoItemSkin` 并将Skin中的子项添加到`TodoItem`的显示列表中。

在`TodoItem`中有一个`labelDisplay:lark.gui.Label;`属性。
我们没有对他进行初始化而是直接使用，是因为在TodoItemSkin中我们定义了`<e:Label id="labelDisplay"`
Lark会将Skin中存在id属性的组件，直接赋值给逻辑组件的同名属性。
这样就可以在逻辑组件中直接访问皮肤中的UI组件又不必关心具体的UI实现。


###Todo.ts

打开 `src\Todo.ts` 文件。`Todo`是任务列表的逻辑类。用户在文本框 `<e:TextInput id="txTodo"`
中输入任务，按回车键时添加任务到列表中。

```javascript	
	
	/**
	 * 任务列表的逻辑类
	 */
	class Todo extends lark.gui.Component{
		
		public txTodo:lark.gui.TextInput;
		public groupItems:lark.gui.Group;
		
		constructor(){
			super();
			this.skinName = TodoSkin;
        	...
			//当用户按回车键时添加一条任务
			this.txTodo.on(lark.TextInputEvent.KEY_DOWN,this.addTodo,this);
		}
		
		addTodo(e:lark.TextInputEvent){
			//按键不是回车键时执行默认动作
			if (e.keyCode != 13)
				return;
			...
			var todo = new TodoItem(this.txTodo.text);
			var index = this.groupItems.numChildren;
			todo.top = 60 * index;
			this.groupItems.addChild(todo);
			...
		}
	}
```

整个示例项目的完整代码请参考 https://github.com/egret-labs/Lark/tree/todo/tools/templates/todo