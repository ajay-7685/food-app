const search=()=>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementById("product-list")
    // product having common class name we want see all products
    const product=document.querySelectorAll(".product")
     const productname=storeitems.getElementsByTagName("h2")
    //  product name in side our store items
    for(var i=0;i<productname.length;i++)
    {
        let match=product[i].getElementsByTagName("h2")[0];
        if(match)
        {
            let textvalue=match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1)
            {
                product[i].style.display="";
            }
            else{
                product[i].style.display="None";
            }
        }
    }

}