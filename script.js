let generate = async() => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCh = "!@#$%^&*()_+{}[]:',./~`\|;";
    const all = lowerCase+upperCase+numbers+specialCh;

    let result="";

    for(let i=0; i<12; i++){
        const randomIndex = Math.floor(Math.random() * all.length);
        result += all.charAt(randomIndex);
    }
    return result;
}

let ans = document.querySelector("button");
const output = document.getElementById("output");

ans.addEventListener("click", async() =>{
   let password = await generate();
   output.innerText = password;

   setTimeout(()=> {
    output.innerText = '';
   },10000);
});