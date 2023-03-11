
function myFunction(mediachange) { // Media change - Menu script
    if (mediachange.matches) {
        document.querySelector('#menu-box').style.display = 'none'
        window.addEventListener('click', (event) => {
            var cle = event.target['id'] 
            if(cle!='menu-box' && cle!='menu-logo' && mediachange.matches){
                document.querySelector('#menu-box').style.display = 'none'
                document.querySelector('#content-section').style.filter = 'none'
            }
            else if(cle=='menu-logo'){ 
                document.querySelector('#menu-box').style.display = 'block'
                document.querySelector('#content-section').style.filter = 'brightness(40%)'
            }
            document.querySelector('#menu-box').addEventListener('click', function(event) {
            event.stopPropagation();
            });
        })
   }else{ 
    document.querySelector('#menu-box').style.display = 'block'
 }
}
var mediachange = window.matchMedia("(max-width: 767px)")
myFunction(mediachange) // Call listener function at run time
mediachange.addListener(myFunction) // Attach listener function on state change