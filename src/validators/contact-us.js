import z from "zod";

const contactUsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "نام باید حداقل 3 کاراکتر باشد." })
    .max(20, { message: "نام باید حداکثر 20 کاراکتر باشد." }),
  phone: z
    .string()
    .trim()
    .regex(/^(09)([0-9]{9})$/, {
      message: "شماره موبایل باید با 09 شروع شود و 11 رقم باشد.",
    }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "موضوع باید حداقل 3 کاراکتر باشد." })
    .max(100, { message: "موضوع باید حداکثر 100 کاراکتر باشد." }),
  content: z
    .string()
    .trim()
    .min(10, { message: "محتوا باید حداقل 10 کاراکتر باشد." })
    .max(500, { message: "محتوا باید حداکثر 500 کاراکتر باشد." }),
});

export default contactUsSchema;
