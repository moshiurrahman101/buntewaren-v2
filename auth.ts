import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {PrismaAdapter} from "@auth/prisma-adapter"
import bcrypt from "bcryptjs"
import { db } from "./db"
import { signInSchema } from "./lib/zod"
 
export const { handlers: {GET, POST}, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  providers: [
    // satement here
  ],
})