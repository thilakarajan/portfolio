import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import { getAllPosts } from "@/lib/posts";

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
