"use server";

import { LoginSchema } from "./../../lib/schemas/loginSchema";
import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import { ActionResult } from "@/types";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

export const signInUser = async (
  data: LoginSchema
): Promise<ActionResult<string>> => {
  try {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(result);

    return { status: "success", data: "Logged in" };
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { status: "error", error: "Invalid credentials" };

        default:
          return { status: "error", error: "Something went wrong" };
      }
    } else {
      return { status: "error", error: "Something went wrong" };
    }
  }
};

export const signOutUser = async () => {
  await signOut({redirectTo: '/'});
}

export const registerUser = async (
  data: RegisterSchema
): Promise<ActionResult<User>> => {
  try {
    const validated = registerSchema.safeParse(data);
    if (!validated.success) {
      return { status: "error", error: validated.error.errors };
    }

    const { name, email, password } = validated.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return { status: "error", error: "User already exists" };
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
      },
    });

    return { status: "success", data: user };
  } catch (error) {
    console.log(error);

    return { status: "error", error: "Something went wrong" };
  }
};

export const getUserByEmail = async (email: string) =>
  prisma.user.findUnique({ where: { email } });

export const getUserById = async (id: string) =>
  prisma.user.findUnique({ where: { id } });
