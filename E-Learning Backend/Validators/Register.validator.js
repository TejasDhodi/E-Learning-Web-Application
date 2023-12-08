const z = require('zod');

// Creating Registration schema
const registerSchema = z.object({
    userName: z
        .string({ required_error: "User name is Required" })
        .trim(),

    emailId: z
        .string({ required_error: "Email is Required" })
        .trim()
        .email({ message: "Invalid Email Address" }),

    password: z
        .string({ required_error: "Passwrd is required" })
        .trim()
        .min(8, { message: "Password must be of atleast 8 character" })
        .max(15, { message: "Passwrd should not be more than 15 character" })
        .refine((value) => /[A-Z]/.test(value), {
            message: "Password must contain at least one uppercase letter",
        })
        .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
            message: "Password must contain at least one special character",
        }),

    cPassword: z
        .string({ required_error: "Confirm Password is required" })
        .trim()
        .min(8, { message: "Confirm Password must be of atleast 8 character" })
        .max(15, { message: "Confirm Password should not be more than 15 character" })
        .refine((value) => /[A-Z]/.test(value), {
            message: "Password must contain at least one uppercase letter",
        })
        .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
            message: "Password must contain at least one special character",
        }),
});

module.exports = registerSchema;