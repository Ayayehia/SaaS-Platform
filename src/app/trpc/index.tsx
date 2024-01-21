import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { procedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  authCallback: procedure.query(() => {
    const { getUser } = getKindeServerSession();
    const user = getUser();
    if (!user.id || !user.email) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return { success: true };
  }),
});
// The Data here is send to Page.jsx in the auth-callback
export type AppRouter = typeof appRouter;
