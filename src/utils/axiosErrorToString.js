import objectMap from "./objectMap";

export default (err) => {
  console.log(err);
  const error = err.response.data.message;
  const msg = 
  typeof error === 'object' 
    ? error.name == 'ZodError'
      ?  error.issues.reduce((acc, current)=>{
          let msg = current.message;
          return acc+msg+ ' <br/>'
        }, '')
      : Object.values(objectMap(error, (key, value)=>{
          return typeof error[value] === "object" ?error[value]._errors?.reduce((acc, current)=>acc+current+'<br/>', '') : ''; 
        })) 
    : typeof error === "string" ? 
      error == "Email already registered" 
        ? 'Email sudah terdaftar, silahkan cek verifikasi di email anda, jika tidak ada di inbox, silahkan cek di spam' : error
      : 'Ada kesalahan, silahkan kontak admin' ;
  return msg;
}