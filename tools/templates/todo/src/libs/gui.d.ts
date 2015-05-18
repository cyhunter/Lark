declare module lark.gui {
    /**
     * 简单文本显示控件接口。
     */
    interface IDisplayText {
        /**
         * 此文本组件所显示的文本。
         */
        text: string;
    }
}
declare module lark.gui {
    /**
     * 属性设置操作
     */
    class SetProperty implements IOverride {
        /**
         * 创建一个SetProperty实例
         */
        constructor(target: string, name: string, value: any);
        /**
         * 要修改的属性名
         */
        name: string;
        /**
         * 目标实例名
         */
        target: string;
        /**
         * 属性值
         */
        value: any;
        /**
         * 旧的属性值
         */
        private oldValue;
        /**
         * 应用覆盖。将保留原始值，以便以后可以在 remove() 方法中恢复该值。
         * @param skin 皮肤附加到的主机组件
         */
        apply(skin: Skin): void;
        /**
         * 删除覆盖。在 apply() 方法中记住的值将被恢复。
         * @param skin 皮肤附加到的主机组件
         */
        remove(skin: Skin): void;
        /**
         * 设置属性值
         */
        private setPropertyValue(obj, name, value, valueForType);
        /**
         * 转成Boolean值
         */
        private toBoolean(value);
    }
}
declare module lark.gui {
    /**
     * IOverride 接口定义视图状态的覆盖操作。State 类 overrides 属性数组中的所有条目均必须实现此接口。
     */
    interface IOverride {
        /**
         * 应用覆盖。将保留原始值，以便以后可以在 remove() 方法中恢复该值。
         * @param parent 皮肤附加到的主机组件
         */
        apply(skin: Skin): void;
        /**
         * 删除覆盖。在 apply() 方法中记住的值将被恢复。
         * @param parent 皮肤附加到的主机组件
         */
        remove(skin: Skin): void;
    }
}
declare module lark.player {
    const enum AddPosition {
        /**
         * 添加父级容器的底层
         */
        FIRST = 0,
        /**
         * 添加在父级容器的顶层
         */
        LAST = 1,
        /**
         * 添加在相对对象之前
         */
        BEFORE = 2,
        /**
         * 添加在相对对象之后
         */
        AFTER = 3,
    }
}
declare module lark.gui {
    /**
     * 显示元素添加操作
     */
    class AddItems implements IOverride {
        /**
         * 创建一个AddItems实例
         */
        constructor(target: string, propertyName: string, position: number, relativeTo: string);
        /**
         * 要添加到的属性
         */
        propertyName: string;
        /**
         * 添加的位置，有效值为: "first","last","before","after"
         */
        position: number;
        /**
         * 相对的显示元素的实例名
         */
        relativeTo: string;
        /**
         * 目标实例名
         */
        target: string;
        /**
         * 应用覆盖。将保留原始值，以便以后可以在 remove() 方法中恢复该值。
         * @param skin 皮肤附加到的主机组件
         */
        apply(skin: Skin): void;
        /**
         * 删除覆盖。在 apply() 方法中记住的值将被恢复。
         * @param skin 皮肤附加到的主机组件
         */
        remove(skin: Skin): void;
    }
}
declare module lark.gui {
    /**
     * 为Lark GUI模块内的类或接口定义的枚举值。通常作为实例检查类型 lark.is() 方法的参数。
     */
    enum Types {
        /**
         * GUI显示对象基类
         */
        UIComponent = 1001,
        /**
         * GUI容器基类
         */
        Group = 1002,
        /**
         * Component 类定义可设置外观的组件的基类。Component 类所使用的外观通常是 Skin 类的子类。
         */
        Component = 1003,
        /**
         * Label 是可以呈示一行或多行统一格式文本的UI组件。要显示的文本由 text 属性确定。文本格式由样式属性指定，例如 fontFamily 和 fontSize。
         * 因为 Label 运行速度快且占用内存少，所以它特别适合用于显示多个小型非交互式文本的情况，例如，项呈示器和 Button 外观中的标签。
         * 在 Label 中，将以下三个字符序列识别为显式换行符：CR（“\r”）、LF（“\n”）和 CR+LF（“\r\n”）。
         * 如果没有为 Label 指定宽度，则由这些显式换行符确定的最长行确定 Label 的宽度。
         * 如果指定了宽度，则指定文本将在组件边界的右边缘换行，如果文本扩展到低于组件底部，则将被剪切。
         */
        Label = 1004,
        /**
         * Image 控件允许您在运行时显示 JPEG、PNG 等图片文件文件。Image 继承至 Bitmap，因此您可以直接对其 bitmapData 属性，
         * 赋值从外部加载得到的位图数据以显示对应图片。同时，Image 还提供了更加方便的 source 属性，source 属性可以接受一个网络图片url作为值，
         * 赋值为url后，它内部会自动去加载并显示图片。并且您同样也可以直接把 BitmapData 对象赋值给 source 属性以显示图片。
         * Image 控件可以直接替代 Bitmap 在显示列表中使用。
         *
         * @event lark.Event.COMPLETE 当图片加载完成后调度
         */
        Image = 1005,
        /**
         * 含有视图状态功能的皮肤基类。
         */
        Skin = 1006,
        /**
         * 皮肤主题。实例化一个主题，能够在运行时修改全局的默认皮肤。
         */
        Theme = 1007,
        /**
         * UI事件
         */
        UIEvent = 1008,
        /**
         * 容器布局基类。若要创建使用 Group 容器的自定义布局，必须扩展 LayoutBase 或其子类之一。
         * 子类必须实现 updateDisplayList() 方法（定位 target Group 的子项并调整这些子项的大小）和 measure() 方法（计算 target 的默认大小）。
         */
        LayoutBase = 1009,
        /**
         * BasicLayout 类根据其各个设置彼此独立地排列布局元素。
         * BasicLayout（也称为绝对布局）要求显式定位每个容器子代。可以使用子代的 x 和 y 属性，或使用约束来定位每个子代。
         */
        BasicLayout = 1010,
        /**
         * 带有标题，关闭按钮，可移动区域的面板组件。注意：当第一次通过触摸交互操作移动面板时，面板的 includeInLayout 属性将会自动被设置为false，
         * 以确保移动不会受到自动布局属性的影响。若之后还需要启用面板在父级容器中的自动布局，需手动设置 includeInLayout 为 true。
         * @event lark.gui.UIEvent.CLOSING 面板即将关闭事件，在关闭按钮被点击后抛出，监听此事件并调用event.preventDefault()能够阻止面板被关闭。
         */
        Panel = 1011,
        /**
         * 按钮组件
         */
        Button = 1012,
        /**
         * 切换按钮
         */
        ToggleButton = 1013,
        /**
         * 复选框
         */
        CheckBox = 1014,
        /**
         * 开关按钮
         */
        ToggleSwitch = 1015,
        /**
         * RadioButton 组件使用户可在一组互相排斥的选择中做出一种选择
         */
        RadioButton = 1016,
        /**
         * RadioButtonGroup 组件定义一组 RadioButton 组件，这些组件相互排斥；因此，用户每次只能选择一个 RadioButton 组件
         */
        RadioButtonGroup = 1017,
    }
}
declare module lark.gui {
}
declare module lark.player {
    /**
     * XML节点基类
     */
    interface XMLNode {
        /**
         * 节点类型，1：XML，2：XMLAttribute，3：XMLText
         */
        nodeType: number;
        /**
         * 节点所属的父级节点
         */
        parent: XML;
    }
    /**
     * XML节点对象
     */
    interface XML extends XMLNode {
        /**
         * 当前节点上的属性列表
         */
        attributes: any;
        /**
         * 当前节点的子节点列表
         */
        children: XMLNode[];
        /**
         * 节点完整名称。例如节点 <e:Button/> 的 name 为：e:Button
         */
        name: string;
        /**
         * 节点的命名空间前缀。例如节点 <e:Button/> 的 prefix 为：e
         */
        prefix: string;
        /**
         * 节点的本地名称。例如节点 <e:Button/> 的 prefix 为：Button
         */
        localName: string;
        /**
         * 节点的命名空间地址。例如节点 <e:Skin xmlns:e="http://ns.egret-labs.org/egret"/> 的 namespace 为： http://ns.egret-labs.org/egret
         */
        namespace: string;
    }
    /**
     * XML文本节点
     */
    interface XMLText extends XMLNode {
        /**
         * 文本内容
         */
        text: string;
    }
    var XML: {
        /**
         * 解析字符串为XML对象
         * @param text 要解析的XML对象。
         */
        parse(text: string): XML;
    };
}
declare module lark.player {
    /**
     * GUI命名空间
     */
    var NS_E: string;
    /**
     * Wing命名空间
     */
    var NS_W: string;
    class EXMLConfig {
        private properties;
        private describe(instance);
        /**
         * 根据类的短名ID和命名空间获取完整类名(以"."分隔)
         * @param id 类的短名ID
         * @param ns 命名空间
         */
        getClassNameById(id: string, ns: string): string;
        /**
         * 根据ID获取对应的默认属性
         * @param id 类的短名ID
         * @param ns 命名空间
         * @return 默认属性名
         */
        getDefaultPropById(id: string, ns: string): string;
        /**
         * 获取指定属性的类型,返回基本数据类型："boolean","string","number","any"。
         * @param property 属性名
         * @param className 要查询的完整类名
         */
        getPropertyType(property: string, className: string): string;
    }
}
declare module lark.player {
    /**
     * 代码生成工具基类
     */
    class CodeBase {
        toCode(): string;
        indent: number;
        /**
         * 获取缩进字符串
         */
        getIndent(indent?: number): string;
    }
    class CpClass extends CodeBase {
        /**
         * 构造函数代码块
         */
        constructCode: CpCodeBlock;
        /**
         * 类名,不包括模块名
         */
        className: string;
        /**
         * 父类类名,包括完整模块名
         */
        superClass: string;
        /**
         * 内部类区块
         */
        private innerClassBlock;
        /**
         * 添加一个内部类
         */
        addInnerClass(clazz: CpClass): void;
        /**
         * 变量定义区块
         */
        private variableBlock;
        /**
         * 添加变量
         */
        addVariable(variableItem: CpVariable): void;
        /**
         * 根据变量名获取变量定义
         */
        getVariableByName(name: string): CpVariable;
        /**
         * 函数定义区块
         */
        private functionBlock;
        /**
         * 添加函数
         */
        addFunction(functionItem: CpFunction): void;
        /**
         * 根据函数名返回函数定义块
         */
        getFuncByName(name: string): CpFunction;
        toCode(): string;
    }
    class CpCodeBlock extends CodeBase {
        /**
         * 添加变量声明语句
         * @param name 变量名
         * @param value 变量初始值
         */
        addVar(name: string, value?: string): void;
        /**
         * 添加赋值语句
         * @param target 要赋值的目标
         * @param value 值
         * @param prop 目标的属性(用“.”访问)，不填则是对目标赋值
         */
        addAssignment(target: string, value: string, prop?: string): void;
        /**
         * 添加返回值语句
         */
        addReturn(data: string): void;
        /**
         * 添加一条空行
         */
        addEmptyLine(): void;
        /**
         * 开始添加if语句块,自动调用startBlock();
         */
        startIf(expression: string): void;
        /**
         * 开始else语句块,自动调用startBlock();
         */
        startElse(): void;
        /**
         * 开始else if语句块,自动调用startBlock();
         */
        startElseIf(expression: string): void;
        /**
         * 添加一个左大括号，开始新的语句块
         */
        startBlock(): void;
        /**
         * 添加一个右大括号,结束当前的语句块
         */
        endBlock(): void;
        /**
         * 添加执行函数语句块
         * @param functionName 要执行的函数名称
         * @param args 函数参数列表
         */
        doFunction(functionName: string, args: string[]): void;
        private lines;
        /**
         * 添加一行代码
         */
        addCodeLine(code: string): void;
        /**
         * 添加一行代码到指定行
         */
        addCodeLineAt(code: string, index: number): void;
        /**
         * 是否存在某行代码内容
         */
        containsCodeLine(code: string): boolean;
        /**
         * 在结尾追加另一个代码块的内容
         */
        concat(cb: CpCodeBlock): void;
        toCode(): string;
    }
    class CpFunction extends CodeBase {
        /**
         * 代码块
         */
        codeBlock: CpCodeBlock;
        isGet: boolean;
        /**
         * 函数名
         */
        name: string;
        toCode(): string;
    }
    class CpVariable extends CodeBase {
        constructor(name: string, defaultValue?: string);
        /**
         * 变量名
         */
        name: string;
        /**
         * 默认值
         */
        defaultValue: string;
        toCode(): string;
    }
    class CpState extends CodeBase {
        constructor(name: string, stateGroups?: Array<any>);
        /**
         * 视图状态名称
         */
        name: string;
        stateGroups: Array<any>;
        addItems: Array<any>;
        setProperty: Array<any>;
        /**
         * 添加一个覆盖
         */
        addOverride(item: CodeBase): void;
        toCode(): string;
    }
    class CpAddItems extends CodeBase {
        constructor(target: string, propertyName: string, position: string, relativeTo: string);
        /**
         * 创建项目的工厂类实例
         */
        target: string;
        /**
         * 要添加到的属性
         */
        propertyName: string;
        /**
         * 添加的位置
         */
        position: string;
        /**
         * 相对的显示元素
         */
        relativeTo: string;
        toCode(): string;
    }
    class CpSetProperty extends CodeBase {
        constructor(target: string, name: string, value: string);
        /**
         * 要修改的属性名
         */
        name: string;
        /**
         * 目标实例名
         */
        target: string;
        /**
         * 属性值
         */
        value: string;
        toCode(): string;
    }
}
declare module lark.gui {
    /**
     * 素材适配器接口。
     * 若项目需要自定义 Image.source的解析规则，需要实现这个接口，
     * 然后调用如下代码注入自定义实现到框架即可：
     * var assetAdapter = new YourAssetAdapter();
     * Stage.registerImplementation("lark.gui.IAssetAdapter",assetAdapter)
     */
    interface IAssetAdapter {
        /**
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param callBack 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的this引用
         */
        getAsset(source: string, callBack: (content: any, source: string) => void, thisObject: any): void;
    }
}
declare module lark.gui {
    /**
     * 为一个类定义注册运行时属性类型，以便运行时的EXML文件解析过程能获取准确的属性类型。大多数情况下，您都不需要手动调用此方法显式注册属性类型。
     * 仅当您有一个自定义的GUI组件，需要在EXML中用标签描述时可能需要显式注册，但以下情况除外：
     * 当属性类型为基本数据类型：boolean,number,string,Array这四种其中之一时，您只需要为自定义的属性赋值上正确的初始值，
     * 运行时EXML解析器就能通过初始值自动分析出正确的属性类型。
     * 若您无法为属性赋值上正确的初始值时(有初始值，比如null),运行时EXML解析器会把此属性当做string来处理，若完全没有初始值，将会报错找不到节点属性，
     * 这种情况下可以手动调用此方法显式注册属性类型。
     *
     * @param classDefinition 要注册的类定义。
     * @param property 要注册的属性,注意属性名不能以 _ 或 $ 符开头。
     * @param type 要注册的类型,例如：“boolean","number","string","Array","lark.gui.ClassFactory","lark.Rectangle"
     * @param asDefault 是否将此属性注册为组件的默认属性,一个组件只可以设置一个默认属性。注册了组件默认属性后，在EXML中可以使用省略属性节点的写法，
     * 例如：
     *
     * <e:Scroller>
     *     <e:viewport>
     *         <e:Group/>
     *     </e:viewport>
     * </e:Scroller>
     *
     * 因为 viewport 已经注册为 Scroller 的默认属性，上面的例子可以等效为：
     *
     * <e:Scroller>
     *     <e:Group/>
     * </e:Scroller>
     *
     */
    function registerProperty(classDefinition: any, property: string, type: string, asDefault?: boolean): void;
}
declare module lark.gui {
    /**
     * BitmapFillMode 类定义 Image 控件的图像填充方式。
     * BitmapFillMode 类定义了调整大小模式的一个枚举，这些模式确定 Bitmap 如何填充由布局系统指定的尺寸。
     */
    class BitmapFillMode {
        /**
         * 在区域的边缘处截断不显示位图。
         */
        static CLIP: string;
        /**
         * 重复位图以填充区域。
         */
        static REPEAT: string;
        /**
         * 拉伸位图以填充区域。
         */
        static SCALE: string;
    }
}
declare module lark.gui {
}
declare module lark.player {
    /**
     * EXML配置管理器实例
     */
    var exmlConfig: EXMLConfig;
    class EXMLParser {
        constructor();
        /**
         * 获取重复的ID名
         */
        getRepeatedIds: (xml: XML) => string[];
        private getIds;
        private repeatedIdMap;
        private checkDeclarations;
        /**
         * 当前类
         */
        private currentClass;
        /**
         * 当前编译的类名
         */
        private currentClassName;
        /**
         * 当前要编译的EXML文件
         */
        private currentXML;
        /**
         * id缓存字典
         */
        private idDic;
        /**
         * 状态代码列表
         */
        private stateCode;
        private stateNames;
        /**
         * 需要单独创建的实例id列表
         */
        private stateIds;
        private idToNode;
        private skinParts;
        private declarations;
        /**
         * 延迟赋值字典
         */
        private delayAssignmentDic;
        /**
         * 编译指定的XML对象为JavaScript代码。
         * @param xmlData 要编译的EXML文件内容
         * @param className 要编译成的完整类名，包括模块名。
         */
        parse(xmlData: XML, className: string): string;
        /**
         * 编译指定的XML对象为CpClass对象。
         */
        private parseClass(xmlData, className);
        /**
         * 开始编译
         */
        private startCompile();
        /**
         * 添加必须的id
         */
        private addIds(items, className);
        /**
         * 检测指定节点的属性是否含有视图状态
         */
        private containsState(node);
        /**
         * 为指定节点创建id属性
         */
        private createIdForNode(node);
        /**
         * 获取节点ID
         */
        private getNodeId(node);
        /**
         * 为指定节点创建变量
         */
        private createVarForNode(node);
        /**
         * 为指定节点创建初始化函数,返回函数名引用
         */
        private createFuncForNode(node);
        /**
         * 检查目标类名是否是基本数据类型
         */
        private isBasicTypeData(className);
        /**
         * 为指定基本数据类型节点实例化,返回实例化后的值。
         */
        private createBasicTypeForNode(node);
        /**
         * 将节点属性赋值语句添加到代码块
         */
        private addAttributesToCodeBlock(cb, varName, node);
        /**
         * 初始化子项
         */
        private initlizeChildNode(node, cb, varName);
        /**
         * 添加多个子节点到指定的属性
         */
        private addChildrenToProp(children, type, prop, cb, varName, errorInfo, propList, node);
        /**
         * 指定节点是否是属性节点
         */
        private isProperty(node, className);
        /**
         * 是否是普通赋值的key
         */
        private isNormalKey(key);
        /**
         * 格式化key
         */
        private formatKey(key, value);
        /**
         * 格式化值
         */
        private formatValue(key, value, node);
        /**
         * 格式化字符串
         */
        private formatString(value);
        /**
         /**
         * 转换HTML实体字符为普通字符
         */
        private unescapeHTMLEntity(str);
        /**
         * 创建构造函数
         */
        private createConstructFunc();
        /**
         * 是否含有includeIn和excludeFrom属性
         */
        private isStateNode(node);
        /**
         * 获取视图状态名称列表
         */
        private getStateNames();
        /**
         * 解析视图状态代码
         */
        private createStates(parentNode);
        /**
         * 检查指定的ID是否创建了类成员变量，若没创建则为其创建。
         */
        private checkIdForState(node);
        /**
         * 通过视图状态名称获取对应的视图状态
         */
        private getStateByName(name, node);
        /**
         * 寻找节点的临近节点ID和位置
         */
        private findNearNodeId(node);
        /**
         * 获取节点的完整类名，包括模块名
         */
        private getClassNameOfNode(node);
    }
}
declare module lark.player {
    const enum UIFlags {
        /**
         * 属性失效标志
         */
        InvalidatePropertiesFlag = 131072,
        /**
         * 尺寸失效标志
         */
        InvalidateSizeFlag = 262144,
        /**
         * 布局失效标志
         */
        InvalidateDisplayListFlag = 524288,
        /**
         * 布局宽度被显式设置的标记
         */
        LayoutWidthExplicitlySet = 1048576,
        /**
         * 布局高度被显式设置的标记
         */
        LayoutHeightExplicitlySet = 2097152,
        /**
         * 是否启用容器滚动。如果为 true，则将子项剪切到视区的边界，配合设置scrollH和scrollV属性将能滚动视区。
         * 如果为 false，则容器子代会从容器边界扩展过去，而设置scrollH和scrollV也无效。默认false。
         */
        scrollEnabled = 4194304,
        /**
         * 组件是否可以接受用户交互。将 enabled 属性设置为 false 后，组件会自动禁用触摸事件(将 touchEnabled 和 touchChildren 同时设置为 false)，
         * 部分组件可能还会将皮肤的视图状态设置为"disabled",使其所有子项的颜色变暗。
         */
        enabled = 8388608,
        /**
         * UIComponent初始化标志量
         */
        UIComponentInitFlags = 9306112,
        /**
         * 视图状态失效标志
         */
        stateIsDirty = 16777216,
        /**
         * Component.skinName属性被显式设置过的标志
         */
        skinNameExplicitlySet = 33554432,
        /**
         * 外部显式设置的mouseChildren属性值
         */
        explicitTouchChildren = 67108864,
        /**
         * 外部显式设置的mouseEnabled属性值
         */
        explicitTouchEnabled = 134217728,
    }
}
declare module lark.gui {
    /**
     * 默认的IAssetAdapter接口实现
     */
    class DefaultAssetAdapter implements IAssetAdapter {
        /**
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param callBack 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的 this 引用
         */
        getAsset(source: string, callBack: (data: any, source: string) => void, thisObject: any): void;
    }
}
declare module lark.web {
    /**
     * XML节点基类
     */
    class XMLNode {
        constructor(nodeType: number, parent: XML);
        /**
         * 节点类型，1：XML，2：XMLAttribute，3：XMLText
         */
        nodeType: number;
        /**
         * 节点所属的父级节点
         */
        parent: XML;
    }
    /**
     * XML节点对象
     */
    class XML extends XMLNode {
        constructor(localName: string, parent: XML, prefix: string, namespace: string, name: string);
        /**
         * 当前节点上的属性列表
         */
        attributes: {
            [key: string]: string;
        };
        /**
         * 当前节点的子节点列表
         */
        children: XMLNode[];
        /**
         * 节点完整名称。例如节点 <e:Button/> 的 name 为：e:Button
         */
        name: string;
        /**
         * 节点的命名空间前缀。例如节点 <e:Button/> 的 prefix 为：e
         */
        prefix: string;
        /**
         * 节点的本地名称。例如节点 <e:Button/> 的 prefix 为：Button
         */
        localName: string;
        /**
         * 节点的命名空间地址。例如节点 <e:Skin xmlns:e="http://ns.egret-labs.org/egret"/> 的 namespace 为： http://ns.egret-labs.org/egret
         */
        namespace: string;
    }
    /**
     * XML文本节点
     */
    class XMLText extends XMLNode {
        constructor(text: string, parent: XML);
        /**
         * 文本内容
         */
        text: string;
    }
}
declare module lark.gui {
    /**
     * 失效验证管理器
     */
    class Validator extends EventEmitter {
        /**
         * 创建一个Validator对象
         */
        constructor();
        private targetLevel;
        private invalidatePropertiesFlag;
        private invalidateClientPropertiesFlag;
        private invalidatePropertiesQueue;
        /**
         * 标记组件属性失效
         */
        invalidateProperties(client: UIComponent): void;
        /**
         * 验证失效的属性
         */
        private validateProperties();
        private invalidateSizeFlag;
        private invalidateClientSizeFlag;
        private invalidateSizeQueue;
        /**
         * 标记需要重新测量尺寸
         */
        invalidateSize(client: UIComponent): void;
        /**
         * 测量尺寸
         */
        private validateSize();
        private invalidateDisplayListFlag;
        private invalidateDisplayListQueue;
        /**
         * 标记需要重新布局
         */
        invalidateDisplayList(client: UIComponent): void;
        /**
         * 重新布局
         */
        private validateDisplayList();
        private eventDisplay;
        /**
         * 是否已经添加了事件监听
         */
        private listenersAttached;
        /**
         * 添加事件监听
         */
        private attachListeners();
        /**
         * 执行属性应用
         */
        private doPhasedInstantiationCallBack(event?);
        private doPhasedInstantiation();
        /**
         * 使大于等于指定组件层级的元素立即应用属性
         * @param target 要立即应用属性的组件
         */
        validateClient(target: UIComponent): void;
    }
    var validator: Validator;
}
declare module lark.gui {
    /**
     * UI事件
     */
    class UIEvent extends Event {
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
         * 改变结束
         */
        static CHANGE_END: string;
        /**
         * 改变开始
         */
        static CHANGE_START: string;
        /**
         * 正在改变中
         */
        static CHANGING: string;
        /**
         * 值发生改变
         */
        static VALUE_COMMIT: string;
        /**
         * Component皮肤发生改变
         */
        static SKIN_CHANGED: string;
        /**
         * 容器的内容尺寸发生改变
         */
        static CONTENT_SIZE_CHANGED: string;
        /**
         * 容器的滚动位置发生改变
         */
        static SCROLL_POSITION_CHANGED: string;
        /**
         * 即将关闭面板事件
         */
        static CLOSING: string;
        /**
         * 使用指定的EventEmitter对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target 事件派发目标
         * @param eventType 事件类型
         */
        static emitUIEvent(target: IEventEmitter, eventType: string): boolean;
    }
}
declare module lark.gui {
    /**
     * 皮肤基类。通常情况下，您不需要手动创建这个类的实例，而是通过解析EXML文件后自动生成。
     */
    class Skin extends LarkObject {
        /**
         * 皮肤部件名称列表
         */
        skinParts: string[];
        /**
         * 皮肤的最大宽度。仅影响主机组件的测量结果。
         */
        maxWidth: number;
        /**
         * 皮肤的最小宽度,此属性设置为大于maxWidth的值时无效。仅影响主机组件的测量结果。
         */
        minWidth: number;
        /**
         * 皮肤的最大高度。仅影响主机组件的测量结果。
         */
        maxHeight: number;
        /**
         * 皮肤的最小高度,此属性设置为大于maxHeight的值时无效。仅影响主机组件的测量结果。
         */
        minHeight: number;
        /**
         * 皮肤显式设置宽度,设置为NONE表示不显式设置。仅影响主机组件的测量结果。
         */
        width: number;
        /**
         * 皮肤显式设置高度,设置为NONE表示不显式设置。仅影响主机组件的测量结果。
         */
        height: number;
        $elementsContent: DisplayObject[];
        elementsContent: DisplayObject[];
        private _hostComponent;
        /**
         * 此皮肤附加到的主机组件
         */
        hostComponent: Component;
        private statesMap;
        private _states;
        /**
         * 为此组件定义的视图状态。
         */
        states: State[];
        /**
         * 当前视图状态发生改变的标志
         */
        private currentStateChanged;
        private _currentState;
        /**
         * 存储还未验证的视图状态
         */
        private requestedCurrentState;
        /**
         * 组件的当前视图状态。将其设置为 "" 或 null 可将组件重置回其基本状态。
         */
        currentState: string;
        /**
         * 返回默认状态
         */
        private getDefaultState();
        /**
         * 应用当前的视图状态。子类覆盖此方法在视图状态发生改变时执行相应更新操作。
         */
        commitCurrentState(): void;
        /**
         * 返回是否含有指定名称的视图状态
         * @param stateName 要检查的视图状态名称
         */
        hasState(stateName: string): boolean;
        /**
         * 移除指定的视图状态以及所依赖的所有父级状态，除了与新状态的共同状态外
         */
        private removeState(stateName);
        /**
         * 应用新状态
         */
        private applyState(stateName);
    }
}
declare module lark.gui {
    /**
     * EXML皮肤文件运行时解析工具
     */
    class EXML {
        /**
         * 解析一个EXML文件的文本内容为一个皮肤类。
         * @param text 要解析的EXML文件内容
         * @param className 皮肤对应的完整类名，包括模块名称。例如 lark.gui.ButtonSkin。解析完成后皮肤类定义会自动缓存到全局，
         * 若指定的类已经存在，将会覆盖已有的类定义。解析后您也可以通过lark.getDefinitionByName(className)方法获取这个皮肤的类定义。
         */
        static parse(text: string, className: string): Function;
    }
}
declare module lark.gui {
    /**
     * RadioButtonGroup 组件定义一组 RadioButton 组件，这些组件相互排斥；因此，用户每次只能选择一个 RadioButton 组件
     */
    class RadioButtonGroup extends EventEmitter {
        /**
         * 创建一个RadioButtonGroup实例
         */
        constructor();
        /**
         * 组名
         */
        $name: string;
        /**
         * 单选按钮列表
         */
        private radioButtons;
        /**
         * 获取指定索引的单选按钮
         * @param index 单选按钮的索引
         */
        getRadioButtonAt(index: number): RadioButton;
        $enabled: boolean;
        /**
         * 组件是否可以接受用户交互。默认值为true。设置此属性将影响组内所有单选按钮。
         */
        enabled: boolean;
        /**
         * 组内单选按钮数量
         */
        numRadioButtons: number;
        private _selectedValue;
        /**
         * 当前被选中的单选按钮的value属性值。注意，此属性仅当目标RadioButton在显示列表时有效。
         */
        selectedValue: any;
        private _selection;
        /**
         * 当前被选中的单选按钮引用,注意，此属性仅当目标RadioButton在显示列表时有效。
         */
        selection: RadioButton;
        /**
         * 添加单选按钮到组内
         */
        $addInstance(instance: RadioButton): void;
        /**
         * 从组里移除单选按钮
         */
        $removeInstance(instance: RadioButton, addListener?: boolean): void;
        /**
         * 设置选中的单选按钮
         */
        $setSelection(value: RadioButton, fireChange?: boolean): void;
        /**
         * 改变选中项
         */
        private changeSelection(index, fireChange?);
        /**
         * 单选按钮添加到显示列表
         */
        private addedHandler(event);
        /**
         * 单选按钮从显示列表移除
         */
        private removedHandler(event);
    }
}
declare module lark.gui {
    /**
     * GUI容器基类
     */
    class Group extends Sprite implements UIComponent {
        constructor();
        $elementsContent: DisplayObject[];
        elementsContent: DisplayObject[];
        private _layout;
        /**
         * 此容器的布局对象
         */
        layout: LayoutBase;
        $setLayout(value: LayoutBase): void;
        /**
         * 视域的内容的宽度
         */
        contentWidth: number;
        /**
         * 视域的内容的高度
         */
        contentHeight: number;
        /**
         * 设置 contentWidth 和 contentHeight 属性，此方法由Layout类调用
         */
        setContentSize(width: number, height: number): void;
        /**
         * 是否启用容器滚动。如果为 true，则将子项剪切到视区的边界，配合设置scrollH和scrollV属性将能滚动视区。
         * 如果为 false，则容器子代会从容器边界扩展过去，而设置scrollH和scrollV也无效。默认false。
         */
        scrollEnabled: boolean;
        /**
         * 可视区域水平方向起始点
         */
        scrollH: number;
        /**
         * 可视区域竖直方向起始点
         */
        scrollV: number;
        private updateScrollRect();
        /**
         * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
         * 请务必调用super.createChildren()以完成父类组件的初始化
         */
        protected createChildren(): void;
        /**
         * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
         */
        protected commitProperties(): void;
        /**
         * 测量组件尺寸
         */
        protected measure(): void;
        /**
         * 更新显示列表
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 标记父级容器的尺寸和显示列表为失效
         */
        protected invalidateParentLayout(): void;
        $uiValues: Float64Array;
        $includeInLayout: boolean;
        /**
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         */
        includeInLayout: boolean;
        /**
         * 距父级容器离左边距离
         */
        left: number;
        /**
         * 距父级容器右边距离
         */
        right: number;
        /**
         * 距父级容器顶部距离
         */
        top: number;
        /**
         * 距父级容器底部距离
         */
        bottom: number;
        /**
         * 在父级容器中距水平中心位置的距离
         */
        horizontalCenter: number;
        /**
         * 在父级容器中距竖直中心位置的距离
         */
        verticalCenter: number;
        /**
         * 相对父级容器宽度的百分比
         */
        percentWidth: number;
        /**
         * 相对父级容器高度的百分比
         */
        percentHeight: number;
        /**
         * 外部显式指定的宽度
         */
        explicitWidth: number;
        /**
         * 外部显式指定的高度
         */
        explicitHeight: number;
        /**
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         */
        minWidth: number;
        /**
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         */
        maxWidth: number;
        /**
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         */
        minHeight: number;
        /**
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         */
        maxHeight: number;
        /**
         * 设置测量结果。
         * @param width 测量宽度
         * @param height 测量高度
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * 标记提交过需要延迟应用的属性
         */
        invalidateProperties(): void;
        /**
         * 验证组件的属性
         */
        validateProperties(): void;
        /**
         * 标记提交过需要验证组件尺寸
         */
        invalidateSize(): void;
        /**
         * 验证组件的尺寸
         */
        validateSize(recursive?: boolean): void;
        /**
         * 标记需要验证显示列表
         */
        invalidateDisplayList(): void;
        /**
         * 验证子项的位置和大小，并绘制其他可视内容
         */
        validateDisplayList(): void;
        /**
         * 立即应用组件及其子项的所有属性
         */
        validateNow(): void;
        /**
         * 设置组件的布局宽高
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * 设置组件的布局位置
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * 组件的布局尺寸,常用于父级的updateDisplayList()方法中
         * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸,
         * 注意此方法返回值已经包含scale和rotation。
         */
        getLayoutBounds(bounds: Rectangle): void;
        /**
         * 获取组件的首选尺寸,常用于父级的measure()方法中
         * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
         * 注意此方法返回值已经包含scale和rotation。
         */
        getPreferredBounds(bounds: Rectangle): void;
    }
}
declare module lark.gui {
    /**
     * 皮肤主题。实例化一个主题，能够在运行时修改全局的默认皮肤。
     */
    class Theme extends EventEmitter {
        private static themeMap;
        /**
         * 获取组件对应的默认皮肤。
         */
        static $getDefaultSkin(client: Component, stage: Stage): any;
        constructor(stage: Stage);
        private skinMap;
        private flagToClassName;
        /**
         * 根据主机组件，获取对应的默认皮肤实例。
         * @param client 要获取默认皮肤的组件
         */
        getSkin(client: Component): any;
        /**
         * 为指定的主机组件映射一个默认皮肤
         * @param hostComponentKey 主机组件名称，例如：“lark.gui.Button”
         * @param skinName 皮肤名称 例如："app.MyButtonSkin";
         */
        mapSkin(hostComponentKey: string, skinName: string): void;
    }
}
declare module lark.gui {
    /**
     * Image 控件允许您在运行时显示 JPEG、PNG 等图片文件文件。Image 继承至 Bitmap，因此您可以直接对其 bitmapData 属性，
     * 赋值从外部加载得到的位图数据以显示对应图片。同时，Image 还提供了更加方便的 source 属性，source 属性可以接受一个网络图片url作为值，
     * 赋值为url后，它内部会自动去加载并显示图片。并且您同样也可以直接把 BitmapData 对象赋值给 source 属性以显示图片。
     * Image 控件可以直接替代 Bitmap 在显示列表中使用。
     *
     * @event lark.Event.COMPLETE 当图片加载完成后调度
     */
    class Image extends Bitmap implements UIComponent {
        constructor(source?: string | BitmapData);
        /**
         * 矩形区域，它定义素材对象的九个缩放区域。
         * 注意:此属性仅在fileMode为BitmapFillMode.SCALE时有效。
         */
        private _scale9Grid;
        scale9Grid: Rectangle;
        private _fillMode;
        /**
         * 确定位图填充尺寸的方式。默认值：BitmapFillMode.SCALE。
         * 设置为 BitmapFillMode.CLIP，位图将在边缘处被截断。
         * 设置为 BitmapFillMode.REPEAT时，位图将重复以填充区域。
         * 设置为 BitmapFillMode.SCALE时，位图将拉伸以填充区域。
         */
        fillMode: string;
        private sourceChanged;
        private _source;
        /**
         * 用于显示位图的数据源。可以为一个网络图片url或BitmapData实例。
         */
        source: string | BitmapData;
        $setBitmapData(value: BitmapData): void;
        $onAddToStage(stage: Stage, nestLevel: number): void;
        /**
         * 解析source
         */
        private parseSource();
        /**
         * 获取资源适配器
         */
        private getAdapter();
        /**
         * 资源发生改变
         */
        private contentChanged(data, source);
        $measureContentBounds(bounds: Rectangle): void;
        $render(context: player.RenderContext): void;
        /**
         * 绘制九宫格位图
         */
        private drawScale9GridImage(context, image, scale9Grid, surfaceWidth?, surfaceHeight?);
        /**
         * 检查属性失效标记并应用
         */
        private checkInvalidateFlag;
        /**
         * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
         * 请务必调用super.createChildren()以完成父类组件的初始化
         */
        protected createChildren(): void;
        /**
         * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
         */
        protected commitProperties(): void;
        /**
         * 测量组件尺寸
         */
        protected measure(): void;
        /**
         * 更新显示列表
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 标记父级容器的尺寸和显示列表为失效
         */
        protected invalidateParentLayout(): void;
        $uiValues: Float64Array;
        $includeInLayout: boolean;
        /**
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         */
        includeInLayout: boolean;
        /**
         * 距父级容器离左边距离
         */
        left: number;
        /**
         * 距父级容器右边距离
         */
        right: number;
        /**
         * 距父级容器顶部距离
         */
        top: number;
        /**
         * 距父级容器底部距离
         */
        bottom: number;
        /**
         * 在父级容器中距水平中心位置的距离
         */
        horizontalCenter: number;
        /**
         * 在父级容器中距竖直中心位置的距离
         */
        verticalCenter: number;
        /**
         * 相对父级容器宽度的百分比
         */
        percentWidth: number;
        /**
         * 相对父级容器高度的百分比
         */
        percentHeight: number;
        /**
         * 外部显式指定的宽度
         */
        explicitWidth: number;
        /**
         * 外部显式指定的高度
         */
        explicitHeight: number;
        /**
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         */
        minWidth: number;
        /**
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         */
        maxWidth: number;
        /**
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         */
        minHeight: number;
        /**
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         */
        maxHeight: number;
        /**
         * 设置测量结果。
         * @param width 测量宽度
         * @param height 测量高度
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * 标记提交过需要延迟应用的属性
         */
        invalidateProperties(): void;
        /**
         * 验证组件的属性
         */
        validateProperties(): void;
        /**
         * 标记提交过需要验证组件尺寸
         */
        invalidateSize(): void;
        /**
         * 验证组件的尺寸
         */
        validateSize(recursive?: boolean): void;
        /**
         * 标记需要验证显示列表
         */
        invalidateDisplayList(): void;
        /**
         * 验证子项的位置和大小，并绘制其他可视内容
         */
        validateDisplayList(): void;
        /**
         * 立即应用组件及其子项的所有属性
         */
        validateNow(): void;
        /**
         * 设置组件的布局宽高
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * 设置组件的布局位置
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * 组件的布局尺寸,常用于父级的updateDisplayList()方法中
         * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸,
         * 注意此方法返回值已经包含scale和rotation。
         */
        getLayoutBounds(bounds: Rectangle): void;
        /**
         * 获取组件的首选尺寸,常用于父级的measure()方法中
         * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
         * 注意此方法返回值已经包含scale和rotation。
         */
        getPreferredBounds(bounds: Rectangle): void;
    }
}
declare module lark.player {
    class MatrixUtil {
        static fitBounds(width: number, height: number, matrix: Matrix, explicitWidth: number, explicitHeight: number, preferredWidth: number, preferredHeight: number, minWidth: number, minHeight: number, maxWidth: number, maxHeight: number): Point;
    }
}
declare module lark.gui {
    /**
     * State 类定义视图状态，即组件的特定视图。
     */
    class State extends LarkObject {
        /**
         * 创建一个State实例
         */
        constructor(name: string, overrides: IOverride[]);
        /**
         * 视图状态的名称。给定组件的状态名称必须唯一。必须设置此属性。
         */
        name: string;
        /**
         * 该视图状态的覆盖，表现为实现 IOverride 接口的对象的数组。
         * 这些覆盖在进入状态时按顺序应用，在退出状态时按相反的顺序删除。
         */
        overrides: IOverride[];
        /**
         * 此视图状态作为 string 数组所属的状态组。
         */
        stateGroups: string[];
    }
}
declare module lark.gui {
    /**
     * 容器布局基类。若要创建使用 Group 容器的自定义布局，必须扩展 LayoutBase 或其子类之一。
     * 子类必须实现 updateDisplayList() 方法（定位 target Group 的子项并调整这些子项的大小）和 measure() 方法（计算 target 的默认大小）。
     */
    class LayoutBase extends EventEmitter {
        constructor();
        $target: Group;
        /**
         * 目标容器
         */
        target: Group;
        $useVirtualLayout: boolean;
        /**
         * 若要配置容器使用虚拟布局，请为与容器关联的布局的 useVirtualLayout 属性设置为 true。
         * 只有布局设置为 VerticalLayout、HorizontalLayout
         * 或 TileLayout 的 DataGroup 或 SkinnableDataContainer
         * 才支持虚拟布局。不支持虚拟化的布局子类必须禁止更改此属性。
         */
        useVirtualLayout: boolean;
        private _typicalLayoutRect;
        /**
         * 由虚拟布局所使用，以估计尚未滚动到视图中的布局元素的大小。
         */
        typicalLayoutRect: Rectangle;
        /**
         * 滚动条位置改变
         */
        scrollPositionChanged(): void;
        /**
         * 清理虚拟布局缓存的数据
         */
        clearVirtualLayoutCache(): void;
        /**
         * 在已添加布局元素之后且在验证目标的大小和显示列表之前，由目标调用。
         * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
         * @param index 发生改变的子项索引
         */
        elementAdded(index: number): void;
        /**
         * 必须在已删除布局元素之后且在验证目标的大小和显示列表之前，由目标调用此方法。
         * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
         * @param index 发生改变的子项索引
         */
        elementRemoved(index: number): void;
        /**
         * 测量组件尺寸大小
         */
        measure(): void;
        /**
         * 更新显示列表
         */
        updateDisplayList(width: number, height: number): void;
    }
}
declare module lark.gui {
    /**
     * GUI显示对象基类
     */
    interface UIComponent extends DisplayObject {
        $uiValues: Float64Array;
        $includeInLayout: boolean;
        /**
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         */
        includeInLayout: boolean;
        /**
         * 距父级容器离左边距离
         */
        left: number;
        /**
         * 距父级容器右边距离
         */
        right: number;
        /**
         * 距父级容器顶部距离
         */
        top: number;
        /**
         * 距父级容器底部距离
         */
        bottom: number;
        /**
         * 在父级容器中距水平中心位置的距离
         */
        horizontalCenter: number;
        /**
         * 在父级容器中距竖直中心位置的距离
         */
        verticalCenter: number;
        /**
         * 相对父级容器宽度的百分比
         */
        percentWidth: number;
        /**
         * 相对父级容器高度的百分比
         */
        percentHeight: number;
        /**
         * 外部显式指定的宽度
         */
        explicitWidth: number;
        /**
         * 外部显式指定的高度
         */
        explicitHeight: number;
        /**
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         */
        minWidth: number;
        /**
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         */
        maxWidth: number;
        /**
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         */
        minHeight: number;
        /**
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         */
        maxHeight: number;
        /**
         * 设置测量结果。
         * @param width 测量宽度
         * @param height 测量高度
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * 标记提交过需要延迟应用的属性
         */
        invalidateProperties(): void;
        /**
         * 验证组件的属性
         */
        validateProperties(): void;
        /**
         * 标记提交过需要验证组件尺寸
         */
        invalidateSize(): void;
        /**
         * 验证组件的尺寸
         */
        validateSize(recursive?: boolean): void;
        /**
         * 标记需要验证显示列表
         */
        invalidateDisplayList(): void;
        /**
         * 验证子项的位置和大小，并绘制其他可视内容
         */
        validateDisplayList(): void;
        /**
         * 立即应用组件及其子项的所有属性
         */
        validateNow(): void;
        /**
         * 设置组件的布局宽高
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * 设置组件的布局位置
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * 组件的布局尺寸,常用于父级的updateDisplayList()方法中
         * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸,
         * 注意此方法返回值已经包含scale和rotation。
         */
        getLayoutBounds(bounds: Rectangle): void;
        /**
         * 获取组件的首选尺寸,常用于父级的measure()方法中
         * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
         * 注意此方法返回值已经包含scale和rotation。
         */
        getPreferredBounds(bounds: Rectangle): void;
    }
}
declare module lark.player {
    const enum UIValues {
        left = 0,
        right = 1,
        top = 2,
        bottom = 3,
        horizontalCenter = 4,
        verticalCenter = 5,
        percentWidth = 6,
        percentHeight = 7,
        explicitWidth = 8,
        explicitHeight = 9,
        width = 10,
        height = 11,
        minWidth = 12,
        maxWidth = 13,
        minHeight = 14,
        maxHeight = 15,
        measuredWidth = 16,
        measuredHeight = 17,
        oldPreferWidth = 18,
        oldPreferHeight = 19,
        contentWidth = 20,
        contentHeight = 21,
        scrollH = 22,
        scrollV = 23,
    }
    /**
     * GUI显示对象基类模板。仅作为gui.UIComponent的默认实现，为lark.player.implemenetUIComponenet()方法提供代码模板。
     * 注意：在此类里不允许直接使用super关键字访问父类方法。一律使用this.$super属性访问。
     */
    class UIComponentImpl extends DisplayObject implements gui.UIComponent {
        /**
         * 构造函数
         */
        constructor();
        /**
         * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
         * 请务必调用super.createChildren()以完成父类组件的初始化
         */
        protected createChildren(): void;
        /**
         * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
         */
        protected commitProperties(): void;
        /**
         * 测量组件尺寸
         */
        protected measure(): void;
        /**
         * 更新显示列表
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        $super: any;
        $uiValues: Float64Array;
        $includeInLayout: boolean;
        /**
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         */
        includeInLayout: boolean;
        $onAddToStage(stage: Stage, nestLevel: number): void;
        /**
         * 检查属性失效标记并应用
         */
        private checkInvalidateFlag(event?);
        /**
         * 距父级容器离左边距离
         */
        left: number;
        /**
         * 距父级容器右边距离
         */
        right: number;
        /**
         * 距父级容器顶部距离
         */
        top: number;
        /**
         * 距父级容器底部距离
         */
        bottom: number;
        /**
         * 在父级容器中距水平中心位置的距离
         */
        horizontalCenter: number;
        /**
         * 在父级容器中距竖直中心位置的距离
         */
        verticalCenter: number;
        /**
         * 相对父级容器宽度的百分比
         */
        percentWidth: number;
        /**
         * 相对父级容器高度的百分比
         */
        percentHeight: number;
        /**
         * 外部显式指定的宽度
         */
        explicitWidth: number;
        /**
         * 外部显式指定的高度
         */
        explicitHeight: number;
        /**
         * 组件宽度,默认值为lark.NONE,设置为lark.NONE将使用组件的measure()方法自动计算尺寸
         */
        $getWidth(): number;
        $setWidth(value: number): void;
        /**
         * 立即验证自身的尺寸。
         */
        private validateSizeNow();
        /**
         * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
         */
        $getHeight(): number;
        $setHeight(value: number): void;
        $setScaleX(value: number): boolean;
        $setScaleY(value: number): boolean;
        /**
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         */
        minWidth: number;
        /**
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         */
        maxWidth: number;
        /**
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         */
        minHeight: number;
        /**
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         */
        maxHeight: number;
        /**
         * 设置测量结果。
         * @param width 测量宽度
         * @param height 测量高度
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * 设置组件的宽高。此方法不同于直接设置width,height属性，
         * 不会影响显式标记尺寸属性
         */
        private setActualSize(w, h);
        $setX(value: number): boolean;
        $setY(value: number): boolean;
        /**
         * 标记属性失效
         */
        invalidateProperties(): void;
        /**
         * 验证组件的属性
         */
        validateProperties(): void;
        /**
         * 标记提交过需要验证组件尺寸
         */
        invalidateSize(): void;
        /**
         * 验证组件的尺寸
         */
        validateSize(recursive?: boolean): void;
        /**
         * 测量组件尺寸，返回尺寸是否发生变化
         */
        private measureSizes();
        /**
         * 标记需要验证显示列表
         */
        invalidateDisplayList(): void;
        /**
         * 验证子项的位置和大小，并绘制其他可视内容
         */
        validateDisplayList(): void;
        /**
         * 更新最终的组件宽高
         */
        private updateFinalSize();
        /**
         * 立即应用组件及其子项的所有属性
         */
        validateNow(): void;
        /**
         * 标记父级容器的尺寸和显示列表为失效
         */
        protected invalidateParentLayout(): void;
        /**
         * 设置组件的布局宽高
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * 设置组件的布局位置
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * 组件的布局尺寸,常用于父级的updateDisplayList()方法中
         * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸,
         * 注意此方法返回值已经包含scale和rotation。
         */
        getLayoutBounds(bounds: Rectangle): void;
        private getPreferredUWidth();
        private getPreferredUHeight();
        /**
         * 获取组件的首选尺寸,常用于父级的measure()方法中
         * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
         * 注意此方法返回值已经包含scale和rotation。
         */
        getPreferredBounds(bounds: Rectangle): void;
        private applyMatrix(bounds, w, h);
    }
    /**
     * 自定义类实现UIComponent的步骤：
     * 1.在自定义类的构造函数里调用：player.UIComponentImpl.call(this);
     * 2.拷贝UIComponent接口定义的所有内容(包括注释掉的protected函数)到自定义类，将所有方法都声明为空方法体。
     * 3.在定义类结尾的外部调用player.implementUIComponent()，并传入自定义类。
     * 4.若覆盖了某个UIComponent的方法，需要手动调用UIComponentImpl.prototype["方法名"].call(this);
     * @param descendant 自定义的UIComponent子类
     * @param base 自定义子类继承的父类
     */
    function implementUIComponent(descendant: any, base: any, isContainer?: boolean): void;
}
declare module lark.gui {
    /**
     * Component 类定义可设置外观的组件的基类。Component 类所使用的外观通常是 Skin 类的子类。
     */
    class Component extends Sprite implements UIComponent {
        constructor();
        /**
         * 主机组件标识符。用于唯一确定一个组件的名称。
         * 用户自定义的组件若不对此属性赋值，将会继承父级的标识符定义。
         */
        hostComponentKey: string;
        private _skinName;
        /**
         * 皮肤标识符。有效值可为：皮肤类定义,皮肤类名,或皮肤实例，
         */
        skinName: any;
        /**
         * 解析skinName
         */
        private parseSkinName();
        $onAddToStage(stage: Stage, nestLevel: number): void;
        $skin: Skin;
        /**
         * [只读]皮肤对象实例。
         */
        skin: Skin;
        /**
         * 设置皮肤实例
         */
        $setSkin(skin: Skin): void;
        /**
         * 关联一个对象到逻辑组件的指定皮肤部件上。通常您不需要手动调用此方法，当使用EXML文件作为组件皮肤，此方法将会被自动调用。
         * 在运行时，EXML文件内声明的id名称将作为此方法的partName参数，而id所对应的节点对象，将作为此方法的instance参数被依次传入。
         * @param partName 皮肤部件名称
         * @param instance 皮肤部件实例
         */
        setSkinPart(partName: string, instance: any): void;
        /**
         * 子类覆盖此方法，以在皮肤部件第一次附加时对其执行一些初始化操作，例如添加事件监听，赋值缓存的属性值等。
         * @param partName 要附加的皮肤部件名称
         * @param instance 要附加的皮肤部件实例
         */
        protected partAdded(partName: string, instance: any): void;
        /**
         * 子类覆盖此方法，以在皮肤部件从逻辑组件卸载时对其执行一些清理操作，例如移除事件监听，断开缓存的引用等。
         * @param partName 要卸载的皮肤部件名称
         * @param instance 要卸载的皮肤部件实例
         */
        protected partRemoved(partName: string, instance: any): void;
        $setTouchChildren(value: boolean): void;
        $setTouchEnabled(value: boolean): void;
        /**
         * 组件是否可以接受用户交互。将 enabled 属性设置为 false 后，组件会自动禁用触摸事件(将 touchEnabled 和 touchChildren 同时设置为 false)，
         * 部分组件可能还会将皮肤的视图状态设置为"disabled",使其所有子项的颜色变暗。默认值为 true。
         */
        enabled: boolean;
        $setEnabled(value: boolean): void;
        private explicitCurrentState;
        /**
         * 组件的当前视图状态。显式设置此属性，将采用显式设置的值去更新皮肤状态，而忽略组件内部getCurrentSkinState()方法返回的值。
         * 将其设置为 "" 或 null 可将取消组件外部显式设置的视图状态名称，从而采用内部getCurrentSkinState()方法返回的状态。
         */
        currentState: string;
        /**
         * 标记当前需要重新验证皮肤状态
         */
        invalidateSkinState(): void;
        /**
         * 返回组件当前的皮肤状态名称,子类覆盖此方法定义各种状态名
         */
        protected getCurrentSkinState(): string;
        /**
         * 检查属性失效标记并应用
         */
        private checkInvalidateFlag;
        /**
         * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
         * 请务必调用super.createChildren()以完成父类组件的初始化
         */
        protected createChildren(): void;
        /**
         * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
         */
        protected commitProperties(): void;
        /**
         * 测量组件尺寸
         */
        protected measure(): void;
        /**
         * 更新显示列表
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 标记父级容器的尺寸和显示列表为失效
         */
        protected invalidateParentLayout(): void;
        $uiValues: Float64Array;
        $includeInLayout: boolean;
        /**
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         */
        includeInLayout: boolean;
        /**
         * 距父级容器离左边距离
         */
        left: number;
        /**
         * 距父级容器右边距离
         */
        right: number;
        /**
         * 距父级容器顶部距离
         */
        top: number;
        /**
         * 距父级容器底部距离
         */
        bottom: number;
        /**
         * 在父级容器中距水平中心位置的距离
         */
        horizontalCenter: number;
        /**
         * 在父级容器中距竖直中心位置的距离
         */
        verticalCenter: number;
        /**
         * 相对父级容器宽度的百分比
         */
        percentWidth: number;
        /**
         * 相对父级容器高度的百分比
         */
        percentHeight: number;
        /**
         * 外部显式指定的宽度
         */
        explicitWidth: number;
        /**
         * 外部显式指定的高度
         */
        explicitHeight: number;
        /**
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         */
        minWidth: number;
        /**
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         */
        maxWidth: number;
        /**
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         */
        minHeight: number;
        /**
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         */
        maxHeight: number;
        /**
         * 设置测量结果。
         * @param width 测量宽度
         * @param height 测量高度
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * 标记提交过需要延迟应用的属性
         */
        invalidateProperties(): void;
        /**
         * 验证组件的属性
         */
        validateProperties(): void;
        /**
         * 标记提交过需要验证组件尺寸
         */
        invalidateSize(): void;
        /**
         * 验证组件的尺寸
         */
        validateSize(recursive?: boolean): void;
        /**
         * 标记需要验证显示列表
         */
        invalidateDisplayList(): void;
        /**
         * 验证子项的位置和大小，并绘制其他可视内容
         */
        validateDisplayList(): void;
        /**
         * 立即应用组件及其子项的所有属性
         */
        validateNow(): void;
        /**
         * 设置组件的布局宽高
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * 设置组件的布局位置
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * 组件的布局尺寸,常用于父级的updateDisplayList()方法中
         * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸,
         * 注意此方法返回值已经包含scale和rotation。
         */
        getLayoutBounds(bounds: Rectangle): void;
        /**
         * 获取组件的首选尺寸,常用于父级的measure()方法中
         * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
         * 注意此方法返回值已经包含scale和rotation。
         */
        getPreferredBounds(bounds: Rectangle): void;
    }
}
declare module lark.gui {
    /**
     * BasicLayout 类根据其各个设置彼此独立地排列布局元素。
     * BasicLayout（也称为绝对布局）要求显式定位每个容器子代。可以使用子代的 x 和 y 属性，或使用约束来定位每个子代。
     */
    class BasicLayout extends LayoutBase {
        /**
         * 创建一个基本布局实例
         */
        constructor();
        /**
         * BasicLayout不支持虚拟布局，设置这个属性无效
         */
        useVirtualLayout: boolean;
        /**
         *基于目标的内容测量其默认大小，并（可选）测量目标的默认最小大小
         */
        measure(): void;
        /**
         * 调整目标的元素的大小并定位这些元素
         * @param unscaledWidth
         * @param unscaledHeight
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
declare module lark.player {
    /**
     * 一个工具方法，使用BasicLayout规则测量目标对象。
     */
    function measure(target: gui.Group | gui.Component): void;
    /**
     * 一个工具方法，使用BasicLayout规则布局目标对象。
     */
    function updateDisplayList(target: gui.Group | gui.Component, unscaledWidth: number, unscaledHeight: number): Point;
}
declare module lark.gui {
    /**
     * 带有标题，关闭按钮，可移动区域的面板组件。注意：当第一次通过触摸交互操作移动面板时，面板的 includeInLayout 属性将会自动被设置为false，
     * 以确保移动不会受到自动布局属性的影响。若之后还需要启用面板在父级容器中的自动布局，需手动设置 includeInLayout 为 true。
     * @event lark.gui.UIEvent.CLOSING 面板即将关闭事件，在关闭按钮被点击后抛出，监听此事件并调用event.preventDefault()能够阻止面板被关闭。
     */
    class Panel extends Component {
        /**
         * 创建一个Panel实例
         */
        constructor();
        /**
         * 在窗体上按下时前置窗口
         */
        private onWindowMouseDown(event);
        /**
         * [SkinPart]关闭按钮
         */
        closeButton: Button;
        /**
         * [SkinPart]可移动区域
         */
        moveArea: DisplayObject;
        /**
         * [SkinPart]标题显示对象
         */
        titleDisplay: IDisplayText;
        private _title;
        /**
         * 标题文本内容
         */
        title: string;
        protected partAdded(partName: string, instance: any): void;
        protected partRemoved(partName: string, instance: any): void;
        /**
         * 关闭按钮被点击事件
         */
        protected onCloseButtonClick(event: TouchEvent): void;
        /**
         * 关闭面板，从父级容器移除自身。
         */
        close(): void;
        /**
         * 鼠标按下时的偏移量
         */
        private offsetPointX;
        private offsetPointY;
        /**
         * 在可移动区域按下
         */
        protected onTouchBegin(event: TouchEvent): void;
        /**
         * 触摸拖拽时的移动事件
         */
        onTouchMove(event: TouchEvent): void;
        /**
         * 鼠标在舞台上弹起事件
         */
        onTouchEnd(event: TouchEvent): void;
    }
}
declare module lark.gui {
    /**
     * Label 是可以呈示一行或多行统一格式文本的UI组件。要显示的文本由 text 属性确定。文本格式由样式属性指定，例如 fontFamily 和 fontSize。
     * 因为 Label 运行速度快且占用内存少，所以它特别适合用于显示多个小型非交互式文本的情况，例如，项呈示器和 Button 外观中的标签。
     * 在 Label 中，将以下三个字符序列识别为显式换行符：CR（“\r”）、LF（“\n”）和 CR+LF（“\r\n”）。
     * 如果没有为 Label 指定宽度，则由这些显式换行符确定的最长行确定 Label 的宽度。
     * 如果指定了宽度，则指定文本将在组件边界的右边缘换行，如果文本扩展到低于组件底部，则将被剪切。
     */
    class Label extends TextField implements UIComponent {
        constructor(text?: string);
        $invalidateContentBounds(): void;
        $setWidth(value: number): void;
        $setHeight(value: number): void;
        private _widthConstraint;
        /**
         * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
         * 请务必调用super.createChildren()以完成父类组件的初始化
         */
        protected createChildren(): void;
        /**
         * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
         */
        protected commitProperties(): void;
        /**
         * 测量组件尺寸
         */
        protected measure(): void;
        /**
         * 更新显示列表
         */
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 标记父级容器的尺寸和显示列表为失效
         */
        protected invalidateParentLayout(): void;
        $uiValues: Float64Array;
        $includeInLayout: boolean;
        /**
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         */
        includeInLayout: boolean;
        /**
         * 距父级容器离左边距离
         */
        left: number;
        /**
         * 距父级容器右边距离
         */
        right: number;
        /**
         * 距父级容器顶部距离
         */
        top: number;
        /**
         * 距父级容器底部距离
         */
        bottom: number;
        /**
         * 在父级容器中距水平中心位置的距离
         */
        horizontalCenter: number;
        /**
         * 在父级容器中距竖直中心位置的距离
         */
        verticalCenter: number;
        /**
         * 相对父级容器宽度的百分比
         */
        percentWidth: number;
        /**
         * 相对父级容器高度的百分比
         */
        percentHeight: number;
        /**
         * 外部显式指定的宽度
         */
        explicitWidth: number;
        /**
         * 外部显式指定的高度
         */
        explicitHeight: number;
        /**
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         */
        minWidth: number;
        /**
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         */
        maxWidth: number;
        /**
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         */
        minHeight: number;
        /**
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         */
        maxHeight: number;
        /**
         * 设置测量结果。
         * @param width 测量宽度
         * @param height 测量高度
         */
        setMeasuredSize(width: number, height: number): void;
        /**
         * 标记提交过需要延迟应用的属性
         */
        invalidateProperties(): void;
        /**
         * 验证组件的属性
         */
        validateProperties(): void;
        /**
         * 标记提交过需要验证组件尺寸
         */
        invalidateSize(): void;
        /**
         * 验证组件的尺寸
         */
        validateSize(recursive?: boolean): void;
        /**
         * 标记需要验证显示列表
         */
        invalidateDisplayList(): void;
        /**
         * 验证子项的位置和大小，并绘制其他可视内容
         */
        validateDisplayList(): void;
        /**
         * 立即应用组件及其子项的所有属性
         */
        validateNow(): void;
        /**
         * 设置组件的布局宽高
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * 设置组件的布局位置
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * 组件的布局尺寸,常用于父级的updateDisplayList()方法中
         * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸,
         * 注意此方法返回值已经包含scale和rotation。
         */
        getLayoutBounds(bounds: Rectangle): void;
        /**
         * 获取组件的首选尺寸,常用于父级的measure()方法中
         * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
         * 注意此方法返回值已经包含scale和rotation。
         */
        getPreferredBounds(bounds: Rectangle): void;
    }
}
declare module lark.gui {
    /**
     * 按钮组件
     */
    class Button extends Component {
        /**
         * 创建一个按钮实例
         */
        constructor();
        /**
         * [SkinPart]按钮上的文本标签
         */
        labelDisplay: IDisplayText;
        private _label;
        /**
         * 要在按钮上显示的文本
         */
        label: string;
        /**
         * [SkinPart]按钮上的图标显示对象。
         */
        iconDisplay: Image;
        private _icon;
        /**
         * 要在按钮上显示的图标数据
         */
        icon: string | BitmapData;
        /**
         * 指示触摸点否位于按钮上。
         */
        private hovered;
        /**
         * 指示第一次分派 TouchEvent.TOUCH_BEGIN 时，是否按下鼠标以及触摸点是否在按钮上。
         */
        private touchCaptured;
        private _stickyHighlighting;
        /**
         * 如果为 true，则按钮会在用户按下它时显示其按下时的外观，并在用户将触摸点拖离时继续显示此外观。默认值为 false。
         */
        stickyHighlighting: boolean;
        /**
         * 鼠标事件处理
         */
        protected mouseEventHandler(event: TouchEvent): void;
        /**
         * 舞台上鼠标弹起事件
         */
        private stage_mouseUpHandler(event);
        /**
         * 返回要应用到外观的状态的名称
         */
        protected getCurrentSkinState(): string;
        /**
         * 子类覆盖此方法，以在皮肤部件第一次附加时对其执行一些初始化操作，例如添加事件监听，赋值缓存的属性值等。
         * @param partName 要附加的皮肤部件名称
         * @param instance 要附加的皮肤部件实例
         */
        protected partAdded(partName: string, instance: any): void;
        /**
         * 按钮弹起事件
         */
        protected buttonReleased(): void;
    }
}
declare module lark.gui {
    /**
     * 切换按钮
     * @event lark.Event.CHANGE 选中状态发生改变，仅当触摸操作引起的选中状态改变才会抛出此事件。
     */
    class ToggleButton extends Button {
        $selected: boolean;
        /**
         * 按钮处于按下状态时为 true，而按钮处于弹起状态时为 false。
         */
        selected: boolean;
        $setSelected(value: boolean): void;
        /**
         * 返回要应用到外观的状态的名称
         */
        getCurrentSkinState(): string;
        /**
         * 是否根据鼠标事件自动变换选中状态,默认true。仅框架内使用。
         */
        $autoSelected: boolean;
        /**
         * 当在用户单击按钮之后处理 MouseEvent.MOUSE_UP 事件时，将调用此方法
         */
        protected buttonReleased(): void;
    }
}
declare module lark.gui {
    /**
     * 复选框
     */
    class CheckBox extends ToggleButton {
        /**
         * 创建一个CheckBox
         */
        constructor();
    }
}
declare module lark.gui {
    /**
     * RadioButton 组件使用户可在一组互相排斥的选择中做出一种选择
     */
    class RadioButton extends ToggleButton {
        /**
         * 创建一个RadioButton
         */
        constructor();
        /**
         * 在RadioButtonGroup中的索引
         */
        $indexNumber: number;
        /**
         * 所属的RadioButtonGroup
         */
        $radioButtonGroup: RadioButtonGroup;
        /**
         * 组件是否可以接受用户交互。默认值为true。设置此属性将影响组内所有单选按钮
         */
        enabled: boolean;
        private _group;
        /**
         * 此单选按钮所属的组。同一个组的多个单选按钮之间互斥。
         * 若不设置此属性，则根据groupName属性自动创建一个唯一的RadioButtonGroup。
         */
        group: RadioButtonGroup;
        private groupChanged;
        private _groupName;
        /**
         * 所属组的名称,具有相同组名的多个单选按钮之间互斥。默认值:"radioGroup"。
         * 可以把此属性当做设置组的一个简便方式，作用与设置group属性相同,。
         */
        groupName: string;
        $setSelected(value: boolean): void;
        private _value;
        /**
         * 与此单选按钮关联的自定义数据。
         */
        value: any;
        protected commitProperties(): void;
        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        protected buttonReleased(): void;
        /**
         * 添此单选按钮加到组
         */
        private addToGroup();
    }
}
declare module lark.gui {
    /**
     * 开关按钮
     */
    class ToggleSwitch extends ToggleButton {
        /**
         * 创建一个ToggleSwitch
         */
        constructor();
    }
}
