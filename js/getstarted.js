new Vue({
    el: "#app",
    data: {
        official: [
            {
                title:'HTML开发手册',
                text:'《HTML开发手册》为HTML官方开发在线文档，本在线手册包含了各种html标签的属性、定义、使用方法，实例运行等，欢迎HTML开发者、HTML学习者进行参考！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7077a0c0861353.png'
            },
            {
                title:'CSS  在线手册',
                text:'《CSS在线手册》为官方CSS在线参考手册，本CSS在线开发手册包含了各种css属性、定义、使用方法，实例运行等，是WEB编程学习及开发者不可或缺的在线查询手册！CSS：层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7077f1eabf2637.png'
            },
            {
                title:'JavaScript中文参考手册',
                text:'《JavaScript中文参考手册》为官方JS在线开发手册，本JavaScript在线学习手册包含了JS每个对象、属性、方法的介绍和使用实例，是WEB编程学习以及开发者不可或缺的在线查询手册！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7079097298a101.png'
            },
            {
                title:'php完全自学手册',
                text:'欢迎朋友们加入php自学的行列，php语言是一门入门简单，容易上手的通用开源脚本语言，《php完全自学手册》能使学习者对php有一个大致的了解，并能通过该语言进行简单的网站和软件开发。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707a4a8a088113.png'
            },
            {
                title:'PHP7新特性手册',
                text:'PHP7是PHP编程语言全新的一个版本，主要在性能方面获得了极大的提升。官方的文档显示，PHP7可以达到PHP5.x版本两倍的性能。同时还对PHP的语法做了梳理，提供了很多其他语言流行的语法格式。难能可贵的是，做了如此大的改动，PHP7的兼容性还是非常好的。对于绝大多数的应用来讲，可以不用做修改即可迁移到PHP7版本。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70831d65c55995.png'
            },
            {
                title:'PHP开发编码规范',
                text:'《PHP开发编码规范》包含PHP代码规范、PHP注释规范等详细的PHP编码规范，主要是为了更好地提高PHP开发人员的工作效率，保证开发的有效性和合理性，并提高程序代码的可读性和可重复利用性，本规范的价值在于我们都遵循这个编码风格！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70abc7c13cd601.png'
            },
            {
                title:'Redis命令操作中文手册',
                text:'《Redis命令操作中文手册》是Redis官方最新的在线参考手册。Redis是一款内存高速缓存数据库，本手册包含了各种Redis操作命令，并配有中文解释，您将会学习掌握Redis在数据服务器中的高效使用，是Redis学习和使用者必备的在线查询参考文档教程！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707b82e90bc275.png'
            },
            {
                title:'THINKPHP 5.0 手册最新版',
                text:'《ThinkPHP 5.0 手册最新版》是一个为API开发而设计的高性能框架——是一个颠覆和重构版本，采用全新的架构思想，引入了很多的PHP新特性，优化了核心，减少了依赖，实现了真正的惰性加载，支持composer，并针对API开发做了大量的优化。ThinkPHP5是一个全新的里程碑版本，包括路由、日志、异常、模型、数据库、模板引擎和验证等模块都已经重构，不适合原有3.2项目的升级，请慎重考虑商业项目升级，但绝对是新项目的首选（无论是WEB还是API开发），而且最好是忘记3.2版本的思维习惯，重新理解TP5',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7089ff8012d669.jpg'
            },
        {
                title:'ThinkPHP6.0完全开发手册(注解版)',
                text:'ThinkPHP6.0在5.1的基础上对底层架构做了进一步的精简和统一，引入了一些新特性，并提升版本要求。本手册仅针对ThinkPHP6.0.*版本，为ThinkPHP官方手册的注解版本，方便快速入门！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70a8cde9085308.jpg'
            },
            {
                title:'Laravel 5.8 中文文档手册',
                text:'《Laravel 5.1/5.8速查表：https://www.php.cn/phpkj/laravel/cheatsheet58.html 》     手册简介：Laravel 5.8 在 Laravel 5.7 的基础上继续进行优化，包括引入新的 Eloquent 关联关系（has-one-through）、优化邮箱验证、基于约定的授权策略类自动注册、 DynamoDB 缓存及 Session 驱动、优化任务调度器的时区配置、支持分配多个认证 guard 到广播频道、PSR-16 缓存驱动规范等等。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70d115e947c912.jpg'
            }
        ],
        htmllist: [
            {
                title:'HTML 开发手册',
                text:'《HTML开发手册》为HTML官方开发在线文档，本在线手册包含了各种html标签的属性、定义、使用方法，实例运行等，欢迎HTML开发者、HTML学习者进行参考！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7077a0c0861353.png'
            },
            {
                title:'CSS  在线手册',
                text:'《CSS在线手册》为官方CSS在线参考手册，本CSS在线开发手册包含了各种css属性、定义、使用方法，实例运行等，是WEB编程学习及开发者不可或缺的在线查询手册！CSS：层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7077f1eabf2637.png'
            },
            {
                title:'HTML5  完整版手册',
                text:'《HTML5最新版参考手册》为官方HTML5在线参考学习手册，本H5在线开发手册包含了各种html5各种标签属性、语法、定义、使用方法，实例运行等，是网页前端学习者及开发者不可或缺的在线查询手册文档！在本手册教程你将学习到HTML5是什么，HTML5有什么用，HTML5怎么用等知识！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7077c9dd76f803.png'
            },
            {
                title:'Bootstrap 中文手册',
                text:'Bootstrap是最流行和最强大的前端（HTML，CSS和JavaScript）框架，可以更快，更轻松地做响应式（自适应）Web开发。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70786b87dfa184.png'
            },
            {
                title:'CSS3  最新版参考手册',
                text:'《CSS3最新版参考手册》为官方CSS3在线参考学习手册，本css3在线开发手册包含了各种css3属性、语法、定义、使用方法，实例运行等，是网页前端学习者及开发者不可或缺的在线查询手册文档！注：CSS3是CSS技术的升级版本，CSS3语言开发是朝着模块化发展的，这些模块包括： 盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70780f5eadf782.png'
            },
            {
                title:'前端开发规范手册',
                text:'前端开发是创建Web页面或app等前端界面呈现给用户的过程，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互  。它从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7097e746c6a138.jpg'
            },
            {
                title:'Foundation 中文手册',
                text:'《foundation开发手册》是foundation官方最新的在线参考手册。foundation是一个免费的前端框架。在本foundation文档中，您将会学习使用foundation创建响应式网页。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7078c047c5a403.png'
            },
            {
                title:'MIP文档手册',
                text:'MIP （Mobile Instant Pages - 移动网页加速器）, 是一套应用于移动网页的开放性技术标准。通过提供MIP-HTML规范、MIP-JS运行环境以及MIP-Cache页面缓存系统，实现移动网页加速。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7087a1df014277.jpg'
            },
            {
                title:'Parcel 中文参考文档',
                text:'Parcel 是一个Web应用程序 打包器(bundler) ，与以往的开发人员使用的打包器有所不同。它利用多核处理提供极快的性能，并且你不需要进行任何配置。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70a8783d367537.png'
            }
        ],
        jslist: [
            {
                title:'微信小程序开发文档',
                text:'微信小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用。也体现了“用完即走”的理念，用户不用关心是否安装太多应用的问题。微信“小程序”可以为开发者提供基于微信的表单、导航、地图、媒体和位置等开发组件，让他们在微信的网页里构建一个HTML 5应用。同时微信还开放了登录和微信支付等接口，让这个“小程序”可以和用户的微信账号打通。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70889a57ee0231.jpg'
            },
            {
                title:'JavaScript中文参考手册',
                text:'《JavaScript中文参考手册》为官方JS在线开发手册，本JavaScript在线学习手册包含了JS每个对象、属性、方法的介绍和使用实例，是WEB编程学习以及开发者不可或缺的在线查询手册！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7079097298a101.png'
            },
            {
                title:'AJAX中文参考手册',
                text:'在《AJAX中文参考手册》中，AJAX 不是新的编程语言，而是一种使用现有标准的新方法。AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70796688dc4494.png'
            },
            {
                title:'Node.js 中文参考手册',
                text:'对于《Node.js 中文参考手册》，简单的说 Node.js 就是运行在服务端的 JavaScript。 Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。 Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707999e6720780.png'
            },
            {
                title:'jQuery EasyUI中文参考手册',
                text:'在《jQuery EasyUI中文参考手册》中，jQuery EasyUI 是一个基于 jQuery 的框架，集成了各种用户界面插件。 jQuery EasyUI 框架提供了创建网页所需的一切，帮助您轻松建立站点。本教程将告诉您如何使用 jQuery EasyUI 框架创建应用。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7079450ebed177.png'
            },
            {
                title:'jQuery中文参考手册',
                text:'《jQuery中文参考手册》为官方jQuery在线参考学习手册，本jQuery在线开发手册包含了各种jQuery属性、语法、定义、库、使用方法，实例运行等，是WEB编程学习及开发者不可或缺的在线查询手册文档！注：jQuery 是一个 JavaScript 库。jQuery 极大地简化了JavaScript 编程，jQuery 很容易学习。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7079cbdba82756.png'
            }
        ],
        serverlist: [
            {
                title:'php完全自学手册',
                text:'欢迎朋友们加入php自学的行列，php语言是一门入门简单，容易上手的通用开源脚本语言，《php完全自学手册》能使学习者对php有一个大致的了解，并能通过该语言进行简单的网站和软件开发。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707a4a8a088113.png'
            },
            {
                title:'Python 基础入门教程',
                text:'Python是一种解释型、面向对象、动态数据类型的高级程序设计语言。 Python由Guido van Rossum于1989年底发明，第一个公开发行版发行于1991年。 《Python 基础入门教程》适合想从零开始学习Python编程语言的开发人员。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707b0950fa6557.png'
            },
            {
                title:'Laravel 5.8 中文文档手册',
                text:'《Laravel 5.1/5.8速查表：https://www.php.cn/phpkj/laravel/cheatsheet58.html 》     手册简介：Laravel 5.8 在 Laravel 5.7 的基础上继续进行优化，包括引入新的 Eloquent 关联关系（has-one-through）、优化邮箱验证、基于约定的授权策略类自动注册、 DynamoDB 缓存及 Session 驱动、优化任务调度器的时区配置、支持分配多个认证 guard 到广播频道、PSR-16 缓存驱动规范等等。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70d115e947c912.jpg'
            },
            {
                title:'Python 3 教程',
                text:'《Python 3 教程》Python的3.0版本，常被称为Python 3000，或简称Py3k。相对于Python的早期版本，这是一个较大的升级。为了不带入过多的累赘，Python 3.0在设计的时候没有考虑向下兼容。对于初学者和完成普通任务，Python语言是非常简单易用的。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707aed2366a285.png'
            },
            {
                title:'PHP7新特性手册',
                text:'PHP7是PHP编程语言全新的一个版本，主要在性能方面获得了极大的提升。官方的文档显示，PHP7可以达到PHP5.x版本两倍的性能。同时还对PHP的语法做了梳理，提供了很多其他语言流行的语法格式。难能可贵的是，做了如此大的改动，PHP7的兼容性还是非常好的。对于绝大多数的应用来讲，可以不用做修改即可迁移到PHP7版本。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70831d65c55995.png'
            },
            {
                title:'C 语言教程',
                text:'《C 语言教程》 C 语言是一种通用的、面向过程式的计算机程序设计语言。1972 年，为了移植与开发 UNIX 操作系统，丹尼斯·里奇在贝尔电话实验室设计开发了 C 语言。 C 语言是一种广泛使用的计算机语言，它与 Java 编程语言一样普及，二者在现代软件程序员之间都得到广泛使用。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70a966cc227897.png'
            }
        ],
        mysqlList: [
            {
                title:'MySQL最新手册教程',
                text:'《MySQL开发手册》是MySQL官方最新的在线参考手册，包含了MySQL数据库的增删改查、索引等各个知识点详解，是MYSQL使用和学习者不可或缺的在线查询参考文档！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707aaa569af181.png'
            },
            {
                title:'Redis命令操作中文手册',
                text:'《Redis命令操作中文手册》是Redis官方最新的在线参考手册。Redis是一款内存高速缓存数据库，本手册包含了各种Redis操作命令，并配有中文解释，您将会学习掌握Redis在数据服务器中的高效使用，是Redis学习和使用者必备的在线查询参考文档教程！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707b82e90bc275.png'
            },
            {
                title:'SQL入门教程手册',
                text:'《SQL开发手册》是SQL官方最新的在线手册，在本sql文档中您将学到如何使用sql访问、处理系统数据等sql知识，是sql学习者重要的参考手册！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707bb23f433668.png'
            },
            {
                title:'MongoDB 教程',
                text:'《MongoDB教程》是MongoDB官方最新的在线参考手册，在本MongoDB文档中，您会学习到如何使用MongoDB对数据库进行增删改查、排序等重要知识点。MongoDB 是一个基于分布式文件存储的数据库，MongoDB 的应用已经渗透到各个领域，比如游戏、物流、电商、内容管理、社交、物联网、视频直播等',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707bd760784648.png'
            },
            {
                title:'Memcached命令操作手册',
                text:'《Memcached命令操作手册》是Memcached官方最新的在线参考手册。在本Memcached文档中，各种Memcached操作命令，并配有中文解释，您将会学到如何使用Memcached减少数据库负载,提升性能等知识。是Memcached学习和使用者必备的在线查询参考文档教程！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707bf8ca257984.png'
            },
            {
                title:'SQLite经典教程',
                text:'《SQLite开发手册》是SQLite官方最新的在线参考手册。在本SQLite文档中，您将学习到如何使用SQLite 编程以及了解数据库引擎相关知识和先进理念。《SQLite开发手册》是SQLite官方最新的在线参考手册。在本SQLite文档中，您将学习到如何使用SQLite 编程以及了解数据库引擎相关知识和先进理念。SQLite是一种嵌入式数据库，它的数据库就是一个文件。由于SQLite本身是C写的，而且体积很小，所以，经常被集成到各种应用程序中，甚至在手机iOS和Android的App中都可以集成。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707c1a4f33c879.png'
            }
        ],
        appList: [
            {
                title:'Android  开发手册',
                text:'《Android 参考手册》 中 Android一词的本义指“机器人”，同时也是Google于2007年11月5日宣布的基于Linux平台的开源手机操作系统的名称，该平台由操作系统、中间件、用户界面和应用软件组成。Android一词最早出现于法国作家利尔亚当',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707c8f6a69b106.png'
            },
            {
                    title:'ionic中文教程',
                    text:'ionic 是一个强大的 HTML5 应用程序开发框架(HTML5 Hybrid Mobile App Framework )。 可以帮助您使用 Web 技术，比如 HTML、CSS 和 Javascript 构建接近原生体验的移动应用程序， 它是一个轻量的手机UI库。《ionic中文教程》将指导您关注外观和体验，以及和你的应用程序的 UI 交互，学会基于 Hybird 模式的 HTML5 移动应用程序开发。',
                    ur1:'https://img.php.cn/upload/course/000/000/020/5d707caf7f727967.png'
            },
            {
                    title:'ios开发手册中文版',
                    text:'《ios开发手册中文版》iOS是苹果公司研发的一款手机操作系统。 于2007年开始运用于iPhone，iPod Touch和苹果电视。 iOS从OS X演化而来，并且和OSX共享Darwin。iOS是OSX运用于苹果电脑操作系统的一款手机操作系统。   适用群体  本教程适用于使用 Objictive C 或 Swift 语言了解的开发人员，并用该语言开发 iPhone 和 iPad 应用。 本教程能使你充分的了解iPad和iPhon..',
                    ur1:'https://img.php.cn/upload/course/000/000/020/5d70993a0f39f831.jpg'
            },
            {
                    title:'swift开发文档',
                    text:'《swift开发文档》Swift 是一种支持多编程范式和编译式的开源编程语言,苹果于2014年WWDC（苹果开发者大会）发布，用于开发 iOS，OS X 和 watchOS 应用程序。Swift 结合了 C 和 Objective-C 的优点并且不受 C 兼容性的限制。Swift 在 Mac OS 和 iOS 平台可以和 Object-C 使用相同的运行环境。Swift是一款易学易用的编程语言，而且它还是第一套具有与脚本语言同样的表现力和趣味性的系统编程语言。Swift的设计以安全为出发点，以避免各种常见的编程错误类别。',
                    ur1:'https://img.php.cn/upload/course/000/000/020/5d707ce3d711f994.png'
            },
            {
                    title:'jQuery Mobile经典教程',
                    text:'jQuery Mobile是用于创建移动 Web 应用的前端开发框架,可以应用于智能手机与平板电脑,使用 HTML5和CSS3 最小的脚本来布局网页。',
                    ur1:'https://img.php.cn/upload/course/000/000/020/5d707d04c74ca472.png'
            },
        ],
        xmlList: [
            {
                title:'XML DOM 教程',
                text:'《XML DOM 教程》   XML DOM 定义访问和操作XML文档的标准方法。 DOM 将 XML 文档作为一个树形结构，而树叶被定义为节点。 如果你想使用XML，你就需要了解XML DOM。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707d634a605787.png'
            },
            {
                title:'XML技术手册',
                text:'XML 指可扩展标记语言（eXtensible Markup Language）。 XML 被设计用来传输和存储数据。 XML 很重要，也很容易学习。 现在开始学习 XML！',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707d23c2f8c221.png'
            },
            {
                title:'SVG 教程',
                text:'SVG 是 HTML5 中矢量图的标记语言，它保持了强大的绘图能力的同时，具有非常高端的使用接口，通过直接操作 Dom 节点的形式来操作图形。本《SVG 教程》意在让学生掌握 SVG 这门语言和它对应的一些 API，再结合2D绘图的知识，让学生具有对页面复杂图形的渲染和控制能力。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707d4487e0c193.png'
            },
            {
                title:'XPath 教程',
                text:'《XPath 教程》   XPath 是一门在 XML 文档中查找信息的语言。 XPath 是 XSLT 中的主要元素。 XQuery 和 XPointer 均构建于 XPath 表达式之上',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707d7d3408e719.png'
            },
            {
                title:'XML Schema 教程',
                text:'《XML Schema 教程》   XML Schema 描述了 XML文档的结构。 在此教程中，你将学习如何在应用程序中读取和创建 XML Schema 语言，XML Schema 为何比 DTD 更加强大，以及如何在您的应用程序中使用 XML Schema。 现在开始学习 XML Schema!',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707da5bb5a5522.png'
            },
            {
                title:'XSLT 教程',
                text:'《XSLT 教程》   XSL 指扩展样式表语言（EXtensible Stylesheet Language）, 它是一个 XML 文档的样式表语言。 XSLT 指 XSL 转换。在此教程中，你将学习如何使用 XSLT 将 XML 文档转换为其他文档，比如 XHTML。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707dd002725173.png'
            }
        ],
        aspList: [
            {
                title:'C# 教程',
                text:'《C# 教程》是C#语言的入门课程，在课程中，将从.NET平台和C#的基本概念开始，深入的介绍C#开发的基础语法、简单程序逻辑、Visual Studio工具的使用技巧以及常用的算法的实现。同时，也希望通过与课程相关的练习题和编程练习，帮助小伙伴们快速步入C#语言的大门。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707e4e1122d747.png'
            },
            {
                title:'MVC教程',
                text:'MVC 教程   ASP.NET 是一个使用 HTML、CSS、JavaScript 和服务器脚本创建网页和网站的开发框架。 	ASP.NET 支持三种不同的开发模式： Web Pages（Web 页面）、MVC（Model View Controller 模型-视图-控制器）、Web Forms（Web 窗体）。 本教程介绍 MVC。   Web Pages   MVC   Web Forms   MVC 编程模式 M..',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70821d50a10398.png'
            },
            {
                title:'ASP.NET 教程',
                text:'《ASP.NET 教程》   ASP.NET 是一个使用 HTML、CSS、JavaScript 和服务器脚本创建网页和网站的开发框架。 ASP.NET 支持三种不同的开发模式： Web Pages（Web 页面）、MVC（Model View Controller 模型-视图-控制器）、Web Forms（Web 窗体）：      Web Pages单页面模式    MVC模型-视图-控制器    Web Forms事件驱动模式',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707e926fdd3674.png'
            },
            {
                title:'Web Forms  教程',
                text:'ASP.NET 是一个使用 HTML、CSS、JavaScript 和服务器脚本创建网页和网站的开发框架。 ASP.NET 支持三种不同的开发模式： Web Pages（Web 页面）、MVC（Model View Controller 模型-视图-控制器）、Web Forms（Web 窗体）： 《Web Forms教程》介绍 Web Forms。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707eb77086f853.png'
            },
            {
                title:'Razor  教程',
                text:'Razor 是一种允许您向网页中嵌入基于服务器的代码（Visual Basic 和 C#）的标记语法。当网页被写入浏览器时，基于服务器的代码能够创建动态内容。在网页加载时，服务器在向浏览器返回页面之前，会执行页面内的基于服务器代码。由于是在服务器上运行，这种代码能执行复杂的任务，比如访问数据库。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707f094c22d754.png'
            }
        ],
        webServices: [
            {
                title:'Web Services教程',
                text:'Web Services 通过 Web 进行发布、查找和使用。是应用程序组件使用开放协议进行通信， 是独立的（self-contained）并可自我描述， 可通过使用UDDI来发现，可被其他应用程序使用。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707f2b241a4282.png'
            },
            {
                title:'SOAP入门教程',
                text:'SOAP是一种简单的基于 XML 的协议，它使应用程序通过 HTTP 来交换信息。在我们的SOAP 教程中，你将了解到什么是 SOAP，以及它如何在应用程序之间交换信息。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707f4ce6289118.png'
            },
            {
                title:'RDF快速入门教程',
                text:'资源描述框架(Resource Description Framework, 简称 RDF)是一个用于表达关于万维网(World Wide Web)上的资源的信息的语言. 它专门用于表达关于Web资源的元数据, 比如Web页面的标题、作者和修改时间，Web文档的版权和许可信息，某个被共享资源的可用计划表等。	',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707f729f336528.png'
            },
            {
                title:'RSS高效入门教程',
                text:'通过使用 RSS，您可以有选择地浏览您感兴趣的以及与您的工作相关的新闻。 通过使用 RSS，您可以把需要的信息从不需要的信息（兜售信息，垃圾邮件等）中分离出来。 通过使用 RSS，您可以创建自己的新闻频道，并将之发布到因特网。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707fae438d5395.png'
            },
            {
                title:'WSDL 教程',
                text:'WSDL（网络服务描述语言，Web Services Description Language）是一门基于 XML 的语言，用于描述 Web Services 以及如何对它们进行访问。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707f90dd9c6735.png'
            }
        ],
        development: [
            {
                title:'Eclipse 教程',
                text:'Eclipse 是一个开放源代码的、基于 Java 的可扩展开发平台，本教程将会为大家带来Eclipse的基本使用，如何同JAVA来才做Eclipse。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707ff7153ec619.png'
            },
            {
                title:'快速入门Git教程',
                text:'本课程主要讲解了git在各平台的安装和基本使用，Git能够帮助我们解决文件的提交、检出、回溯历史、冲突解决、多人协作模式等问题，并且大大提升我们的工作效率。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d707fd45e958378.png'
            },
            {
                title:'Firebug入门教程',
                text:'Firebug是WEB调试工具之一，是网页浏览器 Firefox 下的一款开发类插件。它集HTML查看和编辑、JS控制台、网络状况监视器于一体，是开发JavaScript、CSS、HTML和Ajax的得力助手。掌握Firebug的使用，可从各个不同的角度剖析Web页面内部的细节，给Web开发带来极大的便利。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70998e72503717.jpg'
            }
        ],
        website: [
            {
                title:'网站建设指南',
                text:'一个网站开发人员必须掌握的知识是什么？如何搭建自己的一个网站？',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70804e8d5d3668.png'
            },
            {
                title:'HTTP详解教程',
                text:'HTTP协议（HyperText Transfer Protocol，超文本传输协议）是因特网上应用最为广泛的一种网络传输协议，所有的WWW文件都必须遵守这个标准，本节课开始我们将来学会HTTP的详细内容',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70806693c23433.png'
            },
            {
                title:'网站主机教程',
                text:'如果您希望向全世界发布自己的网站，那么您的网站就需要被放置于一个 WEB 服务器。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d708086b11cc755.png'
            },
            {
                title:'TCP/IP 教程',
                text:'TCP/IP是因特网的通信协议。 TCP/IP 通信协议是对计算机必须遵守的规则的描述，只有遵守这些规则，计算机之间才能进行通信。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d70809f6b7dc127.png'
            },
            {
                title:'http状态码大全',
                text:'HTTP状态码的英文为HTTP Status Code，当用户在浏览网页的时候，用户的浏览器就会向网页所在服务器发出请求，并且在浏览器接收请求之前，网页的服务器会返回一个HTTP状态码的信息头用以响应浏览器的请求。 下面常见的HTTP状态码：200-请求成功，301-资源（网页等）被永久转移到其它URL，404-请求的资源（网页等）不存在，500-内部服务器错误。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d708125bf694216.png'
            },
            {
                title:'浏览器信息',
                text:'对于网站开发人员来说，浏览器信息和统计数据都是非常重要的，不同浏览器之间有哪些区别，这都是我们将要学习的。',
                ur1:'https://img.php.cn/upload/course/000/000/020/5d7080f2c8b5b339.png'
            }
        ]	
    }
})