

//Задание 1

function videoGrab(){
let video =  document.querySelectorAll('#video-title-link');
let b = "";
for ( let i = 0; video.length; i++)
{
    console.log(b);
    b=(video[i]["href"]);
    b = [b]
}
console.log(b);
}
videoGrab();
// задание 2
function lessonerGrab(){


            let lessoner = document.querySelectorAll('.mates-list__mate-name-block');
            let b ="";
            let c ="";
            for (let i=0; lessoner.length; i++)
            {
                b=(lessoner[i]["href"]);
                c=(lessoner[i]["text"]);
            }
            console.log(b+":"+c);


}





