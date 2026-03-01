import z from "zod";

const FormContact = z.object({
  fullName: z
    .string()
    .min(5, {
      error: "Numele necesita minim 5 caractere",
    })
    .max(100, {
      error: "Numele nu poate fi mai lung de 5 caractere",
    }),
  willCome: z.boolean().nonoptional(),
  willBeChildren: z.boolean().nonoptional(),
  personsNumber: z.coerce.number<string>(),
  comment: z
    .string()
    .max(500, {
      error: "Comentariul nu poate fi mai lung de 500 caractere",
    })
    .optional(),
});

export { FormContact };
