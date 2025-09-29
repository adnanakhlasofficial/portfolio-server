import { Prisma } from "@prisma/client";

export interface IBlog
  extends Pick<Prisma.BlogCreateInput, "title" | "content"> {
  published?: Prisma.BlogCreateInput["published"];
}
