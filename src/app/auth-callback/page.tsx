"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  // const apiResponse = await fetch("api/whatever");
  // const data2 = apiResponse.json();
  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }: any) => {
      if (success) {
        //User is synced to data base
        router.push(origin ? `/${origin}` : `/dashboard`);
      }
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") {
        router.push("./sign-in");
      }
    },
    retry: true,
    retryDelay: 500,
  });
  // you can Destructure alot of properties from the useQuery trpc
  // type is String or undefined, without the trcp it will come to me undefined, but in data2 example it wasnt type safe it was of type any.
  //we Are using UseQuery, because we are using it in index procedure. query  , if we used mutation we will use it here too or it will throw an error.
  return (
    <div className=" w-full mt-24 justify-center">
      <div className="flex flex-col  items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your acount ... </h3>
      </div>
      <p> You wil be redirected automatically.</p>
    </div>
  );
};

export default page;
