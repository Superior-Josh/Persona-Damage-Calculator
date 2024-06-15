const TRAITS = [
    { id: '0', name: '未发动', power: 1 },
    { id: '1', name: '穷追的本性', power: 1.5 },  //enemy.affinity, skill.multipleTargets
    { id: '2', name: '个别集中的眼神', power: 1.2 },  //skill.element, skill.multipleTargets
    { id: '3', name: '万夫莫敌的眼神', power: 1.2 },  //skill.element, skill.multipleTargets
    { id: '4', name: '超乎常理的重量', power: 1.2 },  //skill.element
    { id: '5', name: '究极不减的怒发冲冠', power: 1.3 },  //skill.element
    { id: '6', name: '异常的魅力', power: 1.5 },  //passiveSkill.power
    { id: '7', name: '连锁诡计', power: 1.2 },  //battle.batonPass, skill.multipleTargets
    { id: '8', name: '相连的血统', power: 1.4 },  //battle.batonPass, skill.multipleTargets
    { id: '9', name: '巧妙诡计', power: 1.25 },  //battle.technical
    { id: '10', name: '森罗万象的真理', power: 1.5 },  //battle.technical
    { id: '11', name: '瘟疫之瞳', power: 1.25 },  //ailments
    { id: '12', name: '剑神的意念', power: 1.2 },  //buff.charge
    { id: '13', name: '暴怒的公牛', power: 2 },
    { id: '14', name: '虚无的小丑', power: 1.4 },  //ailments
    { id: '15', name: '桂的由来', power: 1.5 },
    { id: '16', name: '如创国之举', power: 1 },   //register rate
]

