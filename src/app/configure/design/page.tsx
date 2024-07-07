import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurators from "./DesignConfigurators";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if(!id || typeof id!=="string"){
    return notFound()
  }
  const configuration=await db.configuration.findUnique({
    where: { id: id }
  })
  if(!configuration){
    return notFound();
  }
  const {imageUrl,width,height}=configuration
  return <DesignConfigurators configId={configuration.id} imageDimensions={{width,height}} imageUrl={imageUrl}/>;
};
export default Page;
