$(document).ready(function(){
      var quote = "";
      var author = "";
      $("#btx").click(function(){
        $.ajaxSetup({cache:false});
        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(x) {
        $("#quotes-container").html(x[0].content + "<p><small><i>— " + x[0].title + "</i></small></p>");
     quote = x[0].content.replace(/<\/?[^>]+(>|$)/g, "");
     author = x[0].title;
  }); // getJSON 
   $("#share").click(function(){
    window.open("https://twitter.com/intent/tweet?text="+quote+"~~"+author, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400');
   return false;
  }); 
}); // button click
  
}); // $(document).ready()