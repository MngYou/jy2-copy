/*
 * @Author: MngYou
 * @Date: 2022-01-19 10:32:23
 * @LastEditTime: 2022-02-22 18:49:15
 * @FilePath: \wx\script\story\story_剧情_襄阳.js
 */


story_['剧情_襄阳'] = [
    {
        '剧情类型':'城市',//判断是不是城市 不可继续执行 不然就继续向下对话
        '背景图片':0x56060017,
        '主角头像':0x56020001,
        '引导按钮':[
            {
                '名称':'绿竹巷',
                '图标':0x56010061,
                '跳转剧情':{
                    '剧情名称':'剧情_襄阳绿竹巷',
                    '场景索引':0
                }
            },
            {
                '名称':'衙门',
                '图标':0x56010062,
                '跳转剧情':{
                    '剧情名称':'剧情_襄阳衙门',
                    '场景索引':-1
                }
            },
            {
                '名称':'妓院',
                '图标':0x56010064,
                '跳转剧情':{
                    '剧情名称':'剧情_襄阳妓院',
                    '场景索引':0
                }
            },
            {
                '名称':'离开',
                '图标':0,
                '跳转剧情':{
                    '剧情名称':'剧情_主地图',
                    '场景索引':0
                }
            },
        ],

    }
];


story_['剧情_襄阳绿竹巷'] = [
    {
        '编号':0,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005b,
        '对话框姓名':'绿竹翁',
        '对话框对白':'主人喜欢清静，请俗人勿扰。',
    },
    {
        '编号':1,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳',
            '场景索引':0
        }
    },
];
story_['剧情_襄阳衙门'] = [
    {
        '编号':0,
        '背景图片':0x5606002f,
        '立绘名称':[,,'士兵',,],
        '立绘图片':[,,0x5602005e,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005e,
        '对话框姓名':'士兵',
        '对话框对白':'最近有人报案，家里失窃了一本祖传剑谱和二万两银子。官府正四处通缉要犯，希望罪犯能投案自首争取政府宽大处理。',
    },
    {
        '编号':1,
        '背景图片':0x5606002f,
        '立绘名称':[,,'士兵',,],
        '立绘图片':[,,0x5602005e,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005e,
        '对话框姓名':'士兵',
        '对话框对白':'闲杂人等不许在此逗留，否则当成疑犯一并捉了去！',
    },
    {
        '编号':2,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳',
            '场景索引':0
        }
    },
    {
        '编号':3,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'前些天把你放走了，现在又来做什么？',
    },
    {
        '编号':4,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'',
        '对话框选项':[
            '1.对不起我走错了，马上离开。.',
            '2.我受够了你们的虐待，今天来为民除害！.'
        ],
        '对话框跳转':[
            {'剧情名称':'剧情_襄阳','场景索引':0},{'剧情名称':'剧情_襄阳衙门','场景索引':5},
        ],
    },
    {
        '编号':5,
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,'',,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转战斗' : true,
        '胜利时跳转' : {'剧情名称':'剧情_襄阳衙门','场景索引':6},
        '失败时跳转' : {'剧情名称':'剧情_主角死亡','场景索引':0},
        '跳转战斗名称' : '战斗_襄阳_官兵',
        '移除声音':true,
        '播放音效':0x49000010,//进入战斗的转场音效
        '获得物品': [
            {
                '名称':'杀孽',
                '类型':'属性',
                '数量':-1,
            },
        ],
    },
    {
        '编号':6,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'跟捅了马蜂窝一样，打了一个又来一个。',
    },
    {
        '编号':7,
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,'',,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转战斗' : true,
        '胜利时跳转' : {'剧情名称':'剧情_襄阳衙门','场景索引':8},
        '失败时跳转' : {'剧情名称':'剧情_主角死亡','场景索引':0},
        '跳转战斗名称' : '战斗_襄阳_官兵',
        '移除声音':true,
        '播放音效':0x49000010,//进入战斗的转场音效
        '获得物品': [
            {
                '名称':'杀孽',
                '类型':'属性',
                '数量':-1,
            },
        ],
    },
    {
        '编号':8,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'跟捅了马蜂窝一样，打了一个又来一个。',
    },
    {
        '编号':9,
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,'',,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转战斗' : true,
        '胜利时跳转' : {'剧情名称':'剧情_襄阳衙门','场景索引':10},
        '失败时跳转' : {'剧情名称':'剧情_主角死亡','场景索引':0},
        '跳转战斗名称' : '战斗_襄阳_官兵',
        '移除声音':true,
        '播放音效':0x49000010,//进入战斗的转场音效
        '获得物品': [
            {
                '名称':'杀孽',
                '类型':'属性',
                '数量':-1,
            },
        ],
    },
    {
        '编号':10,
        '背景图片':0x5606002f,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'你们这群脓包官兵留着也是废物！今天正好替天行道。',
        '获得物品': [
            {
                '名称':'银两',
                '类型':'属性',
                '数量':2000,
            },
        ],
    },
    {
        '编号':11,
        '背景图片':0x5606002f,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'这狗官搜刮了这么多民脂民膏，的确罪该万死！',
        '获得物品': [
            {
                '名称':'杀孽',
                '类型':'属性',
                '数量':-1,
            },
            {
                '名称':'侠义',
                '类型':'属性',
                '数量':10,
            },
            {
                '名称':'声望',
                '类型':'属性',
                '数量':80,
            },
        ],
    },
    {
        '编号':12,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳',
            '场景索引':0
        }
    },
    {
        '编号':13,
        '背景图片':0x5606002f,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'衙门已经被我挑了，不知道朝廷什么时候能派个得力的地方官过来',
    },
    {
        '编号':14,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳',
            '场景索引':0
        }
    },
];



