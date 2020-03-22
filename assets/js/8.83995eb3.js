(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{220:function(e,r,t){e.exports=t.p+"assets/img/the-phoenix-project.bfa2c245.png"},221:function(e,r,t){e.exports=t.p+"assets/img/self-reproducing-automata.6ce2ddf6.png"},276:function(e,r,t){"use strict";t.r(r);var o=t(10),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"√-什么是-the-fenix-project-？"}},[e._v("√ 什么是“The Fenix Project”？")]),e._v(" "),o("p",[e._v("“Phoenix”这个词东方人不常用，但在西方的软件工程读物——尤其是关于Agile、DevOps话题的作品中时常出现。软件工程小说《"),o("a",{attrs:{href:"https://book.douban.com/subject/20644908/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Phoenix Project"),o("OutboundLink")],1),e._v("》讲述了徘徊在死亡边缘的Phoenix项目在精益方法下浴火重生的故事；马丁·福勒（Martin Fowler）对《"),o("a",{attrs:{href:"https://book.douban.com/subject/4327796/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Continuous Delivery"),o("OutboundLink")],1),e._v("》的诠释里，曾多次提到“"),o("a",{attrs:{href:"https://martinfowler.com/bliki/PhoenixServer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Phoenix Server"),o("OutboundLink")],1),e._v("”（取其能够“涅槃重生”之意）与“"),o("a",{attrs:{href:"https://martinfowler.com/bliki/SnowflakeServer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Snowflake Server"),o("OutboundLink")],1),e._v("”（取其“世界上没有相同的两片雪花”之意）的优劣比对。也许是东西方的文化的差异，尽管有“失败是成功之母”这样的谚语，但我们东方人的骨子里更注重的还是一次把事做对做好，尽量别出乱子；而西方人则要“更看得开”一些，把出错看做正常甚至是必须的发展过程，只要出了问题能够兜底使其重回正轨便好。")]),e._v(" "),o("center",[o("img",{attrs:{src:t(220)}}),e._v("\n图1 The Phoenix Project\n")]),e._v(" "),o("p",[e._v("只要时间足够长，人就总会疏忽犯错，代码就总会携有缺陷，电脑就总会宕机崩溃，网络就总会堵塞中断……如果一项工程需要大量的人员，共同去研发某个大规模的软件产品，并使其分布在网络中大量的服务器节点中同时运行，随着项目规模的增大、运作时间变长，其必然会受到_墨菲定律_的无情打击。")]),e._v(" "),o("blockquote",[o("p",[e._v("Murphy's Law：Anything that can go wrong will go wrong")])]),e._v(" "),o("p",[e._v("为了得到高质量的软件产品，我们是应该把精力更多地集中在提升其中每一个人员、过程、产出物的能力和质量上，还是该把更多精力放在整体流程和架构上？")]),e._v(" "),o("p",[e._v("首先，笔者给这个问题一个“合稀泥”式的回答：这两者都重要。前者重术，后者重道；前者更多与编码能力相关，后者更多与软件架构相关；前者主要由开发者个体水平决定，后者主要由技术决策者水平决定；")]),e._v(" "),o("p",[e._v("然后，笔者也必须强调另外一点：这两者的理解路径和抽象程度是不一样的。如何学习一项具体的语言、框架，工具，譬如Java、Spring、Vue.js……都是相对具象的，不论其蕴含的内容多少，复杂程度高低，它是至少能看得见摸得着。而如何学习某一种风格的架构方法，譬如单体、微服务、服务网格、无服务、云原生……则是相对抽象的，谈论它们可能要面临则“一百个人眼中有一百个哈姆雷特”的困境。谈这方面的话题，若要言之有物，就不能是单纯的经验陈述。笔者想来，回到这些架构根本的出发点和问题上，真正去使用这些不同风格的架构方法来实现某些需求，解决某些问题，然后在实践中观察它们的异同优劣，会是一种很好的，也许是最好的讲述方式。笔者想说一下这些架构，而且还想说得透彻明白，这需要代码与文字的配合，不适合直接以传统书籍的形式撰写，于是，便有了这个项目。")]),e._v(" "),o("h2",{attrs:{id:"可靠的系统"}},[e._v("可靠的系统")]),e._v(" "),o("p",[e._v("让我们再来思考一个问题，构建一个大规模但依然可靠的软件系统，是否是可行的？")]),e._v(" "),o("p",[e._v("这个问题令人听起来的第一感觉也许会有点荒谬：废话。如果这个事情从理论上来说就是根本不可能的话，那我们这些软件开发从业人员现在还在瞎忙活个啥？但你再仔细想想，前面才提到的“墨菲定律”和在“大规模”这个前提下一定会遇到的各种不靠谱的人员、代码、硬件、网络等因素，从中能得出的一个听起来颇为符合逻辑直觉的推论：如果这某件事情要经过一个个“不靠谱”的过程，其误差应会不断地叠加，导致结果必然不可能收敛稳定才对。")]),e._v(" "),o("p",[e._v("另外，这个问题也并非杞人忧天庸人自扰式的瞎操心，计算机之父冯·诺依曼（John von Neumann）在1940年代末期，曾经花费了大约两年时间，研究这个问题并且得出了一门理论《自复制自动机》（Theory of Self-Reproducing Automata），这个理论以机器应该如何从基本的部件中构造出与自身相同的另一台机器引出，其目的并不是想单纯地模拟或者理解生物体的自我复制，也并不是简单想制造自我复制的计算机，他的最终目的就是想回答一个理论问题：如何用一些不可靠的部件来构造出一个可靠的系统。")]),e._v(" "),o("center",[o("img",{attrs:{src:t(221)}}),e._v("\n图2 当时自复制机的艺术表示\n")]),e._v(" "),o("p",[e._v("自复制机恰好就是一个最好的用不可靠部件构造的可靠的系统例子。这里，“不可靠部件”可以理解为构成生命的大量细胞、甚至是分子。由于热力学扰动、生物复制差错等因素干扰，这些分子本身并不可靠。但是生命系统之所以可靠的本质，恰是因为它可以使用不可靠的部件来完成遗传迭代。这其中的关键点便是承认细胞等这些零部件可能会出错，某个具体的零部件可能会崩溃消亡，但在存续生命的微生态系统中一定会有其后代的出现，重新代替该零部件的作用，以维持系统的整体稳定。在这个微生态里，每一个部件都可以看作一只不死鸟（Phoenix），它会老迈，而之后又能涅槃重生。")]),e._v(" "),o("h2",{attrs:{id:"架构的演进"}},[e._v("架构的演进")]),e._v(" "),o("p",[e._v("软件架构风格从大型机（Mainframe），到多层单体架构（Monolithic），到微服务（Micro Services），到服务网格（Service Mesh），到无服务（Serverless）……技术架构上确实有着从大到小的发展趋势。当近年来微服务兴起以后，涌现出各类文章去总结、赞美微服务带来的种种好处，诸如简化部署、逻辑拆分更清晰、便于技术异构、易于伸缩拓展应对更高的性能等等，这些当然都是重要优点和动力。可是，如果不拘泥与特定系统的某个特定问题，以更宏观的角度来看，前面这种种好处却都像是锦上添花、属于让系统“活的更好”的动因，肯定比不上系统如何“确保生存”的需求来得基础、本质。笔者看来，架构演变最重要的驱动力，或者这种“从大到小”的最根本的驱动力，始终都是为了方便某个服务能够顺利地“死去”而设计的，个体服务的生死更迭，是关系到整个系统可靠续存的关键本质。")]),e._v(" "),o("p",[e._v("举个例子，譬如某企业中应用的单体架构的Java系统，其更新、升级都必须要有固定的停机计划，在特定的时间窗口内才能按时开始，必须按时结束。如果出现了非计划的宕机，那便是生产事故。但是软件Bug并不会遵循领导定下的停机计划来“安排时间出错”，为了应对缺陷与变化，曾经搞出了OSGi和JVMTI Instrumentation等这样复杂的HotSwap方案，以实现给奔跑中的汽车更换轮胎这种匪夷所思却又无可奈何的需求；而在微服务架构的视角下，这不过只是一次在线服务更新而已，先停掉1/3的机器，升级新的软件版本，再导流测试，有条不紊地做金丝雀发布，实在是再正常不过的事情；而在无服务架构的视角下，我们甚至都不可能去关心服务所运行的基础设施，连机器是哪台都不必知道，停机升级什么的就根本无从谈起了。")]),e._v(" "),o("p",[e._v("流水不腐，有腐朽，有消亡，有重生，有更迭才是正常生态的运作合理规律。请设想一下，如果你的系统中每个部件都符合“Phoenix”的特性，哪怕其中某些部件采用了由极不靠谱的人员所开发的极不靠谱程序代码，例如，存有严重的内存泄漏问题，最多只能服务3分钟就一定会崩溃。而即便这样，得益于整体架构上有恰当的、自动的阻断错误、重建服务的机制，在系统外部看来，整体上仍然可以是能够表现为稳定和健壮的。")]),e._v(" "),o("h2",{attrs:{id:"the-fenix-project"}},[e._v("The Fenix Project")]),e._v(" "),o("p",[e._v("在企业软件开发的历史中，一项新技术发布时，常有伴以该技术开发的”宠物店（PetStore）”作为演示的传统（如"),o("a",{attrs:{href:"https://www.oracle.com/technetwork/java/petstore1-3-1-02-139690.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("J2EE PetStore"),o("OutboundLink")],1),e._v("、"),o("a",{attrs:{href:"https://archive.codeplex.com/?p=petshopmvc",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET PetShop"),o("OutboundLink")],1),e._v("、"),o("a",{attrs:{href:"https://github.com/spring-projects/spring-petclinic",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring PetClinic"),o("OutboundLink")],1),e._v("等等）。作为不同架构风格的演示时，笔者本也希望能遵循此传统，但无奈从来没养过宠物，遂改行开了书店（BookStore），里面出售了几本笔者撰写过的书籍，算是夹带一点私货，同时也避免了使用素材时可能的版权问题。")]),e._v(" "),o("p",[e._v("尽管相信没有人会误解，但笔者最后还多强调一句，Oracle（Sun）、Microsoft、Pivotal等公司设计宠物店的目的绝不是为了日后能在网上贩卖小猫小狗，只是纯粹的演示技术。所以也请勿以“实现这种学生毕业设计复杂度的需求，引入如此规模的架构或框架，纯属大炮打苍蝇，肯定是过度设计”的眼光来看待接下来的“BookStore”项目。相反，如果可能的话，笔者会在有新的技术、框架发布出来时，持续更新，以恰当的形式添加到项目的不同版本中，可能使其技术栈越来越复杂。笔者希望把这些新的、不断发展的知识，融合进已有的知识框架之中，让自己学习、理解、思考，然后将这些技术连同自己的观点看法，传播给感兴趣的人。")]),e._v(" "),o("p",[e._v("最后，也算缘分，网名“IcyFenix”在我高中时代就开始使用，最初它是来源于暴雪RTS游戏《星际争霸》的Protoss英雄"),o("a",{attrs:{href:"https://starcraft.fandom.com/wiki/Fenix",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fenix"),o("OutboundLink")],1),e._v("——如名字所预示的那样，他曾经是Zealot，牺牲后以Dragoon的形式重生，带领Protoss与刀锋女王Kerrigan继续抗争。尽管高中时期我已经笃定自己未来肯定会从事IT相关的工作，但显然不可能预计到未来我会写下这些文字。")]),e._v(" "),o("p",[e._v("所以，既然我们要开始一个关于“Phoenix”的代码与故事，那便叫它“The Fenix Project”，如何？")])],1)}),[],!1,null,null,null);r.default=n.exports}}]);