function myFunction(mediachange) { // Media change - Menu script
    if (mediachange.matches) {
        document.querySelector('#menu-box').style.display = 'none'
        window.addEventListener('click', (event) => {
            var cle = event.target['id'] 
            if(cle!='menu-box' && cle!='menu-actv' && mediachange.matches){
                document.querySelector('#menu-box').style.display = 'none'
                document.querySelector('#content-section').style.filter = 'none'
            }
            else if(cle=='menu-actv'){ 
                document.querySelector('#menu-box').style.display = 'block'
                document.querySelector('#content-section').style.filter = 'brightness(40%)'
            }
            document.querySelector('#menu-box').addEventListener('click', function(event) {
            event.stopPropagation();
            });
        })
   }else{ 
    document.querySelector('#menu-box').style.display = 'block'
    document.querySelector('#content-section').style.filter = 'none'
 }
}
var mediachange = window.matchMedia("(max-width: 992px)")
myFunction(mediachange) // Call listener function at run time
mediachange.addEventListener("change", myFunction) // Attach listener function on state change


//Modal
window.document.addEventListener('click', (event) =>{

    var click_name = event.target['className'].split(' ')
    var click_id = event.target['id']
    var id_model = click_id.replace(/[^0-9]/g,'')
    var parent_x = event.target.parentElement.id
    var parent_id = parent_x.replace(/[^0-9]/g,'')
    
    for(var ck in click_name){
        
        if(click_name[ck]=='modal-btn'){ 
            document.querySelector(`#modal${id_model}`).style.display = 'flex'
        }
        if(click_name[ck]=='modal'){
            document.querySelector(`#modal${id_model}`).style.display = 'none'
        }if(click_name[ck]=='modalspan'){        
            document.querySelector(`#modal${parent_id}`).style.display = 'none'
        }
    }
})