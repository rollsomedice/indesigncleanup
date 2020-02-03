﻿//This script was generated by ligaturen.py by phlorian
//with the help of chainGREP.jsx by Gregor Fellenz 

main();

function main() {
	if (app.layoutWindows.length == 0) return;
	var changeObject = app.documents[0];
	if (changeObject.hasOwnProperty('characters') && changeObject.characters.length == 0) return;
	var doc = app.documents[0];
	var style;
	var scriptVersion = app.scriptPreferences.version;
	app.scriptPreferences.version = 15.0;
	var options = app.findChangeGrepOptions.properties;
	app.findGrepPreferences = NothingEnum.NOTHING;
	app.changeGrepPreferences = NothingEnum.NOTHING;
	try {
		app.findChangeGrepOptions.properties = ({includeFootnotes:true, kanaSensitive:true, widthSensitive:true});
		app.findGrepPreferences.properties = ({findWhat:"(r|p|l|n|f)f(f|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1f~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"(Umlauf|auflauf|Auflauf|ablauf|Ablauf|anlauf|Anlauf|Vorlauf|Kreislauf|darstellungsauf|Darstellungsauf|griff|Griff|hinauf|Hinauf|schirmauf)(f|l|i|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([aA]uf)(f|l|t|i)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"([aA]utobahnauf)fahrt"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jfahrt", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"flich\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"f~jlich", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"flich(e|er|ere|eren|erer|eres|erem|es|em|en|ste|ster|stes|stem|sten|keit|st)\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"f~jlich$1", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"([bB]ischöf)l"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jl", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([bB]ox[ck]al)f"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jf", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"(dampf|Dampf|ruckkopf|freiberuf|Freiberuf|kopf|Kopf|schwef|Schwef|tarif|Tarif|erzweif|bezweif|Bezweif|Anzweif|teuf|Teuf|schnüff|Schnüff)(f|i|l|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([dD]arauf)folg"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jfolg", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([dD]rauf)(leg|los)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"([kK]auf)(leute|index|indizes|indices|laune|leidenschaft|leitung|tüchtig)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"(elf|Elf|fünf|Fünf|zwölf|Zwölf)(fach|fing|linge|tausend|türig|ton)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([eE]rstauf)(f|l)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"([aA]uf)(führ|lös|fass|füll|lage|forder|falt)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([hH]ilf)los"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jlos", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([hH]of)(fähig|landwirt|intrige)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b(Hof|Dorf|Biohof|Ruf|Lauf|Pfeif)(l|i)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b(Dorf|Biohof|Ruf|Tauf|Lauf|lauf|Pfeif)(t|f)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([kK]ampf)(t|f|l|i)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b(Arbeitskampf|Wahlkampf)(t|f|l|i)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([kK]auf)(fahr|frau|interess|laden|leute|lust|läden)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"([sS]toff)(tank|industrie|ingenieur|index|indices|indizes|flasche)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([kK]niff)lig"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jlig", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([kK]reislauf)leid"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jleid", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"f(ler|lerin|lerinnen|lers|lern)\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"f~j$1", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([oO]ff)line"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jline", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([pP]rüf)(f|i|l|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([rR]auf)lust"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jlust", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([sS]chöpf)(löff)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"([bB]rief)(funktion)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\bBrief(f|l|i|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"Brief~j$1", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([sS]traf)(fähig|fällig|lager|los)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([sS]träf)l"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jl", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([sS]umpf)(t|f|l|i)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([tT]ief)(t|f|l)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([sS]chaf)(fell|leder)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"(f|l)(leins?|linge?|lings|lingen)\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([sS]chief)(t|i|f|l)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([sS]chlaf)(trunken|los)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([sS]chlupf)(l[[=o=]]ch)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([tT]äuf)ling"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jling", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([wW]aldorf)lehr"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jlehr", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([wW]iederauf)(f|l|i|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"finstrument"});
		app.changeGrepPreferences.properties = ({changeTo:"f~jinstrument", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([uU]nauf)(f|l|i|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"(of|Of|ef|Ef|af|Af)(fiz|fekt)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\baffin"});
		app.changeGrepPreferences.properties = ({changeTo:"af~jfin", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b(Dürf|dürf|Durf|durf|Kämpf|kämpf|Fünf|fünf|Elf|elf|Zwölf|zwölf|Streif|streif|Schrumpf|schrumpf|Kauf|kauf|Erhoff|erhoff|Hoff|hoff|Umkreis|umkreis|Kreis|kreis|Geprüf|geprüf|Erschöpf|erschöpf|wuss|Wuss|muss|Muss)(te|tet|ten|test)\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"([dD])ifferen"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jifferen", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"([mM])isstrau"});
		app.changeGrepPreferences.properties = ({changeTo:"$1iss~jtrau", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"gstrakt\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"gs~jtrakt", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"fle\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"f~jle", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([rR]af)fin"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~jfin", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([cC]hef)(f|l|i|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b([wW]ürf)(f|l|i|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"sste\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"ss~jte", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Hufform"});
		app.changeGrepPreferences.properties = ({changeTo:"Huf~jform", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Knopf(l[[=o=]]ch)"});
		app.changeGrepPreferences.properties = ({changeTo:"Knopf~j$1", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Schlaf(forsch|frisur|lied|therap)"});
		app.changeGrepPreferences.properties = ({changeTo:"Schlaf~j$1", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"(straf|Straf)(f[[=a=]]ll|forder|frisch|termin|tendenz|team|technisch|theologisch|tor|tribunal|tilg|tarif)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\bA(n|b)ruff"});
		app.changeGrepPreferences.properties = ({changeTo:"A$1ruf~jf", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\baufisst\\b"});
		app.changeGrepPreferences.properties = ({changeTo:"auf~jisst", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Surfladen"});
		app.changeGrepPreferences.properties = ({changeTo:"Surf~jladen", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"\\b(Wurf|Golf|Lauf|Stoff|Kunststoff|Sauerstoff|Schiff)(l|f|i|t)"});
		app.changeGrepPreferences.properties = ({changeTo:"$1~j$2", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Schlaf(tablette|teddy|tee|tod|temperatur|therapeut|trank|trunk|tier)"});
		app.changeGrepPreferences.properties = ({changeTo:"Schlaf~j$1", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Sauftrottel"});
		app.changeGrepPreferences.properties = ({changeTo:"Sauf~jtrottel", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Losstein"});
		app.changeGrepPreferences.properties = ({changeTo:"Los~jstein", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Schilfinsel"});
		app.changeGrepPreferences.properties = ({changeTo:"Schilf~jinsel", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Eingreiftrupp"});
		app.changeGrepPreferences.properties = ({changeTo:"Eingreif~jtrupp", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Stieft"});
		app.changeGrepPreferences.properties = ({changeTo:"Stief~jt", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"Streiflicht"});
		app.changeGrepPreferences.properties = ({changeTo:"Sreif~jlicht", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"fj"});
		app.changeGrepPreferences.properties = ({changeTo:"f~jj", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"fh"});
		app.changeGrepPreferences.properties = ({changeTo:"f~jh", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"fk"});
		app.changeGrepPreferences.properties = ({changeTo:"f~jk", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
		app.findGrepPreferences.properties = ({findWhat:"fb"});
		app.changeGrepPreferences.properties = ({changeTo:"f~jb", fillColor:"C=75 M=5 Y=100 K=0"});
		changeObject.changeGrep();
	} catch (e) {alert(e + ' at line ' + e.line)}
	app.findChangeGrepOptions.properties = options;
	app.findGrepPreferences = NothingEnum.NOTHING;
	app.changeGrepPreferences = NothingEnum.NOTHING;
	app.scriptPreferences.version = scriptVersion;
};

function getStyleByString(docOrGroup, string, property) {
	if (string == '[No character style]') return docOrGroup[property][0];
	if (string == '[No paragraph style]') return docOrGroup[property][0];
	if (string == 'NormalParagraphStyle') return docOrGroup[property][1];
	stringResult = string.match (/^(.*?[^\]):(.*)$/);
	var styleName = (stringResult) ? stringResult[1] : string;
	styleName = styleName.replace (/\:/g, ':');
	remainingString = (stringResult) ? stringResult[2] : '';
	var newProperty = (stringResult) ? property.replace(/s$/, '') + 'Groups' : property;
	var styleOrGroup = docOrGroup[newProperty].itemByName(styleName);
	if (remainingString.length > 0 && styleOrGroup.isValid) styleOrGroup = getStyleByString (styleOrGroup, remainingString, property);
	return styleOrGroup;
};
