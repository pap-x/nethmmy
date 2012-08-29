/* anytimec.js 4.1112L
Copyright 2008-2012 Andrew M. Andrews III
License: creativecommons.org/licenses/by-nc-sa/3.0/
Any+Time is a trademark of Andrew M. Andrews III */
var AnyTime={pad:function(g,z){for(var r=""+Math.abs(g);r.length<z;)r="0"+r;0>g&&(r="-"+r);return r}};
(function(g){var z=[31,28,31,30,31,30,31,31,30,31,30,31],r=null,D=!1,A=0<navigator.userAgent.indexOf("MSIE 6"),B=0<navigator.userAgent.indexOf("MSIE 7"),y=[];jQuery.prototype.AnyTime_picker=function(g){return this.each(function(){AnyTime.picker(this.id,g)})};jQuery.prototype.AnyTime_noPicker=function(){return this.each(function(){AnyTime.noPicker(this.id)})};jQuery.prototype.AnyTime_setEarliest=function(g){return this.each(function(){AnyTime.setEarliest(this.id,g)})};jQuery.prototype.AnyTime_setLatest=
function(g){return this.each(function(){AnyTime.setLatest(this.id,g)})};jQuery.prototype.AnyTime_height=function(g){return A?Number(this.css("height").replace(/[^0-9]/g,"")):this.outerHeight(g)};jQuery.prototype.AnyTime_width=function(g){return A?1+Number(this.css("width").replace(/[^0-9]/g,"")):this.outerWidth(g)};jQuery.prototype.AnyTime_current=function(g,k){g?(this.removeClass("AnyTime-out-btn ui-state-default ui-state-disabled ui-state-highlight"),this.addClass("AnyTime-cur-btn ui-state-default ui-state-highlight")):
(this.removeClass("AnyTime-cur-btn ui-state-highlight"),k?this.removeClass("AnyTime-out-btn ui-state-disabled"):this.addClass("AnyTime-out-btn ui-state-disabled"))};jQuery.prototype.AnyTime_clickCurrent=function(){this.find(".AnyTime-cur-btn").triggerHandler("click")};g(document).ready(function(){A&&(r=g('<iframe frameborder="0" scrolling="no"></iframe>'),r.src="javascript:'<html></html>';",g(r).css({display:"block",height:"1px",left:"0",top:"0",width:"1px",zIndex:0}),g(document.body).append(r));
for(var l in y)if(!Array.prototype[l])y[l].onReady();D=!0});AnyTime.Converter=function(l){var k=0,h=9,c=9,a=6,b=3,d=Number.MIN_VALUE,j=Number.MIN_VALUE,o=Number.MIN_VALUE,u=-1,C=Number.MIN_VALUE,s=-1,w=!1;this.fmt="%Y-%m-%d %T";this.dAbbr="Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",");this.dNames="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");this.eAbbr=["BCE","CE"];this.mAbbr="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");this.mNames="January,February,March,April,May,June,July,August,September,October,November,December".split(",");
this.baseYear=null;this.dAt=function(a,b){return 48<=a.charCodeAt(b)&&57>=a.charCodeAt(b)};this.format=function(a){a=new Date(a.getTime());d==Number.MIN_VALUE&&o!=Number.MIN_VALUE&&a.setTime(a.getTime()+6E4*a.getTimezoneOffset()+6E4*o);for(var b,e="",c=0;c<k;c++)if("%"!=this.fmt.charAt(c))e+=this.fmt.charAt(c);else{var f=this.fmt.charAt(c+1);switch(f){case "a":e+=this.dAbbr[a.getDay()];break;case "B":0>a.getFullYear()&&(e+=this.eAbbr[0]);break;case "b":e+=this.mAbbr[a.getMonth()];break;case "C":0<
a.getFullYear()&&(e+=this.eAbbr[1]);break;case "c":e+=a.getMonth()+1;break;case "d":b=a.getDate();10>b&&(e+="0");e+=""+b;break;case "D":b=""+a.getDate();e+=b;if(2==b.length&&"1"==b.charAt(0))e+="th";else switch(b.charAt(b.length-1)){case "1":e+="st";break;case "2":e+="nd";break;case "3":e+="rd";break;default:e+="th"}break;case "E":e+=this.eAbbr[0>a.getFullYear()?0:1];break;case "e":e+=a.getDate();break;case "H":b=a.getHours();10>b&&(e+="0");e+=""+b;break;case "h":case "I":b=a.getHours()%12;0==b?e+=
"12":(10>b&&(e+="0"),e+=""+b);break;case "i":b=a.getMinutes();10>b&&(e+="0");e+=""+b;break;case "k":e+=a.getHours();break;case "l":b=a.getHours()%12;e=0==b?e+"12":e+(""+b);break;case "M":e+=this.mNames[a.getMonth()];break;case "m":b=a.getMonth()+1;10>b&&(e+="0");e+=""+b;break;case "p":e+=12>a.getHours()?"AM":"PM";break;case "r":b=a.getHours()%12;0==b?e+="12:":(10>b&&(e+="0"),e+=""+b+":");b=a.getMinutes();10>b&&(e+="0");e+=""+b+":";b=a.getSeconds();10>b&&(e+="0");e+=""+b;e+=12>a.getHours()?"AM":"PM";
break;case "S":case "s":b=a.getSeconds();10>b&&(e+="0");e+=""+b;break;case "T":b=a.getHours();10>b&&(e+="0");e+=""+b+":";b=a.getMinutes();10>b&&(e+="0");e+=""+b+":";b=a.getSeconds();10>b&&(e+="0");e+=""+b;break;case "W":e+=this.dNames[a.getDay()];break;case "w":e+=a.getDay();break;case "Y":e+=AnyTime.pad(a.getFullYear(),4);break;case "y":b=a.getFullYear()%100;e+=AnyTime.pad(b,2);break;case "Z":e+=AnyTime.pad(Math.abs(a.getFullYear()),4);break;case "z":e+=Math.abs(a.getFullYear());break;case "%":e+=
"%";break;case "#":b=d!=Number.MIN_VALUE?d:o==Number.MIN_VALUE?0-a.getTimezoneOffset():o;0<=b&&(e+="+");e+=b;break;case "@":b=d!=Number.MIN_VALUE?d:o==Number.MIN_VALUE?0-a.getTimezoneOffset():o;if(AnyTime.utcLabel&&AnyTime.utcLabel[b]){e=0<u&&u<AnyTime.utcLabel[b].length?e+AnyTime.utcLabel[b][u]:e+AnyTime.utcLabel[b][0];break}e+="UTC";f=":";case "+":case "-":case ":":case ";":b=d!=Number.MIN_VALUE?d:o==Number.MIN_VALUE?0-a.getTimezoneOffset():o;e=0>b?e+"-":e+"+";b=Math.abs(b);e+="+"==f||":"==f?AnyTime.pad(Math.floor(b/
60),2):Math.floor(b/60);if(":"==f||";"==f)e+=":";e+=AnyTime.pad(b%60,2);break;case "f":case "j":case "U":case "u":case "V":case "v":case "X":case "x":throw"%"+f+" not implemented by AnyTime.Converter";default:e+=this.fmt.substr(c,2)}c++}return e};this.getUtcParseOffsetCaptured=function(){return j};this.getUtcParseOffsetSubIndex=function(){return s};this.parse=function(d){j=C;s=-1;for(var g=1,e=new Date(4,0,1,0,0,0,0),v=d.length,f=0,o=1,m=C,p,q,u,n,l=0;l<k;l++)if("%"==this.fmt.charAt(l)){q=this.fmt.charAt(l+
1);switch(q){case "a":q=!1;for(n=0;f+n<v;n++){u=d.substr(f,n);for(p=0;12>p;p++)if(this.dAbbr[p]==u){q=!0;f+=n;break}if(q)break}if(!q)throw"unknown weekday: "+d.substr(f);break;case "B":n=this.eAbbr[0].length;f+n<=v&&d.substr(f,n)==this.eAbbr[0]&&(g=-1,f+=n);break;case "b":q=!1;for(n=0;f+n<v;n++){u=d.substr(f,n);for(p=0;12>p;p++)if(this.mAbbr[p]==u){e.setMonth(p);q=!0;f+=n;break}if(q)break}if(!q)throw"unknown month: "+d.substr(f);break;case "C":n=this.eAbbr[1].length;f+n<=v&&d.substr(f,n)==this.eAbbr[1]&&
(f+=n);break;case "c":f+1<v&&this.dAt(d,f+1)?(e.setMonth((Number(d.substr(f,2))-1)%12),f+=2):(e.setMonth((Number(d.substr(f,1))-1)%12),f++);break;case "D":f+1<v&&this.dAt(d,f+1)?(e.setDate(Number(d.substr(f,2))),f+=4):(e.setDate(Number(d.substr(f,1))),f+=3);break;case "d":e.setDate(Number(d.substr(f,2)));f+=2;break;case "E":n=this.eAbbr[0].length;if(f+n<=v&&d.substr(f,n)==this.eAbbr[0])g=-1,f+=n;else if(f+(n=this.eAbbr[1].length)<=v&&d.substr(f,n)==this.eAbbr[1])f+=n;else throw"unknown era: "+d.substr(f);
break;case "e":f+1<v&&this.dAt(d,f+1)?(e.setDate(Number(d.substr(f,2))),f+=2):(e.setDate(Number(d.substr(f,1))),f++);break;case "f":f+=6;break;case "H":e.setHours(Number(d.substr(f,2)));f+=2;break;case "h":case "I":e.setHours(Number(d.substr(f,2)));f+=2;break;case "i":e.setMinutes(Number(d.substr(f,2)));f+=2;break;case "k":f+1<v&&this.dAt(d,f+1)?(e.setHours(Number(d.substr(f,2))),f+=2):(e.setHours(Number(d.substr(f,1))),f++);break;case "l":f+1<v&&this.dAt(d,f+1)?(e.setHours(Number(d.substr(f,2))),
f+=2):(e.setHours(Number(d.substr(f,1))),f++);break;case "M":q=!1;for(n=b;f+n<=v&&!(n>c);n++){u=d.substr(f,n);for(p=0;12>p;p++)if(this.mNames[p]==u){e.setMonth(p);q=!0;f+=n;break}if(q)break}break;case "m":e.setMonth((Number(d.substr(f,2))-1)%12);f+=2;break;case "p":12==e.getHours()?"A"==d.charAt(f)&&e.setHours(0):"P"==d.charAt(f)&&e.setHours(e.getHours()+12);f+=2;break;case "r":e.setHours(Number(d.substr(f,2)));e.setMinutes(Number(d.substr(f+3,2)));e.setSeconds(Number(d.substr(f+6,2)));12==e.getHours()?
"A"==d.charAt(f+8)&&e.setHours(0):"P"==d.charAt(f+8)&&e.setHours(e.getHours()+12);f+=10;break;case "S":case "s":e.setSeconds(Number(d.substr(f,2)));f+=2;break;case "T":e.setHours(Number(d.substr(f,2)));e.setMinutes(Number(d.substr(f+3,2)));e.setSeconds(Number(d.substr(f+6,2)));f+=8;break;case "W":q=!1;for(n=a;f+n<=v&&!(n>h);n++){u=d.substr(f,n);for(p=0;7>p;p++)if(this.dNames[p]==u){q=!0;f+=n;break}if(q)break}break;case "w":f+=1;break;case "Y":p=4;"-"==d.substr(f,1)&&p++;e.setFullYear(Number(d.substr(f,
p)));f+=p;break;case "y":p=2;"-"==d.substr(f,1)&&p++;q=Number(d.substr(f,p));q="number"==typeof this.baseYear?q+this.baseYear:70>q?q+2E3:q+1900;e.setFullYear(q);f+=p;break;case "Z":e.setFullYear(Number(d.substr(f,4)));f+=4;break;case "z":for(p=0;f<v&&this.dAt(d,f);)p=10*p+Number(d.charAt(f++));e.setFullYear(p);break;case "#":"-"==d.charAt(f++)&&(o=-1);for(m=0;f<v&&""+(p=Number(d.charAt(f)))==d.charAt(f);f++)m=10*m+p;m*=o;break;case "@":s=-1;if(AnyTime.utcLabel){q=!1;for(m in AnyTime.utcLabel)if(!Array.prototype[m]){for(p=
0;p<AnyTime.utcLabel[m].length;p++)if(u=AnyTime.utcLabel[m][p],n=u.length,f+n<=v&&d.substr(f,n)==u){f+=n;q=!0;break}if(q)break}if(q){s=p;m=Number(m);break}}if(f+9<v||"UTC"!=d.substr(f,3))throw"unknown time zone: "+d.substr(f);f+=3;q=":";case "-":case "+":case ":":case ";":"-"==d.charAt(f++)&&(o=-1);m=Number(d.charAt(f));if("+"==q||":"==q||f+3<v&&""+Number(d.charAt(f+3))!==d.charAt(f+3))m=10*m+Number(d.charAt(++f));m*=60;(":"==q||";"==q)&&f++;m=(m+Number(d.substr(++f,2)))*o;f+=2;break;case "j":case "U":case "u":case "V":case "v":case "X":case "x":throw"%"+
this.fmt.charAt(l+1)+" not implemented by AnyTime.Converter";default:throw"%"+this.fmt.charAt(l+1)+" reserved for future use";}l++}else{if(this.fmt.charAt(l)!=d.charAt(f))throw d+' is not in "'+this.fmt+'" format';f++}0>g&&e.setFullYear(0-e.getFullYear());m!=Number.MIN_VALUE&&(w?j=m:e.setTime(e.getTime()-6E4*m-6E4*e.getTimezoneOffset()));return e};this.setUtcFormatOffsetAlleged=function(a){var b=d;d=a;return b};this.setUtcFormatOffsetSubIndex=function(a){var b=u;u=a;return b};(function(d){var j,e;
l=jQuery.extend(!0,{},l||{});l.baseYear&&(d.baseYear=Number(l.baseYear));l.format&&(d.fmt=l.format);k=d.fmt.length;l.dayAbbreviations&&(d.dAbbr=g.makeArray(l.dayAbbreviations));if(l.dayNames){d.dNames=g.makeArray(l.dayNames);h=1;a=1E3;for(j=0;7>j;j++)e=d.dNames[j].length,e>h&&(h=e),e<a&&(a=e)}l.eraAbbreviations&&(d.eAbbr=g.makeArray(l.eraAbbreviations));l.monthAbbreviations&&(d.mAbbr=g.makeArray(l.monthAbbreviations));if(l.monthNames){d.mNames=g.makeArray(l.monthNames);c=1;b=1E3;for(j=0;12>j;j++)e=
d.mNames[j].length,e>c&&(c=e),e<b&&(b=e)}"undefined"!=typeof l.utcFormatOffsetImposed&&(o=l.utcFormatOffsetImposed);"undefined"!=typeof l.utcParseOffsetAssumed&&(C=l.utcParseOffsetAssumed);l.utcParseOffsetCapture&&(w=!0)})(this)};AnyTime.noPicker=function(g){y[g]&&(y[g].cleanup(),delete y[g])};AnyTime.picker=function(l,k){if(y[l])throw'Cannot create another AnyTime.picker for "'+l+'"';var h=null;y[l]={twelveHr:!1,ajaxOpts:null,denyTab:!0,askEra:!1,cloak:null,conv:null,bMinW:0,bMinH:0,dMinW:0,dMinH:0,
div:null,dB:null,dD:null,dY:null,dMo:null,dDoM:null,hDoM:null,hMo:null,hTitle:null,hY:null,dT:null,dH:null,dM:null,dS:null,dO:null,earliest:null,fBtn:null,fDOW:0,hBlur:null,hClick:null,hFocus:null,hKeydown:null,hKeypress:null,id:null,inp:null,latest:null,lastAjax:null,lostFocus:!1,lX:"X",lY:"Year",lO:"Time Zone",oBody:null,oConv:null,oCur:null,oDiv:null,oLab:null,oListMinW:0,oMinW:0,oSel:null,offMin:Number.MIN_VALUE,offSI:-1,offStr:"",pop:!0,time:null,tMinW:0,tMinH:0,url:null,wMinW:0,wMinH:0,yAhead:null,
y0XXX:null,yCur:null,yDiv:null,yLab:null,yNext:null,yPast:null,yPrior:null,initialize:function(c){h=this;this.id="AnyTime--"+c.replace(/[^-_.A-Za-z0-9]/g,"--AnyTime--");k=jQuery.extend(!0,{},k||{});k.utcParseOffsetCapture=!0;this.conv=new AnyTime.Converter(k);if(k.placement)if("inline"==k.placement)this.pop=!1;else if("popup"!=k.placement)throw"unknown placement: "+k.placement;k.ajaxOptions&&(this.ajaxOpts=jQuery.extend({},k.ajaxOptions),this.ajaxOpts.success||(this.ajaxOpts.success=function(a){h.inp.val(a)}));
k.earliest&&(this.earliest="function"==typeof k.earliest.getTime?k.earliest.getTime():this.conv.parse(k.earliest.toString()));if(k.firstDOW){if(0>k.firstDOW||6<k.firstDOW)throw new Exception("illegal firstDOW: "+k.firstDOW);this.fDOW=k.firstDOW}k.latest&&(this.latest="function"==typeof k.latest.getTime?k.latest.getTime():this.conv.parse(k.latest.toString()));this.lX=k.labelDismiss||"X";this.lY=k.labelYear||"Year";this.lO=k.labelTimeZone||"Time Zone";var a,b,d=0;b=this.conv.fmt;this.askEra="undefined"!=
typeof k.askEra?k.askEra:0<=b.indexOf("%B")||0<=b.indexOf("%C")||0<=b.indexOf("%E");a=0<=b.indexOf("%Y")||0<=b.indexOf("%y")||0<=b.indexOf("%Z")||0<=b.indexOf("%z");var j=0<=b.indexOf("%b")||0<=b.indexOf("%c")||0<=b.indexOf("%M")||0<=b.indexOf("%m"),o=0<=b.indexOf("%D")||0<=b.indexOf("%d")||0<=b.indexOf("%e"),u=a||j||o,l=(this.twelveHr=0<=b.indexOf("%h")||0<=b.indexOf("%I")||0<=b.indexOf("%l")||0<=b.indexOf("%r"))||0<=b.indexOf("%H")||0<=b.indexOf("%k")||0<=b.indexOf("%T"),s=0<=b.indexOf("%i")||0<=
b.indexOf("%r")||0<=b.indexOf("%T"),w=0<=b.indexOf("%r")||0<=b.indexOf("%S")||0<=b.indexOf("%s")||0<=b.indexOf("%T");w&&"undefined"!=typeof k.askSecond&&(w=k.askSecond);var y=0<=b.indexOf("%#")||0<=b.indexOf("%+")||0<=b.indexOf("%-")||0<=b.indexOf("%:")||0<=b.indexOf("%;")||0<=b.indexOf("%<")||0<=b.indexOf("%>")||0<=b.indexOf("%@"),t=l||s||w||y;y&&(this.oConv=new AnyTime.Converter({format:k.formatUtcOffset||b.match(/\S*%[-+:;<>#@]\S*/g).join(" ")}));this.inp=g(document.getElementById(c));this.div=
g('<div class="AnyTime-win AnyTime-pkr ui-widget ui-widget-content ui-corner-all" style="width:0;height:0" id="'+this.id+'" aria-live="off"/>');this.inp.after(this.div);this.wMinW=this.div.outerWidth(!g.browser.safari);this.wMinH=this.div.AnyTime_height(!0);this.hTitle=g('<h5 class="AnyTime-hdr ui-widget-header ui-corner-top"/>');this.div.append(this.hTitle);this.dB=g('<div class="AnyTime-body" style="width:0;height:0"/>');this.div.append(this.dB);this.bMinW=this.dB.outerWidth(!0);this.bMinH=this.dB.AnyTime_height(!0);
k.hideInput&&this.inp.css({border:0,height:"1px",margin:0,padding:0,width:"1px"});c=b=null;this.pop&&(c=g('<div class="AnyTime-x-btn ui-state-default">'+this.lX+"</div>"),this.hTitle.append(c),c.click(function(a){h.dismiss(a)}));c="";if(u){this.dD=g('<div class="AnyTime-date" style="width:0;height:0"/>');this.dB.append(this.dD);this.dMinW=this.dD.outerWidth(!0);this.dMinH=this.dD.AnyTime_height(!0);a&&(this.yLab=g('<h6 class="AnyTime-lbl AnyTime-lbl-yr">'+this.lY+"</h6>"),this.dD.append(this.yLab),
this.dY=g('<ul class="AnyTime-yrs ui-helper-reset" />'),this.dD.append(this.dY),this.yPast=this.btn(this.dY,"&lt;",this.newYear,["yrs-past"],"- "+this.lY),this.yPrior=this.btn(this.dY,"1",this.newYear,["yr-prior"],"-1 "+this.lY),this.yCur=this.btn(this.dY,"2",this.newYear,["yr-cur"],this.lY),this.yCur.removeClass("ui-state-default"),this.yCur.addClass("AnyTime-cur-btn ui-state-default ui-state-highlight"),this.yNext=this.btn(this.dY,"3",this.newYear,["yr-next"],"+1 "+this.lY),this.yAhead=this.btn(this.dY,
"&gt;",this.newYear,["yrs-ahead"],"+ "+this.lY),d++);if(j){c=k.labelMonth||"Month";this.hMo=g('<h6 class="AnyTime-lbl AnyTime-lbl-month">'+c+"</h6>");this.dD.append(this.hMo);this.dMo=g('<ul class="AnyTime-mons" />');this.dD.append(this.dMo);for(a=0;12>a;a++)this.btn(this.dMo,this.conv.mAbbr[a],function(a){var b=g(a.target);if(!b.hasClass("AnyTime-out-btn")){var a=a.target.AnyTime_month,d=new Date(this.time.getTime());d.getDate()>z[a]&&d.setDate(z[a]);d.setMonth(a);this.set(d);this.upd(b)}},["mon",
"mon"+(a+1)],c+" "+this.conv.mNames[a])[0].AnyTime_month=a;d++}if(o){c=k.labelDayOfMonth||"Day of Month";this.hDoM=g('<h6 class="AnyTime-lbl AnyTime-lbl-dom">'+c+"</h6>");this.dD.append(this.hDoM);this.dDoM=g('<table border="0" cellpadding="0" cellspacing="0" class="AnyTime-dom-table"/>');this.dD.append(this.dDoM);b=g('<thead class="AnyTime-dom-head"/>');this.dDoM.append(b);o=g('<tr class="AnyTime-dow"/>');b.append(o);for(a=0;7>a;a++)o.append('<th class="AnyTime-dow AnyTime-dow'+(a+1)+'">'+this.conv.dAbbr[(this.fDOW+
a)%7]+"</th>");b=g('<tbody class="AnyTime-dom-body" />');this.dDoM.append(b);for(j=0;6>j;j++){o=g('<tr class="AnyTime-wk AnyTime-wk'+(j+1)+'"/>');b.append(o);for(a=0;7>a;a++)this.btn(o,"x",function(a){a=g(a.target);if(!a.hasClass("AnyTime-out-btn")){var b=Number(a.html());if(b){var d=new Date(this.time.getTime());d.setDate(b);this.set(d);this.upd(a)}}},["dom"],c)}d++}}if(t){this.dT=g('<div class="AnyTime-time" style="width:0;height:0" />');this.dB.append(this.dT);this.tMinW=this.dT.outerWidth(!0);
this.tMinH=this.dT.AnyTime_height(!0);if(l){this.dH=g('<div class="AnyTime-hrs"/>');this.dT.append(this.dH);c=k.labelHour||"Hour";this.dH.append(g('<h6 class="AnyTime-lbl AnyTime-lbl-hr">'+c+"</h6>"));l=g('<ul class="AnyTime-hrs-am"/>');this.dH.append(l);o=g('<ul class="AnyTime-hrs-pm"/>');this.dH.append(o);for(a=0;12>a;a++)b=this.twelveHr?0==a?"12am":""+a+"am":AnyTime.pad(a,2),this.btn(l,b,this.newHour,["hr","hr"+a],c+" "+b),b=this.twelveHr?0==a?"12pm":""+a+"pm":a+12,this.btn(o,b,this.newHour,["hr",
"hr"+(a+12)],c+" "+b);d++}if(s){this.dM=g('<div class="AnyTime-mins"/>');this.dT.append(this.dM);c=k.labelMinute||"Minute";this.dM.append(g('<h6 class="AnyTime-lbl AnyTime-lbl-min">'+c+"</h6>"));s=g('<ul class="AnyTime-mins-tens"/>');this.dM.append(s);for(a=0;6>a;a++)this.btn(s,a,function(a){a=g(a.target);if(!a.hasClass("AnyTime-out-btn")){var b=new Date(this.time.getTime());b.setMinutes(Number(a.text())*10+this.time.getMinutes()%10);this.set(b);this.upd(a)}},["min-ten","min"+a+"0"],c+" "+a+"0");
for(;12>a;a++)this.btn(s,"&#160;",g.noop,["min-ten","min"+a+"0"],c+" "+a+"0").addClass("AnyTime-min-ten-btn-empty ui-state-default ui-state-disabled");s=g('<ul class="AnyTime-mins-ones"/>');this.dM.append(s);for(a=0;10>a;a++)this.btn(s,a,function(a){a=g(a.target);if(!a.hasClass("AnyTime-out-btn")){var b=new Date(this.time.getTime());b.setMinutes(Math.floor(this.time.getMinutes()/10)*10+Number(a.text()));this.set(b);this.upd(a)}},["min-one","min"+a],c+" "+a);for(;12>a;a++)this.btn(s,"&#160;",g.noop,
["min-one","min"+a+"0"],c+" "+a).addClass("AnyTime-min-one-btn-empty ui-state-default ui-state-disabled");d++}if(w){this.dS=g('<div class="AnyTime-secs"/>');this.dT.append(this.dS);c=k.labelSecond||"Second";this.dS.append(g('<h6 class="AnyTime-lbl AnyTime-lbl-sec">'+c+"</h6>"));s=g('<ul class="AnyTime-secs-tens"/>');this.dS.append(s);for(a=0;6>a;a++)this.btn(s,a,function(a){a=g(a.target);if(!a.hasClass("AnyTime-out-btn")){var b=new Date(this.time.getTime());b.setSeconds(Number(a.text())*10+this.time.getSeconds()%
10);this.set(b);this.upd(a)}},["sec-ten","sec"+a+"0"],c+" "+a+"0");for(;12>a;a++)this.btn(s,"&#160;",g.noop,["sec-ten","sec"+a+"0"],c+" "+a+"0").addClass("AnyTime-sec-ten-btn-empty ui-state-default ui-state-disabled");s=g('<ul class="AnyTime-secs-ones"/>');this.dS.append(s);for(a=0;10>a;a++)this.btn(s,a,function(a){a=g(a.target);if(!a.hasClass("AnyTime-out-btn")){var b=new Date(this.time.getTime());b.setSeconds(Math.floor(this.time.getSeconds()/10)*10+Number(a.text()));this.set(b);this.upd(a)}},["sec-one",
"sec"+a],c+" "+a);for(;12>a;a++)this.btn(s,"&#160;",g.noop,["sec-one","sec"+a+"0"],c+" "+a).addClass("AnyTime-sec-one-btn-empty ui-state-default ui-state-disabled");d++}y&&(this.dO=g('<div class="AnyTime-offs" />'),this.dT.append(this.dO),this.oMinW=this.dO.outerWidth(!0),this.oLab=g('<h6 class="AnyTime-lbl AnyTime-lbl-off">'+this.lO+"</h6>"),this.dO.append(this.oLab),w=g('<ul class="AnyTime-off-list ui-helper-reset" />'),this.dO.append(w),this.oCur=this.btn(w,"",this.newOffset,["off","off-cur"],
c),this.oCur.removeClass("ui-state-default"),this.oCur.addClass("AnyTime-cur-btn ui-state-default ui-state-highlight"),this.oCur.css({overflow:"hidden"}),this.oSel=this.btn(w,"&#177;",this.newOffset,["off","off-select"],"+/- "+this.lO),this.oListMinW=this.oCur.outerWidth(!0)+this.oSel.outerWidth(!0),d++)}k.labelTitle?this.hTitle.append(k.labelTitle):1<d?this.hTitle.append("Select a "+(u?t?"Date and Time":"Date":"Time")):this.hTitle.append("Select");try{this.time=this.conv.parse(this.inp.val()),this.offMin=
this.conv.getUtcParseOffsetCaptured(),this.offSI=this.conv.getUtcParseOffsetSubIndex()}catch(e){this.time=new Date}this.lastAjax=this.time;this.pop&&(this.div.hide(),r&&r.hide(),this.div.css("position","absolute"));this.inp.blur(this.hBlur=function(a){h.inpBlur(a)});this.inp.click(this.hClick=function(a){h.showPkr(a)});this.inp.focus(this.hFocus=function(a){h.lostFocus&&h.showPkr(a);h.lostFocus=false});this.inp.keydown(this.hKeydown=function(a){h.key(a)});this.inp.keypress(this.hKeypress=function(a){g.browser.opera&&
h.denyTab&&a.preventDefault()});this.div.click(function(){h.lostFocus=false;h.inp.focus()});g(window).resize(function(a){h.pos(a)});if(D)this.onReady()},ajax:function(){if(this.ajaxOpts&&this.time.getTime()!=this.lastAjax.getTime())try{var c=jQuery.extend({},this.ajaxOpts);if("object"==typeof c.data)c.data[this.inp[0].name||this.inp[0].id]=this.inp.val();else{var a=(this.inp[0].name||this.inp[0].id)+"="+encodeURI(this.inp.val());c.data=c.data?c.data+("&"+a):a}g.ajax(c);this.lastAjax=this.time}catch(b){}},
askOffset:function(c){if(this.oDiv)this.cloak.show(),this.oDiv.show();else{this.makeCloak();this.oDiv=g('<div class="AnyTime-win AnyTime-off-selector ui-widget ui-widget-content ui-corner-all" style="position:absolute" />');this.div.append(this.oDiv);var a=g('<h5 class="AnyTime-hdr AnyTime-hdr-off-selector ui-widget-header ui-corner-top" />');this.oDiv.append(a);this.oBody=g('<div class="AnyTime-body AnyTime-body-off-selector" style="overflow:auto;white-space:nowrap" />');this.oDiv.append(this.oBody);
var b=this.oBody.AnyTime_height(!0),d=this.oBody.AnyTime_width(!0),j=a.AnyTime_width(!0),o=g('<div class="AnyTime-x-btn ui-state-default">'+this.lX+"</div>");a.append(o);o.click(function(a){h.dismissODiv(a)});a.append(this.lO);(A||B)&&a.width(""+0.8*this.lO.length+"em");var d=a.AnyTime_width(!0)-d,o=g('<ul class="AnyTime-off-off" />'),u=null;this.oBody.append(o);var l=0<=this.oConv.fmt.indexOf("%@"),k=0;if(AnyTime.utcLabel)for(var w=-720;720>w;w++)if(AnyTime.utcLabel[w]){this.oConv.setUtcFormatOffsetAlleged(w);
for(var r=0;r<AnyTime.utcLabel[w].length;r++){this.oConv.setUtcFormatOffsetSubIndex(r);u=this.btn(o,this.oConv.format(this.time),this.newOPos,["off-off"],w);u[0].AnyTime_offMin=w;u[0].AnyTime_offSI=r;var t=u.width();t>k&&(k=t);if(!l)break}}u&&u.addClass("AnyTime-off-off-last-btn");this.oBody.find(".AnyTime-off-off-btn").width(k);u&&(o=u.AnyTime_width(!0),o>d&&(d=o+1));this.oBody.width(d);d=this.oBody.AnyTime_width(!0);this.oDiv.width(d);(A||B)&&a.width(d-j);d=this.oDiv.AnyTime_height(!0);o=0.75*this.div.height();
d>o&&(d=o,this.oBody.height(d-(a.AnyTime_height(!0)+b)),this.oBody.width(this.oBody.width()+20),this.oDiv.width(this.oDiv.width()+20),(A||B)&&a.width(this.oBody.AnyTime_width(!0)-j));B||this.oDiv.height(""+d+"px")}this.pos(c);this.updODiv(null);c=this.oDiv.find(".AnyTime-off-off-btn.AnyTime-cur-btn:first");c.length||(c=this.oDiv.find(".AnyTime-off-off-btn:first"));this.setFocus(c)},askYear:function(c){if(this.yDiv)this.cloak.show(),this.yDiv.show();else{this.makeCloak();this.yDiv=g('<div class="AnyTime-win AnyTime-yr-selector ui-widget ui-widget-content ui-corner-all" style="position:absolute" />');
this.div.append(this.yDiv);var a=g('<h5 class="AnyTime-hdr AnyTime-hdr-yr-selector ui-widget-header ui-corner-top" />');this.yDiv.append(a);var b=g('<div class="AnyTime-x-btn ui-state-default">'+this.lX+"</div>");a.append(b);b.click(function(a){h.dismissYDiv(a)});a.append(this.lY);var b=g('<div class="AnyTime-body AnyTime-body-yr-selector" />'),d=b.AnyTime_width(!0),j=0;this.yDiv.append(b);cont=g('<ul class="AnyTime-yr-mil" />');b.append(cont);this.y0XXX=this.btn(cont,0,this.newYPos,["mil","mil0"],
this.lY+" 0000");for(i=1;10>i;i++)this.btn(cont,i,this.newYPos,["mil","mil"+i],this.lY+" "+i+"000");d+=cont.AnyTime_width(!0);j<cont.AnyTime_height(!0)&&(j=cont.AnyTime_height(!0));cont=g('<ul class="AnyTime-yr-cent" />');b.append(cont);for(i=0;10>i;i++)this.btn(cont,i,this.newYPos,["cent","cent"+i],this.lY+" "+i+"00");d+=cont.AnyTime_width(!0);j<cont.AnyTime_height(!0)&&(j=cont.AnyTime_height(!0));cont=g('<ul class="AnyTime-yr-dec" />');b.append(cont);for(i=0;10>i;i++)this.btn(cont,i,this.newYPos,
["dec","dec"+i],this.lY+" "+i+"0");d+=cont.AnyTime_width(!0);j<cont.AnyTime_height(!0)&&(j=cont.AnyTime_height(!0));cont=g('<ul class="AnyTime-yr-yr" />');b.append(cont);for(i=0;10>i;i++)this.btn(cont,i,this.newYPos,["yr","yr"+i],this.lY+" "+i);d+=cont.AnyTime_width(!0);j<cont.AnyTime_height(!0)&&(j=cont.AnyTime_height(!0));this.askEra&&(cont=g('<ul class="AnyTime-yr-era" />'),b.append(cont),this.btn(cont,this.conv.eAbbr[0],function(a){var b=new Date(this.time.getTime()),d=b.getFullYear();0<d&&b.setFullYear(0-
d);this.set(b);this.updYDiv(g(a.target))},["era","bce"],this.conv.eAbbr[0]),this.btn(cont,this.conv.eAbbr[1],function(a){var b=new Date(this.time.getTime()),d=b.getFullYear();0>d&&b.setFullYear(0-d);this.set(b);this.updYDiv(g(a.target))},["era","ce"],this.conv.eAbbr[1]),d+=cont.AnyTime_width(!0),j<cont.AnyTime_height(!0)&&(j=cont.AnyTime_height(!0)));g.browser.msie?d+=1:g.browser.safari&&(d+=2);j+=b.AnyTime_height(!0);b.css("width",""+d+"px");B||b.css("height",""+j+"px");(A||B)&&a.width(b.outerWidth(!0));
j+=a.AnyTime_height(!0);a.AnyTime_width(!0)>d&&(d=a.AnyTime_width(!0));this.yDiv.css("width",""+d+"px");B||this.yDiv.css("height",""+j+"px")}this.pos(c);this.updYDiv(null);this.setFocus(this.yDiv.find(".AnyTime-yr-btn.AnyTime-cur-btn:first"))},inpBlur:function(c){this.oDiv&&this.oDiv.is(":visible")?h.inp.focus():(this.lostFocus=!0,setTimeout(function(){h.lostFocus&&(h.div.find(".AnyTime-focus-btn").removeClass("AnyTime-focus-btn ui-state-focus"),h.pop?h.dismiss(c):h.ajax())},334))},btn:function(c,
a,b,d,j){for(var k="ul"==c[0].nodeName.toLowerCase()?"li":"td",l="<"+k+' class="AnyTime-btn',r=0;r<d.length;r++)l+=" AnyTime-"+d[r]+"-btn";a=g(l+' ui-state-default">'+a+"</"+k+">");c.append(a);a.AnyTime_title=j;a.click(function(a){h.tempFunc=b;h.tempFunc(a)});a.dblclick(function(a){var b=g(this);b.is(".AnyTime-off-off-btn")?h.dismissODiv(a):b.is(".AnyTime-mil-btn")||b.is(".AnyTime-cent-btn")||b.is(".AnyTime-dec-btn")||b.is(".AnyTime-yr-btn")||b.is(".AnyTime-era-btn")?h.dismissYDiv(a):h.pop&&h.dismiss(a)});
return a},cleanup:function(){this.inp.unbind("blur",this.hBlur);this.inp.unbind("click",this.hClick);this.inp.unbind("focus",this.hFocus);this.inp.unbind("keydown",this.hKeydown);this.inp.unbind("keypress",this.hKeypress);this.div.remove()},dismiss:function(){this.ajax();r&&r.hide();this.yDiv&&this.dismissYDiv();this.oDiv&&this.dismissODiv();this.div.hide();this.lostFocus=!0},dismissODiv:function(){this.oDiv.hide();this.cloak.hide();this.setFocus(this.oCur)},dismissYDiv:function(){this.yDiv.hide();
this.cloak.hide();this.setFocus(this.yCur)},setFocus:function(c){c.hasClass("AnyTime-focus-btn")||(this.div.find(".AnyTime-focus-btn").removeClass("AnyTime-focus-btn ui-state-focus"),this.fBtn=c,c.removeClass("ui-state-default ui-state-highlight"),c.addClass("AnyTime-focus-btn ui-state-default ui-state-highlight ui-state-focus"));if(c.hasClass("AnyTime-off-off-btn")){var a=this.oBody.offset().top,b=c.offset().top,c=c.AnyTime_height(!0);b-c<a?this.oBody.scrollTop(b+this.oBody.scrollTop()-(this.oBody.innerHeight()+
a)+2*c):b+c>a+this.oBody.innerHeight()&&this.oBody.scrollTop(b+this.oBody.scrollTop()-(a+c))}},key:function(c){var a,b=null;this.div.find(".AnyTime-focus-btn");a=c.keyCode||c.which;this.denyTab=!0;if(16!=a)if(10==a||13==a||27==a)this.oDiv&&this.oDiv.is(":visible")?this.dismissODiv(c):this.yDiv&&this.yDiv.is(":visible")?this.dismissYDiv(c):this.pop&&this.dismiss(c);else if(33==a||9==a&&c.shiftKey)if(this.fBtn.hasClass("AnyTime-off-off-btn"))9==a&&this.dismissODiv(c);else if(this.fBtn.hasClass("AnyTime-mil-btn"))9==
a&&this.dismissYDiv(c);else if(this.fBtn.hasClass("AnyTime-cent-btn"))this.yDiv.find(".AnyTime-mil-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-dec-btn"))this.yDiv.find(".AnyTime-cent-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-yr-btn"))this.yDiv.find(".AnyTime-dec-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-era-btn"))this.yDiv.find(".AnyTime-yr-btn.AnyTime-cur-btn").triggerHandler("click");
else if(this.fBtn.parents(".AnyTime-yrs").length){if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-mon-btn"))if(this.dY)this.yCur.triggerHandler("click");else{if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-dom-btn")){if(9==a&&c.shiftKey){this.denyTab=!1;return}b=new Date(this.time.getTime());c.shiftKey?b.setFullYear(b.getFullYear()-1):(a=b.getMonth()-1,b.getDate()>z[a]&&b.setDate(z[a]),b.setMonth(a));this.keyDateChange(b)}else if(this.fBtn.hasClass("AnyTime-hr-btn"))if(b=
this.dDoM||this.dMo)b.AnyTime_clickCurrent();else if(this.dY)this.yCur.triggerHandler("click");else{if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-min-ten-btn"))if(b=this.dH||this.dDoM||this.dMo)b.AnyTime_clickCurrent();else if(this.dY)this.yCur.triggerHandler("click");else{if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-min-one-btn"))this.dM.AnyTime_clickCurrent();else if(this.fBtn.hasClass("AnyTime-sec-ten-btn"))if(b=this.dM?this.dM.find(".AnyTime-mins-ones"):
this.dH||this.dDoM||this.dMo)b.AnyTime_clickCurrent();else if(this.dY)this.yCur.triggerHandler("click");else{if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-sec-one-btn"))this.dS.AnyTime_clickCurrent();else{if(this.fBtn.hasClass("AnyTime-off-btn"))if(b=this.dS?this.dS.find(".AnyTime-secs-ones"):this.dM?this.dM.find(".AnyTime-mins-ones"):this.dH||this.dDoM||this.dMo)b.AnyTime_clickCurrent();else if(this.dY)this.yCur.triggerHandler("click");else if(9==a){this.denyTab=!1;return}}else if(34==
a||9==a)if(this.fBtn.hasClass("AnyTime-mil-btn"))this.yDiv.find(".AnyTime-cent-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-cent-btn"))this.yDiv.find(".AnyTime-dec-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-dec-btn"))this.yDiv.find(".AnyTime-yr-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-yr-btn"))b=this.yDiv.find(".AnyTime-era-btn.AnyTime-cur-btn"),b.length?b.triggerHandler("click"):9==
a&&this.dismissYDiv(c);else if(this.fBtn.hasClass("AnyTime-era-btn"))9==a&&this.dismissYDiv(c);else if(this.fBtn.hasClass("AnyTime-off-off-btn"))9==a&&this.dismissODiv(c);else if(this.fBtn.parents(".AnyTime-yrs").length)if(b=this.dDoM||this.dMo||this.dH||this.dM||this.dS||this.dO)b.AnyTime_clickCurrent();else{if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-mon-btn"))if(b=this.dDoM||this.dH||this.dM||this.dS||this.dO)b.AnyTime_clickCurrent();else{if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-dom-btn"))if(9==
a)if(b=this.dH||this.dM||this.dS||this.dO)b.AnyTime_clickCurrent();else{this.denyTab=!1;return}else b=new Date(this.time.getTime()),c.shiftKey?b.setFullYear(b.getFullYear()+1):(a=b.getMonth()+1,b.getDate()>z[a]&&b.setDate(z[a]),b.setMonth(a)),this.keyDateChange(b);else if(this.fBtn.hasClass("AnyTime-hr-btn"))if(b=this.dM||this.dS||this.dO)b.AnyTime_clickCurrent();else{if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-min-ten-btn"))this.dM.find(".AnyTime-mins-ones .AnyTime-cur-btn").triggerHandler("click");
else if(this.fBtn.hasClass("AnyTime-min-one-btn"))if(b=this.dS||this.dO)b.AnyTime_clickCurrent();else{if(9==a){this.denyTab=!1;return}}else if(this.fBtn.hasClass("AnyTime-sec-ten-btn"))this.dS.find(".AnyTime-secs-ones .AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-sec-one-btn"))if(this.dO)this.dO.AnyTime_clickCurrent();else{if(9==a){this.denyTab=!1;return}}else{if(this.fBtn.hasClass("AnyTime-off-btn")&&9==a){this.denyTab=!1;return}}else if(35==a)this.fBtn.hasClass("AnyTime-mil-btn")||
this.fBtn.hasClass("AnyTime-cent-btn")||this.fBtn.hasClass("AnyTime-dec-btn")||this.fBtn.hasClass("AnyTime-yr-btn")||this.fBtn.hasClass("AnyTime-era-btn")?(b=this.yDiv.find(".AnyTime-ce-btn"),b.length||(b=this.yDiv.find(".AnyTime-yr9-btn")),b.triggerHandler("click")):this.fBtn.hasClass("AnyTime-dom-btn")?(b=new Date(this.time.getTime()),b.setDate(1),b.setMonth(b.getMonth()+1),b.setDate(b.getDate()-1),c.ctrlKey&&b.setMonth(11),this.keyDateChange(b)):this.dS?this.dS.find(".AnyTime-sec9-btn").triggerHandler("click"):
this.dM?this.dM.find(".AnyTime-min9-btn").triggerHandler("click"):this.dH?this.dH.find(".AnyTime-hr23-btn").triggerHandler("click"):this.dDoM?this.dDoM.find(".AnyTime-dom-btn-filled:last").triggerHandler("click"):this.dMo?this.dMo.find(".AnyTime-mon12-btn").triggerHandler("click"):this.dY&&this.yAhead.triggerHandler("click");else if(36==a)this.fBtn.hasClass("AnyTime-mil-btn")||this.fBtn.hasClass("AnyTime-cent-btn")||this.fBtn.hasClass("AnyTime-dec-btn")||this.fBtn.hasClass("AnyTime-yr-btn")||this.fBtn.hasClass("AnyTime-era-btn")?
this.yDiv.find(".AnyTime-mil0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-dom-btn")?(b=new Date(this.time.getTime()),b.setDate(1),c.ctrlKey&&b.setMonth(0),this.keyDateChange(b)):this.dY?this.yCur.triggerHandler("click"):this.dMo?this.dMo.find(".AnyTime-mon1-btn").triggerHandler("click"):this.dDoM?this.dDoM.find(".AnyTime-dom-btn-filled:first").triggerHandler("click"):this.dH?this.dH.find(".AnyTime-hr0-btn").triggerHandler("click"):this.dM?this.dM.find(".AnyTime-min00-btn").triggerHandler("click"):
this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click");else if(37==a)this.fBtn.hasClass("AnyTime-dom-btn")?this.keyDateChange(new Date(this.time.getTime()-864E5)):this.keyBack();else if(38==a)this.fBtn.hasClass("AnyTime-dom-btn")?this.keyDateChange(new Date(this.time.getTime()-6048E5)):this.keyBack();else if(39==a)this.fBtn.hasClass("AnyTime-dom-btn")?this.keyDateChange(new Date(this.time.getTime()+864E5)):this.keyAhead();else if(40==a)this.fBtn.hasClass("AnyTime-dom-btn")?this.keyDateChange(new Date(this.time.getTime()+
6048E5)):this.keyAhead();else{if((86==a||118==a)&&c.ctrlKey){this.inp.val("").change();var d=this;setTimeout(function(){d.showPkr(null)},100);return}this.showPkr(null)}c.preventDefault()},keyAhead:function(){this.fBtn.hasClass("AnyTime-mil9-btn")?this.yDiv.find(".AnyTime-cent0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-cent9-btn")?this.yDiv.find(".AnyTime-dec0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-dec9-btn")?this.yDiv.find(".AnyTime-yr0-btn").triggerHandler("click"):
this.fBtn.hasClass("AnyTime-yr9-btn")?this.yDiv.find(".AnyTime-bce-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-sec9-btn")||(this.fBtn.hasClass("AnyTime-sec50-btn")?this.dS.find(".AnyTime-sec0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-min9-btn")?this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-min50-btn")?this.dM.find(".AnyTime-min0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-hr23-btn")?this.dM?this.dM.find(".AnyTime-min00-btn").triggerHandler("click"):
this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-hr11-btn")?this.dH.find(".AnyTime-hr12-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-mon12-btn")?this.dDoM?this.dDoM.AnyTime_clickCurrent():this.dH?this.dH.find(".AnyTime-hr0-btn").triggerHandler("click"):this.dM?this.dM.find(".AnyTime-min00-btn").triggerHandler("click"):this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yrs-ahead-btn")?this.dMo?
this.dMo.find(".AnyTime-mon1-btn").triggerHandler("click"):this.dH?this.dH.find(".AnyTime-hr0-btn").triggerHandler("click"):this.dM?this.dM.find(".AnyTime-min00-btn").triggerHandler("click"):this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yr-cur-btn")?this.yNext.triggerHandler("click"):this.fBtn.next().triggerHandler("click"))},keyBack:function(){this.fBtn.hasClass("AnyTime-cent0-btn")?this.yDiv.find(".AnyTime-mil9-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-dec0-btn")?
this.yDiv.find(".AnyTime-cent9-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yr0-btn")?this.yDiv.find(".AnyTime-dec9-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-bce-btn")?this.yDiv.find(".AnyTime-yr9-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yr-cur-btn")?this.yPrior.triggerHandler("click"):this.fBtn.hasClass("AnyTime-mon1-btn")?this.dY&&this.yCur.triggerHandler("click"):this.fBtn.hasClass("AnyTime-hr0-btn")?this.dDoM?this.dDoM.AnyTime_clickCurrent():this.dMo?
this.dMo.find(".AnyTime-mon12-btn").triggerHandler("click"):this.dY&&this.yNext.triggerHandler("click"):this.fBtn.hasClass("AnyTime-hr12-btn")?this.dH.find(".AnyTime-hr11-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-min00-btn")?this.dH?this.dH.find(".AnyTime-hr23-btn").triggerHandler("click"):this.dDoM?this.dDoM.AnyTime_clickCurrent():this.dMo?this.dMo.find(".AnyTime-mon12-btn").triggerHandler("click"):this.dY&&this.yNext.triggerHandler("click"):this.fBtn.hasClass("AnyTime-min0-btn")?
this.dM.find(".AnyTime-min50-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-sec00-btn")?this.dM?this.dM.find(".AnyTime-min9-btn").triggerHandler("click"):this.dH?this.dH.find(".AnyTime-hr23-btn").triggerHandler("click"):this.dDoM?this.dDoM.AnyTime_clickCurrent():this.dMo?this.dMo.find(".AnyTime-mon12-btn").triggerHandler("click"):this.dY&&this.yNext.triggerHandler("click"):this.fBtn.hasClass("AnyTime-sec0-btn")?this.dS.find(".AnyTime-sec50-btn").triggerHandler("click"):this.fBtn.prev().triggerHandler("click")},
keyDateChange:function(c){this.fBtn.hasClass("AnyTime-dom-btn")&&(this.set(c),this.upd(null),this.setFocus(this.dDoM.find(".AnyTime-cur-btn")))},makeCloak:function(){this.cloak?this.cloak.show():(this.cloak=g('<div class="AnyTime-cloak" style="position:absolute" />'),this.div.append(this.cloak),this.cloak.click(function(c){h.oDiv&&h.oDiv.is(":visible")?h.dismissODiv(c):h.dismissYDiv(c)}))},newHour:function(c){var a,b=g(c.target);b.hasClass("AnyTime-out-btn")||(this.twelveHr?(a=b.text(),c=a.indexOf("a"),
0>c?(c=Number(a.substr(0,a.indexOf("p"))),a=12==c?12:c+12):(c=Number(a.substr(0,c)),a=12==c?0:c)):a=Number(b.text()),c=new Date(this.time.getTime()),c.setHours(a),this.set(c),this.upd(b))},newOffset:function(c){c.target==this.oSel[0]?this.askOffset(c):this.upd(this.oCur)},newOPos:function(c){c=g(c.target);this.offMin=c[0].AnyTime_offMin;this.offSI=c[0].AnyTime_offSI;this.set(new Date(this.time.getTime()));this.updODiv(c)},newYear:function(c){var a=g(c.target);a.hasClass("AnyTime-out-btn")||(a=a.text(),
"<"==a||"&lt;"==a?this.askYear(c):">"==a||"&gt;"==a?this.askYear(c):(c=new Date(this.time.getTime()),c.setFullYear(Number(a)),this.set(c),this.upd(this.yCur)))},newYPos:function(c){c=g(c.target);if(!c.hasClass("AnyTime-out-btn")){var a=1,b=this.time.getFullYear();0>b&&(a=-1,b=0-b);b=AnyTime.pad(b,4);b=c.hasClass("AnyTime-mil-btn")?c.html()+b.substring(1,4):c.hasClass("AnyTime-cent-btn")?b.substring(0,1)+c.html()+b.substring(2,4):c.hasClass("AnyTime-dec-btn")?b.substring(0,2)+c.html()+b.substring(3,
4):b.substring(0,3)+c.html();"0000"==b&&(b=1);var d=new Date(this.time.getTime());d.setFullYear(a*b);this.set(d);this.updYDiv(c)}},onReady:function(){this.lostFocus=!0;this.pop?this.div.parent()!=document.body&&this.div.appendTo(document.body):this.upd(null)},pos:function(){if(this.pop){var c=this.inp.offset(),a=g(document.body).outerWidth(!0),b=this.div.outerWidth(!0),d=c.left;d+b>a-20&&(d=a-(b+20));a=c.top-this.div.outerHeight(!0);0>a&&(a=c.top+this.inp.outerHeight(!0));this.div.css({top:""+a+"px",
left:""+(0>d?0:d)+"px"})}c=this.div.offset();this.oDiv&&this.oDiv.is(":visible")?(d=this.oLab.offset(),"absolute"==this.div.css("position")&&(d.top-=c.top,d.left-=c.left,c={top:0,left:0}),a=this.oDiv.AnyTime_width(!0),b=this.div.AnyTime_width(!0),d.left+a>c.left+b&&(d.left=c.left+b-a,2>d.left&&(d.left=2)),a=this.oDiv.AnyTime_height(!0),b=this.div.AnyTime_height(!0),d.top+=this.oLab.AnyTime_height(!0),d.top+a>c.top+b&&(d.top-=a),d.top<c.top&&(d.top=c.top),this.oDiv.css({top:d.top+"px",left:d.left+
"px"})):this.yDiv&&this.yDiv.is(":visible")&&(d=this.yLab.offset(),"absolute"==this.div.css("position")&&(d.top-=c.top,d.left-=c.left,c={top:0,left:0}),d.left+=(this.yLab.outerWidth(!0)-this.yDiv.outerWidth(!0))/2,this.yDiv.css({top:d.top+"px",left:d.left+"px"}));this.cloak&&this.cloak.css({top:c.top+"px",left:c.left+"px",height:""+(this.div.outerHeight(!0)-2)+"px",width:""+(this.div.outerWidth(!g.browser.safari)-2)+"px"})},set:function(c){var a=c.getTime();this.time=this.earliest&&a<this.earliest?
new Date(this.earliest):this.latest&&a>this.latest?new Date(this.latest):c},setEarliest:function(c){this.earliest=c;this.set(this.time)},setLatest:function(c){this.latest=c;this.set(this.time)},showPkr:function(c){try{this.time=this.conv.parse(this.inp.val()),this.offMin=this.conv.getUtcParseOffsetCaptured(),this.offSI=this.conv.getUtcParseOffsetSubIndex()}catch(a){this.time=new Date}this.set(this.time);this.upd(null);fBtn=null;this.dDoM?fBtn=this.dDoM.find(".AnyTime-cur-btn:first"):this.yCur?fBtn=
this.yCur:this.dMo?fBtn=this.dMo.find(".AnyTime-cur-btn:first"):this.dH?fBtn=this.dH.find(".AnyTime-cur-btn:first"):this.dM?fBtn=this.dM.find(".AnyTime-cur-btn:first"):this.dS&&(fBtn=this.dS.find(".AnyTime-cur-btn:first"));this.setFocus(fBtn);this.pos(c);this.pop&&r&&setTimeout(function(){var a=h.div.offset();r.css({height:""+h.div.outerHeight(!0)+"px",left:""+a.left+"px",position:"absolute",top:""+a.top+"px",width:""+h.div.outerWidth(!0)+"px"});r.show()},300)},upd:function(c){var a=new Date(this.time.getTime());
a.setMonth(0,1);a.setHours(0,0,0,0);var b=new Date(this.time.getTime());b.setMonth(11,31);b.setHours(23,59,59,999);var d=this.time.getFullYear();this.earliest&&this.yPast&&(b.setYear(d-2),b.getTime()<this.earliest?this.yPast.addClass("AnyTime-out-btn ui-state-disabled"):this.yPast.removeClass("AnyTime-out-btn ui-state-disabled"));this.yPrior&&(this.yPrior.text(AnyTime.pad(1==d?-1:d-1,4)),this.earliest&&(b.setYear(d-1),b.getTime()<this.earliest?this.yPrior.addClass("AnyTime-out-btn ui-state-disabled"):
this.yPrior.removeClass("AnyTime-out-btn ui-state-disabled")));this.yCur&&this.yCur.text(AnyTime.pad(d,4));this.yNext&&(this.yNext.text(AnyTime.pad(-1==d?1:d+1,4)),this.latest&&(a.setYear(d+1),a.getTime()>this.latest?this.yNext.addClass("AnyTime-out-btn ui-state-disabled"):this.yNext.removeClass("AnyTime-out-btn ui-state-disabled")));this.latest&&this.yAhead&&(a.setYear(d+2),a.getTime()>this.latest?this.yAhead.addClass("AnyTime-out-btn ui-state-disabled"):this.yAhead.removeClass("AnyTime-out-btn ui-state-disabled"));
a.setFullYear(this.time.getFullYear());b.setFullYear(this.time.getFullYear());var j=0,d=this.time.getMonth();g("#"+this.id+" .AnyTime-mon-btn").each(function(){a.setMonth(j);b.setDate(1);b.setMonth(j+1);b.setDate(0);g(this).AnyTime_current(j==d,(!h.earliest||b.getTime()>=h.earliest)&&(!h.latest||a.getTime()<=h.latest));j++});a.setFullYear(this.time.getFullYear());b.setFullYear(this.time.getFullYear());a.setMonth(this.time.getMonth());b.setMonth(this.time.getMonth(),1);var d=this.time.getDate(),k=
this.time.getMonth(),l=a.getDay();this.fDOW>l&&(l+=7);var r=0,s=0;g("#"+this.id+" .AnyTime-wk").each(function(){s=h.fDOW;g(this).children().each(function(){if(s-h.fDOW<7){var c=g(this);if(r==0&&s<l||a.getMonth()!=k){c.html("&#160;");c.removeClass("AnyTime-dom-btn-filled AnyTime-cur-btn ui-state-default ui-state-highlight");c.addClass("AnyTime-dom-btn-empty");if(r){a.getDate()==1&&s!=0?c.addClass("AnyTime-dom-btn-empty-after-filled"):c.removeClass("AnyTime-dom-btn-empty-after-filled");a.getDate()<=
7?c.addClass("AnyTime-dom-btn-empty-below-filled"):c.removeClass("AnyTime-dom-btn-empty-below-filled");a.setDate(a.getDate()+1);b.setDate(b.getDate()+1)}else{c.addClass("AnyTime-dom-btn-empty-above-filled");s==l-1?c.addClass("AnyTime-dom-btn-empty-before-filled"):c.removeClass("AnyTime-dom-btn-empty-before-filled")}c.addClass("ui-state-default ui-state-disabled")}else{j=a.getDate();c.text(j);c.removeClass("AnyTime-dom-btn-empty AnyTime-dom-btn-empty-above-filled AnyTime-dom-btn-empty-before-filled AnyTime-dom-btn-empty-after-filled AnyTime-dom-btn-empty-below-filled ui-state-default ui-state-disabled");
c.addClass("AnyTime-dom-btn-filled ui-state-default");c.AnyTime_current(j==d,(!h.earliest||b.getTime()>=h.earliest)&&(!h.latest||a.getTime()<=h.latest));a.setDate(j+1);b.setDate(j+1)}}s++});r++});a.setFullYear(this.time.getFullYear());b.setFullYear(this.time.getFullYear());a.setMonth(this.time.getMonth(),this.time.getDate());b.setMonth(this.time.getMonth(),this.time.getDate());var w=!this.twelveHr,y=this.time.getHours();g("#"+this.id+" .AnyTime-hr-btn").each(function(){var d=this.innerHTML,c;if(w)c=
Number(d);else{c=Number(d.substring(0,d.length-2));d.charAt(d.length-2)=="a"?c==12&&(c=0):c<12&&(c=c+12)}a.setHours(c);b.setHours(c);g(this).AnyTime_current(y==c,(!h.earliest||b.getTime()>=h.earliest)&&(!h.latest||a.getTime()<=h.latest));c<23&&a.setHours(a.getHours()+1)});a.setHours(this.time.getHours());b.setHours(this.time.getHours());var t=this.time.getMinutes(),e=""+Math.floor(t/10),v=""+t%10;g("#"+this.id+" .AnyTime-min-ten-btn:not(.AnyTime-min-ten-btn-empty)").each(function(){g(this).AnyTime_current(this.innerHTML==
e,(!h.earliest||b.getTime()>=h.earliest)&&(!h.latest||a.getTime()<=h.latest));if(a.getMinutes()<50){a.setMinutes(a.getMinutes()+10);b.setMinutes(b.getMinutes()+10)}});a.setMinutes(10*Math.floor(this.time.getMinutes()/10));b.setMinutes(10*Math.floor(this.time.getMinutes()/10));g("#"+this.id+" .AnyTime-min-one-btn:not(.AnyTime-min-one-btn-empty)").each(function(){g(this).AnyTime_current(this.innerHTML==v,(!h.earliest||b.getTime()>=h.earliest)&&(!h.latest||a.getTime()<=h.latest));a.setMinutes(a.getMinutes()+
1);b.setMinutes(b.getMinutes()+1)});a.setMinutes(this.time.getMinutes());b.setMinutes(this.time.getMinutes());t=this.time.getSeconds();e=""+Math.floor(t/10);v=""+t%10;g("#"+this.id+" .AnyTime-sec-ten-btn:not(.AnyTime-sec-ten-btn-empty)").each(function(){g(this).AnyTime_current(this.innerHTML==e,(!h.earliest||b.getTime()>=h.earliest)&&(!h.latest||a.getTime()<=h.latest));if(a.getSeconds()<50){a.setSeconds(a.getSeconds()+10);b.setSeconds(b.getSeconds()+10)}});a.setSeconds(10*Math.floor(this.time.getSeconds()/
10));b.setSeconds(10*Math.floor(this.time.getSeconds()/10));g("#"+this.id+" .AnyTime-sec-one-btn:not(.AnyTime-sec-one-btn-empty)").each(function(){g(this).AnyTime_current(this.innerHTML==v,(!h.earliest||b.getTime()>=h.earliest)&&(!h.latest||a.getTime()<=h.latest));a.setSeconds(a.getSeconds()+1);b.setSeconds(b.getSeconds()+1)});this.oConv&&(this.oConv.setUtcFormatOffsetAlleged(this.offMin),this.oConv.setUtcFormatOffsetSubIndex(this.offSI),this.oCur.html(this.oConv.format(this.time)));c&&this.setFocus(c);
this.conv.setUtcFormatOffsetAlleged(this.offMin);this.conv.setUtcFormatOffsetSubIndex(this.offSI);this.inp.val(this.conv.format(this.time)).change();this.div.show();var f=t=c=0,x=0,m=0;this.dY&&(t=f=this.dY.outerWidth(!0),c=this.yLab.AnyTime_height(!0)+this.dY.AnyTime_height(!0));this.dMo&&(x=this.dMo.outerWidth(!0),x>t&&(t=x),c+=this.hMo.AnyTime_height(!0)+this.dMo.AnyTime_height(!0));if(this.dDoM){m=this.dDoM.outerWidth(!0);m>t&&(t=m);if(A||B)x>m?this.dDoM.css("width",""+x+"px"):f>m&&this.dDoM.css("width",
""+f+"px");c+=this.hDoM.AnyTime_height(!0)+this.dDoM.AnyTime_height(!0)}this.dD&&(this.dD.css({width:""+t+"px",height:""+c+"px"}),t+=this.dMinW,c+=this.dMinH);x=f=m=m=0;this.dH&&(m=this.dH.outerWidth(!0),x+=m+1,m=this.dH.AnyTime_height(!0),m>f&&(f=m));this.dM&&(m=this.dM.outerWidth(!0),x+=m+1,m=this.dM.AnyTime_height(!0),m>f&&(f=m));this.dS&&(m=this.dS.outerWidth(!0),x+=m+1,m=this.dS.AnyTime_height(!0),m>f&&(f=m));this.dO&&(m=this.oMinW,x<m+1&&(x=m+1),f+=this.dO.AnyTime_height(!0));this.dT&&(this.dT.css({width:""+
x+"px",height:""+f+"px"}),x+=this.tMinW+1,f+=this.tMinH,t+=x,f>c&&(c=f),this.dO&&(f=this.dT.width()-(this.oMinW+1),this.dO.css({width:""+f+"px"}),this.oCur.css({width:""+(f-(this.oListMinW+4))+"px"})));this.dB.css({height:""+c+"px",width:""+t+"px"});c+=this.bMinH;t+=this.bMinW;c+=this.hTitle.AnyTime_height(!0)+this.wMinH;t+=this.wMinW;this.hTitle.outerWidth(!0)>t&&(t=this.hTitle.outerWidth(!0));this.div.css({height:""+c+"px",width:""+t+"px"});this.pop||this.ajax()},updODiv:function(c){var a=!1,b=
null;this.oDiv.find(".AnyTime-off-off-btn").each(function(){this.AnyTime_offMin==h.offMin?this.AnyTime_offSI==h.offSI?g(this).AnyTime_current(a=!0,!0):(g(this).AnyTime_current(!1,!0),null==b&&(b=g(this))):g(this).AnyTime_current(!1,!0)});!a&&null!=b&&b.AnyTime_current(!0,!0);this.conv.setUtcFormatOffsetAlleged(this.offMin);this.conv.setUtcFormatOffsetSubIndex(this.offSI);this.inp.val(this.conv.format(this.time)).change();this.upd(c)},updYDiv:function(c){var a,b,d=1,j=this.time.getFullYear();0>j&&
(d=-1,j=0-j);var j=AnyTime.pad(j,4),l=h.earliest&&(new Date(h.earliest)).getFullYear(),k=h.latest&&(new Date(h.latest)).getFullYear();a=0;this.yDiv.find(".AnyTime-mil-btn").each(function(){b=(!h.earliest||d*(a+(d<0?0:999))>=l)&&(!h.latest||d*(a+(d>0?0:999))<=k);g(this).AnyTime_current(this.innerHTML==j.substring(0,1),b);a=a+1E3});a=1E3*Math.floor(j/1E3);this.yDiv.find(".AnyTime-cent-btn").each(function(){b=(!h.earliest||d*(a+(d<0?0:99))>=l)&&(!h.latest||d*(a+(d>0?0:99))<=k);g(this).AnyTime_current(this.innerHTML==
j.substring(1,2),b);a=a+100});a=100*Math.floor(j/100);this.yDiv.find(".AnyTime-dec-btn").each(function(){b=(!h.earliest||d*(a+(d<0?0:9))>=l)&&(!h.latest||d*(a+(d>0?0:9))<=k);g(this).AnyTime_current(this.innerHTML==j.substring(2,3),b);a=a+10});a=10*Math.floor(j/10);this.yDiv.find(".AnyTime-yr-btn").each(function(){b=(!h.earliest||d*a>=l)&&(!h.latest||d*a<=k);g(this).AnyTime_current(this.innerHTML==j.substring(3),b);a=a+1});this.yDiv.find(".AnyTime-bce-btn").each(function(){g(this).AnyTime_current(d<
0,!h.earliest||h.earliest<0)});this.yDiv.find(".AnyTime-ce-btn").each(function(){g(this).AnyTime_current(d>0,!h.latest||h.latest>0)});this.conv.setUtcFormatOffsetAlleged(this.offMin);this.conv.setUtcFormatOffsetSubIndex(this.offSI);this.inp.val(this.conv.format(this.time)).change();this.upd(c)}};y[l].initialize(l)};AnyTime.setEarliest=function(g,k){y[g].setEarliest(k)};AnyTime.setLatest=function(g,k){y[g].setLatest(k)}})(jQuery);



