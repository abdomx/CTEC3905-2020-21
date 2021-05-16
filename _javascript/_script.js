// This function return the specifice id that match the string
function Para_Func()
{
	document.getElementById("target").innerHTML = "The Internet of Things (IoT) is the term which refers to the ever-growing network of physical objects with embedded sensors which can connect together via the internet allowing communication to occur between these objects and many other Internet-enabled devices and systems.";
}

//  This function return the matches elemnet that user search for
function mySearch()
{
	var x = document.getElementById("my_search").placeholder;
	document.getElementById("search_demo").innerHTML = x;
}


document.getElementById('product').addEventListener('click', function() {
    location.href = '#products'
}, false);


// This function return all the products details in data file to paragrah page
function my_data(arr)
{
	let out = "";
	let i;
	
	for(i = 0; i < arr.length; i++)
	{
		out +='<div class="_image"><img src=" ' + arr[i].img + ' " width="75" height="225"></div><div class="product_details"><p style="font-size:40px"><b>' + arr[i].title + '</p><p>Product id: ' + arr[i].id + '</p><p><i> Product price: ' + arr[i].price + '</i></b></p><p> Product description: ' + arr[i].description + '</p></div>';
	}
	
	document.getElementById("product").innerHTML = out;
}


// This function connect the HTML to Javascript file
function my_social(arr)
{
	let out = "";
	let i;
	
	for(i = 0; i < arr.length; i++)
	{	
		out += '<a href="' + arr[i].url + '"><img src=" ' + arr[i].img + '"style=" width:50px; height:50px; padding: 5px; "></a>';
	}
	
	document.getElementById("soc_net").innerHTML = out;
}