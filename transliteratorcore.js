/*
Funtcions of the file:
 - Converting required text in sinhala phenotic to sinaha
 
Special Creadits goes to UCSC.....
*/


var sinuniText;
var nVowels;


var invowels= new Array('oo','o\\)','oe','aa','a\\)','Aa','A\\)','ae','ii','i\\)','ie','ee','ea','e\\)','ei','uu','u\\)','au','/\a','a','A','i','e','u','o','I');
var vowelsUni= new Array('ඌ','ඕ','ඕ','ආ','ආ','ඈ','ඈ','ඈ','ඊ','ඊ','ඊ','ඊ','ඒ','ඒ','ඒ','ඌ','ඌ','ඖ','ඇ','අ','ඇ','ඉ','එ','උ','ඔ','ඓ');
var vowelModifiersUni= new Array('ූ','ෝ','ෝ','ා','ා','ෑ','ෑ','ෑ','ී','ී','ී','ී','ේ','ේ','ේ','ූ','ූ','ෞ','ැ','','ැ','ි','ෙ','ු','ො','ෛ');

var specialConsonants= new Array()
var specialConsonantsUni= new Array()

var specialChar= new Array()
var specialCharUni= new Array()

var inconsonants= new Array()
var consonantsUni= new Array()

var nVowels = 26;
    specialConsonantsUni[0]='ං'; specialConsonants[0]=/\\n/g;
    specialConsonantsUni[1]='ඃ'; specialConsonants[1]=/\\h/g;
    specialConsonantsUni[2]='ඞ'; specialConsonants[2]=/\\N/g;
    specialConsonantsUni[3]='ඍ'; specialConsonants[3]=/\\R/g;
    specialConsonantsUni[4]='ර්'+'\u200D'; specialConsonants[4]=/R/g;
    specialConsonantsUni[5]='ර්'+'\u200D'; specialConsonants[5]=/\\r/g;
   
    consonantsUni[0]='ඬ'; inconsonants[0]='nnd';
    consonantsUni[1]='ඳ'; inconsonants[1]='nndh';
    consonantsUni[2]='ඟ'; inconsonants[2]='nng';
    consonantsUni[3]='ථ'; inconsonants[3]='Th';
    consonantsUni[4]='ධ'; inconsonants[4]='dh';
    consonantsUni[5]='ඝ'; inconsonants[5]='gh';
    consonantsUni[6]='ඡ'; inconsonants[6]='Ch';
    consonantsUni[7]='ඵ'; inconsonants[7]='ph';
    consonantsUni[8]='භ'; inconsonants[8]='bh';
    consonantsUni[9]='ශ'; inconsonants[9]='sh';
    consonantsUni[10]='ෂ'; inconsonants[10]='Sh';
    consonantsUni[11]='ඥ'; inconsonants[11]='GN';
    consonantsUni[12]='ඤ'; inconsonants[12]='KN';
    consonantsUni[13]='ළු'; inconsonants[13]='Lu';
    consonantsUni[14]='ද'; inconsonants[14]='d';
    consonantsUni[15]='ච'; inconsonants[15]='ch';
    consonantsUni[16]='ඛ'; inconsonants[16]='kh';
    consonantsUni[17]='ත'; inconsonants[17]='th';
    consonantsUni[18]='ඪ'; inconsonants[17]='Dh'
    
    consonantsUni[18]='ට'; inconsonants[18]='t';
    consonantsUni[19]='ක'; inconsonants[19]='k';    
    consonantsUni[20]='ඩ'; inconsonants[20]='D';
    consonantsUni[21]='න'; inconsonants[21]='n';
    consonantsUni[22]='ප'; inconsonants[22]='p';
    consonantsUni[23]='බ'; inconsonants[23]='b';
    consonantsUni[24]='ම'; inconsonants[24]='m';   
    consonantsUni[25]='‍ය'; inconsonants[25]='\\u005C' + 'y';
    consonantsUni[26]='‍ය'; inconsonants[26]='Y';
    consonantsUni[27]='ය'; inconsonants[27]='y';
    consonantsUni[28]='ජ'; inconsonants[28]='j';
    consonantsUni[29]='ල'; inconsonants[29]='l';
    consonantsUni[30]='ව'; inconsonants[30]='v';
    consonantsUni[31]='ව'; inconsonants[31]='w';
    consonantsUni[32]='ස'; inconsonants[32]='s';
    consonantsUni[33]='හ'; inconsonants[33]='h';
    consonantsUni[34]='ණ'; inconsonants[34]='N';
    consonantsUni[35]='ළ'; inconsonants[35]='L';
    consonantsUni[36]='ඛ'; inconsonants[36]='K';
    consonantsUni[37]='ඝ'; inconsonants[37]='G';
    consonantsUni[38]='ඨ'; inconsonants[38]='T';
    consonantsUni[39]='ධ'; inconsonants[39]='D';
    consonantsUni[40]='ඵ'; inconsonants[40]='P';
    consonantsUni[41]='ඹ'; inconsonants[41]='B';
    consonantsUni[42]='ෆ'; inconsonants[42]='f';
    consonantsUni[43]='ඣ'; inconsonants[43]='q';
    consonantsUni[44]='ග'; inconsonants[44]='g';
    consonantsUni[45]='ර'; inconsonants[45]='r';
    specialCharUni[0]='ෲ'; specialChar[0]='ruu';
    specialCharUni[1]='ෘ'; specialChar[1]='ru';


