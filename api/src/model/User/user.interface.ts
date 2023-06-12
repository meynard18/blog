export interface User {
   email: string;
   password: string;
   confirmPassword: string;
   tokens: { token: string }[];
   generateAuthToken: () => Promise<string>;
}
