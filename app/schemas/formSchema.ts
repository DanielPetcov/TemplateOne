import z from "zod";

const FormContact = z.object({
  fullName: z
    .string()
    .min(5, {
      error: "Name can not be smaller than 5 characters",
    })
    .max(100, {
      error: "Name can not be bigger than 100 characters",
    }),
  willCome: z.boolean().nonoptional(),
  willBeChildren: z.boolean().nonoptional(),
  personsNumber: z.coerce.number<string>(),
  comment: z
    .string()
    .max(500, {
      error: "Comment can not be bigger than 500 characters",
    })
    .optional(),
});

export { FormContact };
