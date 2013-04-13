common_info={
	books:{name:"书籍简介",init:fill_node,content:[
		{name:"关于某些书",init:fill_info,content:[
			["http://baike.baidu.com/view/963166.htm","<<C程序设计>> <sub>谭浩强(谭老湿) 著</sub>",
				"一本挺<b>渣</b>的书,有一堆概念错误,误导性严重<sub>话说被误导的某些家伙经常会被喷的很惨</sub>"+"<br>"+
				"传说中的C语言<b>2</b>级考试<sub>真是很2的考试</sub>神书,推荐给只为了考证的同学<sub>想好好学的还是算了吧</sub>"
			],
			["http://baike.baidu.com/view/963166.htm","<<C++程序设计>> <sub>谭浩强(谭老湿) 著</sub>","渣渣"],
		],expanding:true,},
		{name:"C语言",init:fill_node,content:[
			{name:"入门书籍",init:fill_info,content:[
				["","<<C Primer Plus>> <sub>by Stephen Prata</sub>","一本很经典的入门书籍<sub>据报告有不少打字错误</sub>"],
				["","<<C语言入门经典>> <sub>by Ivor Horton</sub>","据说是本很经典的入门书籍<sub>ps.本人没看过</sub>"],
				["http://baike.baidu.com/view/611688.htm","[TCPL]<<C程序设计语言>> <sub>by Kernighan &amp; Ritchie</sub>",
					"传说中的K&R C, 具有无上尊严的某书<sub>C语言的创造者的书,ANSI标准起源于此,有点难度</sub>"
				],
				["","<<C Programming: A Modern Approach>> <sub>by K. N King</sub>",
					""
				],
				
			],width_f:330},
			{name:"进阶书籍",init:fill_info,content:[
				["","<<C和指针>> <sub>by Kenneth Reek</sub>","对每个学C语言的人而言都是值得一看的好书<sub></sub>"],
				["","<<C专家编程>> <sub>by Peter van der Linden</sub>","深入地讲解了C语言的一些方面<sub>看此书得有点基础</sub>"],
				["","<<C陷阱与缺陷>> <sub>by Andrew Koenig</sub>","如何不想被bug整死,请看这里<sub>看完入门书之后可以花几天先浏览一遍,排毒养颜</sub>"],
			]},
		],expanding:true,},
		{name:"C++",init:fill_node,content:[
			{name:"入门书籍",init:fill_info,content:[
				["","<<C++ Primer>> <sub>by Stanley B. Lippman...</sub>","一本非常经典的入门书籍<sub>需要一定的理论基础</sub>"],
				["","<<C++ Primer Plus>> <sub>by Stephen Prata</sub>","挺不错的无基础入门书"],
				["","<<C++程序设计语言>> <sub>by Bjarne Stroustrup</sub>","C++作者的书"],
			]},
			{name:"进阶书籍",init:fill_info,content:[
				["","<<Thinking In C++>> <sub>by Bruce Eckel</sub>","C++编程思想, 适合研究研究"],
				["","<<Modern C++ Design>> <sub>by Andrei Alexandrescu</sub>","关于模板元编程的(Warning:非常难)"],
				["","<<Inside The C++ Object Model>> <sub>by Stanley B. Lippman</sub>","深入讲解了C++的对象模型"],
				["","<<The Design and Evolution of C++>> <sub>by Bjarne Stroustrup</sub>","C++的发展史"],
				["","<<Effective C++>> <sub>by Scott Meyers</sub>","详细的介绍了各种规则和坑"],
				["","<<Exceptional C++>> <sub>by Herb Sutter</sub>","类似Effective C++"],
				["","<<Effective STL>> <sub>by Scott Meyers</sub>","STL介绍"],
				["","<<The C++ standard library>> <sub>by  Nicolai M. Josuttis</sub>","字典"],
				["","<<Accelerated C++>> <sub>by Andrew Koenig...</sub>","..."],
				["","<<Essential C++>> <sub>by Stanley B. Lippman</sub>","..."],
				["","<<Exceptional C++ Style>> <sub>by Herb Sutter</sub>","风格问题"],
				["","<<C++ Templates: The Complete Guide>> <sub>by David Vandevoorde...</sub>","模板百科"],
				
			],width_f:400},
		],expanding:true,},
		{name:"高阶内容(能看原版的去看原版去...)",init:fill_node,content:[
			{name:"数学/算法/数据结构",init:fill_info,content:[
				["","[CLRS]<<Algorithms>> <sub>by Robert Sedgewick</sub>","算法"],
				["","[CLRS]<<Introduction to Algorithms>> <sub>by C,L,R,S</sub>","算法导论"],
				["","[TAOCP]<<The Art of Computer Programming>> <sub>by Donald Knuth</sub>","计算机程序设计艺术"],
				["","<<Concrete Mathematics: A Foundation for Computer Science>> <sub>by Donald Knuth</sub>","具体数学"],
			],width_f:600},
			{name:"计算机系统",init:fill_info,content:[
				["","[CSAPP]<<Computer Systems: A Programmer's Perspective>> <sub>by Randal E. Bryant...</sub>","深入理解计算机系统"],
				["","[恐龙书]<<Operating System Concepts>> <sub>by Greg Gagne...</sub>","操作系统概念"],
				["","<<Modern Operating Systems>> <sub>by Andrew S. Tanenbaum</sub>","现代操作系统"],
				["","[APUE]<<Advanced Programming in the Unix Environment>> <sub>by W. Richard Stevens</sub>","UNIX环境高级编程"],
				["","<<The UNIX Programming Envirment>> <sub>by Brian Kernighan</sub>","UNIX编程环境"],
				["","<<The Art of Unix Programming>> <sub>by Eric S. Raymond</sub>","UNIX编程艺术"],
				["","<<The Unix-Haters Handbook>> <sub>by Simson Garfinkel</sub>","UNIX痛恨者手册"],
			],width_f:600},
			{name:"网络编程",init:fill_info,content:[
				["","<<TCP/IP Illustrated>> <sub>by W. Richard Stevens</sub>","TCP/IP 详解"],
				["","<<Computer networks>> <sub>by Andrew S. Tanenbaum</sub>","计算机网络"],
				["","<<Computer Networks and Internets>> <sub>by Douglas E. Comer</sub>","用TCP/IP进行网际互连"],
				["","[UNP]<<UNIX Network Programming>> <sub>by W. Richard Stevens</sub>","UNIX网络编程"],
			],width_f:600},
			{name:"计算机程序/编译原理",init:fill_info,content:[
				["","[DragonBook/龙书]<<Compilers: Principles, Techniques, and Tools>> <sub>by Alfred Aho...</sub>","编译原理"],
				["","[SICP]<<Structure and Interpretation of Computer Programs>> <sub>by Gerald Jay Sussman</sub>","计算机程序的构造和解释"],
			],width_f:650},
			{name:"其他",init:fill_info,content:[
				["","[GoF]<<Design Patterns:Elements of Reusable Object-Oriented Software>> <sub>by Gang of Four</sub>","设计模式"],
				["","<<The Practice of Programming>> <sub>by Brian Kernighan...</sub>","程序设计实践"],
			],width_f:700},
		],expanding:true,},
		{name:"其他",init:fill_node,content:[
			{name:"Java",init:fill_info,content:[
				["","<<Thinking in Java>> <sub>by Bruce Eckel</sub>",""],
			]},
			{name:"noip",init:fill_info,content:[
				["","<<算法竞赛入门经典>> <sub>by 刘汝佳</sub>",""],
			]},
		]},
		{name:"暫缺",init:fill_info,content:[
			["","Windows相关物","Windows kernel/MFC..."],
			["","GUI","Qt/Gtk/Tk/Motif..."],
			["","计算机图形","专业书籍/OpenGL/DirectX"],
			["","移动平台","IOS/Android/..."],
			["","分布式/并行",""],
			["","嵌入式",""],
			["","人工智能",""],
			["","硬件组成",""],
			["","信息安全",""],
			["","数学","编码理论,图论,数论,博弈论，逻辑学"],
			["","算法/数据结构",""],
			["","数据库",""],
			["","编程范式",""],
		]},
	]},
	hardware:{name:"关于硬件要求问题[仅参考]",init:fill_table,content:[
		["","CPU","内存","硬盘空间","显卡"],
		["最低配置","80368","1MiB","512MiB","-"],
		["基础配置","Pentium III","256MiB","16GiB","-"],
		["","市面上的电脑差不多都比这玩意高"],
		["运行虚拟机","Core 2<sup>+</sup>","2<sup>+</sup>GiB","64GiB","-"],
		["游戏开发","Pentium III<sup>+</sup>","512<sup>+</sup>MiB","32GiB","-"],
		["3D开发","Pentium 4<sup>+</sup>","1<sup>+</sup>GiB","32GiB","越新越好"],
		["玩游戏","i7 extreme","64<sup>+</sup>GiB","1<sup>+</sup>TiB","最好的"],
		["","总之游戏党回去玩游戏去... 你们不用担心你们的电脑有问题"],
	]},
	operating_system:{name:"关于操作系统[仅参考]",init:fill_info,content:[
		["http://www.ubuntu.com/","Ubuntu","目前新手最流行的'Linux'发行版"],
		["http://linuxmint.com/","LinuxMint","某用户友好型Linux发行版"],
		["http://www.freebsd.org/","FreeBSD","应当是目前三大BSD中最流行的一种，想玩OS的家伙可以试试(不过记住一点，BSD不是Linux)"],
		["http://www.netbsd.org/","NetBSD","同样是三大BSD之一，据说是支持平台最多的BSD(据说代码写的很好，有兴趣的可以读读，日常使用的话驱动可能悲剧……)"],
		["http://www.debian.org/","GNU/Debian","GNU/X11/Apache/Linux/TeX/Perl/Python/FreeCiv系统"],
		["https://www.archlinux.org/","ArchLinux","简洁主义... 新手小心..."],
		["http://www.gentoo.org/","Gentoo Linux","新手别玩这玩意... 到时候也不迟"],
		["http://www.redhat.com/","Redhat","是1994年开始出现的Linux发行版,面向大型机.是一个有钱人才用的面向服务器的系统"],
		["http://www.centos.org/","CentOS","免费的Linux服务器中，一半以上使用的是CentOS"],
		["http://fedoraproject.org/","Fedora","Redhat系中某更新率较高的系统"],
		["http://www.apple.com.cn/osx/","MacOSX","果粉自便"],
		["http://www.microsoft.com/zh-cn/","MS-DOS","已死,有事烧香"],
		["http://www.microsoft.com/zh-cn/","WindowsXP","有点古老的玩意"],
		["http://www.microsoft.com/zh-cn/","Windows7","不错..."],
		["http://www.microsoft.com/zh-cn/","Windows8","有点新... 所以有些东西的兼容性不正常..."],
		["http://www.gnu.org/software/hurd/hurd.html","GNU/Hurd","GNU的某个神奇的系统"],
		["http://plan9.bell-labs.com/plan9/","Plan 9 from Bell Labs","bell-labs的一个神奇的系统"],
		["","",""],
		["","Kernels:","这些玩意是'内核'不是'操作系统'"],
		["http://www.kernel.org/","Linux","粗口林(Linus Torvalds)制造的玩具"],
		["http://www.gnu.org/software/hurd/microkernel/mach/gnumach.html","Mach","某个内核,OSX就建立于这玩意之上"],
		["","",""],
	]},
	software:{name:"相关的软件(IDE/编译/编辑)",init:fill_info,content:[
		["http://baike.baidu.com/view/14867.htm","<font style=\"color:#F60;\">集成开发环境:</font>","Integrated Development Environment(IDE)"],
		["http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products","MS Visual Studio Express","微软出品的C/C++/whatever IDE (Warning:2<sup>+</sup>GB)"],
		["http://www.codeblocks.org/","Code::Blocks","开放源码的全功能的跨平台C/C++集成开发环境"],
		["http://www.codelite.org/","CodeLite","开源、跨平台的C/C++集成开发环境"],
		["http://sourceforge.net/projects/orwelldevcpp/","Orwell Dev-C++","可移植的C/C++IDE"],
		["http://www.eclipse.org/downloads/","Eclipse","多语言的集成开发环境(设置较为复杂)"],
		["http://netbeans.org/","Netbeans","..."],
		["http://www.geany.org/","Geany","..."],
		["http://qt.digia.com/","Qt Creator","..."],
		["http://www.prgramarts.com/cfree_ch/download.htm","C-Free","据说还可以的某个IDE (专业版收费)"],
		["","",""],
		["http://baike.baidu.com/view/487018.htm","<font style=\"color:#F60;\">编译器:</font>","Compiler"],
		["http://gcc.gnu.org/","GCC","the GNU Compiler Collection"],
		["http://clang.llvm.org/","Clang","a C language family frontend for LLVM"],
		["http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products","Visual C++ :: cl.exe","M$VC自带的编译器"],
		["http://www.mingw.org/","MinGW","Minimalist GNU for Windows"],
		["","",""],
		["http://baike.baidu.com/view/499644.htm","<font style=\"color:#F60;\">编辑器:</font>","Editor"],
		["http://www.vim.org/","Vim","两大神器之一"],
		["http://www.gnu.org/software/emacs/","Emacs","另一个神器"],
		["http://www.nano-editor.org/","Nano","简洁实用的某个命令行编辑器"],
		["http://notepad-plus-plus.org/","Notepad++","可以试试,挺不错的"],
		["http://kate-editor.org/","Kate","某个挺实在的编辑器"],
		["http://projects.gnome.org/gedit/","gedit","还行的某玩意"],
		["http://www.sublimetext.com/","Sublime Text","算半个神器[$70]"],
		["http://www.editplus.com/","EditPlus","某个比较老牌的玩意[$35]"],
		["http://www.ultraedit.com/","UltraEdit","另一个比较老牌的玩意[$60]"],
		//["","",""],
	]},
}
