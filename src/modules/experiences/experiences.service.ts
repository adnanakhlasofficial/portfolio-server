import { prisma } from "../../libs/prisma";
import { IExperience } from "./experiences.interface";

const createExperience = async (payload: IExperience, adminId: string) => {
  const updatePayload = {
    ...payload,
    slug: `experience ${payload.title}`
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    adminId,
  };

  const data = await prisma.experience.create({
    data: updatePayload,
    select: {
      slug: true,
      title: true,
      description: true,
      company: true,
      location: true,
      startDate: true,
      endDate: true,
    },
  });

  return data;
};

const getAllExperiences = async () => {
  const data = await prisma.experience.findMany({
    select: {
      slug: true,
      title: true,
      description: true,
      company: true,
      location: true,
      startDate: true,
      endDate: true,
    },
  });
  return data;
};

const getSingleExperience = async (slug: string) => {
  const data = await prisma.experience.findUnique({
    where: {
      slug,
    },
    select: {
      slug: true,
      title: true,
      description: true,
      company: true,
      location: true,
      startDate: true,
      endDate: true,
    },
  });
  return data;
};

const deleteExperience = async (slug: string) => {
  const data = await prisma.experience.delete({
    where: {
      slug,
    },
    select: {
      slug: true,
      title: true,
      description: true,
      company: true,
      location: true,
      startDate: true,
      endDate: true,
    },
  });
  return data;
};

const updateExperience = async (
  slug: string,
  payload: Partial<IExperience>
) => {
  const data = await prisma.experience.update({
    where: {
      slug,
    },
    data: payload,
    select: {
      slug: true,
      title: true,
      description: true,
      company: true,
      location: true,
      startDate: true,
      endDate: true,
    },
  });
  return data;
};

export const ExperiencesService = {
  createExperience,
  getAllExperiences,
  getSingleExperience,
  deleteExperience,
  updateExperience,
};