function startTextProcess(obj) {
    var s,r,v;
    sinuniText = obj.editingText;
    
//special consonents
    for (var i=0; i<specialConsonants.length; i++)
        sinuniText = sinuniText.replace(specialConsonants[i], specialConsonantsUni[i]);
   
    //consonents + special Chars
    for (var i=0; i<specialCharUni.length; i++){
        for (var j=0;j<inconsonants.length;j++){
            s = inconsonants[j] + specialChar[i];
            v = consonantsUni[j] + specialCharUni[i];
            r = new RegExp(s,"g");
            sinuniText = sinuniText.replace(r, v);
        }
    }
    //inconsonants + Rakaransha + vowel modifiers
    for (var j=0;j<inconsonants.length;j++){
        for (var i=0;i<invowels.length;i++){
            s = inconsonants[j] + "r" + invowels[i];
            v = consonantsUni[j] + "්‍ර" + vowelModifiersUni[i];
            r = new RegExp(s,"g");
            sinuniText = sinuniText.replace(r, v);
        }
        s = inconsonants[j] + "r";
        v = consonantsUni[j] + "්‍ර";
        r = new RegExp(s,"g");
        sinuniText = sinuniText.replace(r, v);
    }
    //consonents + vowel modifiers
    for (var i=0;i<inconsonants.length;i++){
        for (var j=0;j<nVowels;j++){ 
            s = inconsonants[i]+invowels[j];
            v = consonantsUni[i] + vowelModifiersUni[j];
            r = new RegExp(s,"g");
            sinuniText = sinuniText.replace(r, v);
        }
    }

    //consonents + HAL
    for (var i=0; i<inconsonants.length; i++){
        r = new RegExp(inconsonants[i],"g");
        sinuniText = sinuniText.replace(r, consonantsUni[i]+"්");
    }
        
    //invowels
    for (var i=0; i<invowels.length; i++){
        r = new RegExp(invowels[i],"g");
        sinuniText = sinuniText.replace(r, vowelsUni[i]);
    }

    obj.editedText = sinuniText;
    obj.object.value = obj.prevText + obj.editedText
    obj.bToETextLength = GetCursorPos(obj.object);
    obj.object.value += obj.aftrText;
    SetCursorPos(obj.object, obj.bToETextLength);
}