const SKILLS = [
    { id: '0', name: 'null', element: 'null', power: 1, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '1', name: '突击', element: '物理', power: 60, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '2', name: '俯冲突袭', element: '物理', power: 130, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '3', name: '百万吨袭击', element: '物理', power: 300, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '4', name: '神之手', element: '物理', power: 800, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '5', name: '幸运拳', element: '物理', power: 25, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '6', name: '奇迹拳', element: '物理', power: 80, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '7', name: '杀戮突袭', element: '物理', power: 40, minHits: 1, maxHits: 3, multipleTargets: false },
    { id: '8', name: '加特林重击', element: '物理', power: 30, minHits: 3, maxHits: 4, multipleTargets: false },
    { id: '9', name: '斩击', element: '物理', power: 65, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '10', name: '大斩断', element: '物理', power: 90, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '11', name: '勇气之击', element: '物理', power: 600, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '12', name: '剑之舞', element: '物理', power: 360, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '13', name: '死神大镰斩', element: '物理', power: 300, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '14', name: '穷鼠之牙', element: '物理', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '15', name: '加倍斩击', element: '物理', power: 140, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '16', name: '死亡游戏', element: '物理', power: 220, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '17', name: '金刚发破', element: '物理', power: 80, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '18', name: '空间杀法', element: '物理', power: 210, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '19', name: '烈风波', element: '物理', power: 110, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '20', name: '灼热波浪', element: '物理', power: 150, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '21', name: '巨人之战', element: '物理', power: 350, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '22', name: '横冲直撞', element: '物理', power: 30, minHits: 1, maxHits: 3, multipleTargets: true },
    { id: '23', name: '电光石火', element: '物理', power: 20, minHits: 2, maxHits: 4, multipleTargets: true },
    { id: '24', name: '死亡界限', element: '物理', power: 100, minHits: 1, maxHits: 2, multipleTargets: true },
    { id: '25', name: '火神之击', element: '物理', power: 110, minHits: 1, maxHits: 3, multipleTargets: true },
    { id: '26', name: '二连牙', element: '物理', power: 40, minHits: 2, maxHits: 2, multipleTargets: false },
    { id: '27', name: '威力斩击', element: '物理', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '28', name: '五月雨斩', element: '物理', power: 20, minHits: 3, maxHits: 5, multipleTargets: false },
    { id: '29', name: '刹那五月雨斩', element: '物理', power: 90, minHits: 2, maxHits: 3, multipleTargets: false },
    { id: '30', name: '烈击巨锤', element: '物理', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '31', name: '倒栽痛击', element: '物理', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '32', name: '骇鸦', element: '物理', power: 70, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '33', name: '头锤', element: '物理', power: 80, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '34', name: '歇斯底里掌掴', element: '物理', power: 80, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '35', name: '负面意识堆叠', element: '物理', power: 120, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '36', name: '头脑震撼', element: '物理', power: 80, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '37', name: '闪光炸弹', element: '物理', power: 100, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '38', name: '心念切断', element: '物理', power: 110, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '39', name: '血祭', element: '物理', power: 120, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '40', name: '忘杀突袭', element: '物理', power: 70, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '41', name: '永眠突袭', element: '物理', power: 80, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '42', name: '鬼神乐', element: '物理', power: 80, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '43', name: '绝望敲打', element: '物理', power: 110, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '44', name: '碎脑击', element: '物理', power: 120, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '45', name: '烈焰魔剑', element: '物理', power: 800, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '46', name: '奇迹突袭', element: '物理', power: 80, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '47', name: '化装舞会', element: '物理', power: 300, minHits: 2, maxHits: 2, multipleTargets: false },
    { id: '48', name: '八艘跳跃', element: '物理', power: 40, minHits: 8, maxHits: 8, multipleTargets: true },
    { id: '49', name: '巴力神矛', element: '物理', power: 100, minHits: 3, maxHits: 3, multipleTargets: false },
    { id: '50', name: '十字文斩', element: '物理', power: 160, minHits: 2, maxHits: 2, multipleTargets: false },
    { id: '51', name: '弦艺猛兽', element: '物理', power: 1200, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '52', name: '虚无艺术', element: '物理', power: 300, minHits: 1, maxHits: 2, multipleTargets: true },

    { id: '53', name: '指弹', element: '枪击', power: 80, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '54', name: '三连倒', element: '枪击', power: 30, minHits: 3, maxHits: 3, multipleTargets: true },
    { id: '55', name: '一枪毙命', element: '枪击', power: 210, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '56', name: '至高魔弹', element: '枪击', power: 300, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '57', name: '双重射击', element: '枪击', power: 50, minHits: 2, maxHits: 2, multipleTargets: false },
    { id: '58', name: '织梦针', element: '枪击', power: 70, minHits: 1, maxHits: 1, multipleTargets: false },

    { id: '59', name: '亚基', element: '火焰', power: 40, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '60', name: '亚基拉欧', element: '火焰', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '61', name: '亚基达因', element: '火焰', power: 160, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '62', name: '炼狱', element: '火焰', power: 200, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '63', name: '玛哈拉基', element: '火焰', power: 40, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '64', name: '玛哈拉基翁', element: '火焰', power: 100, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '65', name: '玛哈拉基达因', element: '火焰', power: 160, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '66', name: '大燃烧', element: '火焰', power: 180, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '67', name: '泰坦之战', element: '火焰', power: 210, minHits: 1, maxHits: 1, multipleTargets: true },

    { id: '68', name: '布芙', element: '冰冻', power: 40, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '69', name: '布芙拉', element: '冰冻', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '70', name: '布芙达因', element: '冰冻', power: 160, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '71', name: '钻石星辰', element: '冰冻', power: 200, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '72', name: '玛哈布芙', element: '冰冻', power: 40, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '73', name: '玛哈布芙拉', element: '冰冻', power: 100, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '74', name: '玛哈布芙达因', element: '冰冻', power: 160, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '75', name: '大冰河时期', element: '冰冻', power: 180, minHits: 1, maxHits: 1, multipleTargets: true },

    { id: '76', name: '吉欧', element: '电击', power: 40, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '77', name: '吉欧加', element: '电击', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '78', name: '吉欧达因', element: '电击', power: 160, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '79', name: '真理之雷', element: '电击', power: 200, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '80', name: '玛哈吉欧', element: '电击', power: 40, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '81', name: '玛哈吉欧加', element: '电击', power: 100, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '82', name: '玛哈吉欧达因', element: '电击', power: 160, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '83', name: '崇高圣战', element: '电击', power: 180, minHits: 1, maxHits: 1, multipleTargets: true },

    { id: '84', name: '加尔', element: '疾风', power: 40, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '85', name: '加尔拉', element: '疾风', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '86', name: '加尔达因', element: '疾风', power: 160, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '87', name: '万物流转', element: '疾风', power: 200, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '88', name: '玛哈加尔', element: '疾风', power: 40, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '89', name: '玛哈加尔拉', element: '疾风', power: 100, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '90', name: '玛哈加尔达因', element: '疾风', power: 160, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '91', name: '真空波', element: '疾风', power: 180, minHits: 1, maxHits: 1, multipleTargets: true },

    { id: '92', name: '赛', element: '念动', power: 40, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '93', name: '赛欧', element: '念动', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '94', name: '赛达因', element: '念动', power: 160, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '95', name: '念动力', element: '念动', power: 200, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '96', name: '玛哈赛', element: '念动', power: 40, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '97', name: '玛哈赛欧', element: '念动', power: 100, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '98', name: '玛哈赛达因', element: '念动', power: 160, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '99', name: '念动波', element: '念动', power: 180, minHits: 1, maxHits: 1, multipleTargets: true },

    { id: '100', name: '芙雷', element: '核热', power: 40, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '101', name: '芙雷拉', element: '核热', power: 100, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '102', name: '芙雷达因', element: '核热', power: 160, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '103', name: '原子火焰', element: '核热', power: 200, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '104', name: '玛哈芙雷', element: '核热', power: 40, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '105', name: '玛哈芙雷拉', element: '核热', power: 100, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '106', name: '玛哈芙雷达因', element: '核热', power: 160, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '107', name: '宇宙火焰', element: '核热', power: 180, minHits: 1, maxHits: 1, multipleTargets: true },

    { id: '108', name: '克哈', element: '祝福', power: 50, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '109', name: '克加', element: '祝福', power: 120, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '110', name: '克加翁', element: '祝福', power: 190, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '111', name: '玛哈克哈', element: '祝福', power: 50, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '112', name: '玛哈克加', element: '祝福', power: 120, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '113', name: '玛哈克加翁', element: '祝福', power: 190, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '114', name: '辉箭', element: '祝福', power: 15, minHits: 4, maxHits: 8, multipleTargets: true },

    { id: '115', name: '耶哈', element: '咒怨', power: 50, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '116', name: '耶加', element: '咒怨', power: 120, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '117', name: '耶加翁', element: '咒怨', power: 190, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '118', name: '玛哈耶哈', element: '咒怨', power: 50, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '119', name: '玛哈耶加', element: '咒怨', power: 120, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '120', name: '玛哈耶加翁', element: '咒怨', power: 190, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '121', name: '祸津曼荼罗', element: '咒怨', power: 160, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '122', name: '炼狱之翼', element: '咒怨', power: 210, minHits: 1, maxHits: 1, multipleTargets: true },

    { id: '123', name: '米吉多', element: '万能', power: 120, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '124', name: '米吉多拉', element: '万能', power: 180, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '125', name: '米吉多拉翁', element: '万能', power: 210, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '126', name: '反抗之刃', element: '万能', power: 900, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '127', name: '漆黑之蛇', element: '万能', power: 230, minHits: 1, maxHits: 1, multipleTargets: false },
    { id: '128', name: '拂晓明星', element: '万能', power: 230, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '129', name: '深渊之眼', element: '万能', power: 220, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '130', name: '冥府之门', element: '万能', power: 160, minHits: 1, maxHits: 1, multipleTargets: true },
    { id: '131', name: '数万真言', element: '万能', power: 120, minHits: 3, maxHits: 3, multipleTargets: true },

]

