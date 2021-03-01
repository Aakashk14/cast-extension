var turn =1;
document.addEventListener("DOMSubtreeModified", function(event){

	   
        if(document.getElementsByClassName("ellipsize-text")) {
        	var x = document.getElementsByClassName("ellipsize-text")[0].innerHTML;
        	if(turn===1){
                        turn=turn+1;
                        setTimeout(function() {
                        document.dispatchEvent(new CustomEvent('movie_name', {
                        detail: x // 

}))})}}

            });
        	
             
    

        	

