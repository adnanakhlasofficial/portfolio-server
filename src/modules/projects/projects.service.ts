import { prisma } from "../../libs/prisma";
import { IProject } from "./projects.interface";
import { IJwtPayload } from "../../types";

const createProject = async (payload: IProject, admin: IJwtPayload) => {
  const updatePayload = {
    ...payload,
    slug: "project"
      .concat(" ", payload.title)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    adminId: admin.id,
  };

  const data = prisma.project.create({
    data: updatePayload,
    select: {
      slug: true,
      title: true,
      description: true,
      thumbnail: true,
      features: true,
      clientRepoLink: true,
      serverRepoLink: true,
      liveLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

const getAllProjects = async () => {
  const data = await prisma.project.findMany({
    select: {
      slug: true,
      title: true,
      description: true,
      thumbnail: true,
      features: true,
      clientRepoLink: true,
      serverRepoLink: true,
      liveLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

const getSingleProject = async (slug: string) => {
  const data = await prisma.project.findUnique({
    where: {
      slug,
    },
    select: {
      slug: true,
      title: true,
      description: true,
      thumbnail: true,
      features: true,
      clientRepoLink: true,
      serverRepoLink: true,
      liveLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

const deleteProject = async (slug: string) => {
  const data = await prisma.project.delete({
    where: {
      slug,
    },
    select: {
      slug: true,
      title: true,
      description: true,
      thumbnail: true,
      features: true,
      clientRepoLink: true,
      serverRepoLink: true,
      liveLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

const updateProject = async (slug: string, payload: Partial<IProject>) => {
  const data = await prisma.project.update({
    where: {
      slug,
    },
    data: payload,
    select: {
      slug: true,
      title: true,
      description: true,
      thumbnail: true,
      features: true,
      clientRepoLink: true,
      serverRepoLink: true,
      liveLink: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return data;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
};
