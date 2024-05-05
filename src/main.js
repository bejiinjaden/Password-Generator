const lowercase = "abcdefghijklmnopqrstuvwxyz";
const alphanum = "abcdefghijklmnopqrstuvwxyz1234567890";
const all = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
const generateBtn = document.querySelector('.generate_btn');
const options = document.querySelectorAll('.option input');
const numbers = "1234567890";
let password ="";

let charset = () => {
    let selectedCharset = '';
    options.forEach(option => {
        if(option.checked){
            selectedCharset = option.id;
        }
    });
    return selectedCharset === 'lowercase' ? lowercase :
           selectedCharset === 'alphanum' ? alphanum :
           selectedCharset === 'all' ? all :
           lowercase;
}

generateBtn.addEventListener("click", () => generatePass(charset()));

function generatePass(charset) {
    console.log(charset);
    password = "";

    if(charset === "alphanum"){
        for(let i = 0 ; i<=6 ; i++){
            const random = Math.floor(Math.random() * alphanum.length);
            password+=charset[random];
        }
        for(let i = 0 ; i<=6 ; i++){
            const random = Math.floor(Math.random() * numbers.length);
            password+=numbers[random];
        }
        document.querySelector('.pass_input').value = password;
        console.log(password);
        return;//if alphanum is the charset i dont want the function to proceed
    }
    
    
        for(let i = 0 ; i<=12 ; i++){
            const random = Math.floor(Math.random() * charset.length);
            password+=charset[random];
            document.querySelector('.pass_input').value = password;
        }
    console.log(password);

}