// START OF MESSAGE SCRIPT //

var MSGTIMER = 20;
var MSGSPEED = 5;
var MSGOFFSET = 3;
var MSGHIDE = 3;

// build out the divs, set attributes and call the fade function //
function inlineMsg(target,string,autohide, type) {
  var msg;
  var msgcontent;
  if (type==0) {
	  if(!document.getElementById('msg')) {
		msg = document.createElement('div');
		msg.id = 'msg';
		msgcontent = document.createElement('div');
		msgcontent.id = 'msgcontent';
		document.body.appendChild(msg);
		msg.appendChild(msgcontent);
		msg.style.filter = 'alpha(opacity=0)';
		msg.style.opacity = 0;
		msg.alpha = 0;
	  } 
	  else {
			msg = document.getElementById('msg');
			msgcontent = document.getElementById('msgcontent');
	  }
  }
  else {
	  if(!document.getElementById('msg2')) {
		msg = document.createElement('div');
		msg.id = 'msg2';
		msgcontent = document.createElement('div');
		msgcontent.id = 'msgcontent2';
		document.body.appendChild(msg);
		msg.appendChild(msgcontent);
		msg.style.filter = 'alpha(opacity=0)';
		msg.style.opacity = 0;
		msg.alpha = 0;
	  } 
	  else {
			msg = document.getElementById('msg2');
			msgcontent = document.getElementById('msgcontent2');
	  }
  }
		
  msgcontent.innerHTML = string;
  msg.style.display = 'block';
  var msgheight = msg.offsetHeight;
  var targetdiv = document.getElementById(target);
  if (type==0) {
	targetdiv.focus();
  }
  var targetheight = targetdiv.offsetHeight;
  var targetwidth = targetdiv.offsetWidth;
  var topposition = topPosition(targetdiv) - ((msgheight - targetheight) / 2);
  var leftposition = leftPosition(targetdiv) + targetwidth + MSGOFFSET;
  msg.style.top = topposition + 'px';
  msg.style.left = leftposition + 'px';
  clearInterval(msg.timer);
  if (type==0) {
	msg.timer = setInterval("fadeMsg(1, 0)", MSGTIMER);
  }
  else {
	msg.timer = setInterval("fadeMsg(1, 1)", MSGTIMER);
  }
  if(!autohide) {
    autohide = MSGHIDE;  
  }
  if (type==0) {
	window.setTimeout("hideMsg(1, 0)", (autohide * 1000));
  }
  else {
	window.setTimeout("hideMsg(1, 1)", (autohide * 1000));
  }
}

