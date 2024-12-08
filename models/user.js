import { executeQuery, executeNonQuery } from "@lib/db-queries"
 
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const findUser = async ({UID, email} = {}) => {
    let user = []
    if(email != undefined){
        user = await executeQuery(`Select * from Users where email = "${email}";`)
    }
    else if( UID != undefined){
        user = await executeQuery(`Select * from Users where UID = "${UID}";`)
    }
    else if(email != undefined && UID != undefined ){
        user = await executeQuery(`Select * from Users where UID = "${UID}" and email = "${email}";`)
    }
    else{
        user = await executeQuery(`Select * from Users;`)
        return {found: true, user: user}
    }
    if(user.length != 0 ) return {found: true, user: user[0]}
    else return {found : false, user: null}

}

const createUser = async ({name = null, email = null, type = null, pfp = null}) => {
    var UID = uuidv4()
    var user = await findUser({UID : UID})
    while(user.found){
        UID = uuidv4()
        user = await findUser({UID : UID})
    }
    return await executeNonQuery(
        `INSERT INTO Users VALUES(?, ?, ?, ?, ?, ?);`,
        [UID, name, email, type, pfp, Date()]
    )
}

const updateUser = async (user = "") => {
    if(user.UID != "" && user.UID != undefined && user != ""){
        return await executeNonQuery(
            `UPDATE Users SET ${user.type!= ""? ` Type = ?`: null} where UID = ?;`,
            [user.type,user.UID]
        )
    }
    else return false
}
const createTeacher = async (user) => {
    return await executeNonQuery(
        "INSERT INTO teachers VALUES(?, ?, ?)",
        [user.UID, user.dept,user.phone]
    )
}
const createStudent = async (user) => {
    return await executeNonQuery(
        "INSERT INTO students VALUES(?, ?, ?, ?)",
        [user.UID,user.prn, user.dept,user.phone]
    )
}





const findTeacher =async ({PRN} = {}) => {
    return await executeQuery(
        "SELECT PRN FROM students WHERE PRN = ?",
        [PRN]
    )
      
}
const findStudent = async ({email, UID} = {}) => {
    try {
        let user = []
        if(email != undefined){
            user = await executeQuery(`Select * from students where email = "${email}";`)
        }
        else if( UID != undefined){
            user = await executeQuery(`Select * from students where UID = "${UID}";`)
        }
        else if(email != undefined && UID != undefined ){
            user = await executeQuery(`Select * from students where UID = "${UID}" and email = "${email}";`)
        }
        else{
            user = await executeQuery(`Select * from students;`)
        }
        if(user.length != 0 ) return {found: true, user: user}
        else return {found : false, user: undefined}
    } catch (error) {
        console.log(error)
        return {found: false,user: {}}
    }
      
}





const User = {findUser, createUser, updateUser, findTeacher, findStudent, createTeacher, createStudent}

export default User