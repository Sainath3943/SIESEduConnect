    import nextAuth from "next-auth";
    import GoogleProvider from "next-auth/providers/google"
    // import AzureADProvider from "next-auth/providers/azure-ad"

    import User from "@models/user";
    
    const handler = nextAuth({
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }),
            // AzureADProvider({
            //     clientId: process.env.AZURE_AD_CLIENT_ID,
            //     clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            //     tenantId: process.env.AZURE_AD_TENANT_ID,
            // }),
        ],
        callbacks:{
            async session({session}){
                const user = await User.findUser({email: session.user.email})
                session.uid = user.user.UID
                if(user.user.Type == null){
                    session.type = null
                }
                else session.type = user.user.Type
                session.user.image = user.user.PFP

                const name = session.user.name.split(" ")
                if(name.length != 0){
                    session.user.fname = name[0]
                    session.user.lname = name[name.length-1]
                }

                return session
            },
            async signIn({ profile }){
                const user = await User.findUser({email: profile.email})
                if(!user.found){
                    let flag = await User.createUser({
                        name: profile.name,
                        email: profile.email,
                        pfp: profile.picture
                    }) 
                }
                return true
            },
            async redirect(){
                return "/canvas"
            }
        }

    })


    export { handler as GET, handler as POST}