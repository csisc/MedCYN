function iframe_gen(){

//Getting relevant Wikidata IDs
el = document.querySelector(".idfield")
input = el.value
lg_1 = document.getElementById('language').value


//Generating iframe source links
drugint = "https://query.wikidata.org/embed.html#SELECT%20%3FsubjectLabel%20%3FobjectLabel%20WHERE%20%7B%0A%20%20VALUES%20%3Fsubject%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20VALUES%20%3Fobject%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20%3Fsubject%20wdt%3AP769%20%3Fobject.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+lg_1+"%22.%20%7D%0A%20%20%7D"

diag = "https://query.wikidata.org/embed.html#SELECT%20%3FdiseaseLabel%20(COUNT(*)%20AS%20%3Fcount)%0Awith%20%7B%0A%20%20select%20*%20%7B%0A%20%20%20%20VALUES%20%3Fsymptoms%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20%20%20%3Fdisease%20wdt%3AP780%20%3Fsymptoms.%0A%20%20%7D%0A%7D%20as%20%25data%0A%7B%0A%20%20INCLUDE%20%25data.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%2C"+lg_1+"%22.%20%7D%0A%7D%20%0AGROUP%20BY%20%3FdiseaseLabel%0AORDER%20BY%20DESC(%3Fcount)"

gene = "https://query.wikidata.org/embed.html#SELECT%20%3FgeneLabel%20%3FdiseaseLabel%20(COUNT(*)%20AS%20%3Fcount)%0Awith%20%7B%0A%20%20select%20DISTINCT%20%3Fgene%20%3Fdisease%20%3Fsymptoms%20%7B%0A%20%20%20%20VALUES%20%3Fsymptoms%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20%20%20%3Fdisease%20wdt%3AP780%20%3Fsymptoms.%0A%20%20%20%20%3Fdisease%20wdt%3AP2293%20%3Fgene.%0A%20%20%7D%0A%7D%20as%20%25data%0A%7B%0A%20%20include%20%25data.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+lg_1+"%22.%20%7D%0A%7D%20GROUP%20BY%20%3FgeneLabel%20%3FdiseaseLabel%0AORDER%20BY%20DESC(%3Fcount)"

exa = "https://query.wikidata.org/embed.html#SELECT%20%3FexaminationsLabel%20%3FdiseaseLabel%20(COUNT(*)%20AS%20%3Fcount)%0Awith%20%7B%0A%20%20select%20DISTINCT%20%3Fexaminations%20%3Fdisease%20%3Fsymptoms%20%7B%0A%20%20%20%20VALUES%20%3Fsymptoms%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20%20%20%3Fdisease%20wdt%3AP780%20%3Fsymptoms.%0A%20%20%20%20%3Fdisease%20wdt%3AP923%20%3Fexaminations.%0A%20%20%7D%0A%7D%20as%20%25data%0A%7B%0A%20%20include%20%25data.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+lg_1+"%22.%20%7D%0A%7D%20GROUP%20BY%20%3FexaminationsLabel%20%3FdiseaseLabel%0AORDER%20BY%20DESC(%3Fcount)"

drug = "https://query.wikidata.org/embed.html#SELECT%20%3FpropertyLabel%20%3FtherapyLabel%20WHERE%20%7B%0A%20%20VALUES%20%3Fdisease%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20VALUES%20%3Fprop%20%7Bwdt%3AP924%20wdt%3AP2176%7D%0A%20%20%3Fdisease%20%3Fprop%20%3Ftherapy.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+lg_1+"%22.%20%7D%0A%20%20%3Fproperty%20wikibase%3AdirectClaim%20%3Fprop.%0A%20%20%7D"

pub = "https://query.wikidata.org/embed.html#SELECT%20%3FpublicationLabel%20%3Fdate%20%3FsourceLabel%20%3Fdoi%20WHERE%20%7B%0A%20%20VALUES%20%3Fdisease%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20%3Fpublication%20wdt%3AP921%20%3Fdisease.%0A%20%20%3Fpublication%20wdt%3AP577%20%3Fdate%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wdt%3AP1433%20%3Fsource%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wdt%3AP356%20%3Fdoi.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+lg_1+"%22.%20%7D%0A%20%20%7D%0AORDER%20BY%20DESC(%3Fdate)%0ALIMIT%20100"

risk = "https://query.wikidata.org/embed.html#SELECT%20%3FdiseaseLabel%20%3FpropertyLabel%20%3FfactorLabel%20WHERE%20%7B%0A%20%20VALUES%20%3Fdisease%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20VALUES%20%3Fprop%20%7Bwdt%3AP828%20wdt%3AP5642%7D%0A%20%20%3Fdisease%20%3Fprop%20%3Ffactor.%0A%20%20%3Fproperty%20wikibase%3AdirectClaim%20%3Fprop.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+lg_1+"%22.%20%7D%0A%20%20%7D"

prev = "https://query.wikidata.org/embed.html#SELECT%20%3FdiseaseLabel%20%3FpropertyLabel%20%3FfactorLabel%20WHERE%20%7B%0A%20%20VALUES%20%3Ffactor%20%7B"+input.replace(" ", "%20").replace(":", "%3A")+"%7D%0A%20%20VALUES%20%3Fprop%20%7Bwdt%3AP828%20wdt%3AP5642%7D%0A%20%20%3Fdisease%20%3Fprop%20%3Ffactor.%0A%20%20%3Fproperty%20wikibase%3AdirectClaim%20%3Fprop.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22"+lg_1+"%22.%20%7D%0A%20%20%7D"
  
//Refreshing iframe
iframe = document.querySelector("iframe")
iframe.remove();
div = document.querySelector("#result")
cont = document.createElement("iframe")
div.appendChild(cont)
iframe = document.querySelector("iframe")
iframe.setAttribute("style", "width: 80vw; height: 50vh; border: none;")
iframe.setAttribute("referrerpolicy", "origin")
iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups")


//Getting the chosen support
dropdown = document.querySelector("#support")



if(dropdown.value == "drugint"){iframe.src = drugint}
if(dropdown.value == "diag"){iframe.src = diag}
if(dropdown.value == "gene"){iframe.src = gene}
if(dropdown.value == "exa"){iframe.src = exa}
if(dropdown.value == "drug"){iframe.src = drug}
if(dropdown.value == "pub"){iframe.src = pub}
if(dropdown.value == "risk"){iframe.src = risk}
if(dropdown.value == "prev"){iframe.src = prev}

}

