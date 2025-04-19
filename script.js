// Password Generator Script
const password_output=document.getElementById("password_output");
const copyMsg=document.getElementById("copy_msg");

/* main working */
function generate_password() 
{
  const length=parseInt(document.getElementById("length").value);
  const include_upper=document.getElementById("uppercase").checked;
  const include_lower=document.getElementById("lowercase").checked;
  const include_numbers=document.getElementById("numbers").checked;
  const include_symbols=document.getElementById("symbols").checked;

  const upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars="abcdefghijklmnopqrstuvwxyz";
  const numberChars="0123456789";
  const symbolChars="!@#$%^&*()_+{}[]<>?/";

  let all_characters="";
  if (include_upper) all_characters+=upperChars;
  if (include_lower) all_characters+=lowerChars;
  if (include_numbers) all_characters+=numberChars;
  if (include_symbols) all_characters+=symbolChars;

  if (all_characters==="") 
    {
    password_output.textContent=" Please select at least one option . ";
    return;
   }

  let password="" ;
  for (let a=0; a<length ; a++) 
    {
    const random_index=Math.floor(Math.random()*all_characters.length);
    password+=all_characters[random_index];
   }

  password_output.textContent=password;
  copyMsg.textContent="";
}


/* For copying password */
function copy_password() 
{
  const password=password_output.textContent ;
  if (!password || password.includes("Please select")) return;

  navigator.clipboard.writeText(password)
    .then(() => 
        {
      copyMsg.textContent = "Password copied to clipboard!";
        })
    .catch(() => 
        {
      copyMsg.textContent = "Failed to copy.";
       });
}

/* END */