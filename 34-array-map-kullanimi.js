// array map kullanimi

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName icinde orjinal isim kalsın.
//shortName icinde ilk harf buyuk. (A.)
// newName icinde ilk har buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map( user => user.toLowerCase() )
console.log(NEW_USERS)

const USERS_OBJ = USERS.map( item => 
    {
        return{
            userName: "AYSE", shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`  
        }
    }
)

console.log(USERS_OBJ)