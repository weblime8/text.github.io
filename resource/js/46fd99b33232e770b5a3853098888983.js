window.__YSFWINTYPE__ = Number('3');
window.__YSFMODILEWINTYPE__ = Number('3');
window.__YSFTHEMELAYEROUT__ = 1;
window.__YSFBGCOLOR__ = "#f96868";
window.__YSFBGTONE__ = "notone";
window.__YSFBGIMG__ = "";
window.__YSFSDKADR__ = "https://qiyukf.com";
window.__YSFDASWITCH__ = 0;
window.__YSFDAROOT__ = "https://da.qiyukf.com/webda/da.gif";
window.__YSFISGA__ = 0;
window.__YSFVISITORRECORD__ = 0;
window.__YSFISUPINFOTOSERVER__ = 0;
window.__YSFAPPPATH__ = "/sdk/";
window.MIN_LBS = 'https://lbs.chatnos.com/lbs/webconf.jsp?devflag=qyonline';
! function() {
    function execEvent(e, i) { var t = ysf[e]; if (util.isFunction(t))
            if (inited) return t.apply(null, i);
            else switch (e) {
                case "onready":
                case "onLayerload":
                case "onunread":
                case "config":
                case "product":
                case "logoff":
                case "setAuthToken":
                case "pollAuthToken":
                case "onConversation":
                case "onSessionMessage":
                case "getConversation":
                case "cardMessage":
                    callbacksBeforeLoad.push({ func: t, arg: i }); break;
                case "open":
                case "url":
                case "track":
                case "getUnreadMsg":
                    util.consoleWarn("can not exec" + e + "before sdk ready") } }

    function sendData2box() {
        function e(e) { var i, t; var o = ""; for (t = 0; t < e.length; t++) { i = e.charCodeAt(t).toString(16);
                o += "-" + i } return o } try { var i = document.createElement("iframe");
            i.src = "https://ipservice.163.com/if/box";
            i.id = "YSF-IFRAME-DATA";
            i.name = e(device() + "::" + util.getcookie("__kaola_usertrack"));
            i.style.width = 0;
            i.style.height = 0;
            i.style.border = 0;
            i.style.display = "none";
            i.style.outline = "none";
            document.body.appendChild(i);
            setTimeout(function() { document.body.removeChild(i) }, 1e4) } catch (t) {} } if (!window.localStorage || !window.postMessage) return "not support service"; var local = window.setting ? window.setting.langJson || {} : {};
    window.__YSF_EMOJI__ = { pmap: { emoticon_emoji_01: { tag: "[可爱]", file: "emoji_01.png" }, emoticon_emoji_00: { tag: "[大笑]", file: "emoji_00.png" }, emoticon_emoji_02: { tag: "[色]", file: "emoji_02.png" }, emoticon_emoji_03: { tag: "[嘘]", file: "emoji_03.png" }, emoticon_emoji_04: { tag: "[亲]", file: "emoji_04.png" }, emoticon_emoji_05: { tag: "[呆]", file: "emoji_05.png" }, emoticon_emoji_06: { tag: "[口水]", file: "emoji_06.png" }, emoticon_emoji_145: { tag: "[汗]", file: "emoji_145.png" }, emoticon_emoji_07: { tag: "[呲牙]", file: "emoji_07.png" }, emoticon_emoji_08: { tag: "[鬼脸]", file: "emoji_08.png" }, emoticon_emoji_09: { tag: "[害羞]", file: "emoji_09.png" }, emoticon_emoji_10: { tag: "[偷笑]", file: "emoji_10.png" }, emoticon_emoji_11: { tag: "[调皮]", file: "emoji_11.png" }, emoticon_emoji_12: { tag: "[可怜]", file: "emoji_12.png" }, emoticon_emoji_13: { tag: "[敲]", file: "emoji_13.png" }, emoticon_emoji_14: { tag: "[惊讶]", file: "emoji_14.png" }, emoticon_emoji_15: { tag: "[流感]", file: "emoji_15.png" }, emoticon_emoji_16: { tag: "[委屈]", file: "emoji_16.png" }, emoticon_emoji_17: { tag: "[流泪]", file: "emoji_17.png" }, emoticon_emoji_18: { tag: "[嚎哭]", file: "emoji_18.png" }, emoticon_emoji_19: { tag: "[惊恐]", file: "emoji_19.png" }, emoticon_emoji_20: { tag: "[怒]", file: "emoji_20.png" }, emoticon_emoji_21: { tag: "[酷]", file: "emoji_21.png" }, emoticon_emoji_22: { tag: "[不说]", file: "emoji_22.png" }, emoticon_emoji_23: { tag: "[鄙视]", file: "emoji_23.png" }, emoticon_emoji_24: { tag: "[阿弥陀佛]", file: "emoji_24.png" }, emoticon_emoji_25: { tag: "[奸笑]", file: "emoji_25.png" }, emoticon_emoji_26: { tag: "[睡着]", file: "emoji_26.png" }, emoticon_emoji_27: { tag: "[口罩]", file: "emoji_27.png" }, emoticon_emoji_28: { tag: "[生气]", file: "emoji_28.png" }, emoticon_emoji_29: { tag: "[抠鼻孔]", file: "emoji_29.png" }, emoticon_emoji_30: { tag: "[疑问]", file: "emoji_30.png" }, emoticon_emoji_31: { tag: "[怒骂]", file: "emoji_31.png" }, emoticon_emoji_32: { tag: "[晕]", file: "emoji_32.png" }, emoticon_emoji_33: { tag: "[呕吐]", file: "emoji_33.png" }, emoticon_emoji_160: { tag: "[拜一拜]", file: "emoji_160.png" }, emoticon_emoji_161: { tag: "[惊喜]", file: "emoji_161.png" }, emoticon_emoji_162: { tag: "[流汗]", file: "emoji_162.png" }, emoticon_emoji_163: { tag: "[卖萌]", file: "emoji_163.png" }, emoticon_emoji_164: { tag: "[默契眨眼]", file: "emoji_164.png" }, emoticon_emoji_165: { tag: "[烧香拜佛]", file: "emoji_165.png" }, emoticon_emoji_166: { tag: "[晚安]", file: "emoji_166.png" }, emoticon_emoji_34: { tag: "[强]", file: "emoji_34.png" }, emoticon_emoji_35: { tag: "[弱]", file: "emoji_35.png" }, emoticon_emoji_36: { tag: "[OK]", file: "emoji_36.png" }, emoticon_emoji_37: { tag: "[拳头]", file: "emoji_37.png" }, emoticon_emoji_38: { tag: "[胜利]", file: "emoji_38.png" }, emoticon_emoji_39: { tag: "[鼓掌]", file: "emoji_39.png" }, emoticon_emoji_200: { tag: "[握手]", file: "emoji_200.png" }, emoticon_emoji_40: { tag: "[发怒]", file: "emoji_40.png" }, emoticon_emoji_41: { tag: "[骷髅]", file: "emoji_41.png" }, emoticon_emoji_42: { tag: "[便便]", file: "emoji_42.png" }, emoticon_emoji_43: { tag: "[火]", file: "emoji_43.png" }, emoticon_emoji_44: { tag: "[溜]", file: "emoji_44.png" }, emoticon_emoji_45: { tag: "[爱心]", file: "emoji_45.png" }, emoticon_emoji_46: { tag: "[心碎]", file: "emoji_46.png" }, emoticon_emoji_47: { tag: "[钟情]", file: "emoji_47.png" }, emoticon_emoji_48: { tag: "[唇]", file: "emoji_48.png" }, emoticon_emoji_49: { tag: "[戒指]", file: "emoji_49.png" }, emoticon_emoji_50: { tag: "[钻石]", file: "emoji_50.png" }, emoticon_emoji_51: { tag: "[太阳]", file: "emoji_51.png" }, emoticon_emoji_52: { tag: "[有时晴]", file: "emoji_52.png" }, emoticon_emoji_53: { tag: "[多云]", file: "emoji_53.png" }, emoticon_emoji_54: { tag: "[雷]", file: "emoji_54.png" }, emoticon_emoji_55: { tag: "[雨]", file: "emoji_55.png" }, emoticon_emoji_56: { tag: "[雪花]", file: "emoji_56.png" }, emoticon_emoji_57: { tag: "[爱人]", file: "emoji_57.png" }, emoticon_emoji_58: { tag: "[帽子]", file: "emoji_58.png" }, emoticon_emoji_59: { tag: "[皇冠]", file: "emoji_59.png" }, emoticon_emoji_60: { tag: "[篮球]", file: "emoji_60.png" }, emoticon_emoji_61: { tag: "[足球]", file: "emoji_61.png" }, emoticon_emoji_62: { tag: "[垒球]", file: "emoji_62.png" }, emoticon_emoji_63: { tag: "[网球]", file: "emoji_63.png" }, emoticon_emoji_64: { tag: "[台球]", file: "emoji_64.png" }, emoticon_emoji_65: { tag: "[咖啡]", file: "emoji_65.png" }, emoticon_emoji_66: { tag: "[啤酒]", file: "emoji_66.png" }, emoticon_emoji_67: { tag: "[干杯]", file: "emoji_67.png" }, emoticon_emoji_68: { tag: "[柠檬汁]", file: "emoji_68.png" }, emoticon_emoji_69: { tag: "[餐具]", file: "emoji_69.png" }, emoticon_emoji_70: { tag: "[汉堡]", file: "emoji_70.png" }, emoticon_emoji_71: { tag: "[鸡腿]", file: "emoji_71.png" }, emoticon_emoji_72: { tag: "[面条]", file: "emoji_72.png" }, emoticon_emoji_73: { tag: "[冰淇淋]", file: "emoji_73.png" }, emoticon_emoji_74: { tag: "[沙冰]", file: "emoji_74.png" }, emoticon_emoji_75: { tag: "[生日蛋糕]", file: "emoji_75.png" }, emoticon_emoji_76: { tag: "[蛋糕]", file: "emoji_76.png" }, emoticon_emoji_77: { tag: "[糖果]", file: "emoji_77.png" }, emoticon_emoji_78: { tag: "[葡萄]", file: "emoji_78.png" }, emoticon_emoji_79: { tag: "[西瓜]", file: "emoji_79.png" }, emoticon_emoji_80: { tag: "[光碟]", file: "emoji_80.png" }, emoticon_emoji_81: { tag: "[手机]", file: "emoji_81.png" }, emoticon_emoji_82: { tag: "[电话]", file: "emoji_82.png" }, emoticon_emoji_83: { tag: "[电视]", file: "emoji_83.png" }, emoticon_emoji_84: { tag: "[声音开启]", file: "emoji_84.png" }, emoticon_emoji_85: { tag: "[声音关闭]", file: "emoji_85.png" }, emoticon_emoji_86: { tag: "[铃铛]", file: "emoji_86.png" }, emoticon_emoji_87: { tag: "[锁头]", file: "emoji_87.png" }, emoticon_emoji_88: { tag: "[放大镜]", file: "emoji_88.png" }, emoticon_emoji_89: { tag: "[灯泡]", file: "emoji_89.png" }, emoticon_emoji_90: { tag: "[锤头]", file: "emoji_90.png" }, emoticon_emoji_91: { tag: "[烟]", file: "emoji_91.png" }, emoticon_emoji_92: { tag: "[炸弹]", file: "emoji_92.png" }, emoticon_emoji_93: { tag: "[枪]", file: "emoji_93.png" }, emoticon_emoji_94: { tag: "[刀]", file: "emoji_94.png" }, emoticon_emoji_95: { tag: "[药]", file: "emoji_95.png" }, emoticon_emoji_96: { tag: "[打针]", file: "emoji_96.png" }, emoticon_emoji_97: { tag: "[钱袋]", file: "emoji_97.png" }, emoticon_emoji_98: { tag: "[钞票]", file: "emoji_98.png" }, emoticon_emoji_99: { tag: "[银行卡]", file: "emoji_99.png" }, emoticon_emoji_100: { tag: "[手柄]", file: "emoji_100.png" }, emoticon_emoji_101: { tag: "[麻将]", file: "emoji_101.png" }, emoticon_emoji_102: { tag: "[调色板]", file: "emoji_102.png" }, emoticon_emoji_103: { tag: "[电影]", file: "emoji_103.png" }, emoticon_emoji_104: { tag: "[麦克风]", file: "emoji_104.png" }, emoticon_emoji_105: { tag: "[耳机]", file: "emoji_105.png" }, emoticon_emoji_106: { tag: "[音乐]", file: "emoji_106.png" }, emoticon_emoji_107: { tag: "[吉他]", file: "emoji_107.png" }, emoticon_emoji_108: { tag: "[火箭]", file: "emoji_108.png" }, emoticon_emoji_109: { tag: "[飞机]", file: "emoji_109.png" }, emoticon_emoji_110: { tag: "[火车]", file: "emoji_110.png" }, emoticon_emoji_111: { tag: "[公交]", file: "emoji_111.png" }, emoticon_emoji_112: { tag: "[轿车]", file: "emoji_112.png" }, emoticon_emoji_113: { tag: "[出租车]", file: "emoji_113.png" }, emoticon_emoji_114: { tag: "[警车]", file: "emoji_114.png" }, emoticon_emoji_115: { tag: "[自行车]", file: "emoji_115.png" }, emoticon_emoji_116: { tag: "[撇嘴]", file: "new_emoji_01.png" }, emoticon_emoji_117: { tag: "[难过]", file: "1f641.png" }, emoticon_emoji_118: { tag: "[冷汗]", file: "1f628.png" }, emoticon_emoji_119: { tag: "[抓狂]", file: "1f629.png" }, emoticon_emoji_120: { tag: "[傲慢]", file: "1f615.png" }, emoticon_emoji_121: { tag: "[困]", file: "1f62a.png" }, emoticon_emoji_122: { tag: "[疯了]", file: "1f616.png" }, emoticon_emoji_123: { tag: "[奋斗]", file: "1f4aa-1f3fc.png" }, emoticon_emoji_124: { tag: "[白眼]", file: "new_emoji_02.png" }, emoticon_emoji_125: { tag: "[衰]", file: "new_emoji_05.png" }, emoticon_emoji_126: { tag: "[再见]", file: "new_emoji_06.png" }, emoticon_emoji_127: { tag: "[哼哼]", file: "1f63e.png" }, emoticon_emoji_128: { tag: "[阴险]", file: "1f608.png" }, emoticon_emoji_129: { tag: "[饥饿]", file: "new_emoji_03.png" }, emoticon_emoji_130: { tag: "[乒乓]", file: "new_emoji_23.png" }, emoticon_emoji_131: { tag: "[猪头]", file: "1f437.png" }, emoticon_emoji_132: { tag: "[玫瑰]", file: "new_emoji_25.png" }, emoticon_emoji_133: { tag: "[凋谢]", file: "new_emoji_24.png" }, emoticon_emoji_134: { tag: "[瓢虫]", file: "1f41e.png" }, emoticon_emoji_135: { tag: "[月亮]", file: "new_emoji_30.png" }, emoticon_emoji_136: { tag: "[礼物]", file: "new_emoji_28.png" }, emoticon_emoji_137: { tag: "[拥抱]", file: "new_emoji_08.png" }, emoticon_emoji_138: { tag: "[抱拳]", file: "new_emoji_18.png" }, emoticon_emoji_139: { tag: "[勾引]", file: "new_emoji_19.png" }, emoticon_emoji_140: { tag: "[差劲]", file: "new_emoji_20.png" }, emoticon_emoji_141: { tag: "[爱你]", file: "new_emoji_21.png" }, emoticon_emoji_142: { tag: "[NO]", file: "new_emoji_22.png" }, emoticon_emoji_143: { tag: "[飞吻]", file: "new_emoji_10.png" }, emoticon_emoji_144: { tag: "[微笑]", file: "1f642.png" }, emoticon_emoji_146: { tag: "[吐舌头]", file: "1f61d.png" }, emoticon_emoji_147: { tag: "[忧郁]", file: "new_emoji_11.png" }, emoticon_emoji_148: { tag: "[尴尬]", file: "1f630.png" }, emoticon_emoji_149: { tag: "[舒适]", file: "1f60c.png" }, emoticon_emoji_150: { tag: "[不悦]", file: "1f612.png" }, emoticon_emoji_151: { tag: "[幽灵]", file: "1f47b.png" }, emoticon_emoji_152: { tag: "[礼盒]", file: "1f49d.png" }, emoticon_emoji_153: { tag: "[拜托]", file: "1f64f-1f3fc.png" }, emoticon_emoji_154: { tag: "[气球]", file: "1f388.png" }, emoticon_emoji_155: { tag: "[拍掌]", file: "new_emoji_09.png" }, emoticon_emoji_156: { tag: "[泪中带笑]", file: "1f602.png" }, emoticon_emoji_157: { tag: "[糗大了]", file: "new_emoji_07.png" } }, pmap2: { "[大笑]": "emoticon_emoji_00", "[可爱]": "emoticon_emoji_01", "[色]": "emoticon_emoji_02", "[嘘]": "emoticon_emoji_03", "[亲]": "emoticon_emoji_04", "[呆]": "emoticon_emoji_05", "[口水]": "emoticon_emoji_06", "[汗]": "emoticon_emoji_145", "[呲牙]": "emoticon_emoji_07", "[鬼脸]": "emoticon_emoji_08", "[害羞]": "emoticon_emoji_09", "[偷笑]": "emoticon_emoji_10", "[调皮]": "emoticon_emoji_11", "[可怜]": "emoticon_emoji_12", "[敲]": "emoticon_emoji_13", "[惊讶]": "emoticon_emoji_14", "[流感]": "emoticon_emoji_15", "[委屈]": "emoticon_emoji_16", "[流泪]": "emoticon_emoji_17", "[嚎哭]": "emoticon_emoji_18", "[惊恐]": "emoticon_emoji_19", "[怒]": "emoticon_emoji_20", "[酷]": "emoticon_emoji_21", "[不说]": "emoticon_emoji_22", "[鄙视]": "emoticon_emoji_23", "[阿弥陀佛]": "emoticon_emoji_24", "[奸笑]": "emoticon_emoji_25", "[睡着]": "emoticon_emoji_26", "[口罩]": "emoticon_emoji_27", "[生气]": "emoticon_emoji_28", "[抠鼻孔]": "emoticon_emoji_29", "[疑问]": "emoticon_emoji_30", "[怒骂]": "emoticon_emoji_31", "[晕]": "emoticon_emoji_32", "[呕吐]": "emoticon_emoji_33", "[拜一拜]": "emoticon_emoji_160", "[惊喜]": "emoticon_emoji_161", "[流汗]": "emoticon_emoji_162", "[卖萌]": "emoticon_emoji_163", "[默契眨眼]": "emoticon_emoji_164", "[烧香拜佛]": "emoticon_emoji_165", "[晚安]": "emoticon_emoji_166", "[强]": "emoticon_emoji_34", "[弱]": "emoticon_emoji_35", "[OK]": "emoticon_emoji_36", "[拳头]": "emoticon_emoji_37", "[胜利]": "emoticon_emoji_38", "[鼓掌]": "emoticon_emoji_39", "[握手]": "emoticon_emoji_200", "[发怒]": "emoticon_emoji_40", "[骷髅]": "emoticon_emoji_41", "[便便]": "emoticon_emoji_42", "[火]": "emoticon_emoji_43", "[溜]": "emoticon_emoji_44", "[爱心]": "emoticon_emoji_45", "[心碎]": "emoticon_emoji_46", "[钟情]": "emoticon_emoji_47", "[唇]": "emoticon_emoji_48", "[戒指]": "emoticon_emoji_49", "[钻石]": "emoticon_emoji_50", "[太阳]": "emoticon_emoji_51", "[有时晴]": "emoticon_emoji_52", "[多云]": "emoticon_emoji_53", "[雷]": "emoticon_emoji_54", "[雨]": "emoticon_emoji_55", "[雪花]": "emoticon_emoji_56", "[爱人]": "emoticon_emoji_57", "[帽子]": "emoticon_emoji_58", "[皇冠]": "emoticon_emoji_59", "[篮球]": "emoticon_emoji_60", "[足球]": "emoticon_emoji_61", "[垒球]": "emoticon_emoji_62", "[网球]": "emoticon_emoji_63", "[台球]": "emoticon_emoji_64", "[咖啡]": "emoticon_emoji_65", "[啤酒]": "emoticon_emoji_66", "[干杯]": "emoticon_emoji_67", "[柠檬汁]": "emoticon_emoji_68", "[餐具]": "emoticon_emoji_69", "[汉堡]": "emoticon_emoji_70", "[鸡腿]": "emoticon_emoji_71", "[面条]": "emoticon_emoji_72", "[冰淇淋]": "emoticon_emoji_73", "[沙冰]": "emoticon_emoji_74", "[生日蛋糕]": "emoticon_emoji_75", "[蛋糕]": "emoticon_emoji_76", "[糖果]": "emoticon_emoji_77", "[葡萄]": "emoticon_emoji_78", "[西瓜]": "emoticon_emoji_79", "[光碟]": "emoticon_emoji_80", "[手机]": "emoticon_emoji_81", "[电话]": "emoticon_emoji_82", "[电视]": "emoticon_emoji_83", "[声音开启]": "emoticon_emoji_84", "[声音关闭]": "emoticon_emoji_85", "[铃铛]": "emoticon_emoji_86", "[锁头]": "emoticon_emoji_87", "[放大镜]": "emoticon_emoji_88", "[灯泡]": "emoticon_emoji_89", "[锤头]": "emoticon_emoji_90", "[烟]": "emoticon_emoji_91", "[炸弹]": "emoticon_emoji_92", "[枪]": "emoticon_emoji_93", "[刀]": "emoticon_emoji_94", "[药]": "emoticon_emoji_95", "[打针]": "emoticon_emoji_96", "[钱袋]": "emoticon_emoji_97", "[钞票]": "emoticon_emoji_98", "[银行卡]": "emoticon_emoji_99", "[手柄]": "emoticon_emoji_100", "[麻将]": "emoticon_emoji_101", "[调色板]": "emoticon_emoji_102", "[电影]": "emoticon_emoji_103", "[麦克风]": "emoticon_emoji_104", "[耳机]": "emoticon_emoji_105", "[音乐]": "emoticon_emoji_106", "[吉他]": "emoticon_emoji_107", "[火箭]": "emoticon_emoji_108", "[飞机]": "emoticon_emoji_109", "[火车]": "emoticon_emoji_110", "[公交]": "emoticon_emoji_111", "[轿车]": "emoticon_emoji_112", "[出租车]": "emoticon_emoji_113", "[警车]": "emoticon_emoji_114", "[自行车]": "emoticon_emoji_115", "[撇嘴]": "emoticon_emoji_116", "[难过]": "emoticon_emoji_117", "[冷汗]": "emoticon_emoji_118", "[抓狂]": "emoticon_emoji_119", "[傲慢]": "emoticon_emoji_120", "[困]": "emoticon_emoji_121", "[疯了]": "emoticon_emoji_122", "[奋斗]": "emoticon_emoji_123", "[白眼]": "emoticon_emoji_124", "[衰]": "emoticon_emoji_125", "[再见]": "emoticon_emoji_126", "[哼哼]": "emoticon_emoji_127", "[阴险]": "emoticon_emoji_128", "[饥饿]": "emoticon_emoji_129", "[乒乓]": "emoticon_emoji_130", "[猪头]": "emoticon_emoji_131", "[玫瑰]": "emoticon_emoji_132", "[凋谢]": "emoticon_emoji_133", "[瓢虫]": "emoticon_emoji_134", "[月亮]": "emoticon_emoji_135", "[礼物]": "emoticon_emoji_136", "[拥抱]": "emoticon_emoji_137", "[抱拳]": "emoticon_emoji_138", "[勾引]": "emoticon_emoji_139", "[差劲]": "emoticon_emoji_140", "[爱你]": "emoticon_emoji_141", "[NO]": "emoticon_emoji_142", "[飞吻]": "emoticon_emoji_143", "[微笑]": "emoticon_emoji_144", "[吐舌头]": "emoticon_emoji_146", "[忧郁]": "emoticon_emoji_147", "[尴尬]": "emoticon_emoji_148", "[舒适]": "emoticon_emoji_149", "[不悦]": "emoticon_emoji_150", "[幽灵]": "emoticon_emoji_151", "[礼盒]": "emoticon_emoji_152", "[拜托]": "emoticon_emoji_153", "[气球]": "emoticon_emoji_154", "[拍掌]": "emoticon_emoji_155", "[泪中带笑]": "emoticon_emoji_156", "[糗大了]": "emoticon_emoji_157" } }; var util = { isFrameModule: function() { if (util.isMobilePlatform() && 2 === window.__YSFMODILEWINTYPE__) return "mobileFrame";
            else if (!util.isMobilePlatform() && 1 === window.__YSFWINTYPE__) return "webFrame";
            else !1 }, isMobilePlatform: function() { if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) return !0;
            else return !1 }, isIOSorSafari: function() { if (/(iPhone|iPad|iOS|mini)/i.test(navigator.userAgent) || (navigator.userAgent.indexOf("Safari") > -1 || ~navigator.userAgent.indexOf("AppleWebKit")) && navigator.userAgent.indexOf("Chrome") == -1) return !0;
            else return !1 }, isFirefox: function() { if (navigator.userAgent.indexOf("Firefox") != -1) return !0;
            else return !1 }, getcookie: function(e) { var i = document.cookie,
                t = "\\b" + e + "=",
                o = i.search(t); if (o < 0) return "";
            o += t.length - 2; var n = i.indexOf(";", o); if (n < 0) n = i.length; return i.substring(o, n) || "" }, createAjax: function() { var e = null; var i = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"]; if (window.XMLHttpRequest) { e = new XMLHttpRequest; if ("withCredentials" in e) return e } if (window.xDomainRequest) e = new Window.xDomainRequest; return e }, mergeParams: function(e) { var i = []; for (var t in e)
                if (e.hasOwnProperty(t)) i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return i.join("&") }, ajax: function(conf) { var method = conf.method || "get",
                contentType = conf.contentType,
                url = conf.url,
                data = conf.data,
                result = {},
                success = conf.success,
                error = conf.error,
                fullResult = conf.fullResult || !1; var xhr = util.createAjax(); if (xhr) { try { if ("GET" === method.toUpperCase())
                        if (data) url = url + "?" + util.mergeParams(data);
                    if (conf.synchronous) xhr.open(method, url, !1);
                    else xhr.open(method, url) } catch (ex) { console.error(ex);
                    error(ex); return }
                xhr.onreadystatechange = function() { if (4 == xhr.readyState)
                        if (200 === xhr.status) { try { result = eval("(" + xhr.responseText + ")") } catch (err) { error(err); return } if (200 == (result && result.code)) success(fullResult ? result : result.result);
                            else error(result) } else error() }; if ("GET" == method.toUpperCase()) xhr.send(null);
                else if ("json" == contentType) { xhr.setRequestHeader("content-type", "application/json");
                    xhr.send(JSON.stringify(data)) } else { xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    xhr.send(util.mergeParams(data)) } } else error("NOT SUPPORT XHR") }, findLocalItems: function(e, i) { var t, o = [],
                n; for (t in localStorage)
                if (t.match(e) || !e && "string" == typeof t) { n = !i ? localStorage.getItem(t) : JSON.parse(localStorage.getItem(t));
                    o.push({ key: t, val: n }) }
            return o }, clearLocalItems: function(e) { for (var i = 0; i < e.length; i++) window.localStorage.removeItem(e[i].key) }, addEvent: function(e, i, t) { if (e.addEventListener) e.addEventListener(i, t, !1);
            else if (e.attachEvent) e.attachEvent("on" + i, t) }, isIe: function() { if (window.ActiveXObject || "ActiveXObject" in window) return !0;
            else return !1 }, isEdge: function() { return navigator.userAgent.indexOf("Edge") > -1 }, addLoadEventForProxy: function() {
            function e() { for (var e = t.length - 1; e >= 0; e--) t[e]() } var i = !1; var t = []; return function(o) { t.push(o); if (!i) { if (proxy.addEventListener) proxy.addEventListener("load", e, !1);
                    else if (proxy.attachEvent) proxy.attachEvent("onload", e);
                    i = !0 } } }(), mergeUrl: function(e, i) { var t = e.split("?"),
                o = t.shift(),
                n = util.query2Object(t.shift() || "", "&"); for (var a in i) n[a] = i[a]; return o + "?" + serialize(n) }, query2Object: function(e, i) { var t = e.split(i),
                o = {}; for (var n = 0; n < t.length; n++) { var a = t[n],
                    c = (a || "").split("="),
                    r = c.shift(); if (r) o[decodeURIComponent(r)] = decodeURIComponent(c.join("="));
                else; } return o }, isObject: function(e) { return "[object object]" === {}.toString.call(e).toLowerCase() }, isFunction: function(e) { return "[object function]" === {}.toString.call(e).toLowerCase() || "[object asyncfunction]" === {}.toString.call(e).toLowerCase() }, isArray: function(e) { return "[object array]" === {}.toString.call(e).toLowerCase() }, notification: function() { var e, i; return function(t) { if (e) { clearTimeout(i);
                    e.close() } if (window.Notification && "granted" !== window.Notification.permission) Notification.requestPermission(); if (window.Notification && "denied" != window.Notification.permission) { e = new Notification(t.notify, { tag: t.tag, body: t.body, icon: t.icon.indexOf("http") > -1 ? t.icon : window.__YSFSDKADR__ + t.icon });
                    util.playAudio();
                    e.onclick = function() { e && e.close();
                        window.focus();
                        ysf.openLayer();
                        ysf.NotifyMsgAndBubble({ category: "clearCircle" }) };
                    i = window.setTimeout(function() { e.close() }, 2e4) } } }(), playAudio: function() { if (window.__YSFSDKADR__) { var e = document.createElement("audio");
                e.src = "//ysf.nosdn.127.net/webapi/38a7410cdf36ef88290e0136e0f86998"; return function() { e.play() } } }(), encode: function(e, i) { i = "" + i; if (!e || !i) return i || "";
            else return i.replace(e.r, function(i) { var t = e[!e.i ? i.toLowerCase() : i]; return null != t ? t : i }) }, escape: function() { var e = /<br\/?>$/,
                i = { r: /\<|\>|\&|\r|\n|\s|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "\n": "<br/>", "\r": "" }; return function(t) { t = util.encode(i, t); return t.replace(e, "<br/><br/>") } }(), unescape: function() { var e = { r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi, "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " ", "&#39;": "'", "&quot;": '"', "<br/>": "\n" }; return function(i) { return util.encode(e, i) } }(), replaceRichAndUnescape: function(e) { var i = /<img[^>]+>/g;
            e = e.replace(i, "[" + (local.IMAGE || "图片") + "]"); var t = /<\/?[^>]*>/g;
            e = e.replace(t, ""); return util.unescape(e) }, consoleError: function(e) { window.console && window.console.error(e) }, consoleWarn: function(e) { window.console && window.console.warn(e) }, getToday: function() { var e = new Date; return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate() }, Base64: function() { _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            this.encode = function(e) { var i = ""; var t, o, n, a, c, r, s; var l = 0;
                e = _utf8_encode(e); for (; l < e.length;) { t = e.charCodeAt(l++);
                    o = e.charCodeAt(l++);
                    n = e.charCodeAt(l++);
                    a = t >> 2;
                    c = (3 & t) << 4 | o >> 4;
                    r = (15 & o) << 2 | n >> 6;
                    s = 63 & n; if (isNaN(o)) r = s = 64;
                    else if (isNaN(n)) s = 64;
                    i = i + _keyStr.charAt(a) + _keyStr.charAt(c) + _keyStr.charAt(r) + _keyStr.charAt(s) } return i };
            this.decode = function(e) { var i = ""; var t, o, n; var a, c, r, s; var l = 0;
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); for (; l < e.length;) { a = _keyStr.indexOf(e.charAt(l++));
                    c = _keyStr.indexOf(e.charAt(l++));
                    r = _keyStr.indexOf(e.charAt(l++));
                    s = _keyStr.indexOf(e.charAt(l++));
                    t = a << 2 | c >> 4;
                    o = (15 & c) << 4 | r >> 2;
                    n = (3 & r) << 6 | s;
                    i += String.fromCharCode(t); if (64 != r) i += String.fromCharCode(o); if (64 != s) i += String.fromCharCode(n) }
                i = _utf8_decode(i); return i };
            _utf8_encode = function(e) { e = e.replace(/\r\n/g, "\n"); var i = ""; for (var t = 0; t < e.length; t++) { var o = e.charCodeAt(t); if (o < 128) i += String.fromCharCode(o);
                    else if (o > 127 && o < 2048) { i += String.fromCharCode(o >> 6 | 192);
                        i += String.fromCharCode(63 & o | 128) } else { i += String.fromCharCode(o >> 12 | 224);
                        i += String.fromCharCode(o >> 6 & 63 | 128);
                        i += String.fromCharCode(63 & o | 128) } } return i };
            _utf8_decode = function(e) { var i = ""; var t = 0; var o = c1 = c2 = 0; for (; t < e.length;) { o = e.charCodeAt(t); if (o < 128) { i += String.fromCharCode(o);
                        t++ } else if (o > 191 && o < 224) { c2 = e.charCodeAt(t + 1);
                        i += String.fromCharCode((31 & o) << 6 | 63 & c2);
                        t += 2 } else { c2 = e.charCodeAt(t + 1);
                        c3 = e.charCodeAt(t + 2);
                        i += String.fromCharCode((15 & o) << 12 | (63 & c2) << 6 | 63 & c3);
                        t += 3 } } return i } }, throttleDebounce: function(e, i, t) { var o, n, a, c; var r = null; var s = null; var l = 0; var m = Date.now || function() { return (new Date).getTime() }; if (!t) t = {}; var f = function() { l = t.leading === !1 ? 0 : m();
                r = null;
                a = e.apply(o, n); if (!r) o = n = null }; var d = function() { var t = m() - c; if (t < i && t >= 0) s = setTimeout(d, i - t);
                else { s = null;
                    a = e.apply(o, n); if (!s) o = n = null } }; return function() { var d = m();
                c = d; if (!l && t.leading === !1) l = d; var u = i - (d - l);
                o = this;
                n = arguments; if (u <= 0 || u > i) { if (r) { clearTimeout(r);
                        r = null }
                    l = d;
                    a = e.apply(o, n); if (!r) o = n = null } else { if (!r && t.trailing !== !1) r = setTimeout(f, u); if (!s) s = setTimeout(f, i) } return a } }, loadJS: function(e, i) { var t = document.createElement("script"),
                o = i || function() {};
            t.type = "text/javascript";
            t.async = !1; if (t.readyState) t.onreadystatechange = function() { if ("loaded" == t.readyState || "complete" == t.readyState) { t.onreadystatechange = null;
                    o() } };
            else t.onload = function() { o() };
            t.src = e;
            document.getElementsByTagName("head")[0].appendChild(t) }, includes: function(e, i) { return String(e).indexOf(i) > -1 } }; var corpStatus = !0; var winParam = {}; var cache = {}; var configKeys = []; var proxy; var chatProxy; var layerCnt; var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; var firstBtnClick = !0; var hasConnected = !1; var connectTimer; var doConnectInterval = 5e3; var CircleNumberFlag = 0; var msgSessionIds = []; var getUnreadTimer; var unreadPollingInterval = 5e3; var inited = !1; var callbacksBeforeLoad = []; var cachedArgs = []; var dvcswitched = !1; var callbacksBeforeLoadIsRun = !1; var initChatProxyBuild = !1; var chatProxySendConnect = !1; var maxTemplateId; var bodyscrollTop = 0; if (window.ysf && window.ysf.a) cachedArgs = window.ysf.a; if (window.ysf) var RESROOT = window.ysf.RESROOT;
    window.ysf = function() { try { var e = arguments[0],
                i = Array.prototype.slice.call(arguments, 1); return execEvent(e, i) } catch (t) {} };
    ysf.ROOT = window.__YSFSDKADR__ || "";
    ysf.RESROOT = RESROOT; var each = function(e, i) { if (e && i)
            for (var t in e)
                if (e.hasOwnProperty(t)) i.call(null, t, e[t]) }; var rand = function(e) { if (e) return "ysf-" + e; var i = []; for (var t = 0, o; t < 20; ++t) { o = Math.floor(Math.random() * chars.length);
            i.push(chars.charAt(o)) } return i.join("").toLowerCase() }; var initPageId = function(e) { e = e || 10; var i = []; for (var t = 0, o; t < e; ++t) { o = Math.floor(Math.random() * chars.length);
            i.push(chars.charAt(o)) } return (new Date).getTime() + i.join("") }; var migrate = function() { var e; if (/YSF_UID\s*=\s*(.*?)(?=;|$)/i.test(document.cookie)) e = RegExp.$1; if (e) localStorage.setItem("YSF_UID", e); var e; if (/YSF_LAST\s*=\s*(.*?)(?=;|$)/i.test(document.cookie)) e = RegExp.$1; if (e) localStorage.setItem("YSF_LAST", e); var i = new Date(1990, 11, 30).toGMTString();
        document.cookie = "YSF_UID=;path=/;expires=" + i;
        document.cookie = "YSF_LAST=;path=/;expires=" + i }; var cmap = { ack: function(e) { cache.timestamp = parseInt(e, 10); if (cache.onackdone) { cache.onackdone();
                delete cache.onackdone } }, rdy: function(e) { setTimeout(function() { syncProfile({ local: 1 }) }, 100) } }; var wrap = function() { var e = document.createElement("div"),
            i = e.style,
            t = { top: 0, left: 0, visibility: "hidden", position: "absolute", width: "1px", height: "1px" };
        each(t, function(e, t) { i[e] = t });
        document.body.appendChild(e); return e }; var merge = function(e) { each(e, function(e, i) { cache[e] = i }) }; var refresh = function(e) { e = e || ""; var i = device(),
            t = lastUID(),
            o = getUuid(); if (!i || "" == e && "" != t) { i = e || i || rand(e);
            sendMsg("synckey:" + i) }
        cache.device = i;
        cache.uuid = o || rand();
        localStorage.setItem("YSF-" + cache["appKey"].toUpperCase() + "-UID", e || i);
        localStorage.setItem("YSF-" + cache["appKey"].toUpperCase() + "-LAST", e || "");
        localStorage.setItem("YSF-" + cache["appKey"].toUpperCase() + "-UUID", cache.uuid) }; var serialize = function(e, i) { var t = [];
        each(e, function(e, o) { if (i && void 0 == o);
            else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(o)) }); return t.join("&") }; var device = function() { return localStorage.getItem("YSF-" + cache["appKey"].toUpperCase() + "-UID") || "" }; var getUuid = function() { return localStorage.getItem("YSF-" + cache["appKey"].toUpperCase() + "-UUID") }; var lastUID = function() { return localStorage.getItem("YSF-" + cache["appKey"].toUpperCase() + "-LAST") || "" }; var updateDevice = function() { cache.device = rand();
        localStorage.setItem("YSF-" + cache["appKey"].toUpperCase() + "-UID", cache.device);
        sendMsg("synckey:" + cache.device) }; var sendChatMsg = function(e, i) { chatProxy.contentWindow.postMessage("" + e + ":" + JSON.stringify(i), "*") }; var visit = function() { if (cache.appKey) { var e = new Image,
                i = serialize({ uri: location.href, title: document.title, appkey: cache.appKey });
            e.src = ysf.DOMAIN + "webapi/user/accesshistory.action?" + i } }; var syncProfile = function(e) { sendMsg("KEY:" + cache.appKey || ""); var i = { title: document.title || "" }; var t = function(e, i) { var t = !1;
            e.forEach(function(e) { if (e.key == i) t = !0 }); return t };
        each({ uid: "", reallyUid: "", name: "", email: "", mobile: "", avatar: "", profile: "data", bid: "", level: "", authToken: "" }, function(e, t) { var o = cache[t] || cache[e]; if (o) i[e] = o });
        each({ avatar: local.AVATAR || "头像" }, function(e, o) { try { if (!i[e]) return; var n = JSON.parse(i["profile"] || "[]"),
                    a = n.length; if (!t(n, e)) { n.push({ key: e, value: i[e], index: a, label: o });
                    i["profile"] = JSON.stringify(n) } } catch (c) { util.consoleError("parse profile error: [crm]" + e, c) } });
        i.referrer = cache.referrer || location.href;
        i.title = cache.title || "";
        i.landPage = localStorage.getItem("DA-LANDPAGE") || "";
        i.landPageTitle = localStorage.getItem("DA-LANDPAGE-TITLE") || "";
        i.landPageReferrer = localStorage.getItem("DA-LANDPAGE-REFERRER") || "";
        i.sessionInfo = cache.sessionInfo || "";
        i.deviceId = cache.uid || cache.device;
        sendMsg("USR:" + serialize(i)); var o = navigator.userAgent; if (e && e.bid || cache.bid) childMerchantsIsOpen(e && e.bid || cache.bid, syncProfileFun.bind(this, e, i));
        else syncProfileFun(e, i) }; var syncProfileFun = function(e, i) { if (e.upToServer && (util.isIOSorSafari() || util.isFirefox() || !util.isFrameModule()) || window.__YSFISUPINFOTOSERVER__) { var t = [{ key: "userInfo", value: JSON.stringify(i) }]; if (1 === e.local) setTimeout(function() { if (!cache.uid) reportInfo(t, e.success, e.error, e.local) }, 200);
            else reportInfo(t, e.success, e.error, e.local) } else if (util.isFunction(e.success)) e.success() }; var syncCustomProfile = function(e) { sendMsg("PRODUCT:" + serialize(e.data, !0)); if (util.isIOSorSafari() || window.__YSFISUPINFOTOSERVER__ || util.isFirefox() || !util.isFrameModule()) reportInfo([{ key: "orderInfo", value: JSON.stringify(e.data) }], e.success, e.error);
        else if (util.isFunction(e.success)) e.success() }; var syncCardInfoProfile = function(e) { sendMsg(JSON.stringify({ data: e.data, appkey: cache.appKey, type: "cardMessage" })); if (util.isIOSorSafari() || window.__YSFISUPINFOTOSERVER__ || util.isFirefox() || !util.isFrameModule()) reportInfo([{ key: "cardInfo", value: JSON.stringify(e.data) }], e.success, e.error);
        else if (util.isFunction(e.success)) e.success() }; var syncWebAnalytics = function() { if (window.__YSFDASWITCH__) { var e = { ak: cache.appKey, dv: device(), si: "", su: encodeURIComponent(document.referrer), cup: encodeURIComponent(location.href), cy: "", lp: localStorage.getItem("DA-LANDPAGE") || "", tm: (new Date).getTime() };
            sendMsg("WEBANALYTICS:" + serialize(e)); if (util.isIOSorSafari() || window.__YSFISUPINFOTOSERVER__ || util.isFirefox() || !util.isFrameModule()) reportInfo([{ key: "analyticInfo", value: JSON.stringify(e) }]) } }; var sendMsg = function(e) { try { proxy.contentWindow.postMessage(e, "*") } catch (i) { util.consoleError("proxy.contentWindow.postMessage---error") } }; var canSendMsg = function() { if (proxy.contentWindow && proxy.contentWindow.postMessage) return !0;
        else return !1 }; var msgNotifyLock = function() { var e = null; return function(e, i) { setTimeout(function() { var t = ("YSFMSG-" + cache["appKey"] + "-" + e.id).toUpperCase(); if (null == window.localStorage.getItem(t)) { window.localStorage.setItem(t, 1);
                    i(!0) }
                i(!1) }, 100 * cache["dvcTimer"]) } }(); var receiveMsg = function(e) { if (e.origin == ysf.ROOT || "" == ysf.ROOT) { var i = []; if ("string" == typeof e.data) i = e.data.split(":"); var t = i.shift(); if ("pkg" != t) { var o = cmap[(t || "").toLowerCase()]; if (o) o(i.join(":")) } else receivePkg(JSON.parse(i.join(":"))) } }; var receivePkg = function(e) { var i = { notify: function(e) { var i = "YSF-" + device() + "-MSGNUMBERS";
                msgNotifyLock(e, function(t) { var o = Number(window.localStorage.getItem(i) || 0),
                        n = t ? ++o : o;
                    cache["notifyContent"] = e;
                    cache["notifyNumber"] = n; if (t) ysf._unread(ysf.getUnreadMsg());
                    ysf.NotifyMsgAndBubble({ category: "notifyCircle", data: { circleNum: n, notifyCnt: e.content, type: e.type } }) }) }, winfocus: function(e) { util.notification(e) }, closeIframe: function(e) { var i = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO") || document.getElementById("YSF-PANEL-MOBILE"),
                    t = document.getElementById("YSF-BTN-HOLDER"),
                    o = document.getElementById("YSF-IFRAME-LAYER");
                i.className = "ysf-chat-layer";
                ysf.checkOpenLayerSize(i, !0); if (util.isMobilePlatform() && o) o.className = ""; if (util.isMobilePlatform() && i) { document.body.classList.remove("YSF-PANEL-BODY-FIXED");
                    document.body.scrollTop = bodyscrollTop }
                i.setAttribute("data-switch", 0); if (!util.isMobilePlatform() && i && ysf.inviteLayer.isInviteLayerShow()) ysf.inviteLayer.resetLayer(); if (e.closeType) { 1 == cache["dvcswitch"];
                    firstBtnClick = !0 } try { sendChatMsg("status", { layerOpen: 0 }) } catch (n) {} if (0 == cache["hidden"]) t.style.display = "block"; }, toggleLabel: function() { cache.winType = 3;
                initWinConfig();
                ysf.open(maxTemplateId);
                receivePkg({ category: "closeIframe" });
                cache.winType = 1;
                initWinConfig() }, leaveOk: function(e) { delete ysf.openInline.loadStatus; if (util.resetTimer) clearTimeout(util.resetTimer);
                util.resetTimer = setTimeout(function() { reset() }, 1e3); var i = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO") || document.getElementById("YSF-PANEL-MOBILE"); if (util.isMobilePlatform() && i) { document.body.classList.remove("YSF-PANEL-BODY-FIXED");
                    document.body.scrollTop = bodyscrollTop } }, pushMsg: function(e) { if (e.data.sdkAppend) { CircleNumberFlag += 1;
                    msgSessionIds.push(e.data.msgSessionId);
                    ysf.NotifyMsgAndBubble({ category: "notifyCircle", data: { circleNum: CircleNumberFlag, notifyCnt: e.data.content, type: "text" } }) } }, inputblur: function(e) { if (util.isMobilePlatform()) { document.body.scrollIntoView(!1); var i = document.documentElement.scrollTop || document.body.scrollTop;
                    window.scrollTo(0, Math.max(i - 1)) } }, inputonfocus: function(e) { var i = navigator.userAgent.toLowerCase(); var t = i.match(/cpu iphone os (.*?) like mac os/); if (t)
                    if (11 == parseInt(t[1].replace(/_/g, "."))) return;
                document.body.scrollTop = document.body.scrollHeight + 100 }, chatProxyBuild: function(e) { initChatProxyBuild = !0; if ("loaded" == ysf.openInline.loadStatus && !chatProxySendConnect && (util.isEdge() || util.isIe())) { chatProxySendConnect = !0; var i = layerCnt && layerCnt.getAttribute("data-switch"); if ("1" == i || 1 == cache["dvcswitch"]) sendChatMsg("doconnect", { doconnect: 1 }) } }, inviteModalClick: function() { if (util.isMobilePlatform()) { var e = "ysf-chat-mobile-invite-layer"; var i = document.querySelector("." + e); if (i) { i.classList.remove(e);
                        ysf.inviteLayer.inviteLayerHide() } } } }; var t = i[e.category]; if (t) t(e) }; var reset = function() { var e = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO") || document.getElementById("YSF-PANEL-MOBILE"),
            i = document.getElementById("YSF-BTN-HOLDER");
        document.body.removeChild(e);
        document.body.removeChild(i);
        ysf.init(cache["imgSrc"]);
        firstBtnClick = !0 }; var buildProxy = function() { if (!proxy) { if (window.addEventListener) window.addEventListener("message", receiveMsg, !1);
            else window.attachEvent("onmessage", receiveMsg);
            proxy = wrap();
            proxy.innerHTML = '<iframe style="height:0px; width:0px;" src="' + ysf.RESROOT + "res/delegate.html?" + +new Date + '"></iframe>';
            proxy = proxy.getElementsByTagName("IFRAME")[0];
            proxy.domain = document.domain;
            util.addLoadEventForProxy(function() { inited = !0;
                syncWebAnalytics(); if (!util.isMobilePlatform());
                ysf.analytics(window.__YSFDASWITCH__); if (util.isFrameModule()) { if (dvcswitched && !callbacksBeforeLoadIsRun) { callbacksBeforeLoadIsRun = !0; for (var e = 0; e < callbacksBeforeLoad.length; e++) { var i = callbacksBeforeLoad[e],
                                t = i.func,
                                o = i.arg;
                            t.apply(null, o) } } } else
                    for (var e = 0; e < callbacksBeforeLoad.length; e++) { var i = callbacksBeforeLoad[e],
                            t = i.func,
                            o = i.arg;
                        t.apply(null, o) } }) } }; var recordVisitorLeave = function(e) { var i = cache.appKey,
            t = device(),
            o = encodeURIComponent(location.href),
            n = (new Date).getTime(),
            a = encodeURIComponent(document.title),
            c = 1; var r = function() { try { n = (new Date).getTime(); var e = window.__YSFDAROOT__ + "?ak=" + i + "&dv=" + t + "&cup=" + o + "&tm=" + n + "&ct=" + a + "&lt=" + c + "&u=" + window.ysf.PAGEID;
                loadImage(e) } catch (r) {} }; if (e) r();
        else if (util.isMobilePlatform) util.addEvent(window, "pagehide", function() { r() });
        else util.addEvent(window, "beforeunload", function() { r() }) };
    ysf.analytics = function(e) { var i = cache.appKey,
            t = device(),
            o = "",
            n = encodeURIComponent(document.referrer),
            a = encodeURIComponent(location.href),
            c = "",
            r = localStorage.getItem("DA-LANDPAGE") || "",
            s = (new Date).getTime(),
            l = encodeURIComponent(document.title),
            m = 0; var f = location.hostname; if (document.referrer.indexOf(f) == -1) { r = encodeURIComponent(location.href);
            r = r.slice(0, 1e3);
            localStorage.setItem("DA-LANDPAGE", r);
            localStorage.setItem("DA-LANDPAGE-TITLE", document.title);
            localStorage.setItem("DA-LANDPAGE-REFERRER", n) } if (e) { var d = window.__YSFDAROOT__ + "?ak=" + i + "&dv=" + t + "&si=" + o + "&su=" + n + "&cup=" + a + "&tm=" + s + "&cy=" + c + "&lp=" + r + "&ct=" + l + "&lt=" + m + "&u=" + window.ysf.PAGEID;
            loadImage(d) } else if (window.__YSFVISITORRECORD__) { var d = window.__YSFDAROOT__ + "?ak=" + i + "&dv=" + t + "&cup=" + a + "&tm=" + s + "&ct=" + l + "&lt=" + m + "&u=" + window.ysf.PAGEID;
            loadImage(d) } if (window.__YSFVISITORRECORD__) recordVisitorLeave() }; var loadImage = function(e, i) { i = i || function() {}; var t = new Image;
        t.onerror = function() { util.consoleWarn("faild to load qa.gif") };
        t.onload = function() { i() };
        t.src = e;
        t.width = 1;
        t.height = 1; return t }; var initWinConfig = function() { var e = window.screen || {}; var i = { base: ",location=0,menubar=0,scrollbars=0,status=0,toolbar=0,resizable=0", layerNoInfo: { param: "" }, layerHasInfo: { param: "" } }; if (cache.bid) { i.winNoInfo = { width: 724, height: 575, left: Math.max(0, ((e.width || 0) - 724) / 2), top: Math.max(0, ((e.height || 0) - 575) / 2) };
            i.winHasInfo = { width: 944, height: 575, left: Math.max(0, ((e.width || 0) - 944) / 2), top: Math.max(0, ((e.height || 0) - 570) / 2) } } else { i.winNoInfo = { width: 600, height: 630, left: Math.max(0, ((e.width || 0) - 600) / 2), top: Math.max(0, ((e.height || 0) - 630) / 2) };
            i.winHasInfo = { width: 842, height: 632, left: Math.max(0, ((e.width || 0) - 840) / 2), top: Math.max(0, ((e.height || 0) - 630) / 2) } }
        i.winNoInfo.param = "top=" + i.winNoInfo.top + ",left=" + i.winNoInfo.left + ",width=" + i.winNoInfo.width + ",height=" + i.winNoInfo.height + i.base;
        i.winHasInfo.param = "top=" + i.winHasInfo.top + ",left=" + i.winHasInfo.left + ",width=" + i.winHasInfo.width + ",height=" + i.winHasInfo.height + i.base; if (!util.isMobilePlatform()) switch (cache["winType"]) {
            case 1:
                winParam = cache["corpInfo"] ? i.layerHasInfo : i.layerNoInfo;
                winParam.type = "layer"; break;
            case 3:
                winParam = { type: "url", param: "" }; break;
            default:
                winParam = cache["corpInfo"] ? i.winHasInfo : i.winNoInfo;
                winParam.type = "win" } else switch (cache["winMobileType"]) {
            case 2:
                winParam.type = "layer"; break;
            default:
                winParam = cache["corpInfo"] ? i.winHasInfo : i.winNoInfo;
                winParam.type = "win" } }; var createDvcTimer = function() { var e = localStorage.getItem("YSFDVC-" + cache.device),
            i = 0; if (null != e) i = Number(e) + 1;
        localStorage.setItem("YSFDVC-" + cache.device, i);
        cache.dvctimer = i }; var reportInfo = function() { var e = 0,
            i = 3; return function(t, o, n, a) { var c = serialize({ appKey: cache.appKey, timestamp: (new Date).getTime(), token: cache.uuid, local: a || 0 });
            util.ajax({ url: ysf.DOMAIN + "webapi/user/remoteStorage.action?" + c, method: "post", contentType: "json", data: t, success: function(e) { if (util.isFunction(o)) o() }, error: function(c) { console.info(c, "reportInfo err"); if (e < i) { e++;
                        reportInfo(t, o, n, a) } else if (util.isFunction(n)) n() } }) } }(); var getUnread = function() { getUnreadTimer && clearTimeout(getUnreadTimer); if (!cache.noUnreadPolling)
            if (!document.hidden) util.ajax({ url: ysf.DOMAIN + "webapi/user/getUnread.action", data: { appKey: cache.appKey, foreignId: cache.uid || "", deviceId: device(), bid: cache.bid || "", ts: (new Date).getTime() }, success: function(e) { ysf.HAS_MESSAGE_COUNT = e.count > 0;
                    cache["IN_SESSION"] = 1 === e.dvcSwitch;
                    updateUnread(e.count, e.lastMessage); if (e.count > 0) { var i = layerCnt && layerCnt.getAttribute("data-switch"); if ("1" == i) sendChatMsg("doconnect", { reconnect: 1 }) } if (e.needPolling) getUnreadTimer = setTimeout(getUnread, e.delay || unreadPollingInterval) }, error: function(e) { var i = unreadPollingInterval; if (e && e.result && e.result.delay) i = e.result.delay; if (!e || 8112 != e.code && 19104 != e.code && 14001 != e.code && 16001 != e.code && 8013 != e.code) getUnreadTimer = setTimeout(getUnread, i) } });
            else getUnreadTimer = setTimeout(getUnread, unreadPollingInterval) }; var updateUnread = function(e, i) { if (e > 0) { if (ysf.isInInviteLayerMode()) ysf.displayInviteLayer(!1);
            formatMessage(i); if (cache["notifyContent"] && i.time < cache["notifyContent"].time) return;
            cache["notifyContent"] = i;
            cache["notifyNumber"] = e;
            ysf.NotifyMsgAndBubble({ category: "notifyCircle", data: { circleNum: cache["notifyNumber"], notifyCnt: cache["notifyContent"].content, type: cache["notifyContent"].type } }) } else ysf.NotifyMsgAndBubble({ category: "clearCircle" }); var t = layerCnt && layerCnt.getAttribute("data-switch"); if ("1" != t) ysf._unread(ysf.getUnreadMsg()) }; var formatMessage = function() { var e = { image: function(e) { try { var i = JSON.parse(e.content);
                    e.content = i } catch (t) {} }, richtext: function(e) { try { var i = JSON.parse(e.content);
                    e.content = i.content } catch (t) { e.content = "[" + (local.RICHTEXT || "富文本") + "]" }
                e.type = "rich" }, custom: function(e) { try { var i = JSON.parse(e.content);
                    e.content = i } catch (t) { e.content = "[" + (local.RICHTEXT || "富文本") + "]" } if (121 == e.content.cmd) e.type = "productinfo" }, staffInviteDetail: function(e) { try { var i = JSON.parse(e.content);
                    e.content = i.message } catch (t) { e.content = "[" + (local.EVALUATIONINVITATION || "评价邀请") + "]" } }, userJoinEvaluate: function(e) { try { var i = JSON.parse(e.content);
                    e.content = i.message } catch (t) { e.content = "[" + (local.EVALUATIONTHANK || "评价感谢") + "]" } } };
        e["file"] = e["image"]; return function(i) { if (e[i.type]) e[i.type](i) } }(); var formatSessionList = function(e) { var i = []; if (!util.isArray(e) || !e.length) return i;
        e.forEach(function(e) { if (!e.lastMessage) e.lastMessage = { content: "", fromUser: 0, time: e.endTime == -1 ? new Date.getTime : e.endTime, type: "custom" }; if ("richtext" === e.lastMessage.type) try { var i = JSON.parse(e.lastMessage.content);
                i.content = util.replaceRichAndUnescape(i.content);
                e.lastMessage.content = JSON.stringify(i) } catch (t) {} }); return e }; var getSessionList = function() { var e = 0,
            i = 1e5; var t = 0,
            o = 3; return function(n, a) { util.ajax({ url: ysf.DOMAIN + "webapi/user/platform/session.action", data: { appKey: cache.appKey, offset: e, limit: i, total: !0, u: cache.uid }, method: "post", success: function(e) { var i = formatSessionList(e); if (util.isFunction(n)) n(i) }, error: function(e) { if (!e || 200 !== e.code)
                        if (t < o) { t++;
                            getSessionList(n, a) } else if (util.isFunction(a)) a() } }) } }();
    ysf.style = function(e) { if (e) { var i = document.getElementsByTagName("head")[0] || document.body,
                t = document.createElement("style");
            t.type = "text/css";
            i.appendChild(t); if ("textContent" in t) t.textContent = e;
            else if (t.styleSheet) t.styleSheet.cssText = e } };
    ysf.openInline = function(e, i) { if ("loading" != ysf.openInline.loadStatus) { if ("loaded" == ysf.openInline.loadStatus && util.isFunction(i)) return i(); var t = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO") || document.getElementById("YSF-PANEL-MOBILE"); if (e && t) { ysf.openInline.loadStatus = "loading";
                e = util.mergeUrl(e, { w: cache["winType"] }); var o = function(e) { var i = document.createElement("iframe");
                    i.src = e;
                    i.id = "YSF-IFRAME-LAYER";
                    i.style.width = "100%";
                    i.style.height = "100%";
                    i.setAttribute("allowFullScreen", !0); return i };
                chatProxy = o(e);
                t.appendChild(chatProxy);
                util.addEvent(chatProxy, "load", function() { if (!util.isEdge() && !util.isIe()) { if (1 == cache["dvcswitch"]) { chatProxySendConnect = !0;
                            sendChatMsg("doconnect", { doconnect: 1 }) } } else if (1 == cache["dvcswitch"] && initChatProxyBuild) { chatProxySendConnect = !0;
                        sendChatMsg("doconnect", { doconnect: 1 }) }
                    ysf.openInline.loadStatus = "loaded";
                    ysf._onLayerload(); if (util.isFunction(i)) i() }) } } };
    ysf._$text2portrait = function() { var e = function(e) { var i = '<img class="portrait_icon" data-id="' + e.id + '" src="' + e.src + '" title="' + e.tag + '" alt="' + e.tag + '">'; return i }; var i = /(\[[^\]]+\])/gi; var t = window.__YSFSDKADR__ + window.__YSFAPPPATH__ + "res/portrait/emoji/"; var o = window.__YSF_EMOJI__; return function(n) { n = n.replace(/alt="(\[[^\]]+\])"/gi, 'alt=""'); var a = o.pmap; var c = o.pmap2;
            n = n.replace(i, function(i, n) { if (c[n]) { var r = e({ id: c[n], tag: n, src: t + a[c[n]].file }); return r } else if (o.mapEmojiLists && o.mapEmojiLists.length) { var s; for (var l = 0; l < o.mapEmojiLists.length; l++)
                        if (o.mapEmojiLists[l].tag == n) s = o.mapEmojiLists[l];
                    if (s)
                        if (s.tag == n) { var r = e({ id: n, tag: n, src: s.url }); return r } else return n;
                    else return n } else return n }); return n } }();
    ysf.showInviteLayerAuto = function(e) { if (e) window.setTimeout(function() { var i = !ysf.HAS_QIYU_OPEND && ysf.hasTodayInviteTimes(e) && e.invitePatternVo && 2 === e.invitePatternVo.mode && 1 === e.switchType && e.waitTime && !!cache["sessionInvite"] && 1 != cache["hidden"]; if (i) { ysf.setTodayShowInviteTimes();
                ysf.open({ invitePatternVo: e.invitePatternVo, inviteTemplateId: e.id }, ysf.INVITE_TPYE);
                ysf.inviteLayer.showInvite() } }, 1e3 * e.waitTime) };
    ysf.inviteLayer = function() { return { resetLayer: function() { ysf.reset();
                cache["INIITE_LAYER"] = null }, showInvite: function() { cache["INIITE_LAYER"] = 1 }, isInviteLayerShow: function() { return 1 == cache["INIITE_LAYER"] }, inviteLayerHide: function() { cache["INIITE_LAYER"] = null } } }();
    ysf.getImRoot = function(e) { var i = ysf.IMROOT; if (e === ysf.INVITE_TPYE && !util.isMobilePlatform()) { var t = "/client/iframe";
            i = ysf.ROOT + t } return i };
    ysf.entry = function(e) { var i = function() { var i = document.createElement("div"); if (window.__YSFTHEMELAYEROUT__) i.className = "layer-" + window.__YSFTHEMELAYEROUT__;
            i.setAttribute("id", "YSF-BTN-HOLDER"); if (1 == cache["hidden"]) i.style.display = "none"; var t = ysf.inviteText(e.inviteSetting); var o = "YSF-CUSTOM-ENTRY-" + window.__YSFTHEMELAYEROUT__; var n = "YSF-INVITE-IMG YSF_INVITE-IMG-" + window.__YSFTHEMELAYEROUT__; var a = t && t.replace(/(<img.*?>)/g, "[" + local.IMAGE + "]").replace(/<p><br><\/p>/g, "").replace(/<p>/g, "pStartElement").replace(/<\/p>/g, "pCloseElement").replace(/<.+?>/g, "").replace(/pStartElement/g, "<p>").replace(/pCloseElement/g, "</p>"); var c = ""; if (t) c = '<div class="YSF-INVITE-LAYER-WRAPPER" style="display: none"><div class="YSF-INVITE-LAYER-HEADER"><div class="YSF-INVITE-LAYER-HEADER-LEFT"><img class="YSF-INVITE-LAYER-AVATAR" src="' + e.inviteSetting.invitePatternVo.inviteAvatar + '" alt="" /><div class="YSF-INVITE-LAYER-KEFU-NAME">' + e.inviteSetting.invitePatternVo.realName + '</div></div><div id="YSF-ONLINE-INVITE-LAYER-CLOSE"></div></div><div class="YSF-INVITE-LAYER-RICHTEXT">' + ysf._$text2portrait(a) + '</div></div><div id="YSF-INVITE-LAYER-WRAPPER-ENTRY" style="display: none"><div class="YSF-LAYER-ENTRY-CIRCLE"></div><img class="' + n + '" src="' + e.src + '"/></div>';
            i.innerHTML = c + '<div id="' + o + '" class="YSF-CUSTOM-ENTRY"><img src="' + e.src + '"/></div>';
            i.onclick = function() { if (ysf.isInInviteLayerMode()) ysf.open({ invitePatternVo: e.inviteSetting.invitePatternVo, inviteTemplateId: e.inviteSetting.id });
                else ysf.open();
                ysf.HAS_QIYU_OPEND = !0;
                ysf.displayInviteLayer(!1) };
            document.body.appendChild(i); if (t) document.querySelector("#YSF-ONLINE-INVITE-LAYER-CLOSE").onclick = function(e) { e.stopPropagation();
                ysf.displayInviteLayer(!1);
                ysf.INVITE_REJECT = !0;
                setTimeout(function() { ysf.displayInviteLayer(!0) }, 1e3 * inviteSetting.intervalTime) }; if (e.inviteSetting && 1 === e.inviteSetting.switchType && e.inviteSetting.waitTime) setTimeout(function() { ysf.displayInviteLayer(!0) }, 1e3 * e.inviteSetting.waitTime); return i }; var t = function(e) { var i = document.createElement("span");
            i.setAttribute("id", "YSF-BTN-CIRCLE");
            e.appendChild(i) }; var o = function(e) { var i = document.createElement("div"),
                t = document.createElement("div"),
                o = document.createElement("span"),
                n = document.createElement("span");
            i.setAttribute("id", "YSF-BTN-BUBBLE");
            t.setAttribute("id", "YSF-BTN-CONTENT");
            o.setAttribute("id", "YSF-BTN-ARROW");
            n.setAttribute("id", "YSF-BTN-CLOSE");
            n.onclick = function(e) { e.stopPropagation();
                e.preventDefault();
                ysf.NotifyMsgAndBubble({ category: "clearCircle" }) };
            e.appendChild(i);
            i.appendChild(t);
            i.appendChild(o);
            i.appendChild(n) }; var n = i();
        t(n);
        o(n) };
    ysf.hasTodayInviteTimes = function(e) { var i = "YSF_INVITE_SHOW_TIMES"; var t = JSON.parse(localStorage.getItem(i) || "{}")[util.getToday()] || 0; var o = e && 1 === e.switchType && (0 === t || 1 === e.rejectType && (!e.timesLimitType || e.timesLimit > t) || 0 === e.rejectType && !ysf.INVITE_REJECT && (!e.timesLimitType || e.timesLimit > t)); return o };
    ysf.setTodayShowInviteTimes = function() { var e = "YSF_INVITE_SHOW_TIMES"; var i = JSON.parse(localStorage.getItem(e) || "{}"); var t = util.getToday(); var o = {};
        o[t] = i[t] ? i[t] + 1 : 1;
        localStorage.setItem(e, JSON.stringify(o));
        util.ajax({ url: ysf.DOMAIN + "webapi/invite/num", method: "get", data: { appKey: cache.appKey }, success: function(e) { console.log("[success]会话邀请次数统计接口") }, error: function(e) { console.log("[err]会话邀请次数统计接口", e) } }) };
    ysf.inviteText = function(e) { var i = e && e.invitePatternVo; var t = ""; if (i) t = 0 === i.robotSwitch ? i.humanWelcomePrompt : i.robotWelcomePrompt; return t };
    ysf.isInInviteLayerMode = function() { return document.querySelector(".YSF-INVITE-LAYER-WRAPPER") && "none" !== document.querySelector(".YSF-INVITE-LAYER-WRAPPER").style.display };
    ysf.isInvitedLayer = function() { var e = ysf.inviteText(window.inviteSetting); var i = window.inviteSetting && window.inviteSetting.invitePatternVo && 1 === window.inviteSetting.invitePatternVo.mode && e && ysf.hasTodayInviteTimes(window.inviteSetting) && !ysf.HAS_MESSAGE_COUNT && !cache["IN_SESSION"] && !ysf.HAS_QIYU_OPEND && !!cache["sessionInvite"]; return i };
    ysf.displayInviteLayer = function(e) {
        function i(e) { return e ? "block" : "none" }
        e = e && ysf.isInvitedLayer(); if (e) ysf.setTodayShowInviteTimes(); var t = document.querySelector("#YSF-BTN-HOLDER"); var o = "#YSF-CUSTOM-ENTRY-" + window.__YSFTHEMELAYEROUT__; var n = document.querySelector(".YSF-INVITE-LAYER-WRAPPER"); var a = document.querySelector("#YSF-INVITE-LAYER-WRAPPER-ENTRY"); var c = document.querySelector(o); var r = document.querySelector("#YSF-BTN-CIRCLE"); var s = document.querySelector("#YSF-BTN-BUBBLE"); if (ysf.inviteText(window.inviteSetting)) { n.style.display = i(e);
            a.style.display = i(e) }
        c.style.display = i(!e); if (e) { t.style.maxHeight = "none";
            t.style.maxWidth = "none";
            r.style.display = i(!1);
            s.style.display = i(!1) } };
    ysf.entryPanel = function(e, i) { var t = document.createElement("div"),
            o = util.isFrameModule() ? 0 : 1; if (util.isMobilePlatform()) { t.setAttribute("id", "YSF-PANEL-MOBILE");
            t.onclick = function() { if (!ysf.inviteLayer.isInviteLayerShow()) receivePkg({ category: "closeIframe" }) } } else parseInt(e) ? t.setAttribute("id", "YSF-PANEL-CORPINFO") : t.setAttribute("id", "YSF-PANEL-INFO");
        t.className = "ysf-chat-layer";
        document.body.appendChild(t);
        t.setAttribute("data-switch", o);
        layerCnt = t; try { sendChatMsg("status", { layerOpen: o }) } catch (n) {}
        createDvcTimer(); if (cache.preloadIframe) ysf.openInline(ysf.url()); if (i && util.isFunction(i.success)) i.success() };
    ysf.invite = function() { var e, i, t, o = document.createDocumentFragment(); var n = function() { if (!e) { e = document.createElement("div");
                e.className = "ysf-online-invite-wrap"; if (t.style && t.style.type) { e.innerHTML = '<div class="ysf-online-invite" style="cursor:default;width:' + t.style.bdWidth + "px;height:" + t.style.bdHeight + "px;margin-top:" + -t.style.bdHeight / 2 + 'px"><div></div><div class="close custom" title="' + (local.CLOSE || "关闭") + '"></div><img class="ysf-online-invite-img"/></div>'; var i = e.childNodes[0],
                        o = i.childNodes,
                        n = o[0]; if (util.isArray(t.style.oprs)) { var s = null,
                            l = null; for (var m = 0; m < t.style.oprs.length; m++) { s = t.style.oprs[m];
                            l = document.createElement("a"); if (s) { l.style.position = "absolute";
                                l.style.cursor = "pointer";
                                l.style.height = s.height + "px";
                                l.style.width = s.width + "px";
                                l.style.top = s.top + "px";
                                l.style.left = s.left + "px"; if (3 == s.type) l.onclick = c;
                                else if (2 == s.type) l.onclick = function(e) { return function() { ysf.open({ invited: 1, templateId: e });
                                        r() } }(s.tplid);
                                else if (1 == s.type) { l.href = s.url;
                                    l.target = "_blank" }
                                n.appendChild(l) } else; } }
                    o[1].onclick = c;
                    o[2].onload = function() { window.setTimeout(a, 100) } } else if (t.style) { e.innerHTML = '<div class="ysf-online-invite"><div class="text"></div><div class="close" title="' + (local.CLOSE || "关闭") + '"></div><img/></div>'; var i = e.childNodes[0],
                        o = i.childNodes,
                        f = o[0]; if ("innerText" in f) f.innerText = t.style.welcomeText;
                    else f.textContent = t.style.welcomeText;
                    i.onclick = function() { ysf.open({ invited: 1 });
                        r() };
                    o[1].onclick = c;
                    o[2].onload = function() { window.setTimeout(a, 100) } } } }; var a = function() { e.style.visibility = "visible" }; var c = function(e) { e = e || window.event || {}; if (e.stopPropagation) e.stopPropagation();
            else e.cancelBubble = !0;
            r();
            ysf.INVITE_REJECT = !0; if (0 != t.rejectType) window.setTimeout(s, 1e3 * t.intervalTime) }; var r = function() { o.appendChild(e);
            e.getElementsByTagName("IMG")[0].src = ysf.RESROOT + "res/nej_blank.gif" }; var s = function() { if (cache["sessionInvite"] && ysf.hasTodayInviteTimes(window.inviteSetting)) { ysf.setTodayShowInviteTimes();
                n();
                e.style.visibility = "hidden";
                document.body.appendChild(e);
                e.getElementsByTagName("IMG")[0].src = t.style && t.style.type ? t.style.bdImageUrl : ysf.RESROOT + "res/invite/1/bg.png" } }; return function(e) { if (!e || !e.invitePatternVo || 0 === e.invitePatternVo.mode) { if (!t) { t = e || {}; if (util.isMobilePlatform()) t.style = t.h5Style } var i = function() { window.setTimeout(s, 1e3 * (t.waitTime || 15)) }; if (cache.timestamp) i();
                else cache.onackdone = i } } }();
    ysf.checkOpenLayerSize = function(e, i) { var t = 360,
            o = 500; if (cache.layerSize && !util.isMobilePlatform()) { var n = cache.layerSize; var a = parseInt(n.height) > o; var c = parseInt(n.width) > t; if (!i) { if (c) e.style.width = util.includes(n.width, "px") ? n.width : n.width + "px"; if (a) e.style.height = util.includes(n.height, "px") ? n.height : n.height + "px"; } else { c && (e.style.width = 0);
                a && (e.style.height = 0) } } };
    ysf.openLayer = function() { return function(e) { var i = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO") || document.getElementById("YSF-PANEL-MOBILE"),
                t = document.getElementById("YSF-BTN-HOLDER"),
                o = document.getElementById("YSF-IFRAME-LAYER"); if (i) { t.style.display = "none";
                i.className = "ysf-chat-layer ysf-chat-layeropen";
                ysf.checkOpenLayerSize(i); if (util.isMobilePlatform() && o) o.className = "ysf-chat-mobile-layeropen" + (e === ysf.INVITE_TPYE ? " ysf-chat-mobile-invite-layer" : "");
                bodyscrollTop = document.body.scrollTop || document.documentElement.scrollTop; if (document.getElementById("YSF-PANEL-MOBILE")) { document.body.classList.add("YSF-PANEL-BODY-FIXED");
                    document.getElementById("YSF-PANEL-MOBILE").addEventListener("touchmove", function(e) { e.stopPropagation() }) }
                i.setAttribute("data-switch", 1); try { sendChatMsg("status", { layerOpen: 1 }) } catch (n) {} } } }();
    window.windowurl = "";
    ysf.openWin = function() { return function(e, i) { if (util.isMobilePlatform()) window.location.href = e;
            else { window.windowurl = window.open(e, "YSF_SERVICE_" + (cache.appKey || "").toUpperCase(), i.param); if (!window.windowurl && !util.isIe()) window.location.href = e } } }();
    ysf.openUrl = function() { return function(e, i) { var t = e.replace(/\/iframe/g, "");
            window.windowurl = window.open(t, "YSF_SERVICE_" + (cache.appKey || "").toUpperCase(), i.param); if (!window.windowurl && !util.isIe()) window.location.href = t } }();
    ysf.close = function() { if (window.windowurl) window.windowurl.close();
        else if ("layer" === winParam.type) { var e = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO") || document.getElementById("YSF-PANEL-MOBILE"),
                i = document.getElementById("YSF-BTN-HOLDER");
            delete ysf.openInline.loadStatus;
            document.body.removeChild(e);
            document.body.removeChild(i);
            firstBtnClick = !0 } };
    ysf.NotifyMsgAndBubble = function(e) { var i = { clearCircle: function(e) { var i = "YSF-" + device() + "-MSGNUMBERS",
                    t = document.getElementById("YSF-BTN-CIRCLE"),
                    o = document.getElementById("YSF-BTN-BUBBLE");
                o && (o.style.display = "none");
                t && (t.style.display = "none");
                localStorage.setItem(i, 0);
                cache["notifyNumber"] = 0;
                cache["notifyContent"] = "";
                CircleNumberFlag = 0 }, notifyCircle: function(e) { var i = "YSF-" + device() + "-MSGNUMBERS";
                localStorage.setItem(i, e.data.circleNum); var t = document.getElementById("YSF-BTN-BUBBLE"),
                    o = document.getElementById("YSF-BTN-CONTENT"),
                    n = document.getElementById("YSF-BTN-CIRCLE"); var a = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO") || document.getElementById("YSF-PANEL-MOBILE"); var c = { image: function(e) { return "[" + (local.IMAGE || "图片") + "]" }, audio: function(e) { return "[" + (local.AUDIO || "音频") + "]" }, video: function(e) { return "[" + (local.VIDEO || "视频") + "]" }, file: function(e) { return "[" + (local.FILE || "文件") + "]" + e.name }, text: function(e) { return e }, rich: function(e) { return util.replaceRichAndUnescape(e) }, productinfo: function(e) { return "[" + (local.PRD_LINK || "商品链接") + "]" }, staffInviteDetail: function(e) { return util.replaceRichAndUnescape(e) }, userJoinEvaluate: function(e) { return util.replaceRichAndUnescape(e) } }; var r = util.isFrameModule() && a && 0 == a.getAttribute("data-switch") && c[e.data.type] && 0 == cache["sdkCustom"]; if (!util.isFrameModule() || r) { n && (n.style.display = "block");
                    t && (t.style.display = "block");
                    n && (n.innerHTML = e.data.circleNum > 99 ? "99+" : e.data.circleNum);
                    o && (o.innerHTML = c[e.data.type](e.data.notifyCnt)) } } }; var t = i[e.category]; if (t) t(e) };
    ysf.getUnreadMsg = function() { return { type: cache["notifyContent"].type, message: cache["notifyContent"].content, total: cache["notifyNumber"] } };
    ysf.getConversationThrottle = util.throttleDebounce(function() { getSessionList(ysf._onConversation) }, 2e3);
    ysf.initNim = function() {
        function e(e) { var t = cache["yunxin-user"]; if (!t) cache["yunxin-user"] = e;
            else i(t, e) }

        function i(e, i) { each(i, function(i, t) { e[i] = t }); return e }

        function t(e) { var t = e.idClient.split("#")[0]; if (!t) { console.error("msg idClient without #", e.idClient, e); return e } return i(e, { id: e.idClient, bid: e.from, sessionid: t }) }

        function o(e, o) { console.log(e, o, "_cbReceiveMessage"); var c = { image: "file", audio: "file", video: "file" }; var r = { 60: !0, 90: !0, 95: !0, 72: !0, 200: !0, 65: !0, 203: !0, 121: !0, 59: !0 };
            e = t(e); if ("custom" != e.type) a(i(e, { content: e[c[e.type] || e.type], reallyType: e.type }));
            else { e.isOffline = o;
                n(e, r) } }

        function n(e, t, o) { var n = e.content || ""; var c = [9, 17, 59, 42, 1002, "-1000", 11056, 108, 11060]; try { n = JSON.parse(n); if (t && !t[n.cmd] && !o) return; if (~c.indexOf(n.cmd) || ~c.indexOf(o)) return; if (65 == n.cmd) { n.content = util.replaceRichAndUnescape(n.content);
                    e.content = JSON.stringify(n) } } catch (r) {} var s = n.sessionid || n.currentSessionId || n.workSheetTemplateVo && n.workSheetTemplateVo.sessionId;
            a(i(e, { cmd: n.cmd, sessionid: s })) }

        function a(e) { ysf._onSessionMessage(e); if (cache["onConversation"]) ysf.getConversationThrottle() }

        function c(i) { console.log(i, "_cbConnect2Yunxin"); if (i.ip) e({ ip: i.ip });
            j(_.CONNECTED);
            m() }

        function r(e) { var i = { 302: function() { console.error("连接失败") } }; var t = i[e.code]; if (util.isFunction(t)) t.call(this);
            else if ("string" == typeof t) i[t].call(this) }

        function s() { j(_.NULL) }

        function l(e) { e.sort(function(e, i) { return e.time > i.time });
            e.forEach(function(e) { o(e, !0) }) }

        function m() { var e = this; var i = function() { f({ content: { cmd: -1e3, deviceid: device() } }); if (e._timeout) clearTimeout(e._timeout);
                e._timeout = setTimeout(function() { i() }, h) };
            i() }

        function f(e) { ysf.nim.sendCustomSysMsg({ to: e.bid || g, cc: !0, filter: !0, scene: "p2p", content: JSON.stringify(e.content), done: e.done }) }

        function d() { ysf.nim && ysf.nim.disconnect();
            j(_.NULL) }

        function u() { return ~ysf.DOMAIN.indexOf("qytest.netease") } var _ = { NULL: 0, INIT: 1, CONNECTED: 2 }; var g = -1; var p = 3e3; var y = _.NULL; var h = 8e3; var v = function() { return { db: !1, syncBroadcastMsgs: !1, syncExtraTeamInfo: !1, syncFilter: !0, syncFriendUsers: !1, syncFriends: !1, syncRelations: !1, syncRoamingMsgs: !1, syncRobots: !1, syncSessionUnread: !1, syncStickTopSessions: !1, syncSuperTeamRoamingMsgs: !1, syncSuperTeams: !1, syncTeamMembers: !1, syncTeams: !1, defaultLinkUrl: "https://weblink-qiyu.netease.im", privateConf: { lbs_web: window.MIN_LBS }, onmsg: o, onerror: r, onconnect: c, ondisconnect: s, oncustomsysmsg: n, onofflinefiltermsgs: l } }(); var j = function(e) { cache["yinxin-state"] = e }; var I = function() { return cache["yinxin-state"] }; var w = function(e) { var i = cache["yunxin-user"] || {}; if (window.localStorage) { var t = "X-" + e.toUpperCase() + "-YSF-INFO",
                    o = localStorage.getItem(t); if (!o) return; var n = util.query2Object(o); if (n.uid) i.fid = n.uid;
                n.source = o; return n } }; var S = function(e) { try { return JSON.parse(e) } catch (i) { return null } }; var E = function(t, o) { if (o) { e(o);
                o.appKey = t;
                i(o, v);
                window.nim = ysf.nim = new NIM(o);
                getSessionList(ysf._getConversation)() } else window.setTimeout(C._$bind(this, appkey), p) }; var T = function(e, i) { util.ajax({ url: ysf.DOMAIN + "webapi/user/create.action?appKey=" + i, data: e, method: "post", fullResult: !0, contentType: "json", success: function(e) { var t = e.info;
                    e.result = { token: t.token, account: t.accid, exchange: t.exchange, bid: t.bid };
                    E(i, e.result) }, error: function(e) { console.log(e, "userCreate error") } }) }; var C = function(e) { var i = { deviceid: cache.uid || cache.device, appKey: e, token: cache.uuid || "" }; if (cache.uid) i.foreignid = cache.uid; if (cache.authToken) i.authtoken = cache.authToken;
            T(i, e) }; var N = function(e, i) { if (util.isArray(e) && util.isFunction(i)) { var t = e.length; var o = 0;
                e.forEach(function(e) { util.loadJS(e, function() { o++; if (o >= t) i() }) }) } }; return { _$connect: function(e) { d(); if (I() === _.NULL) { j(_.INIT); var i = ["//res.qiyukf.net/storage/NIM_Web_NIM_v9.8.103.js"];
                    N(i, function() { C(e) }) } }, _$disConnect: function() { d() } } }();
    ysf.config = function(e, i) { if (e) { e.reallyUid = e.uid;
            merge(e); if (!i) each(e, function(e) { if (configKeys.indexOf(e) < 0) configKeys.push(e) }); if (cache.appKey) { refresh(e.uid);
                syncProfile({ upToServer: !0, success: e.success, error: e.error, local: i || 0 });
                initWinConfig();
                getUnread(); if (cache["connectYunxin"]) ysf.initNim._$connect(cache["appKey"]) } } }; var childMerchantsIsOpen = function(e, i) { util.ajax({ url: ysf.DOMAIN + "webapi/user/company/get/getCorpStatus.action", method: "get", data: { appKey: cache.appKey, shopCode: e }, success: function(e) { corpStatus = e; if (util.isFunction(i)) i() }, error: function(e) { console.log("[err]平台企业子企业是否开启", e); if (util.isFunction(i)) i() } }) };
    ysf.url = function(e, i) { if (!cache.appKey) return ""; var t = { k: cache.appKey, u: cache.uid || "", d: device(), uuid: cache.uuid, gid: cache.groupid || 0, sid: cache.staffid || 0, qtype: cache.qtype || 0, welcomeTemplateId: cache.welcomeTemplateId || 0, dvctimer: cache.dvctimer || 0, robotShuntSwitch: cache.robotShuntSwitch || 0, hc: cache.hc || 0, robotId: cache.robotId || 0, pageId: ysf.PAGEID, shuntId: cache.shuntId || 0, ctm: (new util.Base64).encode(cache.uid + "--" + (new Date).getTime()), wxwId: cache.wxworkAppId || "", language: cache.language || "", isShowBack: cache.isShowBack || 0, shortcutTemplateId: cache.shortcutTemplateId || "" }; if (1 == cache.spkf) t.spkf = 1; if (cache.APPbackPop) t.APPbackPop = cache.APPbackPop; if (cache.APPBridgePermission) t.APPBridgePermission = cache.APPBridgePermission; if (i == ysf.INVITE_TPYE) t.isInvite = 1; if (window.sdkTemplateId) t.templateId = window.sdkTemplateId; if (window.shuntId) t.shuntId = window.shuntId; if (e && e.templateId) t.templateId = e.templateId; if (e && e.invited) t.invited = 1; if (e && e.invitePatternVo && i != ysf.INVITE_TPYE) { t.invited = 1;
            t.inviteTemplateId = e.inviteTemplateId;
            t.robotSwitch = e.invitePatternVo.robotSwitch;
            t.humanWelcomeTemplateId = e.invitePatternVo.welcomeTemplateId;
            t.robotId = e.invitePatternVo.robotId;
            t.welcomeTemplateId = e.invitePatternVo.robotWelcomeTemplateId;
            t.inviteGroupId = e.invitePatternVo.inviteGroupId } if (!util.isMobilePlatform() && 1 == window.__YSFWINTYPE__ && cache.layerSize && cache.layerSize.inputHeight) t.ipth = cache.layerSize.inputHeight; if (e && e.language) t.language = e.language; if (cache.unconfirm) t.unconfirm = cache.unconfirm; if (cache["debugger"]) t["debugger"] = cache["debugger"];
        each({ n: "name", e: "email", m: "mobile" }, function(e, i) { var o = cache[i]; if (o) t[e] = o }); if (cache.customSkin) each({ topbarBgColor: "topbarBgColor", chatPanelBgColor: "chatPanelBgColor", lMsgColor: "lMsgColor", rMsgColor: "rMsgColor", lMsgBgColor: "lMsgBgColor", rMsgBgColor: "rMsgBgColor", buttonColor: "buttonColor", buttonBgColor: "buttonBgColor", editorColor: "editorColor", editorBgColor: "editorBgColor", corpInfoColor: "corpInfoColor", corpInfoTitleColor: "corpInfoTitleColor", corpInfoBgColor: "corpInfoBgColor", tipColor: "tipColor", linkColor: "linkColor", borderColor: "borderColor" }, function(e, i) { var o = cache.customSkin[i]; if (o) t[e] = o });
        t.t = encodeURIComponent(cache.title || document.title); if ((e && e.bid || cache.bid) && corpStatus) { t.bid = e && e.bid || cache.bid; return ysf.getImRoot(i) + "/trade?" + serialize(t) } return ysf.getImRoot(i) + "?" + serialize(t) };
    ysf.track = function(e, i) { var t = cache.appKey,
            o = device(),
            n = encodeURIComponent(location.href),
            a = localStorage.getItem("DA-LANDPAGE") || "",
            c = (new Date).getTime(),
            r = e,
            s = "";
        desc = JSON.stringify(i), tp = 1; var l = function() { try { var e = window.__YSFDAROOT__ + "?ak=" + t + "&dv=" + o + "&cup=" + n + "&lp=" + a + "&tm=" + c + "&ct=" + r + "&lt=" + s + "&tp=" + tp + "&desc=" + desc + "&u=" + window.ysf.PAGEID;
                loadImage(e) } catch (i) {} };
        l() };
    ysf.logoff = function() { updateDevice();
        util.clearLocalItems(util.findLocalItems(/msgnumbers/gi));
        configKeys.forEach(function(e) { delete cache[e] }) };
    ysf.openByLink = function(e) { var i = ysf.url(); if (i) { e = e || {}; var t = e.target || e.srcElement; if (t && "A" == t.tagName) t.href = i } };
    ysf.product = function() { var e = function(e) { e.title = e.title && e.title.length > 100 ? e.title.slice(0, 100) : e.title;
            e.desc = e.desc && e.desc.length > 300 ? e.desc.slice(0, 300) : e.desc;
            e.note = e.note && e.note.length > 100 ? e.note.slice(0, 100) : e.note; var i = { pageId: ysf.PAGEID, title: e.title, desc: e.desc, picture: e.picture, url: e.url, note: e.note, show: e.show, sendByUser: e.sendByUser, sendProToRobot: e.sendProToRobot, actionText: e.actionText, actionTextColor: e.actionTextColor, cardType: e.cardType, goodsId: e.goodsId, goodsCId: e.goodsCId, goodsCName: e.goodsCName, intent: e.intent }; if (e.template) i.template = e.template; if (1 == i.sendByUser) { i.show = 1;
                i.auto = 0 } if (e.tags && util.isArray(e.tags)) i.tags = JSON.stringify(e.tags); if (e.orderId) i.orderId = e.orderId; return i }; return function(i) { var t = e(i); if (cache.bid) t.bid = cache.bid;
            syncCustomProfile({ data: t, success: i.success, error: i.error }) } }();
    ysf.cardMessage = function() { var e = function(e) { var i = { type: e.type, cards: e.cards || [], floatCards: e.floatCards || [], auto: 1 === e.sendByUser ? 0 : 1 }; if (1 === e.sendByUser) { if (e.actionText) i.actionText = e.actionText; if (e.actionTextColor) i.actionTextColor = e.actionTextColor; if (e.hideAction) i.hideAction = e.hideAction } return i }; return function(i) { if (cache.bid) t.bid = cache.bid; if (i.cards && 0 !== i.cards.length) { var t = e(i);
                syncCardInfoProfile({ data: t, success: i.success, error: i.error }) } else { console.error("cards is required");
                i.error && i.error("cards is required") } } }();
    ysf.open = function(e, i) { maxTemplateId = e; var t = ysf.url(e, i); if (t) { var o = i || winParam.type; switch (o) {
                case "win":
                    ysf.openWin(t, winParam); break;
                case "layer":
                    ysf.openInline(t, function() { var t = e && e.invitePatternVo && 2 == e.invitePatternVo.screenType && util.isMobilePlatform() ? "" : i;
                        ysf.openLayer(t); try { if (firstBtnClick && 0 == cache["dvcswitch"]) { sendChatMsg("doconnect", { doconnect: 1 });
                                firstBtnClick = !1 } } catch (o) {} if (0 == cache["dvcswitch"] && 1 == cache["pushswitch"] || CircleNumberFlag > 0) { sendChatMsg("dopushmsgread", { ids: msgSessionIds });
                            msgSessionIds = [] } if (!firstBtnClick && cache["notifyNumber"] > 0) sendChatMsg("doconnect");
                        ysf.NotifyMsgAndBubble({ category: "clearCircle" }) }); break;
                case "url":
                    ysf.openUrl(t, winParam) } } };
    ysf.init = function(e, i, t) { window.inviteSetting = i || {}; var o = function() { ysf.entry({ src: e, inviteSetting: i || {} }); var o = i && i.invitePatternVo && 2 === i.invitePatternVo.mode && 1 === i.switchType; if (util.isFrameModule() || o) ysf.entryPanel(cache["corpInfo"], t);
            ysf.showInviteLayerAuto(i) }; if (util.isFrameModule()) setTimeout(function() { util.ajax({ url: ysf.DOMAIN + "webapi/user/dvcSession.action?appKey=" + cache["appKey"] + "&d=" + cache["device"] + "&f=" + cache["uid"], method: "post", success: function(e) { dvcswitched = !0;
                    cache["dvcswitch"] = e.dvcSwitch;
                    cache["pushswitch"] = e.pushSwitch || 0;
                    cache["pushmsgid"] = e.batchIdList || 0; if ("mobileFrame" == util.isFrameModule()) cache["dvcswitch"] = 0;
                    o(); if (inited && !callbacksBeforeLoadIsRun) { callbacksBeforeLoadIsRun = !0; for (var i = 0; i < callbacksBeforeLoad.length; i++) { var t = callbacksBeforeLoad[i],
                                n = t.func,
                                a = t.arg;
                            n.apply(null, a) } } }, error: function() { dvcswitched = !0;
                    cache["dvcswitch"] = 0;
                    cache["pushswitch"] = 0;
                    o(); if (inited && !callbacksBeforeLoadIsRun) { callbacksBeforeLoadIsRun = !0; for (var e = 0; e < callbacksBeforeLoad.length; e++) { var i = callbacksBeforeLoad[e],
                                t = i.func,
                                n = i.arg;
                            t.apply(null, n) } } } }) }, 1e3);
        else { cache["dvcswitch"] = 0;
            cache["pushswitch"] = 0;
            o() } };
    ysf.reset = function(e) { var i = document.getElementById("YSF-PANEL-CORPINFO") || document.getElementById("YSF-PANEL-INFO") || document.getElementById("YSF-PANEL-MOBILE"),
            t = document.getElementById("YSF-BTN-HOLDER");
        delete ysf.openInline.loadStatus;
        document.body.removeChild(i);
        document.body.removeChild(t);
        ysf.init(cache["imgSrc"], window.inviteSetting, { success: e && e.success, error: e && e.error });
        firstBtnClick = !0 };
    util.addEvent(window, "beforeunload", function() { var e = "YSFDVC-" + cache["device"],
            i = "YSFMSG-" + cache["appKey"],
            t = Number(localStorage.getItem(e)); if (t > 0) localStorage.setItem(e, --t);
        util.clearLocalItems(util.findLocalItems(new RegExp(i, "ig"))) });
    ysf.on = function() { var e = { onload: "load", unread: 1 }; return function(e) { var i = Object.prototype.toString.call(e).slice(8, -1); if (/object/gi.test(i)) { for (var t in e)
                    if ("onload" == t && util.isFunction(e[t]))
                        if (!inited) util.addLoadEventForProxy(e[t]);
                        else e[t]();
                else if ("onLayerload" == t && util.isFunction(e[t]))
                    if ("loaded" == ysf.openInline.loadStatus) e[t]();
                    else ysf["_" + t] = e[t];
                else if (util.isFunction(ysf[t]) && util.isFunction(e[t])) ysf["_" + t] = e[t] } else util.consoleWarn("波比(｡･∀･)ﾉ: 请保持正确的监听姿势...") } }();
    ysf.getPushMessage = function(e) { sendChatMsg("dogetpushmsg", { ids: e }) };
    ysf._unread = function() {};
    ysf.unread = function() { return { type: cache["notifyContent"].type, message: cache["notifyContent"].content, total: cache["notifyNumber"] } };
    ysf._onLayerload = function() {};
    ysf.clearDragresize = function(e) { try { var i = window.location.hostname.split(".")[0]; var t = ["callcenter", "session", "qualitysession", "qualitycallsession", "worksheet", "callflow", "leave", "monitor", "usercenter"]; if (t.indexOf(e) > -1) util.clearLocalItems(util.findLocalItems(new RegExp(i + "-" + e, "ig")));
            else
                for (var o = 0; o < t.length; o++) util.clearLocalItems(util.findLocalItems(new RegExp(i + "-" + t[o], "ig"))) } catch (n) {} };
    ysf.setAuthToken = ysf.setToken = function(e) { cache["authToken"] = e;
        syncProfile({}) };
    ysf.pollAuthToken = function() { var e = 0; var i = -1; var t = 4; return function(o, n) { var a = function(t) { var a = t && t.authToken; if (a) { ysf.setAuthToken(t.authToken);
                    e = 0;
                    clearInterval(i);
                    i = setTimeout(function() { ysf.pollAuthToken(o, n) }, n.interval); if (util.isFunction(n.onsuccess)) n.onsuccess(t) } else util.consoleError("result has not token", t) }; var c = function(i) { if (e < t) { e++;
                        ysf.pollAuthToken(o, n) } if (util.isFunction(n.onerror)) n.onerror(i) },
                r = n.method || "GET";
            t = n.tryTime || 4; if (null !== n.interval) util.ajax({ url: o, method: r, data: n.data, success: a, error: c });
            else util.consoleError("pollauthtoken is not set interval", n) } }();
    ysf.onready = function(e) { util.isFunction(e) && e() };
    ysf.onunread = function(e) { ysf.on({ unread: e }) };
    ysf.onLayerload = function(e) { ysf.on({ onLayerload: e }) };
    ysf.getConversation = function(e) { ysf.on({ getConversation: e }) };
    ysf._getConversation = function() {};
    ysf.onConversation = function(e) { ysf.on({ onConversation: e });
        cache["onConversation"] = !0 };
    ysf._onConversation = function() {};
    ysf.onSessionMessage = function(e) { ysf.on({ onSessionMessage: e }) };
    ysf._onSessionMessage = function() {};! function() { each({ DOMAIN: ysf.ROOT + "/", IMROOT: function() { var e = "/client/iframe"; if (util.isMobilePlatform() && 2 === window.__YSFMODILEWINTYPE__) e = "/client";
                else if (!util.isMobilePlatform() && 1 == window.__YSFWINTYPE__) e = "/client/iframe";
                else e = "/client"; var i = ysf.ROOT + e; return i }(), RESROOT: ysf.ROOT + "/sdk/", INVITE_TPYE: "layer" }, function(e, i) { if (null == ysf[e]) ysf[e] = i });
        migrate();
        buildProxy();
        ysf.PAGEID = initPageId(); for (var e = 0; e < cachedArgs.length; e++) try { var i = cachedArgs[e],
                t = i[0],
                o = Array.prototype.slice.call(i, 1);
            execEvent(t, o) } catch (n) { util.consoleWarn(n) } }() }();
