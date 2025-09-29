import { prisma } from "../../libs/prisma";
import { IJwtPayload } from "../../types";
import { IBlog } from "./blogs.interface";

const createBlog = async (payload: IBlog, admin: IJwtPayload) => {
  const updatePayload = {
    ...payload,
    slug: "blog"
      .concat(" ", payload.title)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    adminId: admin.id,
  };

  const data = await prisma.blog.create({
    data: { ...updatePayload },
    select: {
      id: false,
      slug: true,
      title: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
      adminId: false,
    },
  });
  return data;
};

const getAllBlogs = async () => {
  const data = await prisma.blog.findMany({
    select: {
      id: false,
      slug: true,
      title: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
      adminId: false,
    },
  });
  return data;
};

const getAllPublishedBlogs = async () => {
  const data = await prisma.blog.findMany({
    where: {
      published: true,
    },
    select: {
      id: false,
      slug: true,
      title: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
      adminId: false,
    },
  });
  return data;
};

const getSingleBlog = async (slug: string) => {
  const data = await prisma.blog.findUnique({
    where: {
      slug,
    },

    select: {
      id: false,
      slug: true,
      title: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
      adminId: false,
    },
  });
  return data;
};

const deleteBlog = async (slug: string) => {
  const data = await prisma.blog.delete({
    where: {
      slug,
    },

    select: {
      id: false,
      slug: true,
      title: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
      adminId: false,
    },
  });
  return data;
};

const updateBlog = async (slug: string, payload: IBlog) => {
  const data = await prisma.blog.update({
    where: {
      slug,
    },
    data: payload,
    select: {
      id: false,
      slug: true,
      title: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
      adminId: false,
    },
  });
  return data;
};

const updateBlogPublishedStatus = async (slug: string, payload: boolean) => {
  const data = await prisma.blog.update({
    where: {
      slug,
    },
    data: {
      published: {
        set: payload,
      },
    },
    select: {
      id: false,
      slug: true,
      title: true,
      content: true,
      published: true,
      createdAt: true,
      updatedAt: true,
      adminId: false,
    },
  });
  return data;
};

export const BlogsService = {
  createBlog,
  getAllBlogs,
  getAllPublishedBlogs,
  getSingleBlog,
  deleteBlog,
  updateBlog,
  updateBlogPublishedStatus,
};
