(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{244:function(b,_,r){"use strict";r.r(_);var v=r(2),t=Object(v.a)({},function(){var b=this,_=b.$createElement,r=b._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":b.$parent.slotKey}},[r("html",[r("head",[r("meta",{attrs:{"http-equiv":"Content-Type",content:"text/html; charset=gb2312"}}),b._v(" "),r("title",[b._v("生存状态")])]),b._v(" "),r("body",[r("div",{attrs:{align:"center"}},[r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"18pt"}},[r("span",{staticClass:"bbc_color",staticStyle:{color:"red"}},[b._v("生存状态")])])]),b._v("\n在无限恐怖的世界之中，最重要的莫过于活下去。"),r("br"),b._v(" "),r("div",{attrs:{align:"center"}},[r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"14pt"}},[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("1.生命值，受伤，死亡与恢复")])])]),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("生命值：")])]),r("br"),b._v("\n人物的生命值代表了他的生命顽强度，每1点生命值有四种状态，分别是【完好】，【受冲击伤害（下称B）】，【受严重伤害（下称L）】，【受恶性伤害（下称A）】"),r("br"),b._v("\n当人物不再有【完好】的生命值，并且生命值中最好的状态是【B】，那么人物每回合行动之前都需要进行一个DC为（1+严重伤害数+恶性伤害数）的强韧判定，否则便会昏迷，直到有超过一半的生命值被恢复为【完好】。"),r("br"),b._v("\n当人物不再有【完好】的生命值，并且生命值中最好的状态是【L】，那么人物便会昏迷，直到有超过一半的生命值被恢复为【完好】。"),r("br"),b._v("\n此外，只要人物生命值中最坏的状态是【A】，那人物的伤势会不断恶化，每一轮都会有1点生命值由非【A】转化为【A】，优先由状况较轻的生命（完好→B→L）开始转化，这一过程直到人物的所有生命值都变为【A】或人物被急救，或者受到了任何生效的治疗效果（其中也包括快速医疗，即使该医疗可能无法处理恶性伤害）。伤势转化的时间点为回合结束时，在快速医疗等能力生效之后进行转化。"),r("br"),b._v("\n当人物所有生命值都变为【A】时，人物便会死亡。"),r("br"),b._v("\n选开规则：在人物身受重伤时，所有能力都会下降，人物会在所有行动及防御上受到【3-完好生命数】的减值。"),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("受伤：")])]),r("br"),b._v("\n当人物受到伤害时，视伤害程度的不同，可能会受到三种程度的伤害，分别是【冲击伤害】，【严重伤害】，【恶性伤害】。"),r("br"),b._v("\n当人物受到冲击伤害时，对于每1点伤害，若人物尚有【完好】的生命值，优先将【完好】的生命值转换为【B】；若人物不再有【完好】的生命值，优先将【B】的生命值转换为【L】；若人物也不再有【B】的生命值，则将【L】的生命值转换为【A】。"),r("br"),b._v("\n当人物受到严重伤害时，对于每1点伤害，若人物尚有【完好】的生命值，优先将【完好】的生命值转换为【L】；若人物不再有【完好】的生命值，优先将【B】的生命值转换为【A】；若人物也不再有【B】的生命值，则将【L】的生命值转换为【A】。"),r("br"),b._v("\n当人物受到恶性伤害时，对于每1点伤害，若人物尚有【完好】的生命值，优先将【完好】的生命值转换为【A】；若人物不再有【完好】的生命值，优先将【B】的生命值转换为【A】；若人物也不再有【B】的生命值，则将【L】的生命值转换为【A】。"),r("br"),b._v("\n当人物同时受到多种不同程度的伤害时，从程度最低的开始计算。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("范例：")])]),r("br"),b._v("\n游鱼拥有20点生命值，他受到第一次攻击造成了3点冲击伤害"),r("br"),b._v("\n——此时他的生命值记做-3B"),r("br"),b._v("\n接着他踩到了一个陷阱，受到了4点严重伤害"),r("br"),b._v("\n——此时他的生命值记做-3B4L"),r("br"),b._v("\n然后他被BOSS轰了一记大招，造成了5点恶性伤害"),r("br"),b._v("\n——此时他的生命值记做-3B4L5A"),r("br"),b._v("\n接着，他以对自己造成10点冲击伤害和5点严重伤害为代价，发出了一个大招【游鱼九转·霸海涛】"),r("br"),b._v("\n优先处理程度较轻的10点冲击伤害，由于此时3B+4L+5A=12，他的生命值只有20，剩余【完好】的生命值为8，只有8点冲击伤害可以将【完好】转换为【B】"),r("br"),b._v("\n——处理完毕后，他的生命值是11B4L5A"),r("br"),b._v("\n他仍需受到2点冲击伤害和5点严重伤害"),r("br"),b._v("\n继续处理2点冲击伤害，将2点【B】转化至L"),r("br"),b._v("\n——此时他的生命值是9B6L5A"),r("br"),b._v("\n他仍需受到5点严重伤害"),r("br"),b._v("\n最后处理5点严重伤害，将5点【B】转化至【A】"),r("br"),b._v("\n此时他的生命值为4B6L10A，所有生命值都被伤害填满，最坏的状态为【A】，因此他昏了过去，并且每轮伤势都会继续恶化"),r("br"),b._v("\n此时，队友黑手释放了混沌施法者，抽出了神智之蚀，对玩家游鱼造成了18L伤害"),r("br"),b._v("\n最终他的生命值为20A-8，所有生命值都变成了【A】，还溢出了8L伤害，因此他死亡了"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("死亡：")])]),r("br"),b._v("\n当人物所有生命值都变为【A】时，人物便会死亡。"),r("br"),b._v("\n虽然这是最常见的死亡条件，不过有些能力不须达成这一点即可让人死亡。"),r("br"),b._v("\n例如将耐力伤害到0，等等等等。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("恢复：")])]),r("br"),b._v("\n不借助主神处的兑换，要恢复伤势是一件非常困难的事，即使有现代药品的协助，对于恢复伤势也没有太大的帮助。"),r("br"),b._v("\n自然恢复："),r("br"),b._v("\n每进行一次8小时不进行任何行动的，而是用于睡眠之类的长休息，人物可以恢复1点意志值，并选择一项属性，恢复1点属性伤害。"),r("br"),b._v("\n每进行一次15分钟的短休息（不能做其他行动），可以将1点状态为【B】的生命值恢复为【完好】。"),r("br"),b._v("\n每两天（至少要包括两次长休息），可以将1点状态为【L】的生命值恢复为【完好】"),r("br"),b._v("\n每七天（至少要包括七次长休息），可以将1点状态为【A】的生命值恢复为【完好】"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("加快自然恢复：")])]),r("br"),b._v("\n有些能力会让你有更快的自然恢复速度，若你拥有X倍自然恢复速度，以上周期内恢复数值均变为原本的X倍，平均在该周期内（向上取整，以分钟为单位）。"),r("br"),b._v("\n加快自然恢复不会加快恢复不良状态的速度。\n"),r("br"),r("B",[r("I",[b._v("急救（敏捷+生存：医治）")])],1),b._v("：进行一次急救需要1整轮的时间。当人物不再有【完好】的生命值，并且生命值中最坏的状态是【A】，伤势开始恶化时，其他人可以花一轮的时间为其进行一次敏捷+生存（专业：急救）检定，只要至少有一个成功即可阻止伤势继续恶化；若此时你自己因为某种原因仍然保有意识，你亦可尝试为自己进行急救。需要注意的是，急救不会令你的生命恢复，只会阻止伤势恶化。\n"),r("br"),b._v("对一个因伤势进入昏迷的人物进行急救，并且急救检定成功数达到了【人物当前非完好生命值】的数量，可以令该人物苏醒。\n"),r("br"),r("B",[r("I",[b._v("长线治疗（智力+生存：医治）")])],1),b._v("：进行一次长线医疗需要至少一小时的时间。你可以对自己以外的人进行一个周期为小时的智力+生存（专业：医疗）延长判定，判定期间两人均不能进行其他行动；若该长线医疗被打断，则按照被打断时的累积成功数计算。获得以下效果：\n"),r("br"),b._v("1、当累积成功数达到5时，将目标1点状态为【L】的生命值转化为【B】\n"),r("br"),b._v("2、当累积成功数达到10时，将目标1点状态为【A】的生命值转化为【L】\n"),r("br"),b._v("长线医疗意味着精心照料以加快自然恢复，因此这两种效果对每个人每种每天只能生效一次，即使医疗者可以进行多次长线医疗或成功数超过10更多（即：若你的长线医疗累计成功数达到5，你会获得效果1；若你的长线医疗成功数达到10，你会获得效果1和2；但长线医疗成功数达到20不会再次获得效果1和效果2）。进行长期护理对医者来说是轻微活动，因此你一次最多可以同时照料六名伤者。你需要一些东西和必需品（绷带，药膏，诸如此类），这些东西在有人居住的地方很容易得到。你不能对自己进行长期护理。\n"),r("br"),b._v("高明的医术可以增加长线医疗的效果。你的医疗技能上每有一个附加成功，你就可以多获得一次上述的两个效果。\n"),r("br"),r("B",[r("I",[b._v("快速医疗")])],1),b._v("：有些强化会提供快速医疗X，这意味着他可以每轮将X点L伤或B伤转化为完好，并可以接续肢体。在快速医疗的数值达到4点时，每轮可以恢复1点A伤，并可以断肢再生。有些资源将其称为“快速回复”或“再生”，这只是称呼上的不同，并无实际差异。\n"),r("br"),b._v("若无特殊说明，快速医疗的点数不叠加。\n"),r("br"),b._v("\n肢体再生：若玩家失去了一个肢体，则判断其体积，将其失去肢体的体积乘以100，然后除以再生点数，最后得出的数X小时，即为再生出该肢体的时间。某些过于小的肢体（如眼睛）在判断时最小也视为体积1。接续肢体则只需要恢复至少1点生命即可接续。"),r("br"),b._v("\n快速医疗的生效时机为人物的回合结束时、伤势恶化之前。人物可以主动选择何时、如何使用自己的快速医疗能力，以及选择恢复什么伤势；但若人物失去意识且保有快速恢复能力，则默认从最轻微的伤势开始恢复。\n"),r("br"),r("B",[r("I",[b._v("【医疗点】：")])],1),b._v(" "),r("br"),b._v("任何可以反复使用、恢复伤势的能力都具有【医疗点】关键字，除非该能力对医疗的部分进行了限制。可以将【医疗点】视为一个特殊的、作用单一的能量池。一个单位可以消耗自己的【医疗点】“能量池”，为目标单位提供恢复伤势的能力。\n"),r("br"),b._v("一个能力的【医疗点】池上限默认为4倍于该治疗能力的购买DP（包括基础DP+限制DP+能量DP）。此外，也可以为技能兑换额外的【医疗点】，此时1DP=8【医疗点】。\n"),r("br"),b._v("当玩家调用具有【医疗点】的能力时，会消耗等同总恢复量的【医疗点】（向上取整，在伤势之间转换则取两者差值）。兑换权重如下：\n"),r("br"),b._v("1治疗点=2冲击伤害=1严重伤害=0.5恶性伤害=0.5异常点数\n"),r("br"),b._v("·玩家在一次调用中治疗多个目标时，只会消耗目标恢复量最高的单体所需的【医疗点】。\n"),r("br"),b._v("·一个能力的【医疗点】会在使用者进行一次长休息后完全恢复。\n"),r("br"),b._v("【医疗点】使用举例：\n"),r("br"),b._v("·玩家姆Q具有快速医疗3，【医疗点】27。他在这个回合使用这3点快速医疗自己身上1B2L点伤害。因此总共消耗了0.5+2=2.5点，向上取整后，总共消耗了3点【医疗点】。\n"),r("br"),b._v("·玩家龙卷使用一个只用剩下3【医疗点】的群体回复能力。他选择消耗剩余全部的3【医疗点】。虽然技能在【医疗点】足够的情况下最高可能可以恢复2A/4L/8B，但由于【医疗点】不足以兑换2A/4L/8B的恢复量，技能范围内的目标每位最多只能恢复3【医疗点】所能兑换的伤势，也就是治疗1A/3L/6B点生命。\n"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("借助主神恢复伤势：")])]),r("br"),b._v("\n对于人物的【B】和【L】状态的生命值无需任何花费即可恢复。"),r("br"),b._v("\n对于人物的【A】状态的生命值，每恢复1点需要100分。"),r("br"),b._v(" "),r("br"),b._v(" "),r("div",{attrs:{align:"center"}},[r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"14pt"}},[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("2.伤害类型，伤害吸收与伤害减免")])])]),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("物理伤害")])]),r("br"),b._v("\n由实际的物体打击、切割造成形变，从而造成的伤害称为物理伤害。这包括了各种物质的武器或临时武器，如刀、棍棒、牙齿、半截酒瓶等等。有些对象免疫物理伤害，这有可能是因为它们不具备物质的实体（如灵魂），或者物理上的形态改变对它没有意义（如流水、雾）。\n物理伤害有三种伤害类型，挥砍，穿刺，钝击；同时也会具有材质类型，例如精金，银，寒铁等。"),r("br"),b._v("\n某些对象虽然无法完全免疫物理伤害，但也对物理伤害有一定的抗性，称为伤害减免（DR），这意味着它异常坚固，或者被某种奇妙的超自然力量保护着，若它的伤害减免是DR/某类型，无论是伤害类型或材质类型，只要满足其中一项即可突破。"),r("br"),b._v("\n特殊的，在没有具体说明的情况下，【物理伤害】也可以作为一个伤害类型，此时它视为同时具有挥砍穿刺钝击三种伤害类型，但并不视为有材质类型。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("能量伤害")])]),r("br"),b._v("\n由非物质的能量造成的伤害。包括以下几类："),r("br"),b._v("\n灼热：高温造成的伤害，比如火焰、滚烫的蒸汽等。包括因高温焚化而使物质损失、或者因高温导至身体部分细胞死亡等。一般来说，火焰伤害等同于灼热伤害，只是称谓不同。灼热伤害作用于物体时，先被抗力抵消（如果该物品具有能量抗力的话。以下能量亦同，省略“先被抗力抵消”的描述部分），然后造成余量一半的伤害，但易燃物、易分解的化学物质或低熔点金属会受到余量全部伤害。"),r("br"),b._v("\n冻寒：低温造成的伤害。包括因低温使生物体内液体冻结、细胞活性下降，或者只是低温造成的破裂等物理效应。作用于物体时，只造成1/4的伤害，但液体、包含大量液体的对象或活的植物受全部伤害。"),r("br"),b._v("\n电击：因强烈的电流或放电现象通过对象而造成的伤害，包括因电阻而产生的升温、强电刺激造成生理性不良反应，甚至因电能作用而改变分子结构等。作用于物体时，造成一半的伤害。"),r("br"),b._v("\n腐蚀：因强酸或其他腐蚀性物质的侵蚀而造成伤害，特定的微生物高速消解或降解物质，或者因进入体内的毒素产生化学反应造成的伤害也是腐蚀伤害。腐蚀伤害可能在某些资源中被称为“强酸伤害”或者“毒素伤害”。作用于物体时，造成1/2伤害。"),r("br"),b._v("\n音波：因音波震动导至物质分子高速共振或冲击而造成的伤害称为音波伤害。作用于物体时，造成全部伤害。一旦音波攻击产生效果之后，即使让对方听不见或者堵住耳朵也无法中止其效果。提前堵住耳朵对影响心灵的音波攻击可免于检定，但对其他种类无效（比如造成伤害的那些）。堵住耳朵属于整轮动作，而且需要将蜡或者其他隔音材料塞入耳中。"),r("br"),b._v("\n光能：因高光压和高谐振的强光而产生的破坏力，包括激光、光剑、光能武器，也包括一些产生强烈光能的法术或特殊技能。作用于物体时，造成一半伤害。"),r("br"),b._v("\n纯粹能量：这是一类只能以“能量”描述的能量伤害，效果无法用物理作用解释，亦没有来源与倾向。"),r("br"),b._v("\n正能量（神圣能量）：它是纯粹能量的变体形式之一，因为来源通常与光明或守序相关，它被称为“正能量”或“神圣能量”。作用于物体时，造成一半伤害。"),r("br"),b._v("\n黑暗能量（亵渎能量、负能量）：它是纯粹能量的变体形式之一。因为来源通常与黑暗或混乱相关，它在某些时候也被称之为“亵渎能量”或“负能量”。作用于物体时，造成一半伤害。"),r("br"),b._v("\n能量伤害不受伤害减免（DR）的影响，但会被“能量抗力”抵消。也有一些效果使对象完全免疫某种能量伤害，但在资源中一般是被禁止的。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("精神伤害")])]),r("br"),b._v("\n以精神进行直接攻击的方式非常稀少，这类伤害不会造成外表上的伤害。在因这种伤害进入恶性伤害时，伤势不会恶化；因这种伤害致死时，表现为人物脑溢血、失去灵魂变成植物人，或者大脑爆炸（如果ST比较偏好这种表现形式的话）。精神伤害不会对无心智的物体产生效果。"),r("br"),b._v("\n只有全伤害吸收能够吸收精神伤害，伤害减免，能量抗力对精神伤害都没有任何作用。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("力场伤害")])]),r("br"),b._v("\n力场就是由特殊的能量形式所形成的可感的空间异变。力场不是物质也不是能量，只是一种可感并有效的力的作用（因此一道力场墙并不是一道无法打破的玻璃墙，仅是一种让人感受到如前方有墙般阻力的无形力量）。力场造成的伤害从结果上来看类似于物理伤害，但大部分伤害减免对它不起作用，因为力场效果本质上并不是物质的，它只是造成了一个“对物质施加改变”的结果。全能量抗力同样可以作用于力场伤害。"),r("br"),b._v("\n全伤害吸收、全能量抗力、DR/-可以吸收/减免力场产生的伤害。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("坠落伤害")])]),r("br"),b._v("\n从高处掉下来，或者由于外力而撞击障碍物时，会受到坠落伤害，坠落伤害起始计算距离为3米，每超过3米，就会受到1点严重伤害，可以进行反射检定来抵消伤害，每1成功可以抵消2米距离，由于坠落伤害是一种全方位的震荡，伤害减免对其不起作用。坠落伤害至多为20L。"),r("br"),b._v("\n对于坠落时间而言，依各世界的重力加速度不同而不同，对于地球为基准的世界而言，坠落的距离在180米以下时，为在当轮坠落到地面；高于这个距离的，通过加速度公式（h=1/2*g*t*t）计算坠落轮数。"),r("br"),b._v("\n物理伤害吸收，全伤害吸收均能吸收坠落伤害。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("坠物伤害")])]),r("br"),b._v("\n从高处掉下来的物体对生物构成的伤害。首先以物体的体积作为DC进行一次反射豁免，若未达到DC则视为被坠物命中。在命中后，坠物下坠的初始计算距离为3米，每超过3米，就会受到1L严重伤害，但至多为20L；物体的重量加权（即体积5的单位在推拉该物品时所需的最低力量要求）会被加在坠物即将造成的伤害中。目标可以进行反射豁免来减免受到的伤害，每1个成功数抵消1点伤害，视为回避范围攻击。无论如何，人为造成坠物伤害至少需要1个标准动作。"),r("br"),b._v("\n坠物伤害是一种物理伤害，材质类型关联于物品的材质。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("临时生命")])]),r("br"),b._v("\n临时生命是一种超出你当前生命值上限的生命，可能由法术、护盾等方式提供。当受到伤害时，无论伤害类型（能量，物理，力场等），无论伤害级别（冲击，严重，恶性）都会优先使用临时生命值，以1:1的比例抵消此伤害。优先扣除级别最高的伤害。临时生命在伤害减免，抵消，吸收等能力生效之后，最后生效。\n"),r("br"),b._v("在其他判断上，临时生命被视为你的生命，但并不计入你生命槽上限。获得或治疗了临时生命也并不认为是一种治疗效果。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("伤害吸收")])]),r("br"),b._v("\n伤害吸收是某种使伤害无效化的能力。伤害吸收X代表，在受到的每一次伤害之中，有X点被无效化。"),r("br"),b._v("\n伤害吸收有两种类型："),r("br"),b._v("\n物理伤害吸收：物理伤害吸收只能吸收物理伤害的效果。"),r("br"),b._v("\n全伤害吸收：全伤害吸收可以吸收物理伤害和能量伤害。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("伤害减免")])]),r("br"),b._v("\n伤害减免是人物躯体所拥有的某种对抗伤害的抗力。伤害减免X代表，在受到的每一次伤害中，有X点被抵抗。此外，大多数物品都具有这种特性，以描述其对物理伤害的抵抗能力。"),r("br"),b._v("\n伤害减免只对物理伤害生效。大部分伤害减免都有一个弱点，对于特定的某种来源无效，这写作DRX/某来源。下面是一些常见的DR举例："),r("br"),b._v("材质：有些生物对特定材质的武器非常敏感，有些是因为这种材质的构成物质对该生物的生理组织有特别效果，或该材质对于该生物具有某种基于哲学或超自然理论上的意义。常见的如DR/木制武器等。"),r("br"),b._v("\n魔法：具有【魔法】特性的武器，可以穿透这种伤害减免。"),r("br"),b._v("\n穿刺：有些生物体的表面结构坚固、可以抵挡穿透力不足的攻击，只有集力量于一点的刺击型武器才能刺入它的体内。"),r("br"),b._v("\n钝击：有些生物因内外结构坚实致密而可以抵挡刃器造成的划伤，只有钝击武器才能以沉重而浑厚的力量击碎它。"),r("br"),b._v("\n挥砍：有些生物体柔韧异常，大力的砸击或刺出小孔对它的生理功能无碍，只有宽阔的刃器对它造成又长又深的切割创口才能破坏它。"),r("br"),b._v("\n光明：有一些生物被原始、混沌、无理性的超自然能量保护，只有贯彻了理性意志或至善之心所带来的超自然能量，才能够对抗这种保护。对于武器而言，带有【光明】特性的武器可以穿透该伤害减免。"),r("br"),b._v("\n黑暗：有一些生物被理性或至善的超自然力量保护，只有原始混沌、无理性的能量才能对抗这种保护。对于武器而言，带有【黑暗】特性的武器可以穿透该伤害减免。"),r("br"),b._v("\n神兵：有一些生物将强大的意志力量与物质性存在融合，因而坚固异常。只有同样具有强大意志力量的武器才能伤害它。这些武器具有［神兵］类别。有一些特别技能可以将使用者的意志贯彻在武器中，使武器临时具有［神兵］类别，从而穿透这种伤害减免。"),r("br"),b._v("\n有一些能力会产生特殊的伤害减免类型。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("能量抗力")])]),r("br"),b._v("\n能量抗力可以为人物抵消能量伤害。能量抗力X意味着，每受到一次能量伤害，有X点被抵抗。"),r("br"),b._v("\n能量抗力一般分为不同种类。比如电流抗力3、灼热抗力1。在描述上，火焰抗力＝灼热抗力，冰抗力＝寒冷抗力，强酸抗力＝腐蚀抗力，这是规则撰写时的用词之差。"),r("br"),b._v("\n能量抗力可以同时抵消等额数值的，由该种能量效果所带来的环境减值。"),r("br"),b._v("\n例如，寒冷抗力3可以抵消3点由寒冷的环境带来的行动减值。但它不能抵抗其他任何减值。"),r("br"),b._v("\n如果完全免疫一种能量，那么同时也免疫这种能量带来的不良状态和环境减值。"),r("br"),b._v("\n全能量抗力：全能量抗力同时对所有能量伤害生效，包括纯粹能量。"),r("br"),b._v(" "),r("br"),b._v(" "),r("br"),b._v("附注：\n"),r("br"),b._v("“伤害吸收”的计算会在DR和能量抗力之前，且各种伤害吸收互相不叠加（比如血盾跟电磁护盾）你可以在对抗每次攻击时选择用其中一种。\n"),r("br"),b._v("“伤害转化”的计算在伤害吸收之后，DR和能量抗力之前，且各种将伤害降级，转化的能力彼此叠加，分别生效。\n"),r("br"),b._v("剩余的伤害会受到盔甲【防弹】，【防能量武器】等作用的影响\n"),r("br"),b._v("伤害减免、伤害吸收、能量抗力皆不叠加，取高者生效。比如有8/神兵，10/银，4/-的伤害减免，那么在对抗非银神兵时为10，对抗非神兵银武器为8，对抗银神兵为4\n"),r("br"),b._v("举例：比如在伤害结算之后，身着防弹衣的玩家A受到枪械的30点无破甲伤害时，他可以用电磁护盾可以抵御15点伤害（伤害吸收），然后用九曜急速配合紫微玄鉴转化其中的10点（伤害转化），最后你的盔甲再将5点伤害转化为冲击（伤害转化），被DR减免（伤害减免）。\n"),r("br"),b._v("无论如何，如果经过伤害吸收和减免、抗力等之后，你受到的最终伤害为0，那么算作你不受伤。\n"),r("br"),b._v(" "),r("br"),b._v(" "),r("div",{attrs:{align:"center"}},[r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"14pt"}},[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("3.不良状态，类型与状态点数")])])]),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("不良状态")])]),b._v(" "),r("br"),b._v("\n是指人物正处于某种负面的效果之中，这些效果一般会在一定的情况下带来减值，这称为不良状态。"),r("br"),b._v("\n有些不良状态分为三种等级："),r("br"),b._v("\n轻度不良状态仅仅妨碍人物的某种行为，使他做得不那么好，例如看不清东西、抓不稳剑。这种不良状态在某些方面带来减值。"),r("br"),b._v("\n重度不良状态会使人物完全失去某方面的能力，使他无法做某些事，等等。例如使他看不到东西、手无法握住东西等。不良状态点数高于某项属性、或者多项属性之中的较高者时，就会进入重度不良状态。这一项或多项属性称为"),r("b",[b._v("【关键抵抗属性】")]),b._v("，在下文中被标注于不良状态名称旁边。进入重度不良状态之后，减值依然存在（如无特别说明，则人物依然要受到轻度不良状态的减值），当减值恢复到该属性之下时，重度不良状态回复为轻度。"),r("br"),b._v("\n毁灭性后果：若不良状态点数高于关键抵抗属性中较高者的两倍时，会带来极度严重的后果。人物会永远失去某种能力、进入极端的异常状态，或者永远残疾，无法借助自然回复和一般的治疗来治愈，只有一些高级特殊能力、或借助主神，才可以恢复。"),r("br"),b._v("\n有一些不良状态不分等级，这些不良状态被统一视为重度。"),r("br"),b._v("\n不良状态的累计：一般来说，复数个同名不良状态点数会叠加。但是，对于无法进入更严重效果的不良点数和普通的不良点数，则需要分别计算，而非叠加。\n"),r("br"),b._v("但是，每个燃烧和流血的不良状态点数单独存在，分别解除或抵抗。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("抵抗不良状态")])]),r("br"),b._v(" "),r("B",[r("I",[b._v("抵抗不良状态")])],1),b._v("：不良状态产生时，具有一定的“不良状态点数”，以被动动作投一次抵抗判定，从不良状态的点数中减去抵抗判定的成功数，作为最后的不良状态减值，抵抗状态进行的判定会在对应的不良状态中注明。如果没有特别定义，或者出现了一种没有在下文提及的、难以被归类的不良点数，那么使用【该不良状态关键抵抗属性中较高者+求生】来进行抵抗。若无特殊说明，不良状态总是可以抵抗的。"),r("br"),b._v(" "),r("B",[r("I",[b._v("忍耐不良状态")])],1),b._v("：在你抵抗不良状态时，你可以放弃抵抗不良状态，而是忍耐它。忍耐并非消除你受到的不良点数，而是暂时压制它，在判断进入严重/毁灭性后果和不良状态点数带来的减值时，忽略你忍耐的那一部分；但是如果你在忍耐不良状态点数的同时进入了严重或毁灭性后果，或者战斗结束，你原本忍耐的不良状态点数会立刻生效在你身上。你在每场战斗中，可以忍受的不良状态点数最多为【该不良状态关键抵抗属性较高者上的附加成功数+1】，无法抵抗的不良状态点数同样也无法被忍耐。"),r("br"),b._v("\n异常点数免疫会令作用对象不受到异常点数带来的减值，而非不承受异常状态点数。但某些能力可以免疫异常状态带来的效果（如免疫昏迷、免疫魅惑等）。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("不良状态点数的恢复")])]),r("br"),b._v("\n如果没有写明，疾病、毒素类的不良状态必须先驱除病毒才会自动恢复，不过在获得对病毒的豁免机会时可以再对该不良状态进行一次额外的豁免；更高级的不良状态则必须在原因解除（例如，诅咒被解除或者幻觉被破解等）之后才能进行豁免和回复。"),r("br"),b._v("\n如果没有特别的说明，一次15分钟的短休息能够使人物针对身上的一项不良状态获得一次豁免的机会。一次8小时的长休息则能使人物移除一项不良状态等于关键抵抗属性中低者的不良状态点数。这两种方式每天皆只能使用一次。"),r("br"),b._v("\n如果没有特别的说明，所有的不良状态点数均默认为能通过休息而豁免或移除，但有些不良状态因为来源或其他原因，不能使用此方式恢复。"),r("br"),b._v("\n如果借助主神来恢复，能够通过休息移除的不良状态点数价值为每点10分，不能通过休息移除的不良状态由ST自行定价。"),r("br"),b._v(" "),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("不良状态的类型")])]),r("br"),b._v("\n每种不良状态都有可能由一种以上的原因引起，不同的原因属于不同的类别。"),r("br"),b._v("\n其来源的分类见"),r("STRONG",[r("SPAN",{staticClass:"bbc_color",staticStyle:{COLOR:"blue"}},[r("A",{attrs:{href:"3.6来源、分类、关键字.html"}},[b._v("来源、分类、关键字")])],1)],1),b._v("栏具体说明。\n"),r("br"),b._v(" "),r("strong",[r("span",{staticClass:"bbc_color",staticStyle:{color:"blue"}},[b._v("常见的不良状态")])]),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("恶心，反胃")]),b._v("（耐力、决心）"),r("br"),b._v("\n恶心是一种消化系统的痛苦。处于恶心状态的生物在攻击检定、施展魔法或特殊能力、使用招式检定上受到减值。"),r("br"),b._v("\n抵抗不良状态：强韧豁免或决心+求生-强韧。"),r("br"),b._v("\n恶心的点数超过耐力或决心的较高者，则人物进入反胃状态。"),r("br"),b._v("\n反胃状态的人物每轮只有一个移动动作，并且若他可以以移动动作攻击、施展魔法或特殊能力、使用招式，他依然要受到减值。"),r("br"),b._v("\n毁灭性后果：人物因为消化系统的严重痉挛而失去所有动作，并且进入措手不及状态。"),r("br"),b._v("\n特殊：天生没有消化系统的生物不会恶心。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("耳鸣，耳聋")]),b._v("（耐力）"),r("br"),b._v("\n耳鸣是一种使人物听觉产生障碍的效果。处于耳鸣中的生物在聆听检定上受到减值。"),r("br"),b._v("\n抵抗不良状态：强韧豁免。"),r("br"),b._v("\n耳鸣的点数超过耐力，则人物进入耳聋状态。"),r("br"),b._v("\n耳聋状态的人物无法进行聆听，先攻权只保留一半，无法应用基于听觉的能力，并且因复数攻击而获得的防御减值加倍。"),r("br"),b._v("\n毁灭性后果：人物永久失去听觉。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("精神束缚，定身")]),b._v("（决心、沉着）"),r("br"),b._v("\n精神束缚是一种通过影响人物的精神来妨碍人物移动的效果。精神束缚中的生物在运动检定、攻击检定、基本速度、施展需要动作的法术或类似能力、基础防御＋闪避防御＋格挡防御的总和上受到士气减值（按照格挡防御、闪避防御、基础防御的顺序进行减少）。"),r("br"),b._v("\n抵抗不良状态：意志豁免。"),r("br"),b._v("\n精神束缚点数超过决心或沉着的较高者，则人物进入定身状态。"),r("br"),b._v("\n定身状态的人物无法移动，因此速度为0，失去基础防御、无法闪避和格挡，无法使用需要做出身体动作的行为（例如攻击和需要动作成份的法术等）。但他并不被视为无助状态。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("纠缠，定身")]),b._v("（力量、敏捷）"),r("br"),b._v("\n因外在力量而阻碍行动的效果称为纠缠，例如被绳索缠住、被胶水或粘液粘住、被无形力场困住等。纠缠中的生物基础速度减半，并且在此基础上在运动检定、攻击检定、基本速度、基础防御＋闪避防御＋格挡防御的总和上受到减值（按照格挡防御、闪避防御、基础防御的顺序进行减少）。"),r("br"),b._v("\n抵抗不良状态：力量/敏捷取高+求生-强韧。"),r("br"),b._v("\n纠缠点数超过力量或敏捷的较高者，则人物进入定身状态。"),r("br"),b._v("\n定身状态的人物无法移动，因此速度为0，失去基础防御、无法闪避和格挡，无法使用需要做出身体动作的行为（例如攻击和需要动作成份的法术等）。但他并不被视为无助状态。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("剧痛，昏迷")]),b._v("（耐力、决心、沉着）"),r("br"),b._v("\n巨大的痛楚会妨碍人物的正常判断。剧痛中的人物会在互动系技能检定、手艺检定、洞察检定、专注检定、基础防御＋闪避防御＋格挡防御的总和（按照格挡防御、闪避防御、基础防御的顺序进行减少）、施展以心智属性为关键属性的法术或类似能力的判定上受到减值。"),r("br"),b._v("\n抵抗不良状态：意志豁免，或强韧豁免。"),r("br"),b._v("\n剧痛点数超过耐力、沉着或决心中的较高者时，人物进入昏迷状态。"),r("br"),b._v("\n昏迷的人物失去意识，视为无助状态，无法主动作任何动作，也无法行动。"),r("br"),b._v("\n毁灭性后果：痛苦摧毁了人物的肉体和精神。剧痛点数减去人物（决心、沉着、耐力三者中的较高者）×2，剩余点数作为属性丢失，平均分配在人物的耐力、决心、沉着上，每种属性至少承受1点。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("麻痹，定身")]),b._v("（耐力、决心）"),r("br"),b._v("\n麻痹是一个影响人物自身身体，使人物的身体失去行动能力的效果。麻痹中的生物在运动检定、攻击检定、基本速度、基础防御＋闪避防御＋格挡防御的总和上受到减值（按照格挡防御、闪避防御、基础防御的顺序进行减少）。"),r("br"),b._v("\n抵抗不良状态：意志豁免。"),r("br"),b._v("\n麻痹点数超过人物耐力或决心的较高者，则人物进入定身状态。"),r("br"),b._v("\n定身状态的人物无法移动，因此速度为0，失去基础防御、无法闪避和格挡，无法使用需要做出身体动作的行为（例如攻击和需要动作成份的法术等）。但他并不被视为无助状态。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("魅惑，迷情")]),b._v("（决心、风度）"),r("br"),b._v("\n魅惑使人物沉迷于特定的目标。魅惑中的个体在对抗其沉迷目标的社交技能检定，和以意志抵抗其沉迷目标的特异或魔幻特殊能力时受到士气减值。"),r("br"),b._v("\n抵抗不良状态：意志豁免。"),r("br"),b._v("\n魅惑点数超过人物的决心或风度的较高者，则人物进入迷情状态。"),r("br"),b._v("\n迷情状态的人物愿意服从其沉迷目标，除了明显送死或完全违反其道德观的指令之外，迷情状态的人物会接受所有命令。当接受到明显送死或完全违反道德观的命令时，迷情人物会获得一次对抗魅惑的机会，若这次对抗使得魅惑点数减到关键抵抗属性以下，人物会回归到魅惑状态。"),r("br"),b._v("\n毁灭性后果：人物在精神上完全沦为沉迷对像的附庸，他会不顾一切地向沉迷对象表达忠诚，即使这会伤害自己也不例外。但同时，他无法忍受被沉迷对像置之不理的情形，若遇到此种情况，则会不顾一切地向沉迷对像显示自己的存在。并且他在对抗沉迷对象任何试图不被找到或不被认出来的行为时，获得相当于其决心的DP加值。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("目眩，目盲")]),b._v("（耐力、感知）"),r("br"),b._v("\n目眩是一种使人眼花、看不清东西的效果。目眩的个体在用视觉侦察、以阅读或类似手段获取信息、攻击上受到减值，对于需要延长动作的精秘操作如制作东西、炼制魔法药剂等行为，判定受到目眩一半的减值。"),r("br"),b._v("\n抵抗不良状态：强韧豁免或感知+求生-强韧。"),r("br"),b._v("\n目眩点数超过人物的耐力或感知的较高者，则人物进入目盲状态。"),r("br"),b._v("\n目盲状态的人失去视觉，无法进行任何需要视觉的行为，也无法进行精秘操作。由于无法定位周围的环境，所有敌人对他来说进入无法定位状态。他的基本速度减为一半。目盲的人不会因目眩而受到减值，同时免疫凝视效果和其他针对视觉的攻击。"),r("br"),b._v("\n拥有眼睑或类似结构的个体可以通过闭上眼睛来主动进入目盲状态，这是一个自由动作。拥有盲感能力的角色可以以加倍周期和减半DP来进行精秘操作。拥有盲视能力的角色除了不能视物之外，在盲视范围之内不会受到其他目盲的负面作用。"),r("br"),b._v("\n毁灭性后果：人物永远失去了视觉，这可能是因为眼球被打爆、视觉神经被灼毁、大脑的视觉中枢被损坏，甚至可能是灵魂被修改以至于无法理解任何视觉信息。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("疲乏，力竭")]),b._v("（耐力）"),r("br"),b._v("\n疲乏是人物身体过度劳累或类似效果产生的。疲乏的人物在力量和敏捷相关判定、基础速度上受到减值，不能冲锋攻击或全力攻击。"),r("br"),b._v("\n抵抗不良状态：强韧豁免。"),r("br"),b._v("\n当疲乏点数高过人物的耐力或力量的较高者时，人物进入力竭。"),r("br"),b._v("\n力竭的人物基础速度减半，然后计算其因疲乏受到的减值。此外，他失去每轮的移动动作。"),r("br"),b._v("\n毁灭性后果：过度的疲乏会损害人物的身体。当人物的疲乏点数超过耐力或力量的较高值之两倍时，将超出部分作为属性伤害，平摊在身体属性上，优先顺序为力量、敏捷、耐力。"),r("br"),b._v("\n当人物受到复数个疲乏效果影响，或者抵抗、解除它们时，将它们的数值叠加计算。换而言之，人物不会同时拥有复数个疲乏效果，只拥有一个疲乏效果，数值和来源为所有疲乏效果之和。"),r("br"),b._v(" "),r("br"),b._v("\n饥渴：角色在一个新陈代谢周期内（正常人类是12小时）没有充足的饮食，就会陷入饥渴状态，饥渴状态每持续一个新陈代谢周期，角色即需要以自身的耐力值为DC进行耐力检定，并承受等于失败数的疲乏。"),r("br"),b._v(" "),r("br"),b._v("\n疲惫：角色在一个新陈代谢周期内（正常人类是12小时）没有充足的睡眠，就会陷入疲惫状态，疲乏状态每持续一个新陈代谢周期，角色即需要以自身的耐力值为DC进行耐力检定，并承受等于失败数的疲乏。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("情绪异常")]),b._v("（决心、沉着）"),r("br"),b._v("\n情绪效果是人物因自己的情绪变化而对自己产生的影响，这种情绪变化可能是自发的、因看到什么或听到什么被诱发的、催眠或自我催眠、影响心灵，也有可能是药物效果甚至巧妙的谈话诱导。情绪变化分为三类。当情绪异常的点数超过人物的决心或沉着之较高者时，就会进入重度的情绪变化。情绪变化引起的减值都是士气减值。此外，承受“恐惧”和“沮丧”点数的人物会额外减少同等数量的攻击和防御上的士气加值（二者同时减少，最低为0）。"),r("br"),b._v("\n•恐惧"),r("br"),b._v("\n战栗和惊惧合称恐惧。战栗的角色在攻击其害怕的对像、对该对像使用互动系技能、使用心智属性的特殊能力判定上受到减值，在对恐慌对像以外的敌人时基础防御＋闪避防御＋格挡防御的总和上也受到减值（按照格挡防御、闪避防御、基础防御的顺序进行减少）。"),r("br"),b._v("\n抵抗不良状态：意志豁免。"),r("br"),b._v("\n惊惧的角色保留上述减值，另外他们会想尽办法从恐惧的对像身边逃离，直到感觉不到该对像的存在为止。他会为了逃离而使用自己最有效的移动手段。"),r("br"),b._v("\n•沮丧"),r("br"),b._v("\n沮丧的角色对自己的存在和世界的意义产生质疑，无法提起干劲。他在攻击、使用技能和所有延长动作的判定上受到减值。"),r("br"),b._v("\n抵抗不良状态：意志豁免。"),r("br"),b._v("\n重度沮丧状态称为厌世。厌世者不会愿意去做出任何使情况好转或恶化的事。除非接到确切无疑并且不可反抗的命令，否则厌世者不会做出任何主动动作。他在所有行动上承受沮丧的减值，并且无法使用闪避或格挡防御。"),r("br"),b._v("\n•亢奋"),r("br"),b._v("\n亢奋的角色进入了无法自制的毛躁和冲动。他在防御、先攻、互动系技能判定和所有延长动作的判定上受到减值。"),r("br"),b._v("\n抵抗不良状态：意志豁免。"),r("br"),b._v("\n重度亢奋的角色无法静下来。他无法进行任何需要他呆在某个地方静下心来的动作，包括禅定、打坐、冥思等，并且他的睡眠浅而易醒。他无法通过以上行为获得除自然休息之外的好处（如能力充能或回复能量池）。由于没有耐心，他无法进行周期在分钟以上的延长动作。"),r("br"),b._v("\n情绪异常的通用毁灭性后果：严重的情绪异常会给人物的精神构造留下不可磨灭的损伤，让人物从此彻底坏掉。他会感染精神疾病，或者产生臆症等，由ST解释。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("晕眩，昏迷")]),b._v("（决心、耐力、沉着）"),r("br"),b._v("\n晕眩状态使人物头晕眼花。晕眩的角色在攻击、运动、洞察判定、基础速度上受到减值。"),r("br"),b._v("\n抵抗不良状态：意志豁免，或强韧豁免。"),r("br"),b._v("\n晕眩点数超过人物的耐力和决心之较高者，则人物昏迷。"),r("br"),b._v("\n昏迷的角色失去意识和行动能力，不能做任何动作，陷入无助状态。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("肢体妨害，肢体残障")]),b._v("（耐力、敏捷）"),r("br"),b._v("\n肢体妨害是一种某条肢体受到负面作用而难以使用的效果，可能是因为被挑断了筋，也有可能是中毒或者被电流影响了神经。肢体妨害的个体在以该肢体为主的力量、敏捷、手艺判定上受到减值。另外，如果肢体妨害的个体需要用该肢体进行移动，则衡量该移动方式时，视为其基础速度受到一半减值。若该个体用于移动的肢体中受妨害者超过两条或达到一半（取高者，例如人的两条腿受妨害，狼的两条腿受妨害，或蜈蚣的21条腿受妨害），则视为其基础速度受到全部减值。"),r("br"),b._v("\nST可以判定某生物的肢体妨害或肢体残障不影响移动，例如蜈蚣失去1条腿并不会影响它的速度。若游戏参与者对受影响生物用于移动的肢体数目有争议（如章鱼）），以ST的判断为准。"),r("br"),b._v("\n抵抗不良状态：强韧豁免或敏捷+求生-强韧\n"),r("br"),b._v("肢体妨害超过人物耐力、敏捷的较高者，则人物进入肢体残障。"),r("br"),b._v("\n肢体残障的个体，其残障肢体完全无法使用。肢体若持握物品，该物品会否掉落，视具体效果的说明而定。若生物需要该肢体移动，则视为其基础速度减半，然后计算肢体妨害点数造成的减速效果。"),r("br"),b._v("\n毁灭性后果：人物失去了肢体，或永远失去了使用该肢体的能力。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("冻结，冰封")]),b._v("（力量、敏捷）"),r("br"),b._v("\n冻结是指人物的身体机能因过低的温度而遭受影响的状态。这个状态与麻痹十分类似，在运动、攻击、基本速度、基础防御＋闪避防御＋格挡防御的总和上受到减值（按照格挡防御、闪避防御、基础防御的顺序进行减少）。当冻结点数超过力量或敏捷取高时，人物将进入冰封状态。"),r("br"),b._v("\n抵抗不良状态：强韧豁免\n"),r("br"),b._v("冰封状态类似于定身，唯一的区别在于人物处于冰封状态时，再遭受的任何冻结点数都将转化为同等的严重寒冷伤害，无法被抵抗。免疫定身的能力不能免疫冰封效果，类似能力同理。"),r("br"),b._v("\n在适当的温度（10摄氏度以上）下，冻结状态会以每轮1点的速度恢复。"),r("br"),b._v("\n冻结与燃烧效果能够相互反制。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("燃烧")]),b._v("（特殊）"),r("br"),b._v("\n燃烧是指人物身上的可燃物或人物本身被引燃的状态。"),r("br"),b._v("\n抵抗不良状态：特殊。"),r("br"),b._v("\n在这个状态下，人物每次回合结束时都会受到燃烧不良状态点的火焰严重伤害，反射豁免。燃烧持续直到火焰熄灭或可燃物燃尽为止。"),r("br"),b._v("\n人物能够使用一个标准动作来试图扑灭火焰，这被视为反射判定，每个成功数将解除1点燃烧状态。倒在地上打滚（这会令你进入“倒地”状态）会提供+2DP表现加值，跳进水里或使用灭火器则可以得到更多的加值，由ST判断。燃烧状态数值并不会叠加，但不同来源的燃烧效果分别计算。"),r("br"),b._v("\n通常情况下自然火焰引起的燃烧状态会以每轮1点的速度恢复，凝固汽油弹、魔法火焰一类的恶意燃烧状态不会自行恢复。"),r("br"),b._v("\n燃烧与冻结效果能够相互反制。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("流血")]),b._v("（特殊）"),r("br"),b._v("\n流血是指人物因创伤及其他原因而不断流失血液或生命要素的状态。在这个状态下，人物伤势会不断恶化，每次回合结束时都会有流血不良状态点生命向下转化一级，优先由状况较轻的生命开始转化（完好→B→L→A），持续到伤口获得紧急处理或自然愈合为止。流血点数并不会叠加，但可以分别结算。\n"),r("br"),b._v("抵抗不良状态：特殊。\n"),r("br"),b._v("人物因流血而导致伤势恶化时，可以进行一次强韧判定，每个成功数减少1级生命的恶化。\n"),r("br"),b._v("人物或他人可以尝试以一个整轮动作来包扎伤口，这被视为急救（敏捷+求生-急救）判定，每个成功数能暂时抑制1点流血状态的效果；若在抵消流血状态后还有剩余的成功数，这些成功数可作为急救的其他用途正常生效（一般来说，用作阻止因恶性伤害导致的伤势恶化）。人物在恢复生命值时，同时移除等量的流血点数。 \n"),r("br"),b._v("若无特殊说明，大部分流血皆是创伤来源的状态。\n"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("震慑")]),r("br"),b._v("\n震慑是一种大脑一片空白的状态。震慑状态下，人物无法进行任何需要主动行为的动作，失去基本防御，无法闪避和格挡，若人物手中持有物品，他会松手。但震慑中的人物保有自我保护的本能，因此不视为是措手不及或无助。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("石化（或类似效果）")]),r("br"),b._v("\n石化效果视为变形来源的定身且昏迷，并有以下特性："),r("br"),b._v("\n被石化者并未死去，亦不算是活着。他被视为石制物品而非生物，并具有石制品的一切特性。若被石化者被破坏，在拼接完整后被复原，则不会有不良后遗症，否则被复原后视为身体受到同等程度的破坏。"),r("br"),b._v("\n如无特别说明，被石化者视为花岗岩，这使得被石化者的体重增为其地球正常人类形态的3倍。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("属性伤害")]),r("br"),b._v("\n属性减少是人物因故使自己的肉体或精神受到损害的情况。属性伤害是一种较缓合的、暂时性的效果。每一点属性伤害效果会使相应属性在持续时间内视为比真实值少1，这会即时影响到与该属性相关的所有方面。如无特别说明，属性伤害的自然回复速度为每次8小时长休息可以选择一个任意属性回复1点属性伤害。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("失速")]),r("br"),b._v("\n失速是指生物在飞行过程中基本速度或飞行速度因故受到减值的情况。若减值大于生物的基础速度或飞行速度之较低者，则每一点减值会带来1米的坠落，之后生物可以稳住身体并滑翔降落。"),r("br"),b._v("\n靠飘浮进行飞行的生物和机动性为完美的生物不受失速影响。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("睡眠")]),r("br"),b._v("\n睡眠是指人物进行睡眠或冥想等对外界几乎失去关注的状态。"),r("br"),b._v("\n在睡眠状态下，人物将失去所有防御上的闪避加值，并且不能使用反射动作或相应动作，回避范围伤害的判定自动视为0成功。"),r("br"),b._v("\n一般而言，睡眠会自然醒来，他人可以以一个标准动作把人物弄醒，在睡眠中的人物决定敏感范围时，视为感知降低1，并且总是认为目标已经刻意躲藏，在用知觉判定对抗对方的躲藏时，睡眠中的人物会失去一个成功数。"),r("br"),b._v("\n在受到任何伤害后，睡眠中的人物自动醒来。"),r("br"),b._v(" "),r("br"),b._v(" "),r("span",{staticClass:"bbc_size",staticStyle:{"font-size":"20px"}},[b._v("昏迷")]),r("br"),b._v("\n昏迷是指人物失去意识，彻底对外界失去关注的状态。"),r("br"),b._v("\n在睡眠状态下，人物将失去所有防御上的闪避加值，并且不能使用反射动作或相应动作，回避范围伤害的判定自动视为0成功。"),r("br"),b._v("\n昏迷可能会自然醒转，也可能不会，昏迷的人物没有敏感范围也无法查知他人的接近。"),r("br"),b._v("\n昏迷中的人物被认为没有心智，因此免疫一切基于影响心灵的效果")],1)])])},[],!1,null,null,null);_.default=t.exports}}]);