story_['剧情_襄阳蒙冤'] = [
    {
        '编号':0,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'好小子！等到今日你才自投罗网，你真是让官爷们等的好苦！',
    },
    {
        '编号':1,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'喂，等等。我怎么听不懂你在说什么。',
    },
    {
        '编号':2,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'小子还想狡辩？你身上那本书册就是近日城内丢失的珍贵剑谱，人赃并获，你还能抵赖不成？',
    },
    {
        '编号':3,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'你该不会是在说这本乐谱吧。这是一首《笑傲江湖》曲子的曲谱，你难道不认识字吗？',
    },
    {
        '编号':4,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'你奶奶的，不但企图晃点我，还敢讥讽我不识字。来人啊，把他给我拿下！',
    },
    {
        '编号':5,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'你们这些狗官真是蛮不讲理，打就打，谁怕谁啊！',
    },
    {
        '编号':6,
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
    },
    {
        '编号':7,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'啊！！！！ 你们这些王八蛋竟然用生石灰暗算我！',
    },
    {
        '编号':8,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'对付你这种下三滥的人渣，自然要用下三滥的手段！ 把罪犯押进牢房，等日后审理！',
    },
    {
        '编号':9,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'总有一天我会把你们这群狗屎官兵全部斩尽杀绝！',
    },
    {
        '编号':10,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'嘿嘿，等你能活得离开这里再说吧。',
        '属性设置':[
            {
                '名称':'银两',
                '数值':0
            },
        ]
    },
    {
        '编号':11,
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
    },
    {
        '编号':12,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'狗官竟然把我关到牢房里了！我怎么这么倒霉，刚出江湖就被这帮孙子给陷害了。现在《笑傲江湖》的乐谱也被夺了去，真是有负老前辈所托。',
    },
    {
        '编号':13,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005c,
        '对话框姓名':'丁典',
        '对话框对白':'嘿嘿，官府那帮狗贼为了探听我的秘密，又送进一个当卧底。奶奶的，当我是傻子吗？',
    },
    {
        '编号':14,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005a,
        '对话框姓名':'狄云',
        '对话框对白':'丁大哥，你可要冷静。说不定这位小兄弟是跟我一样，也是遭人陷害被冤枉的。',
    },
    {
        '编号':15,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005c,
        '对话框姓名':'丁典',
        '对话框对白':'狄兄弟，你心肠太好，以后行走江湖千万不要被小人的诡计给蒙骗了。坏人从不会说自己是坏人，也不会告诉你有诡计打算陷害你。你可千万要记得了。',
    },
    {
        '编号':16,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'你这个疯子！懒得理你。',
    },
    {
        '编号':17,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005c,
        '对话框姓名':'丁典',
        '对话框对白':'小子还敢骂我，我来教训教训你。',
    },
    {
        '编号':18,
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,'',,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转战斗' : true,
        '胜利时跳转' : {'剧情名称':'剧情_襄阳蒙冤','场景索引':19},
        '失败时跳转' : {'剧情名称':'剧情_主角死亡','场景索引':0},
        '跳转战斗名称' : '战斗_襄阳_丁典',
        '移除声音':true,
        '播放音效':0x49000010,//进入战斗的转场音效
    },
    {
        '编号':19,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005c,
        '对话框姓名':'丁典',
        '对话框对白':'小子好功夫。咱们也算是不打不相识，我相信你不是官府派来的卧底。告诉你，我已经不能在这里长待了，我被熟人认了出来，所以今晚就要越狱，你跟不跟我们走？',
    },
    {
        '编号':20,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'',
        '对话框选项':[
            '1.不跟你走，我要等候公正的判决。.',
            '2.好，我跟你一起越狱。.'
        ],
        '对话框跳转':[
            {'剧情名称':'剧情_襄阳蒙冤','场景索引':21},{'剧情名称':'剧情_襄阳蒙冤','场景索引':46},
        ],
    },
    {
        '编号':21,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005c,
        '对话框姓名':'丁典',
        '对话框对白':'想不到还有这么迂腐的人。既然如此，咱们后会有期。',
    },
    {
        '编号':22,
        '背景图片':0x5606002e,
        '立绘名称':[,,'丁典','狄云',],
        '立绘图片':[,,0x5602005c,0x5602005a,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005a,
        '对话框姓名':'狄云',
        '对话框对白':'小兄弟，你既然不肯跟我们走，这件乌蚕衣送给你做防身之用，希望你多多保重吧。',
        '获得物品': [
            {
                '名称':'乌蚕衣',
                '类型':'装备',
                '数量':1,
            },
        ],
    },
    {
        '编号':23,
        '背景图片':0x5606002e,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'哇，眼前一黑两人就没了。原来越狱这么简单阿。',
    },
    {
        '编号':24,
        '背景图片':0x5606002e,
        '立绘名称':[,,'士兵',,],
        '立绘图片':[,,0x5602005e,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005e,
        '对话框姓名':'士兵',
        '对话框对白':'小子！大人现在要审你的案子，你最好老老实实坦白，免受皮肉之苦。',
    },
    {
        '编号':25,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'你承不承认偷了别人的祖传剑谱和二万两银子？',
    },
    {
        '编号':26,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'',
        '对话框选项':[
            '1.我承认。.',
            '2.我不承认。.'
        ],
        '对话框跳转':[
            {'剧情名称':'剧情_襄阳蒙冤','场景索引':27},{'剧情名称':'剧情_襄阳蒙冤','场景索引':30},
        ],
    },
    {
        '编号':27,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'好！犯人已经认罪服法，立刻开刀问斩！',
    },
    {
        '编号':28,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'啊！！！！！！！！！！！ 我冤枉！！！！！！！！！！！！！！！！！',
    },
    {
        '编号':29,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_主角死亡',
            '场景索引':0
        }
    },
    {
        '编号':30,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'我跟你说过多少次了，这只是一本乐谱。你自己没见识不见得别人也跟你一样。你去找一个懂音乐的，让他来鉴别一下，看看这究竟是乐谱还是剑谱。',
    },
    {
        '编号':31,
        '背景图片':0x5606002f,
        '立绘名称':[,,'吕文德',,],
        '立绘图片':[,,0x5602005d,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'好，我让你死也瞑目。城东绿竹巷有个老头擅长吹箫，便让他当面揭穿你的谎话！',
    },
    {
        '编号':32,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'巡抚使吕文德亲自来到这里，怎么此间主人不出来迎接？',
    },
    {
        '编号':33,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005b,
        '对话框姓名':'绿竹翁',
        '对话框对白':'我家主人一贯不喜和官府的人打交道，请各位不要扰了此处的清静。',
    },
    {
        '编号':34,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'老前辈，晚辈身受不白之冤，所带曲谱被人认作偷窃而来的剑谱，因此想请前辈鉴别一下，以还晚辈清白。',
    },
    {
        '编号':35,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005b,
        '对话框姓名':'绿竹翁',
        '对话框对白':'我先看看那乐谱再说。',
    },
    {
        '编号':36,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005b,
        '对话框姓名':'绿竹翁',
        '对话框对白':'嗯……嗯……咦？这可奇了。我再来看一下。',
    },
    {
        '编号':37,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'哼，如何？连这个老头都觉得奇怪，你必定不是乐谱，你还想狡辩吗？',
    },
    {
        '编号':38,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005b,
        '对话框姓名':'绿竹翁',
        '对话框对白':'你，住口！这位小兄弟，你且少等片刻，我去请教我家主人。',
        '移除声音':true,
        '播放音效':0x49000024,
        '不可跳转':true,
        '延时跳转':{
            '延时时间':100000,//100000
            '跳转剧情':{
                '剧情名称':'剧情_襄阳蒙冤',
                '场景索引':39
            }
        }
    },
    {
        '编号':39,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'对！就是这首曲子。和我当初听到的一模一样，只可惜作曲的两位前辈已经逝去了。',
    },
    {
        '编号':40,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005b,
        '对话框姓名':'绿竹翁',
        '对话框对白':'各位都听到了。这确是琴谱箫谱，我家主人适才奏过了，小兄弟你拿回去罢！这曲谱中所记乐曲之妙，世上罕有，此乃神物，不可落入俗人手中。',
    },
    {
        '编号':41,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005d,
        '对话框姓名':'吕文德',
        '对话框对白':'哼，今日便放过你小子。你要是再有案子落在我手里，咱们新帐后帐一起算！',
    },
    {
        '编号':42,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005b,
        '对话框姓名':'绿竹翁',
        '对话框对白':'小兄弟你也赶紧离去吧，我家主人不喜欢陌生人打扰。',
    },
    {
        '编号':43,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'',
        '对话框选项':[
            '1.将乐谱献给前辈。.',
            '2.多谢前辈相救，晚辈告辞了。.'
        ],
        '对话框跳转':[
            {'剧情名称':'剧情_襄阳蒙冤','场景索引':44},{'剧情名称':'剧情_襄阳','场景索引':0},
        ],
    },
    {
        '编号':44,
        '背景图片':0x56060030,
        '立绘名称':[,,'绿竹翁',,],
        '立绘图片':[,,0x5602005b,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005b,
        '对话框姓名':'绿竹翁',
        '对话框对白':'多谢小兄弟，我家主人也确实喜欢这首乐谱，谢谢你成全。这黑木令是主人命我赠给你的，就当作纪念吧。',
        '获得物品': [
            {
                '名称':'黑木令',
                '类型':'事件',
                '数量':1,
            },
        ],
    },
    {
        '编号':45,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳绿竹巷',
            '场景索引':0
        }
    },
    {
        '编号':46,
        '背景图片':0x56060017,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'没想到越狱这么简单。',
    },
    {
        '编号':47,
        '背景图片':0x56060017,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602005c,
        '对话框姓名':'丁典',
        '对话框对白':'是这里做官的太过脓包，整日就知道欺压良民，总有一日会遭报应的。不过，小兄弟你今日随我们逃狱，现在已经成了官府上通缉的江洋大盗。日后可要处处小心了。今日就此别过，它日有缘再见。',
        '属性设置':[
            {
                '名称':'侠义',
                '数值':0
            },
        ],
        '获得物品': [
            {
                '名称':'声望',
                '类型':'属性',
                '数量':50,
            },
            {
                '名称':'江洋大盗',
                '类型':'称号',
                '数量':1,
            },
        ],
    },
    {
        '编号':48,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳',
            '场景索引':0
        }
    },
];


story_['剧情_襄阳妓院'] = [
    {
        '剧情类型':'场景',
        '背景图片':0x56060018,
        '交互人物':[
            {
                '头像':0x5602002b,
                '跳转剧情':{
                    '剧情名称':'剧情_襄阳妓院老鸨',
                    '场景索引':0
                }
            },
            {
                '头像':0x56020008,
                '跳转剧情':{
                    '剧情名称':'剧情_襄阳妓院小宝货郎',
                    '场景索引':-1
                }
            },
            {
                '头像':0x5602002a,
                '跳转剧情':{
                    '剧情名称':'剧情_襄阳妓院玉机子',
                    '场景索引':-1
                }
            },
            ],
        '引导按钮':[
            {
                '名称':'离开',
                '图标':0,
                '跳转剧情':{
                    '剧情名称':'剧情_襄阳',
                    '场景索引':0
                }
            },
        ],

    }
];
story_['剧情_襄阳妓院老鸨'] = [
    {
        '编号':0,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602002b,
        '对话框姓名':'老鸨',
        '对话框对白':'想不到小哥哥一身正气，也来这里寻欢作乐。不管怎么说，来这里的都是我们的衣食父母。请问小哥哥你喜欢本地的姑娘还是外地的？',
    },
    {
        '编号':1,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'',
        '对话框选项':[
            '1.我喜欢本地的！',
            '2.我喜欢外地的！',
            '3.不好意思，我对女人没兴趣。'
        ],
        '对话框跳转':[
            {'剧情名称':'剧情_襄阳妓院老鸨','场景索引':2},{'剧情名称':'剧情_襄阳妓院老鸨','场景索引':2},{'剧情名称':'剧情_襄阳妓院','场景索引':0}
        ],
    },
    {
        '编号':2,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'啊！！！ 怎么是你这个老女人？？！！',
        '休息':false,//休息不满红蓝、true现实通知、false不显示
        '获得物品': [
            {
                '名称':'侠义',
                '类型':'属性',
                '数量':-1,
            },
        ],
    },
    {
        '编号':3,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602002b,
        '对话框姓名':'老鸨',
        '对话框对白':'小哥真识货。我是这城里唯一一个拥有双户口的粉头。本地和外地都由奴家我一人独揽。奴家跟你很是有缘，以后你只要来这找我，全部给你免单。',
    },
    {
        '编号':4,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'实在是提不起兴致了，后会无期吧。',
    },
    {
        '编号':5,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
];

story_['剧情_襄阳妓院小宝货郎'] = [
    {
        '编号':0,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020008,
        '对话框姓名':'小宝货郎',
        '对话框对白':'听我唱过十八摸，伸手摸姐面边丝，乌云飞了半天边，伸手摸姐脑前边……',
    },
    {
        '编号':1,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
    {
        '编号':2,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020008,
        '对话框姓名':'小宝货郎',
        '对话框对白':'我的最大志愿就是开全国最大的妓院。',
    },
    {
        '编号':3,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
    {
        '编号':4,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020008,
        '对话框姓名':'小宝货郎',
        '对话框对白':'以前百万金银过手，现在却要靠卖杂货谋生，离人生目标越来越远了。',
    },
    {
        '编号':5,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
    {
        '编号':6,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020008,
        '对话框姓名':'小宝货郎',
        '对话框对白':'不知道小玄子现在怎样了，好怀念从前的小玄子。',
    },
    {
        '编号':7,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
    {
        '编号':8,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020008,
        '对话框姓名':'小宝货郎',
        '对话框对白':'我这辈子吉星高照，好运滚滚来。不知道有没有人想买我的好运气。',
    },
    {
        '编号':9,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'兄台，听说你要出售“运气”？',
    },
    {
        '编号':10,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020008,
        '对话框姓名':'小宝货郎',
        '对话框对白':'是啊，每出售一次是200两银子。至于能给你带来多大好处，就看你自己的造化了。',
    },
    {
        '编号':11,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'',
        '对话框选项':[
            '1.好，我买了！',
            '2.太贵了，我不买。',
        ],
        '对话框跳转':[
            {'剧情名称':'剧情_襄阳妓院小宝货郎','场景索引':12},{'剧情名称':'剧情_襄阳妓院','场景索引':0}
        ],
    },
    {
        '编号':12,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'福缘提升！',
        '获得物品': [
            {
                '名称':'银两',
                '类型':'属性',
                '数量':-200,
            },
            {
                '名称':'福缘',
                '类型':'属性',
                '数量':new Phaser.RandomDataGenerator().between(1,10),
            },
        ],
    },
    {
        '编号':13,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
    {
        '编号':14,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020008,
        '对话框姓名':'小宝货郎',
        '对话框对白':'当我不识数阿？把钱揍够了再来找我吧。',
    },
    {
        '编号':15,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
];

story_['剧情_襄阳妓院玉机子'] = [//还有一条五岳并派剧情线
    {
        '编号':0,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602002a,
        '对话框姓名':'玉机子',
        '对话框对白':'滚开！没见过道爷嫖妓啊？！',
    },
    {
        '编号':1,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
    {
        '编号':2,//左冷禅任务剧情线==8
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'你就是泰山玉玑子吧。没想到正经门派的老道长还有这种癖好？难道你们泰山派有种采阴补阳的内功心法，需要男女双修？',
    },
    {
        '编号':3,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602002a,
        '对话框姓名':'玉机子',
        '对话框对白':'奶奶的！管道爷的事！ 咦？原来是左盟主派来的。不知道左盟主有什么指示？',
    },
    {
        '编号':4,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'左盟主让你嵩山一趟，有事相商。',
    },
    {
        '编号':5,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602002a,
        '对话框姓名':'玉机子',
        '对话框对白':'左盟主有令，不敢不从。但是我在这里欠下了1000两的嫖资，现在走不开阿。',
    },
    {
        '编号':6,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
    {
        '编号':7,//银两大于等于1000
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x56020001,
        '对话框姓名':'云行深',
        '对话框对白':'你这1000两我先给你垫上，赶紧给我滚上嵩山，别耽误老子做任务。',
    },
    {
        '编号':8,
        '背景图片':0x56060018,
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':0x5602002a,
        '对话框姓名':'玉机子',
        '对话框对白':'好的好的，等我再嫖几个就走。',
        '剧情线':{
            '名称':'左冷禅任务剧情线',
            '标记':9
        },
    },
    {
        '编号':9,//该场景仅作为剧情跳转中转站
        '背景图片':'',
        '立绘名称':[,,,,],
        '立绘图片':[,,,,],
        '序列帧动画':{
            '是否播放':false,
        },
        '对话框头像':'',
        '对话框姓名':'',
        '对话框对白':'',
        '跳转剧情':{
            '剧情名称':'剧情_襄阳妓院',
            '场景索引':0
        }
    },
];
/*


				G.call("对话系统_显示主角对话","你就是泰山玉玑子吧。没想到正经门派的老道长还有这种癖好？难道你们泰山派有种采阴补阳的内功心法，需要男女双修？")
				G.call("对话系统_显示NPC对话","玉机子",0x5602002a,"奶奶的！管道爷的事！ 咦？原来是左盟主派来的。不知道左盟主有什么指示？")
				G.call("对话系统_显示主角对话","左盟主让你嵩山一趟，有事相商。")
				G.call("对话系统_显示NPC对话","玉机子",0x5602002a,"左盟主有令，不敢不从。但是我在这里欠下了1000两的嫖资，现在走不开阿。")
				if G.call("通用_检查人物属性","银两",1000,nil) then 
					G.call("通用_变更人物属性","银两","增减",- 1000)
					G.call("对话系统_显示主角对话","你这1000两我先给你垫上，赶紧给我滚上嵩山，别耽误老子做任务。")
					G.call("对话系统_显示NPC对话","玉机子",0x5602002a,"好的好的，等我再嫖几个就走。")

*/