const PASSIVE_SKILLS = [
    { id: '1', name: '强化', power: 1.25, Over2: false, stackable: true },  //skill.element
    { id: '2', name: '高级强化', power: 1.5, Over2: false, stackable: true },
    { id: '3', name: '魔导才能', power: 1.25, Over2: false, stackable: true },
    { id: '4', name: '魔王的境界', power: 1.25, Over2: true, stackable: true },
]

const PASSIVE_SKILLS_PRO = [
    { id: '1', name: '单体攻击时威力UP', power: 1.1, Over2: false, stackable: true },  //skill.element skill.multipleTargets
    { id: '2', name: '单体攻击时威力大UP', power: 1.25, Over2: false, stackable: true },
    { id: '3', name: '全体攻击时威力UP', power: 1.1, Over2: false, stackable: true },  //skill.element skill.multipleTargets
    { id: '4', name: '全体攻击时威力大UP', power: 1.25, Over2: false, stackable: true },
    { id: '5', name: '拥有4属性时威力大UP', power: 1.25, Over2: false, stackable: true },
    { id: '6', name: '拥有3属性时威力UP', power: 1.1, Over2: false, stackable: true },
    { id: '7', name: '高级全属性强化', power: 1.25, Over2: false, stackable: true },
    { id: '8', name: '对异常状态伤害UP', power: 1.1, Over2: true, stackable: true },
    { id: '9', name: '对异常状态伤害大UP', power: 1.25, Over2: true, stackable: true },
    { id: '10', name: 'TECHNICAL时威力UP', power: 1.1, Over2: true, stackable: true },
    { id: '11', name: 'TECHNICAL时威力大UP', power: 1.25, Over2: true, stackable: true },
    { id: '12', name: '濒死时攻击UP', power: 1.1, Over2: true, stackable: true },
    { id: '13', name: '濒死时攻击大UP', power: 1.25, Over2: true, stackable: true },
    { id: '14', name: 'WEAK时威力UP', power: 1.75, Over2: true, stackable: true },
    { id: '15', name: 'WEAK时威力大UP', power: 2, Over2: true, stackable: false },
    { id: '16', name: '物理命中减半威力加倍', power: 2, Over2: true, stackable: false },
    { id: '17', name: '暴击威力UP', power: 1.167, Over2: true, stackable: false },
    { id: '18', name: '暴击威力大UP', power: 1.333, Over2: true, stackable: false },
]

