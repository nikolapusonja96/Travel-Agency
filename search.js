(function() {
  function makeXMLHTTPRequest() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "countries.xml", true);
    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var xmlDoc = xmlhttp.responseXML;
        search_data(xmlDoc);

      }
    }
    xmlhttp.send();
  }

  document.addEventListener("DOMContentLoaded", makeXMLHTTPRequest, false);
}());
function search_data(xmlDoc){
  document.getElementById("search_submit").addEventListener("click", function(){country_search(xmlDoc);})
  function country_search(xmlDoc){
    var i = 0;
    var all_countries    = xmlDoc.querySelectorAll("country");
    var countries_lenght = all_countries.length;
    var list = "";
    document.getElementById('bottom').innerHTML = "";

    var search_word = document.getElementById("search_value").value;


    for(i=0; i <= countries_lenght-1; i++){
      var name = all_countries[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
      var lower_name = name.toLowerCase();
      var upper_name = name.toUpperCase();
      var city = all_countries[i].getElementsByTagName("city")[0].childNodes[0].nodeValue;
      var lower_city = city.toLowerCase();
      var upper_city = city.toUpperCase();
      if(search_word === name || search_word === lower_name || search_word === upper_name || search_word === city || search_word === lower_city || search_word === upper_city){
        list+= "<div><h1>"+name+"</h1>"+"<h3> The capital city:" +city+" </h3></div>";
     }
   }
       if(list !== ""){
         document.getElementById('bottom').innerHTML = list;
       }
       else {
          var list = "<h3>Enter capital city or country name</h3>";
             document.getElementById('bottom').innerHTML += list;
       }
  }
}