// hide the form alert //
function hideMsg(msg, type) {
  if (type==0) {
	  var msg = document.getElementById('msg');
	  if(!msg.timer) {
		msg.timer = setInterval("fadeMsg(0, 0)", MSGTIMER);
	  }
  }
  else {
	var msg = document.getElementById('msg2');
	  if(!msg.timer) {
		msg.timer = setInterval("fadeMsg(0, 1)", MSGTIMER);
	  }
  }
}

// fade the message box //
function fadeMsg(flag, type) {
  if(flag == null) {
    flag = 1;
  }
  if (type==0) {
	var msg = document.getElementById('msg');
  }
  else {
    var msg = document.getElementById('msg2');
  }
  var value;
  if(flag == 1) {
    value = msg.alpha + MSGSPEED;
  } else {
    value = msg.alpha - MSGSPEED;
  }
  msg.alpha = value;
  msg.style.opacity = (value / 100);
  msg.style.filter = 'alpha(opacity=' + value + ')';
  if(value >= 99) {
    clearInterval(msg.timer);
    msg.timer = null;
  } else if(value <= 1) {
    msg.style.display = "none";
    clearInterval(msg.timer);
  }
}

// calculate the position of the element in relation to the left of the browser //
function leftPosition(target) {
  var left = 0;
  if(target.offsetParent) {
    while(1) {
      left += target.offsetLeft;
      if(!target.offsetParent) {
        break;
      }
      target = target.offsetParent;
    }
  } else if(target.x) {
    left += target.x;
  }
  return left;
}

// calculate the position of the element in relation to the top of the browser window //
function topPosition(target) {
  var top = 0;
  if(target.offsetParent) {
    while(1) {
      top += target.offsetTop;
      if(!target.offsetParent) {
        break;
      }
      target = target.offsetParent;
    }
  } else if(target.y) {
    top += target.y;
  }
  return top;
}

// preload the arrow //
if(document.images) {
  arrow1 = new Image(7,80); 
  arrow1.src = "js/images/msg_arrow.gif"; 
  arrow2 = new Image(7,80); 
  arrow2.src = "js/images/msg_arrow2.png"; 
}

//END OF MESSAGE SCRIPT