const BUFFS = [
    { id: '0', name: '无', power: 1 },
    { id: '1', name: '塔尔卡加', power: 1.4 },
    { id: '2', name: '塔伦达', power: 0.6 },
    { id: '3', name: '拉坤达', power: 1.4 },
    { id: '4', name: '拉库卡加', power: 0.6 },
    { id: '5', name: '蓄力', power: 2.5 },
    { id: '6', name: '专心致志', power: 2.5 },
]

const DIFFICULTIES = [
    { id: '0', name: 'Safety', power: 1.6 },
    { id: '1', name: 'Easy', power: 1 },
    { id: '2', name: 'Normal', power: 1 },
    { id: '3', name: 'HARD', power: 0.8 },
    { id: '4', name: 'Challenge', power: 0.64 },
]

const ATTACKS = [
    { id: '0', name: '未触发', power: 1 },
    { id: '1', name: 'Critical', power: 1.5 },
    { id: '2', name: 'Technical', power: 1.8 },
]

const TECHNICALS = [
    { id: '1', name: '燃烧', power: 2.3 },
    { id: '2', name: '冻结', power: 2.05 },
    { id: '3', name: '触电', power: 2.05 },
    { id: '4', name: '睡眠', power: 1.8 },
    { id: '5', name: '晕眩', power: 1.8 },
    { id: '6', name: '遗忘', power: 1.8 },
    { id: '7', name: '混乱', power: 1.8 },
    { id: '8', name: '恐惧', power: 1.8 },
    { id: '9', name: '绝望', power: 1.5 },
    { id: '10', name: '狂怒', power: 1.5 },
    { id: '11', name: '洗脑', power: 1.5 },
]

const AFFINITIES = [
    { id: '0', name: '普通', power: 1 },
    { id: '1', name: '弱点', power: 1.25 },
    { id: '2', name: '耐性', power: 0.5 },
]

const ENEMIES = [
    { id: '1', name: '猎杀者', level: 85, endurance: 80, demon: false, downedable: true, rageable: false, criticalable: false, technicalable: false, affinity: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.25] },
    { id: '2', name: '芮斯汀娜&卡萝琳娜', level: 99, endurance: 99, demon: false, downedable: false, rageable: false, criticalable: false, technicalable: false, affinity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,] },
    { id: '3', name: '约瑟', level: 99, endurance: 99, demon: false, downedable: false, rageable: false, criticalable: false, technicalable: false, affinity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,] },
    { id: '4', name: '拉雯妲', level: 99, endurance: 99, demon: false, downedable: true, rageable: false, criticalable: true, technicalable: false, affinity: [] },
    { id: '5', name: '木叶天狗（凶魔化）', level: 11, endurance: 9, demon: true, downedable: true, rageable: true, criticalable: true, technicalable: true, affinity: [1, 1, 1, '弱点', 1, 0.5, 1, 1, 0.5, 1, 1] },

]

const PERSONA = [
    { id: '1', name: '凯尔皮', rageable: false, criticalable: true, technicalable: false, affinity: [0.25, 0.25, 0.25, 0.25, 2, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5] },
    { id: '2', name: '比利士', rageable: false, criticalable: true, technicalable: false, affinity: [0.25, 0.25, 0.25, 2, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5] },
    { id: '3', name: '犬神', rageable: false, criticalable: true, technicalable: false, affinity: [0.25, 0.25, 0.25, 0.25, 0.25, 2, 0.25, 0.25, 0.25, 0.25, 0.5] },
    { id: '4', name: '奴延', rageable: false, criticalable: true, technicalable: false, affinity: [0.25, 0.25, 2, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5] },
    { id: '5', name: '鬼', rageable: false, criticalable: true, technicalable: false, affinity: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5] },
    { id: '6', name: '阿努比斯', rageable: false, criticalable: true, technicalable: false, affinity: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0, 0, 0.5] },
    { id: '7', name: '密特拉', rageable: false, criticalable: true, technicalable: false, affinity: [1, 1, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5] },
    { id: '8', name: '欧赛', rageable: false, criticalable: true, technicalable: false, affinity: [1, 1, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5] },
    { id: '9', name: '大元帅明王', rageable: false, criticalable: true, technicalable: false, affinity: [0.25, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] },
    { id: '10', name: '托尔', rageable: false, criticalable: true, technicalable: false, affinity: [0.25, 0.25, 1, 1, 0, 1, 1, 1, 1, 0.25, 1] },
    { id: '11', name: '路西法', rageable: false, criticalable: true, technicalable: false, affinity: [0, 0, 0.25, 0.25, 0.25, 0.25, 1, 1, 1, 0, 1] },
]