//Main Source
button = document.querySelector("#runb")
button.setAttribute("onclick", "iframe_gen()")

//Changing the main language
fetch('https://raw.githubusercontent.com/csisc/MedCYN/main/medcyn_files/i18n.json')
    .then((response) => response.json()).then(data => {
    obj = data;
   })

const dropDownlg = document.getElementById('language') 
 dropDownlg.addEventListener('click', function(event) { 
 	document.getElementById('searchbutton').innerText = obj[event.target.value]["add"]
 	document.getElementById('idfield').placeholder = obj[event.target.value]["addit"]
 	document.getElementById('clear').innerText = obj[event.target.value]["clear"]
 	document.getElementById('h2_2').innerText = obj[event.target.value]["clinidec"]
 	document.getElementById('cp1').innerHTML = obj[event.target.value]["cp1"]
 	document.getElementById('cp2').innerHTML = obj[event.target.value]["cp2"]
 	document.getElementById('cp3').innerHTML = obj[event.target.value]["cp3"]
 	document.getElementById('cp4').innerHTML = obj[event.target.value]["cp4"]
 	document.getElementById('cp5').innerHTML = obj[event.target.value]["cp5"]
 	document.getElementById('cp6').innerHTML = obj[event.target.value]["cp6"]
 	document.getElementById('del').innerText = obj[event.target.value]["del"]
 	document.getElementById('diag').innerText = obj[event.target.value]["diag"]
 	document.getElementById('drug').innerText = obj[event.target.value]["drug"]
 	document.getElementById('drugint').innerText = obj[event.target.value]["drugint"]
 	document.getElementById('exa').innerText = obj[event.target.value]["exa"]
 	document.getElementById('gene').innerText = obj[event.target.value]["gene"]
 	document.getElementById('searchterm').placeholder = obj[event.target.value]["newitem"]
 	document.getElementById('prev').innerText = obj[event.target.value]["prev"]
 	document.getElementById('pub').innerText = obj[event.target.value]["pub"]
 	document.getElementById('risk').innerText = obj[event.target.value]["risk"]
 	document.getElementById('runb').innerText = obj[event.target.value]["runb"]
 	document.getElementById('h2_1').innerText = obj[event.target.value]["search"]
})