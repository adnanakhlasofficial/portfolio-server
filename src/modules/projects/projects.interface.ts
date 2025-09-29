import { Prisma } from "@prisma/client";

export interface IProject
  extends Pick<
    Prisma.ProjectCreateInput,
    | "title"
    | "description"
    | "features"
    | "thumbnail"
    | "liveLink"
    | "clientRepoLink"
    | "serverRepoLink"
  > {}
