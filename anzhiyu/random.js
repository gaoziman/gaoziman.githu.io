var posts=["2022/05/22/百万长文带你学Java/","2022/05/03/随机图api/","2022/05/16/JVM/01-JVM与Java体系结构/","2022/05/16/JVM/01-概述篇-02-JVM监控及诊断工具-命令行篇/","2022/05/16/JVM/03-JVM监控及诊断工具-GUI篇/","2022/05/16/JVM/02-类加载子系统/","2022/05/03/JVM/04-程序流程控制/","2022/05/16/JVM/04-JVM运行时参数/","2022/05/16/JVM/03-运行时数据区及程序计数器/","2022/05/16/JVM/04-虚拟机栈/","2022/05/16/JVM/09-执行引擎/","2022/05/16/JVM/05-本地方法接口和本地方法栈/","2022/05/16/JVM/05-分析GC日志/","2022/05/16/JVM/08-对象实例化及直接内存/","2022/05/16/JVM/11-垃圾回收概述及算法/","2022/05/16/JVM/13-垃圾回收器/","2022/05/16/JVM/＜JVM中篇：字节码与类的加载篇＞01-Class字节码文件结构/","2022/05/16/JVM/12-垃圾回收相关概念/","2022/05/16/JVM/＜JVM中篇：字节码与类的加载篇＞02-字节码指令集/","2022/05/16/JVM/＜JVM中篇：字节码与类的加载篇＞03-类的加载过程（类的生命周期）详解/","2022/06/12/Java基础/01-Java基础入门/","2022/05/16/JVM/＜JVM中篇：字节码与类的加载篇＞04-再谈类的加载器/","2022/05/03/Java基础/01Java语言概述/","2022/06/12/Java基础/02-Java入门/","2022/05/03/Java基础/03-运算符/","2022/06/12/Java基础/03-Java基础/","2022/06/12/Java基础/04-Java流程控制/","2022/05/03/Java基础/02-变量、标识符、保留字、变量/","2022/05/03/Java基础/05-数组/","2022/06/12/Java基础/05-数组与方法/","2022/06/12/Java基础/06-IDEA集成开发工具/","2022/05/16/Java基础/07-方法区/","2022/05/03/Java基础/06-面向对象（上）/","2022/06/12/Java基础/07-面向对象编程（OOP）/","2022/05/03/Java基础/07-面向对象（中）/","2022/05/03/Java基础/08-面向对象（下）/","2022/05/03/Java基础/09-异常/","2022/06/12/Java基础/08-Java进阶/","2022/05/16/Java基础/10-StringTable/","2022/05/03/Java基础/10-多线程/","2022/05/03/Java基础/11-常用类/","2022/05/03/Java基础/12-枚举与注解/","2022/05/03/Java基础/14-泛型/","2022/05/03/Java基础/13-集合/","2022/05/03/Java基础/16-网络编程/","2022/05/03/Java基础/17-反射与动态代理/","2022/05/03/Java基础/18-Java8新特性/","2022/05/03/Java基础/15-IO流/","2022/05/03/Java基础/19-Java9-Java10-Java11新特性/","2022/07/18/Java基础/13-万字-C-语言从入门到精通保姆级教程/","2022/05/28/MySQL/第04章 运算符/","2022/05/28/MySQL/第03章_基本的SELECT语句/","2022/05/28/MySQL/第05章  排序与分页/","2022/05/28/MySQL/第07章 单行函数/","2022/05/28/MySQL/第06章 多表查询/","2022/05/28/MySQL/第08章 聚合函数/","2022/05/28/MySQL/第09章  子查询/","2022/05/28/MySQL/第10章  创建和管理表/","2022/05/28/MySQL/第13章 约束/","2022/05/28/MySQL/第12章 MySQL数据类型精讲/","2022/05/28/MySQL/第11章  数据处理之增删改/","2022/05/03/教程/知识总结/","2022/05/16/教程/2021最新版java学习路线/","2022/05/23/教程/迄今为止最全的技术文档/","2022/10/17/百里半Java培训/Maven学习笔记/","2022/10/17/百里半Java培训/Linux学习笔记/","2022/10/17/百里半Java培训/MyBatis学习笔记/","2022/10/17/百里半Java培训/Thmeleaf/","2022/10/17/百里半Java培训/代理模式你了解多少/","2022/07/28/SGG_JavaSE/第10章-基础API与常见算法/","2022/07/28/SGG_JavaSE/第12章-泛型/","2022/07/28/SGG_JavaSE/第14章-File类与IO流/","2022/07/28/SGG_JavaSE/第11章-集合/","2022/07/28/SGG_JavaSE/第13章-数据结构与算法/","2022/07/28/SGG_JavaSE/第15章-网络编程/","2022/07/28/SGG_JavaSE/第16章-反射（Reflect）/","2022/07/28/SGG_JavaSE/第17章-Java8新特性/","2022/07/28/SGG_JavaSE/第2章-Java基础语法/","2022/07/28/SGG_JavaSE/第4章【数组】/","2022/07/28/SGG_JavaSE/第1章-Java概述/","2022/07/28/SGG_JavaSE/第3章-流程控制语句结构/","2022/07/28/SGG_JavaSE/第5章-面向对象基础（上）/","2022/07/28/SGG_JavaSE/第6章【面向对象基础-中】/","2022/07/28/SGG_JavaSE/第9章-多线程/","2022/07/28/SGG_JavaSE/第7章-面向对象基础（下）/","2022/05/02/知识点/Java基础-图谱/","2022/05/02/知识点/Java基础-异常机制详解/","2022/07/18/知识点/Java基础50道经典练习题/","2022/05/16/知识点/万字长文带你还原进程和线程/","2022/05/27/知识点/MyBatis笔记-2022/","2022/05/02/知识点/Java基础整合/","2022/06/05/知识点/终于搞懂了Java中基本数据类型和引用数据类型的区别啦！/","2022/05/28/知识点/Thymeleaf-这一篇就够了/","2022/05/28/知识点/认识String类/","2022/05/26/知识点/这一篇让你彻底搞懂 JAVA 内部类/","2022/07/18/知识点/面向对象基础这一文就够了/","2022/05/03/知识点/超全Java集合框架讲解/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之CPU/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之二进制/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之内存/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之控制硬件/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之操作系统入门/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之压缩算法/","2022/05/23/知识点/Java自学笔记/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之操作系统和应用/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之汇编语言/","2022/05/03/计算机组成原理/程序员需要了解的硬核知识之磁盘/","2022/05/03/设计模式/一、设计模式/","2022/07/18/计算机组成原理/计算机组成原理：最详细笔记/","2022/05/03/设计模式/七、单例模式-Singleton-Pattern/","2022/05/03/设计模式/三、设计模式-–-四大类型/","2022/05/03/设计模式/六、抽象工厂模式-Abstract-Factory-Pattern/","2022/05/03/设计模式/二、设计模式-简介/","2022/05/03/设计模式/十、适配器模式-Adapter-Pattern/","2022/05/03/设计模式/四、设计模式-–-六大原则/","2022/05/03/计算机网络/DHCP-协议/","2022/05/03/计算机网络/TCP-传输控制协议/","2022/05/03/计算机网络/DNS-协议/","2022/05/03/计算机网络/带你一步步解析-HTTP/","2022/07/18/计算机网络/计算机网络-HTTP协议-和-HTTPS-1/","2022/05/27/计算机网络/计算机网络-HTTP协议-和-HTTPS/","2022/05/03/计算机网络/带你一步步解析-HTTPS/","2022/05/03/计算机网络/计算机网络-TCP-IP-基础/","2022/05/03/计算机网络/计算机网络基础知识/","2022/05/03/计算机网络/计算机网络核心概念/","2022/05/03/计算机网络/计算机网络的应用层/","2022/05/03/计算机网络/计算机网络的数据链路层/","2022/05/03/计算机网络/计算机网络的网络层/","2022/05/03/计算机网络/计算机网络自学指南/","2022/10/16/百里半Java培训/Web网页技术/Get请求和Post请求的区别/","2022/05/03/计算机网络/计算机网络运输层/","2022/10/16/百里半Java培训/Web网页技术/Web环境搭建以及Servlet入门/","2022/10/16/百里半Java培训/Web网页技术/一文了解转发与重定向/","2022/10/16/百里半Java培训/Web网页技术/一文学懂Cookie与Session的区别/","2022/10/16/百里半Java培训/Web网页技术/一文学懂JSP/","2022/10/16/百里半Java培训/Web网页技术/一文学懂过滤器和监听器/","2022/10/16/百里半Java培训/Web网页技术/JS常用正则表达式大全/","2022/10/16/百里半Java培训/Web网页技术/初始ServletContext/","2022/10/16/百里半Java培训/Web网页技术/初识ServletConfig/","2022/10/16/百里半Java培训/数据库关键技术/Java第二阶段-day01-MySQL入门/","2022/10/16/百里半Java培训/数据库关键技术/一文了解MySQL事务/","2022/10/16/百里半Java培训/数据库关键技术/Java第二阶段-day02-MySQL进阶/","2022/10/16/百里半Java培训/数据库关键技术/一文了解视图、存储过程、触发器/","2022/10/16/百里半Java培训/数据库关键技术/初识MySQL索引/","2022/10/16/百里半Java培训/数据库关键技术/数据库三大范式、ER图与实体类、外键约束与级联操作/","2022/10/16/百里半Java培训/数据库关键技术/Java第二阶段-day03-MySQL进阶/","2022/10/16/百里半Java培训/数据库关键技术/悉知JDBC/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};