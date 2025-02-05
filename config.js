
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "大海啊他全是水",
        "蜘蛛啊他全是腿",
        "辣椒啊他真辣嘴",
        "认识你啊真不后悔",
        "但愿真正的快乐拥抱着你",
        "在这属于你的特别的一天",
        "祝你生日快乐！"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "那么有请我们的主人公": "./imgs/微信图片_20230711132837.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Press this button to start the journey",
        play: "Play MUSIC that belongs to you",
        bannar_coming: "Let me think about it",
        balloons_flying: "Seems to be missing something",
        cake_fadein: "Birthday cake?",
        light_candle: "Birthday candles?",
        wish_message: "Happy birthday，xinsir",
        story: "A MESSAGE FOR YOU",
    }
};
