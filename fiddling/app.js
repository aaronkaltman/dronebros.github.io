/**
 * Created by aaronkuniansky-altman on 12/10/16.
 */
var websiteUrl = "http://aaronstest1.wpengine.com/wp-json/wp/v2/posts/";
function getPost(){
    var URL = websiteUrl;
    console.log(URL);
    $.ajax({
        url:URL,
        type:"GET",
        success:function(response){
            console.log(response.title.rendered)
        }
    });
}
$(document).ready(function(){
    console.log(response.title.rendered);
});

$(home-header-1)