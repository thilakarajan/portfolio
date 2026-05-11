import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Thilakarajan | Full Stack Engineer",
  description: "Full Stack Engineer building quality products with React, Node.js, and modern web technologies.",
};

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <BlogPreview posts={posts} />
      <Contact />
    </>
  );
}
