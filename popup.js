var cast1;
var cast2;
var cast3;

chrome.storage.local.get(['name'], function(result) {
 names = result.name.trim();
 chrome.storage.local.remove(['name'],function(){
 	var error=chrome.runtime.lastError;
 	if(error){
 		console.error(error);
 	}
 })


	var url1 = "http://www.omdbapi.com/?s="+names+"&apikey={api}";

    $.ajax({url:url1 , success:function(result){
	      console.log(result);
          pass = result.Search[0].imdbID;

        newurl = "https://api.themoviedb.org/3/find/"+pass+"?api_key={api}&language=en-US&external_source=imdb_id";

    $.ajax({url:newurl,success:function(result){
	       pass2 = result.movie_results[0].id;


        newurl2 = "https://api.themoviedb.org/3/movie/"+pass2+"/credits?api_key={api}&language=en-US";
	$.ajax({url:newurl2,success:function(result){

        
		cast1 = result.cast[0].name;
		cast2 = result.cast[1].name;
		cast3=result.cast[2].name;
		document.getElementById('result1').innerHTML=cast1;
				document.getElementById('result2').innerHTML=cast2;
						document.getElementById('result3').innerHTML=cast3;


	}})
}


})


}});
});