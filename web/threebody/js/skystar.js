// poem
var words=[
    '失去人性，失去很多；失去兽性，失去一切',
    '只送大脑',
    '这是人类的落日',
    '前进！前进！不择手段地前进！',
    '没关系的，都一样',
    '上帝已死！',
    '这是计划的一部分',
    '大史，你真是个魔鬼',
    '我倒是有个建议：你为什么不去研究宇宙社会学呢？',
    '你们是虫子',
    '我们害怕你们',
    '你的工作就是：使自己幸福快乐',
    '斩尽杀绝，这是对一个文明最高的重视',
    '这是一句咒语',
    '亲爱的，你真的相信水有毒？',
    '先生，我想掩盖对您的鄙视，但我做不到！',
    '主不在乎',
    '吊死他！绞死他！就现在！',
    '面壁者比尔·希恩斯，我是你的破壁人',
    '北海，要多想',
    '给岁月以文明，而不是给文明以岁月',
    '“自然选择”，前进四！',
    '像一滴圣母的眼泪',
    '毁灭你，与你有何相干？',
    '傻孩子们，快——跑——啊！',
    '他们的存在，是人类这段不堪回首的历史中唯一的亮色',
    '方寸之间，深不见底',
    '是水洼，海干了',
    '宇宙很大，生活更大，也许以后还有缘相见',
    '好，在我们的星星！',
    '谢谢你的雪茄',
    '我不知道你在这儿，知道的话我会常来看你的',
    '夜月一帘幽梦',
    '5kg',
    '真理总沾着灰',
    '死亡不是你的敌人，永恒才是',
    '美妙人生的关键在于你能迷上什么东西',
    '不理睬是最大的轻蔑',
    '与其说是为了纪念，更像是为了忘却',
    '孩子，人做过的，神都记得',
    ' 亲爱的，我们在末日等你',
    '一切都将逝去，只有死神永生',
    '消灭人类暴政!世界属于三体!',
    '生命是一手同花顺，一洗什么都没了',
    '没有永恒的敌人或同志，只有永恒的责任',
    '这一刻，苍海桑田',
    '在凌晨一点钟至五点钟，整个宇宙将为你闪烁',
    '弱小和无知不是生存的障碍，傲慢才是',
    '这游戏真有趣，是吧？',
    '大自然真是自然的吗？',
    '来了，爱了，给了她一颗星星，走了',
    '藏好自己，做好清理',
    '像坟墓一样简洁',
    '武器，不管多可怕，总是好东西',
    '我正变成死亡，世界的毁灭者',
    '妈妈，我将变成萤火虫 '
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },28000)


 
