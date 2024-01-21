import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
const page = async () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  // const apiResponse = await fetch("api/whatever");
  // const data2 = apiResponse.json();
  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        //User is synced to data base
        router.push(origin ? `/${origin}` : `/dashboard`);
      }
    },
  });
  // you can Destructure alot of properties from the useQuery trpc
  // type is String or undefined, without the trcp it will come to me undefined, but in data2 example it wasnt type safe it was of type any.
  //we Are using UseQuery, because we are using it in index procedure. query  , if we used mutation we will use it here too or it will throw an error.
  return <div>auth page</div>;
};

export default page;
