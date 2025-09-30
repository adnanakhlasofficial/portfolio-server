import { Prisma } from "@prisma/client";

export interface IExperience
  extends Pick<
    Prisma.ExperienceCreateInput,
    "title" | "description" | "company" | "startDate" | "location"
  > {
  endDate?: Prisma.ExperienceCreateInput["endDate"];
}