var __YSFOPTION__ = { corpInfo: Number('0'), winType: Number('3'), winMobileType: Number('3'), sdkCustom: 0, hidden: 0, preloadIframe: 0, appKey: '46fd99b33232e770b5a3853098888983' };
__YSFOPTION__.uid = '';
try { __YSFOPTION__.profile = JSON.stringify(__YSFOPTION__.profile); } catch (ex) { __YSFOPTION__.profile = ''; }
__YSFOPTION__.imgSrc = 'https://qiyukf.nosdn.127.net/sdk/res/kefu/custom/1.png';
__YSFOPTION__.sessionInvite = 1;
ysf.config(__YSFOPTION__, 1);
ysf.style(['#YSF-BTN-HOLDER{position: fixed;max-width:30px;max-height:120px;right: 30px; bottom: 24px; cursor: pointer; overflow: visible; filter: alpha(opacity=100);opacity:1;z-index: 9990}', '#YSF-BTN-HOLDER:hover{filter: alpha(opacity=95);opacity:.95}', '#YSF-BTN-HOLDER img{ display: block;overflow: hidden; }', '#YSF-BTN-CIRCLE{display: none;position: absolute;right: -5px;top: -6px;width: auto;min-width: 12px;height: 20px;padding: 0 4px;background-color: #f00;font-size: 12px;line-height: 20px;color: #fff;text-align: center;white-space: nowrap;font-family: sans-serif;border-radius: 10px;z-index:1;}', '#YSF-BTN-BUBBLE{display: none;position: absolute;left: -274px;bottom:-15px;width: 278px;height: 80px;box-sizing: border-box;padding: 14px 22px;filter: alpha(opacity=100);opacity:1;background: url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg2x.png) no-repeat;background:url(https://qiyukf.com/sdk//res/img/sdk/bg_floatMsg.png)\9; background-size: 278px 80px; z-index: 1;}', '#YSF-BTN-HOLDER.layer-6{bottom:0;}', '#YSF-BTN-HOLDER.layer-1 #YSF-BTN-BUBBLE{top:0}', '#YSF-BTN-HOLDER.layer-6 #YSF-BTN-BUBBLE{bottom:-6px;}', '#YSF-BTN-BUBBLE:hover{filter: alpha(opacity=95);opacity:.95}', '#YSF-BTN-CONTENT{height:45px;padding: 0;white-space: normal;word-break: break-all;text-align: left;font-size: 14px;line-height: 1.6;color: #222;overflow: hidden;z-index: 0;}', '#YSF-BTN-ARROW{ display: none; }', '#YSF-BTN-CLOSE{position: absolute; width:15px; height:15px;right: 4px;top: -3px; filter: alpha(opacity=90); opacity:.9; cursor: pointer; background: url(https://qiyukf.com/sdk//res/img/sdk/btn-close.png) no-repeat;z-index: 1}', '#YSF-BTN-CLOSE:hover{filter: alpha(opacity=100); opacity: 1;}', '#YSF-PANEL-CORPINFO.ysf-chat-layeropen{ width: 511px; height: 500px; border-radius: 8px; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);}', '#YSF-PANEL-CORPINFO{ position: fixed; bottom: 0px; right: 20px; width: 0; height: 0; z-index: 99999; }', '#YSF-PANEL-INFO.ysf-chat-layeropen{ width: 360px; height: 500px; border-radius: 8px; filter: alpha(opacity=100);opacity:1; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);}', '#YSF-PANEL-INFO{ position: fixed; bottom: 0px; right: 20px; width: 0px; height: 0px; filter: alpha(opacity=0);opacity:0;z-index: 99999;}', '#YSF-PANEL-INFO .u-btn{background-color: #f96868}', '#YSF-CUSTOM-ENTRY{background-color: #F96868;}', '#YSF-CUSTOM-ENTRY-0{position: relative;width:auto;background-color: #f96868;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-1{position: relative;width:auto;background-color: #f96868;border-radius: 14px; box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-2{position: relative;width:auto;background-color: #f96868;border-radius: 8px;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-3{position: relative;width:auto;background-color: #f96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-4{position: relative;width:auto;background-color: #f96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-5{position: relative;width:auto;background-color: #f96868;border-radius: 8px;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-6{position: relative;width:auto;background-color: #f96868;border-radius: 8px;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-7{position: relative;width:auto;background-color: #f96868;border-radius: 50%;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-8{position: relative;width:auto;background-color: #f96868;border-radius: 8px;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);}', '#YSF-CUSTOM-ENTRY-0 img{max-width: 300px;max-height: 300px;}', '#YSF-CUSTOM-ENTRY-1 img{width:28px;height:auto;}', '#YSF-CUSTOM-ENTRY-2 img{width:58px;height:auto;}', '#YSF-CUSTOM-ENTRY-3 img{width:60px;height:auto;}', '#YSF-CUSTOM-ENTRY-4 img{width:60px;height:auto;}', '#YSF-CUSTOM-ENTRY-5 img{width:60px;height:auto;}', '#YSF-CUSTOM-ENTRY-6 img{width:58px;height:auto;}', '#YSF-CUSTOM-ENTRY-7 img{width:60px;height:auto;}', '#YSF-CUSTOM-ENTRY-8 img{width:60px;height:auto;}', '#YSF-IFRAME-LAYER{ border:0; outline:none; }', '.ysf-online-invite-wrap{z-index:10001;position:fixed;_position:absolute;top:50%;left:50%;}', '.ysf-online-invite{position:relative;top:-50%;left:-50%;cursor:pointer;border-radius: 16px;box-shadow: 0 10px 30px 0 rgba(47,56,111,0.15);}', '.ysf-online-invite img{display:block;width:250px;}', '.ysf-online-invite .ysf-online-invite-img{width:100%;height:100%}', '.ysf-online-invite .text{position:absolute;top:-11px;left:0;right:0;overflow:hidden;margin: 36px 20px 0 67px;line-height:140%;color:#526069;font-size:14px;font-family:"Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";text-align:left;white-space:normal;word-wrap:break-word;}', '.ysf-online-invite .close{position:absolute;top:12px;right:12px;width:16px;height:16px;background:url("https://ysf.nosdn.127.net/operation/4602027f7e6a0109ac433863d7d0acdf") no-repeat;cursor:pointer;background-size: cover;}', '#YSF-PANEL-MOBILE{ background: rgba(46,47,49,0.7); position: fixed; bottom: 0px; right: 0px; width: 100%; height: 0px; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; z-index: 99999; }', '#YSF-PANEL-MOBILE.ysf-chat-layeropen{ width: 100%; height: 100%; transition-property:height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; }', '#YSF-IFRAME-LAYER.ysf-chat-mobile-layeropen{ height: 90% !important; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; }', '#YSF-IFRAME-LAYER.ysf-chat-mobile-layeropen.ysf-chat-mobile-invite-layer{ height: 33% !important; }', '#YSF-IFRAME-LAYER{ position: absolute; bottom: 0px;left: 0; right: 0px; width: 0px; height: 0px; transition-property: height,bottom; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; z-index: 9999; }', '.YSF-PANEL-BODY-FIXED{ position: fixed !important; left: 0; right: 0;}', '.YSF-INVITE-LAYER-WRAPPER { cursor: pointer; position: relative; border: 1px solid #eaf0f6; background: #fff;box-shadow: 0 5px 20px rgba(0,0,0,0.1); border-radius: 4px; width: 220px; padding: 16px; box-sizing: border-box; margin-bottom: 12px; background: #FFFFFF; box-shadow: 0 6px 20px 0 rgba(40,53,75,0.17); border-radius: 8px; }', '.YSF-INVITE-LAYER-HEADER { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }', '.YSF-INVITE-LAYER-HEADER-LEFT { display: flex; flex: 1; align-items: center; }', '.YSF-INVITE-LAYER-RICHTEXT { height: 44px; max-width: 168px; word-break: break-all; overflow: hidden; text-overflow: ellipsis; font-size: 14px; color: #333333; line-height: 22px; text-align: left; }', '.YSF-INVITE-LAYER-RICHTEXT p { margin: 0 }', '#YSF-BTN-HOLDER .YSF-INVITE-LAYER-AVATAR { width: 20px; height: 20px; border-radius: 50%; object-fit: cover; }', '.YSF-INVITE-LAYER-KEFU-NAME { font-size: 12px; color: #999999; margin-left: 4px; max-width: 150px; overflow: hidden; text-overflow: ellipsis; }', '#YSF-ONLINE-INVITE-LAYER-CLOSE{ width:12px; height:12px; background:url("https://ysf.nosdn.127.net/operation/0e5ee37a71d33e05b74d1a5aa3cdd99a") no-repeat; background-size: cover; cursor:pointer; }', '#YSF-INVITE-LAYER-WRAPPER-ENTRY { position: relative; float: right; }', '.YSF-LAYER-ENTRY-CIRCLE { width: auto; min-width: 12px; height: 20px; padding: 0 4px; border-radius: 10px; color: #FFFFFF; background-color: #f00; font-size: 12px; line-height: 20px; white-space: nowrap; z-index:1; background: url("https://ysf.nosdn.127.net/operation/997228b687d805f7a5d6244865615ec9") no-repeat; background-size: cover; position: absolute; top: 6px; right: -8px; }', '.YSF-INVITE-IMG {background-color: #f96868;box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);float: right;}', '.YSF_INVITE-IMG-0{max-width: 300px; height:auto;}', '.YSF_INVITE-IMG-1{width:28px; height:auto; border-radius: 14px;}', '.YSF_INVITE-IMG-2{width:58px; height:auto; border-radius: 8px;}', '.YSF_INVITE-IMG-3{width:60px; height:auto; border-radius: 50%;}', '.YSF_INVITE-IMG-4{width:60px; height:auto; border-radius: 50%;}', '.YSF_INVITE-IMG-5{width:60px; height:auto; border-radius: 8px;}', '.YSF_INVITE-IMG-6{width:58px; height:auto; border-radius: 8px;}', '.YSF_INVITE-IMG-7{width:60px; height:auto; border-radius: 50%;}', '.YSF_INVITE-IMG-8{width:60px; height:auto; border-radius: 8px;}', '#YSF-BTN-HOLDER .portrait_icon{width: 24px;height: 24px;vertical-align: middle;display: inline-block;}'].join(' '));
ysf.init('https://qiyukf.nosdn.127.net/sdk/res/kefu/custom/1.png', { switchType: 0, h5Style: { bdImageY: 0, bdHeight: 280, bdWidth: 240, welcomeText: "您好，请问有什么可以帮助您？", type: 0, bdImageX: 0 }, invitePatternVo: { inviteAvatar: "", mode: 0, realName: "", robotSwitch: 0, welcomeTemplateId: 0, robotWelcomeTemplateId: 0, screenType: 1, inviteGroupId: 0, robotId: 0 }, timesLimitType: false, createTime: 1504803160000, name: "", rejectType: 0, style: { bdImageUrl: "", bdImageY: 0, bdHeight: 280, bdWidth: 400, welcomeText: "您好，请问有什么可以帮助您？", type: 0, bdImageX: 0 }, id: 0, waitTime: 15, timesLimit: 3, intervalTime: 45 });
window.inviteSetting = { switchType: 0, h5Style: { bdImageY: 0, bdHeight: 280, bdWidth: 240, welcomeText: "您好，请问有什么可以帮助您？", type: 0, bdImageX: 0 }, invitePatternVo: { inviteAvatar: "", mode: 0, realName: "", robotSwitch: 0, welcomeTemplateId: 0, robotWelcomeTemplateId: 0, screenType: 1, inviteGroupId: 0, robotId: 0 }, timesLimitType: false, createTime: 1504803160000, name: "", rejectType: 0, style: { bdImageUrl: "", bdImageY: 0, bdHeight: 280, bdWidth: 400, welcomeText: "您好，请问有什么可以帮助您？", type: 0, bdImageX: 0 }, id: 0, waitTime: 15, timesLimit: 3, intervalTime: 45 };
window.sdkTemplateId = 0;
window.shuntId = 0;