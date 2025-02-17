// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications and patents in reversed chronological order. * denotes equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-颜辞",
          title: "颜辞",
          description: "艳阳风骤起， 云静百帆飞。 入世破千浪， 随波出世归。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/poetry/";
          },
        },{id: "post-pre-training-multi-billion-parameter-llms-on-a-single-gpu-with-flora-rbc-borealis",
      
        title: 'Pre-training multi-billion parameter LLMs on a single GPU with Flora - RBC Borealis... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "First, we show how to incorporate Flora into code. Second, we give a high-level overview of how Flora works. Third, we provide benchmark training results. Finally, we compare Flora to the subsequent and closely related GaLore method.",
      section: "Posts",
      handler: () => {
        
          window.open("https://rbcborealis.com/research-blogs/pre-training-multi-billion-parameter-llms-on-a-single-gpu-with-flora/", "_blank");
        
      },
    },{id: "post-causmos-machine-intelligence-beyond-predictive-ml-rbc-borealis",
      
        title: 'Causmos: Machine Intelligence beyond Predictive ML - RBC Borealis <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "With the Causmos program at RBC Borealis, we aim to build machine intelligence beyond predictive ML for financial services by conducting research in areas such as causality, out-of-distribution (OOD) generalization, reasoning and planning in large language models (LLMs) and reinforcement learning.",
      section: "Posts",
      handler: () => {
        
          window.open("https://rbcborealis.com/research-blogs/causmosmachine-intelligence-beyond-predictive-ml/", "_blank");
        
      },
    },{id: "post-just-a-moment",
      
        title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://yanshuaicao.substack.com/p/a-rare-treasure-in-the-age-of-llm", "_blank");
        
      },
    },{id: "news-i-m-promoted-to-senior-director-research-rbc-borealis-tada",
          title: 'I’m promoted to Senior Director, Research @ RBC Borealis. :tada:',
          description: "",
          section: "News",},{id: "news-i-m-awarded-the-distinguished-engineer-title-by-rbc-tada",
          title: 'I’m awarded the Distinguished Engineer title by RBC. :tada:',
          description: "",
          section: "News",},{id: "news-ebbs-an-ensemble-with-bi-level-beam-search-for-zero-shot-machine-translation-with-yuqiao-wen-and-others-is-accepted-by-aaai-2025",
          title: 'EBBS: An Ensemble with Bi-Level Beam Search for Zero-Shot Machine Translation with Yuqiao...',
          description: "",
          section: "News",},{id: "news-presenting-2-conference-papers-and-1-workshop-paper-at-neurips-2024",
          title: 'Presenting 2 conference papers and 1 workshop paper at NeurIPS 2024!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/neurips_2024/";
            },},{id: "poetry-七绝-月夜独酌",
          title: '七绝·月夜独酌',
          description: "异国月夜酒独酌，欲饮举杯心绪多。风送漂洋芳气去，亲情兴许已闻着！",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%9C%88%E5%A4%9C%E7%8B%AC%E9%85%8C/";
            },},{id: "poetry-现代诗-云与河",
          title: '现代诗·云与河',
          description: "",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%BA%91%E4%B8%8E%E6%B2%B3/";
            },},{id: "poetry-天净沙-旧夏",
          title: '天净沙·旧夏',
          description: "仙云幻日柔霞，彩鸢青柳琵琶，碧目红罗粉帕。玉人如画，笑颜风鬓桃花。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%97%A7%E5%A4%8F/";
            },},{id: "poetry-七绝-再别有感",
          title: '七绝·再别有感',
          description: "咫尺相邻缘却误，天涯辗转分何求。嘻哗重现当年影，宿醉心伤乐未留。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%86%8D%E5%88%AB%E6%9C%89%E6%84%9F/";
            },},{id: "poetry-五绝两首-人成婚诗成对",
          title: '五绝两首·人成婚诗成对',
          description: "缘起世外岛，情定白鹅湖，冥冥千里缘，卿卿七载福。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%BA%BA%E6%88%90%E5%A9%9A%E8%AF%97%E6%88%90%E5%AF%B9/";
            },},{id: "poetry-五绝-泡沫",
          title: '五绝·泡沫',
          description: "川帝推一句 虚钱跨万金 码农千百夜 孙总半天银",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%B3%A1%E6%B2%AB/";
            },},{id: "poetry-讨酒",
          title: '讨酒',
          description: "我有一壶酒，足以慰风尘。白浪推青柳，也来讨两斟。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E8%AE%A8%E9%85%92/";
            },},{id: "poetry-七绝-夏悟其一",
          title: '七绝·夏悟其一',
          description: "单桨独舟山水间，浓霄欲卷半边天。薄衫赤脚披烟雨，斜躺徐划又见蓝。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%A4%8F%E6%82%9F%E5%85%B6%E4%B8%80/";
            },},{id: "poetry-夏感",
          title: '夏感',
          description: "一水一燕一残阳，一曲一调一绕梁。一簇篝火一簇人，一杯初夏一抹香。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%A4%8F%E6%84%9F/";
            },},{id: "poetry-渔家傲-曦桐趣",
          title: '渔家傲·曦桐趣',
          description: "盘坐品茗观江雾，惊雷林动灰鹅去。停曲掩窗听霈雨，天水处，万千跳珠雕沙溆。墙外电光龙虎遇，屋中火炉杯盘聚。太白易安东坡赋，滕王序，垂髫语胜咿呀趣。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%B8%94%E5%AE%B6%E5%82%B2%E6%9B%A6%E6%A1%90%E8%B6%A3/";
            },},{id: "poetry-五绝-夏悟其二",
          title: '五绝·夏悟其二',
          description: "艳阳风骤起，云静百帆飞。入世破千浪，随波出世归。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%A4%8F%E6%82%9F%E5%85%B6%E4%BA%8C/";
            },},{id: "poetry-五绝-夏暮",
          title: '五绝·夏暮',
          description: "苍穹青玉皿，倒盖老君丹。水映乾坤色，金镶琥珀磐。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%BA%94%E7%BB%9D%E5%A4%8F%E6%9A%AE/";
            },},{id: "poetry-风花雪月四首",
          title: '风花雪月四首',
          description: "四首和诗，分别写风花雪月，却不提风花雪月，而用典故暗扣。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E9%A3%8E%E8%8A%B1%E9%9B%AA%E6%9C%88/";
            },},{id: "poetry-七绝两首-夏偈",
          title: '七绝两首·夏偈',
          description: "修罗幻境碧休伦，因果南风万物熏，鹰叶水波相变幻，岸空禅定本心寻。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%B8%83%E7%BB%9D%E5%A4%8F%E5%81%88%E4%B8%A4%E9%A6%96/";
            },},{id: "poetry-一剪梅-寂静云湖鸥燕滩",
          title: '一剪梅·寂静云湖鸥燕滩',
          description: "寂静云湖鸥燕滩，轻鸟通灵，鹤立思禅。无边明镜照谁颜，几缕波纱，半透红胭。日落紫光挂月弦，嫦娥仙宫，天舞婵娟。赤头白塔照千帆，借影萤灯，漫步图间。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%B8%80%E5%89%AA%E6%A2%85%E4%BA%91%E6%B9%96/";
            },},{id: "poetry-七绝-读-木兰花-秋月-有感",
          title: '七绝·读「木兰花.秋月」有感',
          description: "月借西风云海去，星携书锦水天来，梦回彩凤画楼醉，酒醒茅庐鬓已灰。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E8%AF%BB%E7%A7%8B%E6%9C%88%E6%9C%89%E6%84%9F/";
            },},{id: "poetry-七绝-读颜夕-悼廖美娣医生-有感",
          title: '七绝·读颜夕「悼廖美娣医生」有感',
          description: "白衣天使降人间，卅二年来访万山。妙手回春千百户，再开雪翼列仙班。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E8%AF%BB%E9%A2%9C%E5%A4%95%E3%80%8A%E6%82%BC%E5%BB%96%E7%BE%8E%E5%A8%A3%E5%8C%BB%E7%94%9F%E3%80%8B%E6%9C%89%E6%84%9F/";
            },},{id: "poetry-五绝-邀蒹葭倚雅诵-云湖一剪梅",
          title: '五绝·邀蒹葭倚雅诵「云湖一剪梅」',
          description: "云湖水映霞，画美欠琵琶。月上嫦娥宴，丝竹待蒹葭。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E9%82%80%E8%92%B9%E8%91%AD%E5%80%9A%E9%9B%85%E8%AF%B5%E3%80%8A%E4%BA%91%E6%B9%96%E4%B8%80%E5%89%AA%E6%A2%85%E3%80%8B/";
            },},{id: "poetry-七律-读张煌言入定关有感",
          title: '七律·读张煌言入定关有感',
          description: "崇祯自缢中原灭，弃笔从戎大散关。盛世金戈开土易，残垣老马复国难。鲜衣热血万千代，白发寒枪一两幡。四入长江惊顺治，功亏一篑染轩辕。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E8%AF%BB%E5%BC%A0%E7%85%8C%E8%A8%80%E5%85%A5%E5%AE%9A%E5%85%B3%E6%9C%89%E6%84%9F/";
            },},{id: "poetry-七律-嵌名-诗音半月谢共鸣",
          title: '七律·嵌名·诗音半月谢共鸣',
          description: "诗音跨海乡音唤，风暖温颜夕暮霞。狂舞天魔书国色，无声仙宴待蒹葭。金陵传诵凤凰去，渌水同鸣日月夸。再到胡疆飞雪至，鹅毛信出橡村家。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%B5%8C%E5%90%8D%C2%B7%E8%AF%97%E9%9F%B3%E5%8D%8A%E6%9C%88%E8%B0%A2%E5%85%B1%E9%B8%A3/";
            },},{id: "poetry-七绝-读小鱼长-秋思",
          title: '七绝·读小鱼长「秋思」',
          description: "秋风秋雨送秋叶，秋曲秋词墨色浓。秋水潇潇秋日冷，鱼儿秋去怎过冬？",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E8%AF%BB%E5%B0%8F%E9%B1%BC%E9%95%BF%E3%80%8A%E7%A7%8B%E6%80%9D%E3%80%8B/";
            },},{id: "poetry-五绝-静夜诵",
          title: '五绝·静夜诵',
          description: "灯音平仄舞，夜静诵词时。册里春秋转，书签叶可知？",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E9%9D%99%E5%A4%9C%E8%AF%B5/";
            },},{id: "poetry-七绝-和颜夕-夜宿山寺",
          title: '七绝·和颜夕「夜宿山寺」',
          description: "照人非月本空山，动念殊方隔宇寰。起落春风诸相去，此心本就在禅关。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%92%8C%E9%A2%9C%E5%A4%95%E3%80%8A%E5%A4%9C%E5%AE%BF%E5%B1%B1%E5%AF%BA%E3%80%8B/";
            },},{id: "poetry-七律-秋游",
          title: '七律·秋游',
          description: "蔽日愁云气力蹉，偷闲友访正游河。迷花新鹿来回撞，逗鸟衰翁上下歌。金苇连天分绿水，白鸥围地对灰鹅。染凡仙弈输赢念，一子功亏雨欲沱。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E7%A7%8B%E6%B8%B8/";
            },},{id: "poetry-七律-海外中秋月",
          title: '七律·海外中秋月',
          description: "海上生明月，胡疆未此时。同堂分满瓿，游子梦香思。家话童颜影，乡音太父词。乾坤轮斗转，归去借星移。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%B5%B7%E5%A4%96%E4%B8%AD%E7%A7%8B%E6%9C%88/";
            },},{id: "poetry-七律-无相秋",
          title: '七律·无相秋',
          description: "浮生半日觅闲秋，小院依青夏韵悠。念向远方三彩色，车来水畔一心求。遥思天阔献红叶，近观云低压暗洲。不惧世艰何起怨，无相节气着相忧。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%97%A0%E7%9B%B8%E7%A7%8B/";
            },},{id: "poetry-悟般若波罗蜜多心经",
          title: '悟般若波罗蜜多心经',
          description: "解五蕴需破蕴执；从空到空空的进阶；终极法门在时字。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%82%9F%E8%88%AC%E8%8B%A5%E6%B3%A2%E7%BD%97%E8%9C%9C%E5%A4%9A%E5%BF%83%E7%BB%8F/";
            },},{id: "poetry-七绝-和冯唐",
          title: '七绝·和冯唐',
          description: "儒扫屋亭入世为，道言生化落泥归。释曰秋叶本无相，成事今朝三教谁？",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%90%88%E5%86%AF%E5%94%90/";
            },},{id: "poetry-七律-传承",
          title: '七律·传承',
          description: "垂髫濡染定轩昂，束发离乡自不茫。弱冠驰风平漠北，古稀抬柩扫新疆。泰山封祭盛衰乱，颜子无争大道扬。太父来年教襁褓，再传立世夜明光。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%B8%83%E5%BE%8B%E4%BC%A0%E6%89%BF/";
            },},{id: "poetry-七律-同舟子妻",
          title: '七律·同舟子妻',
          description: "初识花信岁，颜色总相宜。鹊岛蓝屋影，鹅堤红豆期。长安着凤冠，罗马赏灯霓。比翼游春夏，同舟济子妻。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%90%8C%E8%88%9F%E5%AD%90%E5%A6%BB/";
            },},{id: "poetry-如梦令-如醉无眠",
          title: '如梦令·如醉无眠',
          description: "襁褓无眠聒噪，似醉爹娘觉少。窗月幻诗仙，对影举杯哭闹。尖叫，尖叫。如梦如醒痴笑。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%A6%82%E6%A2%A6%E4%BB%A4%C2%B7%E5%A6%82%E9%86%89%E6%97%A0%E7%9C%A0/";
            },},{id: "poetry-醉花阴-烟雨无声枝冷乱",
          title: '醉花阴·烟雨无声枝冷乱',
          description: "烟雨无声枝冷乱，雁字三声远。淡酒化浓霄，寒夜汤池，雾暖轻洇面。半盅半阙声声慢，琥珀嵇康散。白雪落逍遥，菩萨袈裟，闭目乾坤现。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E9%86%89%E8%8A%B1%E9%98%B4%C2%B7%E7%83%9F%E9%9B%A8%E6%97%A0%E5%A3%B0%E6%9E%9D%E5%86%B7%E4%B9%B1/";
            },},{id: "poetry-蝶恋花-记三月雷打雪",
          title: '蝶恋花·记三月雷打雪',
          description: "胡雪压春银柳树，屠尽新芽，枝泪凝珠露。雷震天崩三月暮，春风不过冬风处。炉火伶仃长夜苦，徒盼东君，难去朝来雾。自古愁肠千阙赋，迷津今日同谁诉。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E8%9D%B6%E6%81%8B%E8%8A%B1%C2%B7%E8%AE%B0%E4%B8%89%E6%9C%88%E9%9B%B7%E6%89%93%E9%9B%AA/";
            },},{id: "poetry-五绝-再聚欢",
          title: '五绝·再聚欢',
          description: "道远青松硕，天银漫岭苍。泸州儿女酿，共尽卅年光。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%86%8D%E8%81%9A%E6%AC%A2/";
            },},{id: "poetry-七绝-陈家玉兰花开",
          title: '七绝·陈家玉兰花开',
          description: "无常冷暖满园春，桐槿双娇羡路人。何事引来天外鹤，玉兰绽放再添陈？",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E9%99%88%E5%AE%B6%E7%8E%89%E5%85%B0%E8%8A%B1%E5%BC%80/";
            },},{id: "poetry-七绝-梅雨家宴",
          title: '七绝·梅雨家宴',
          description: "梅雨清芳香雾来，千年汾酒杏花开。红炉新蟹小家宴，橡子咿呀橡父猜。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%A2%85%E9%9B%A8%E5%AE%B6%E5%AE%B4/";
            },},{id: "poetry-七律-逍遥渡",
          title: '七律·逍遥渡',
          description: "蓬瀛渡口醉逍翁，如梦浮生聚散匆。波送孤舟离海北，风迎群雁入江东。长音寒水锁青雾，金雨鎏光破紫穹。日暮前程明万里，船头把酒谢天宫。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E9%80%8D%E9%81%A5%E6%B8%A1/";
            },},{id: "poetry-七绝-夏歌",
          title: '七绝·夏歌',
          description: "夏日熏人扎啤少，南风抚面野花多。白云绿草牛羊懒，碧水青天儿女歌。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E5%A4%8F%E6%AD%8C/";
            },},{id: "poetry-渔家傲-人间八月云湖畔",
          title: '渔家傲·人间八月云湖畔',
          description: "人间八月云湖畔，一风一景藕花浅。夏日穿云清水软，青苔藓，色渐沉沉天渐暗。雾满苍天云满岸，雨中白幕风中雁。剔透连珠亭台叹，天宫怨，人间八月何其短。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%B8%94%E5%AE%B6%E5%82%B2%C2%B7%E4%BA%BA%E9%97%B4%E5%85%AB%E6%9C%88%E4%BA%91%E6%B9%96%E7%95%94/";
            },},{id: "poetry-渔家傲-坎昆",
          title: '渔家傲·坎昆',
          description: "天接云涛连晓雾，星河欲转千帆舞。万里海风鹏翼羽，扶摇处，黛青碧玉银砂镀。玉软沙绵谁踱步？长滩足迹留诗赋。左点右勾龙蛇谱，父子趣，白沙霜鬓天伦路。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%B8%94%E5%AE%B6%E5%82%B2%C2%B7%E5%9D%8E%E6%98%86/";
            },},{id: "poetry-七律-过曲江池",
          title: '七律·过曲江池',
          description: "诗仙唐宴曲江流，曲尽人空诗韵犹。花树星灯思旧阙，云裳月女唱新愁。芙蓉落雁化僧塔，锦绣沉鱼催酒楼。万里长安才夜色，匆匆前路却难留。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%B8%83%E5%BE%8B%C2%B7%E8%BF%87%E6%9B%B2%E6%B1%9F%E6%B1%A0/";
            },},{id: "poetry-读两宋诗词简史有感",
          title: '读两宋诗词简史有感',
          description: "篇终曲尽日落孤影，欲见古人来者唯长梦。悠悠泪洒河星，知音无觅。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E8%AF%BB%E4%B8%A4%E5%AE%8B%E8%AF%97%E8%AF%8D%E7%AE%80%E5%8F%B2%E6%9C%89%E6%84%9F/";
            },},{id: "poetry-五绝-无题",
          title: '五绝·无题',
          description: "烟峦云岭翠，雨链小池潺。老友清平乐，新茶几盏泉。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%BA%94%E5%BE%8B%C2%B7%E6%97%A0%E9%A2%98/";
            },},{id: "poetry-七律-典故维也纳",
          title: '七律·典故维也纳',
          description: "劳心北地劬勤久，漫步欧城慵懒迟。砂径美泉公主唤，通天宝塔众人痴。金厅日暮月光曲，蓝水黎明流浪诗。故事梦都无尽处，新朋醉宴有期时。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%B8%83%E5%BE%8B%C2%B7%E5%85%B8%E6%95%85%E7%BB%B4%E4%B9%9F%E7%BA%B3/";
            },},{id: "poetry-七绝-秋梦",
          title: '七绝·秋梦',
          description: "秋日携风画彩林，流光明暗抹红深。山间小憩入清梦，海树鲲鱼天籁音。",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E4%B8%83%E7%BB%9D%C2%B7%E7%A7%8B%E6%A2%A6/";
            },},{id: "poetry-乐府-澽湄续墨",
          title: '乐府·澽湄续墨',
          description: "千年澽水 赠吾宫商 不事藻绘 惟真自彰 诗循古道 赋涉沧浪 墨融春涧 履印秋霜 文承汉魏 阕续新章 俊采星驰 知音共芳 幸甚至哉 歌以咏志",
          section: "Poetry",handler: () => {
              window.location.href = "/poetry/%E6%BE%BD%E6%B9%84%E7%BB%AD%E5%A2%A8/";
            },},{id: "projects-adversarial-learning-and-robustness",
          title: 'Adversarial Learning and Robustness',
          description: "Research on adversarial robustness and adversarial learning approaches",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adversarial_research/";
            },},{id: "projects-efficient-llm-training-amp-inference",
          title: 'Efficient LLM Training &amp;amp; Inference',
          description: "Research on making large language models more efficient to train and deploy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/efficient_llm/";
            },},{id: "projects-gaussian-process-research",
          title: 'Gaussian Process Research',
          description: "A series of works on scaling and improving Gaussian Process models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gaussian_processes/";
            },},{id: "projects-deep-generative-models",
          title: 'Deep Generative Models',
          description: "Research on improving and evaluating generative models, with focus on VAEs, GANs, and autoregressive models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/generative_models/";
            },},{id: "projects-llm-capabilities-amp-applications",
          title: 'LLM Capabilities &amp;amp; Applications',
          description: "Research on understanding and extending the capabilities of large language models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm_capabilities/";
            },},{id: "projects-semantic-parsing-amp-code-generation",
          title: 'Semantic Parsing &amp;amp; Code Generation',
          description: "Research on improving semantic parsing and code generation through neural approaches",
          section: "Projects",handler: () => {
              window.location.href = "/projects/semantic_parsing/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%61%6F%79@%63%73.%74%6F%72%6F%6E%74%6F.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yanshuai-cao", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RTVRTSsAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
