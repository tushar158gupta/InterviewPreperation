"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const authformSchema = (type: FormType) => {
  return z.object({
    name:
      type === "sign-up" ? z.string().min(3).max(50) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authformSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    try {
      if (type === "sign-up") {
        console.log("SIGN UP ", values);
      } else {
        console.log("SIGN IN ", values);
      }
    } catch (error) {
      console.log(error);
      toast.error("an error");
    }
  }
  const issingin = type === "sign-in";

  return (
    <div className=" card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10 justify-center">
        <div className="flex flex-grow gap-2 justify-center ">
          <Image src="./logo.svg" alt="logo" height={32} width={38} />
          <h3 className="text-primary-100">PrepVision</h3>
        </div>
        {/* tagline an inline tag */}
        <h3>Practice job interview with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-full space-y-8 mt-4 form"
          >
            {!issingin && <p>name</p>}
            <p>email</p>
            <p>password</p>

            <Button className="btn" type="submit">
              {issingin ? "Login" : "Create an account"}
            </Button>
          </form>
        </Form>
        <div className="text-center">
          {issingin ? "No account yet ? " : "Have an account already ?"}
          <Link
            href={!issingin ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!issingin ? " Sign in " : "Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
