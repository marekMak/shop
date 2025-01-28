"use server";

import { revalidatePath } from "next/cache";
import { loginSchema, registerSchema } from "../schemas";
import { LoginData, RegisterData } from "../types";
import { createClient } from "./server";
import { redirect } from "next/navigation";

export async function registerUser(formData: RegisterData) {
  const validate = registerSchema.safeParse(formData);

  if (!validate.success) {
    return { success: false, message: "Form must be valid" };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: validate.data.email,
    password: validate.data.password,
    options: {
      data: {
        firstname: validate.data.firstName,
        lastname: validate.data.lastName,
      },
    },
  });

  if (error) return { success: false, message: "Registration failed" };

  revalidatePath("/");

  return { success: true, message: "Registration successful" };
}

export async function loginUser(formData: LoginData) {
  const validate = loginSchema.safeParse(formData);

  if (!validate.success) {
    return { success: false, message: "Form must be valid" };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: validate.data.email,
    password: validate.data.password,
  });

  if (error) return { success: false, message: "Login failed" };

  revalidatePath("/");
  redirect("/");

  return { success: true, message: "Login successful" };
}

export async function logoutUser() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) return { success: false, message: "Logout failed" };

  revalidatePath("/");

  return { success: true, message: "Logout successful" };
}

export async function fetchCategories() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    return { success: false, message: "Categories not found", data: [] };
  }
  return { success: true, message: "Categories found", data };
}

export async function fetchColours() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("colours").select("*");

  if (error) {
    return { success: false, message: "Colours not found", data: [] };
  }
  return { success: true, message: "Colours found", data };
}

export async function fetchSizes() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("sizes").select("*");

  if (error) {
    return { success: false, message: "Sizes not found", data: [] };
  }
  return { success: true, message: "Sizes found", data };
}

export async function fetchProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    return { success: false, message: "Products not found", data: [] };
  }
  return { success: true, message: "Products found", data };
}

export async function fetchPosts() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return { success: false, message: "Posts not found", data: [] };
  }
  return { success: true, message: "Posts found", data };
}

export async function fetchAddresses() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { success: false, message: "User not authenticated", data: [] };
  }

  const { data, error } = await supabase
    .from("addresses")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    return { success: false, message: "Sizes not found", data: [] };
  }
  return { success: true, message: "Sizes found", data };
}

export async function deleteAddress(id: number) {
  const supabase = await createClient();

  const { error } = await supabase.from("addresses").delete().eq("id", id);

  if (error) {
    return { success: false, message: "Sizes not found", data: [] };
  }

  revalidatePath("/");
  return { success: true, message: "Sizes found", data: [] };
}

export async function fetchStates() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("states").select("*");

  if (error) {
    return { success: false, message: "Sizes not found", data: [] };
  }
  return { success: true, message: "Sizes found", data };
}
