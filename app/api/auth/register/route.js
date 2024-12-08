import User from "@models/user"

export const POST  = async (req) => {
    // CREATE TABLE Students(UID VARCHAR(36) PRIMARY KEY, PRN VARCHAR(8), FName VARCHAR(20), LName VARCHAR(30), Email VARCHAR(320), Department VARCHAR(30), MobileNumber INT(10));


    // const {UID, type, PRN, Department, MobileNumber} = await req.json()
    // console.log({UID, type, PRN, Department, MobileNumber})
    try {
        const user = await req.json()
        let data = user
        let f1 = await User.updateUser({
            UID: data.UID,
            type: data.type
        })
        let f2 = false;
        if(data.type == "student") f2 = await User.createStudent({
            UID: data.UID,
            prn: data.prn,
            dept: data.dept,
            phone: data.phone
        })
        else if(data.type == "teacher") f2 = await User.createTeacher({
            UID: data.UID,
            dept: data.dept,
            phone: data.phone
        })
        if(!f2){
            await User.updateUser({
                UID: data.UID,
                type: null
            })
        }
        if(f1 && f2){
            return new Response("Successfully Registered",{status: 200});
        }
        else{
            return new Response("Failed to create a Post!" , {status: 500})
        }
        
    } catch (error) {
        console.log(error)
    }
}


// export const GET = async () => {

// }