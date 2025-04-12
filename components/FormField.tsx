import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, Controller , FieldValues, Path} from "react-hook-form";

interface formFieldProps<T extends FieldValues>{
  control:Control<T>;
  name:Path<T>;
  label:string;
  placeholder?:string;
  type?:"text"|"email"|"password"|"file"


}
 
const FormField = ({control , name  ,label , placeholder , type="text"}:formFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="label">Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>
            This is your public display name hello.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormField;
